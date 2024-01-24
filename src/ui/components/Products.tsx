import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import Link from 'next/link';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Box,
  Button,
} from '@mui/material';
import { useSelector } from '../../store/store';
import { getCurrentPrice } from '../../utils';
import { ProductsType } from '../../types';

interface ProductsProps {
  isIndex: boolean;
  fetchProducts?: () => void;
}

const Products: React.FC<ProductsProps> = ({
  isIndex,
  fetchProducts,
}): JSX.Element => {
  const { products, bestSellerProduct, loading, hideLoadMore } = useSelector(
    (state) => state.products
  );
  const _products: ProductsType = isIndex ? products : bestSellerProduct;

  const handleLoadMore = () => {
    if (fetchProducts) {
      fetchProducts();
    }
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
      <Grid
        container
        gap={'30px'}
        paddingY="8px"
        paddingX="24px"
      >
        {_products?.map((item) => (
          <Grid key={item.id} item xs={12} sm={4} md={3} lg={2.1}>
            <Link href={`/products/${item.id}`} passHref>
              <StyledCard>
                <StyledCardMedia image={`${item.thumbnail}`} />
                <StyledCardContent>
                  <Title variant="h5">{item.title}</Title>
                  <StyledLink variant="subtitle1">{item.category}</StyledLink>
                  <StyledPrice>
                    <Price variant="h5" style={{ color: 'grey' }}>
                      ${item.price}
                    </Price>
                    <Price variant="h5" style={{ color: 'blue' }}>
                      ${getCurrentPrice(item.price, item.discountPercentage)}
                    </Price>
                  </StyledPrice>
                </StyledCardContent>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
      {!hideLoadMore && (
        <LoadMoreButtton variant="outlined" onClick={handleLoadMore} disabled={loading}>
          LOAD MORE PRODUCTS
        </LoadMoreButtton>
      )}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
  padding: '80px 0',
  maxWidth: '1124px',
  width: '100%',
  margin: '0 121px 0 195px',
});

const SectionWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  gap: '10px',
});

const FeaturedText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 30px;
  color: #737373;
  text-align: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const BestsellerText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.1px;
  color: #252b42;
  text-align: center;
`;

const ParagraphText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #737373;
  text-align: center;
`;

const StyledCard = styled(Card)({
  maxWidth: 183,
  cursor: 'pointer',
  boxShadow: 'none',
});

const StyledCardMedia = styled(CardMedia)({
  height: 238,
  backgroundSize: 'cover',
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
  paddingTop: 25,
  paddingBottom: 35,
  paddingLeft: 25,
  flex: '0 0 auto',
  textAlign: 'center',
});

const Title = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '24px',
  letterSpacing: '0.1px',
});

const StyledLink = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '14px',
  fontWeight: '700',
  lineHeight: '24px',
  letterSpacing: '0.2px',
});

const StyledPrice = styled(Box)({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: 5,
  padding: '3px 5px',
});

const Price = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '24px',
  letterSpacing: '0.1px',
});

const LoadMoreButtton = styled(Button)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '14px',
  fontWeight: '700',
  lineHeight: '22px',
  letterSpacing: '0.2px',
  color: '#23A6F0',
  border: '1px solid #23A6F0'
});

export default Products;
