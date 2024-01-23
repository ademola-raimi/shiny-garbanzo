import React, { useEffect, useState} from "react";
import { styled } from "@mui/system";
import Link from 'next/link';
import { Card, CardContent, Typography, Grid, CardMedia, Box, Button } from "@mui/material";
import { getCurrentPrice } from "../../utils";

const Products = (): JSX.Element => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hideLoadMore, setHideLoadMore] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?page=${page}&limit=10`);
      const data = await response.json();
      const _products = data.products || [];
      console.log(data);
      if (data.total === products.length) setHideLoadMore(true);
      setProducts((prevProducts) => [...prevProducts, ..._products]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products on component mount

  const handleLoadMore = () => {
    fetchProducts();
  };

  return (
    <ContainerWrapper>
      <SectionWrapper>
        <FeaturedText>Featured Products</FeaturedText>
        <BestsellerText>BESTSELLER PRODUCTS</BestsellerText>
        <ParagraphText>
          Problems trying to resolve the conflict between
        </ParagraphText>
      </SectionWrapper>
      <Grid container spacing={2}>
      {products?.map((item) => (
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

const FeaturedText = styled("div")({
  margin: "-1px 0 0",
  fontFamily: "var(--h-4-font-style)",
  fontWeight: "var(--h-4-font-weight)",
  fontSize: "var(--h-4-font-size)",
  color: "var(--second-text-color)",
  textAlign: "center",
});

const BestsellerText = styled("div")({
  fontFamily: "var(--h-3-font-style)",
  fontWeight: "var(--h-3-font-weight)",
  fontSize: "var(--h-3-font-size)",
  color: "var(--text-color)",
  textAlign: "center",
});

const ParagraphText = styled("p")({
  fontFamily: "var(--paragraph-font-style)",
  fontWeight: "var(--paragraph-font-weight)",
  fontSize: "var(--paragraph-font-size)",
  color: "var(--second-text-color)",
  textAlign: "center",
});

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
