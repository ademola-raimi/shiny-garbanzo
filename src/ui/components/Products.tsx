import React, { useEffect, useState} from "react";
import { styled } from "@mui/system";
import Link from 'next/link';
import { Card, CardContent, Typography, Grid, CardMedia, Box, Button } from "@mui/material";
import { useSelector } from '../../store/store';
import { setProducts, setPage, setLoading, setHideLoadMore } from '../../store/slices/productsSlice';
import { getCurrentPrice } from "../../utils";

const Products = ({ isIndex, fetchProducts }): JSX.Element => {
  const { products, bestSellerProduct, loading, hideLoadMore } = useSelector((state) => state.products);
  const _products = isIndex ? products : bestSellerProduct;

  const handleLoadMore = () => {
    fetchProducts();
  };

  return (
    <ContainerWrapper>
      <SectionWrapper>
        <FeaturedText is_index={isIndex.toString()}>Featured Products</FeaturedText>
        <BestsellerText is_index={isIndex.toString()} >BESTSELLER PRODUCTS</BestsellerText>
        <ParagraphText is_index={isIndex.toString()}>
          Problems trying to resolve the conflict between
        </ParagraphText>
      </SectionWrapper>
      <Grid container spacing={2}>
      {_products?.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <Link href={`/products/${item.id}`} passHref>
                <StyledCard>
                    <StyledCardMedia image={`${item.thumbnail}`} />
                    <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, paddingTop: 25, paddingBottom: 35, paddingLeft: 25, position: "relative", width: "100%", flex: "0 0 auto" }}>
                    <StyledTypography variant="h5">{item.title}</StyledTypography>
                    <StyledLink variant="subtitle1">{item.category}</StyledLink>
                    <StyledPrice>
                        <Typography variant="h5" style={{ color: "grey" }}>${item.price}</Typography>
                        <Typography variant="h5" style={{ color: "blue" }}>${getCurrentPrice(item.price, item.discountPercentage)}</Typography>
                    </StyledPrice>
                    </CardContent>
                </StyledCard>
            </Link>
        </Grid>
      ))}
    </Grid>
      {!hideLoadMore && (
        <Button
          variant="outlined"
          onClick={handleLoadMore}
          disabled={loading}
        >
          LOAD MORE PRODUCTS
        </Button>
      )}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  gap: "24px",
  padding: "80px 0",
});

const SectionWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  gap: "10px",
});

const FeaturedText = styled('div')<{ is_index: string }>(({ is_index }) => ({
  margin: "-1px 0 0",
  fontFamily: "var(--h-4-font-style)",
  fontWeight: "var(--h-4-font-weight)",
  fontSize: "var(--h-4-font-size)",
  color: "var(--second-text-color)",
  textAlign: "center",
  display: !!is_index ? 'block' : 'none',
}));

const BestsellerText = styled('div')<{ is_index: string }>(({ is_index }) => ({
  fontFamily: "var(--h-3-font-style)",
  fontWeight: "var(--h-3-font-weight)",
  fontSize: "var(--h-3-font-size)",
  color: "var(--text-color)",
  textAlign: "center",
  float: !!is_index ? "left" : "none",
}));

const ParagraphText = styled('p')<{ is_index: string }>(({ is_index }) => ({
  fontFamily: "var(--paragraph-font-style)",
  fontWeight: "var(--paragraph-font-weight)",
  fontSize: "var(--paragraph-font-size)",
  color: "var(--second-text-color)",
  textAlign: "center",
  display: !!is_index ? 'block' : 'none',
}));

const StyledCard = styled(Card)({
    maxWidth: 183,
    margin: "0 10px",
    // backgroundColor: "lightblue",
    boxShadow: "none",
  });
  
  const StyledCardMedia = styled(CardMedia)({
    height: 238,
    backgroundSize: "cover",
  });
  
  const StyledTypography = styled(Typography)({
    marginTop: -1,
  });
  
  const StyledLink = styled(Typography)({
    marginLeft: -6.5,
    marginRight: -6.5,
  });
  
  const StyledPrice = styled(Box)({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 5,
    padding: "3px 5px",
  });

export default Products;
