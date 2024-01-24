import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from '../../store/store';

const ProductDescription = (): JSX.Element => {
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);

  return (
    <StyledContainer>
      {product && (
        <StyledContentWrapper container className="smaller">
          <StyledTextSection>
            <StyledTitle>{product.title}</StyledTitle>
            <StyledParagraph>{product.description}</StyledParagraph>
          </StyledTextSection>
          <StyledImageWrapper className="center">
            <StyledImage
              src={product.thumbnail}
              alt="Unsplash"
              style={{ borderRadius: '9px' }}
            />
          </StyledImageWrapper>
        </StyledContentWrapper>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)({
  maxWidth: '1056px',
  width: '100%',
  margin: '0 auto',
  paddingTop: '24px',
  paddingBottom: '48px',
  '@media screen and (max-width: 767px)': {
    display: 'none'
  },
});

const StyledContentWrapper = styled(Grid)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '30px',
  '@media screen and (max-width: 991px)': {
    '&.smaller': {
      justifyContent: 'center',
      margin: '0 auto',
      textAlign: 'center',
    },
    '.center': {
      justifyContent: 'center',
      margin: '0 auto',
      textAlign: 'center',
    },
  },
});

const StyledTextSection = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '599px',
  width: '100%',
  alignItems: 'flex-start',
  gap: '30px',
  paddingTop: 0,
  paddingBottom: '25px',
});

const StyledTitle = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '32px',
  letterSpacing: '0.1px',
  color: '#252B42',
});

const StyledParagraph = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  letterSpacing: '0.2px',
  color: '#737373',
  maxWidth: '513px',
});

const StyledImageWrapper = styled(Grid)({
  '@media screen and (max-width: 991px)': {
    margin: '0 auto',
  },
});

const StyledImage = styled('img')({
  maxWidth: '413px',
  width: '100%',
  height: '372px',
});

export default ProductDescription;
