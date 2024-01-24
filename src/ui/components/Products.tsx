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
        <FeaturedText isIndex={isIndex}>Featured Products</FeaturedText>
        <BestsellerText isIndex={isIndex}>BESTSELLER PRODUCTS</BestsellerText>
        <ParagraphText isIndex={isIndex}>
          Problems trying to resolve the conflict between
        </ParagraphText>
      </SectionWrapper>
      <Grid
        container
        gap={'30px'}
        paddingY="8px"
        paddingX="24px"
        className="center"
      >
        {_products?.map((item) => (
          <Grid key={item.id} item xs={12} sm={4} md={2.1}>
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
        <LoadMoreButtton
          variant="outlined"
          onClick={handleLoadMore}
          disabled={loading}
        >
          LOAD MORE PRODUCTS
        </LoadMoreButtton>
      )}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: 'center';
  gap: 24px;
  padding: 80px 0;
  maxWidth: 1124px;
  width: 100%;
  .center {
    justify-content: center;
    margin: 0 auto;
    text-align: center;
  }
`;

const SectionWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'center',
  gap: '10px',
});

const FeaturedText = styled('div')<{ isIndex: boolean }>(({ isIndex }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '30px',
  letterSpacing: '0.2px',
  color: '#737373',
  textAlign: 'center',
  display: !!isIndex ? 'block' : 'none',
  '@media screen and (max-width: 767px)': {
    display: 'none',
  },
}));

const BestsellerText = styled('div')<{ isIndex: boolean }>(({ isIndex }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32px',
  letterSpacing: '0.1px',
  color: '#252b42',
  textAlign: !isIndex ? 'left' : 'center',
}));

const ParagraphText = styled('div')<{ isIndex: boolean }>(({ isIndex }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  letterSpacing: '0.2px',
  color: '#737373',
  textAlign: 'center',
  display: isIndex ? 'block' : 'none',
}));

const StyledCard = styled(Card)({
  maxWidth: '183px',
  width: '100%',
  margin: '0 auto',
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
  border: '1px solid #23A6F0',
  maxWidth: '261px',
  width: '100%',
  margin: '0 auto'
});

export default Products;
