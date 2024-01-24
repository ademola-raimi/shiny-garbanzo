import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from '../../store/store';

const ProductDescription = (): JSX.Element => {
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);

  return (
    <StyledContainer>
      {product && (
        <StyledContentWrapper>
          <StyledTextSection>
            <StyledTitle>
              {product.title}
            </StyledTitle>
            <StyledParagraph>
              {product.description}
            </StyledParagraph>
          </StyledTextSection>
          <StyledImageWrapper>
            <StyledImageContainer>
              <StyledLine src="#c4c4c433" alt="Line" />
              <StyledImage src={product.thumbnail} alt="Unsplash" />
            </StyledImageContainer>
          </StyledImageWrapper>
        </StyledContentWrapper>
      )}
    </StyledContainer>
  );
};


const StyledContainer = styled(Box)({
  maxWidth: "1056px",
  width: "100%",
  margin: "0 auto",
  paddingTop: "24px",
  paddingBottom: "48px",
});

const StyledContentWrapper = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  gap: "30px",
});

const StyledTextSection = styled('div')({
  display: "flex",
  flexDirection: "column",
  maxWidth: "599px",
  width: "100%",
  alignItems: "flex-start",
  gap: "30px",
  paddingTop: 0,
  paddingBottom: "25px",
  position: "relative",
  borderRadius: "9px",
  overflow: "hidden",
});

const StyledTitle = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "32px",
  letterSpacing: '0.1px',
  color: '#252B42'
});

const StyledParagraph = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: '0.2px',
  color: '#737373',
  maxWidth: "513px",
});

const StyledImageWrapper = styled(Box)({
  display: "flex",
  width: "427px",
  height: "392px",
  alignItems: "flex-start",
  position: "relative",
});

const StyledImageContainer = styled(Box)({
  width: "427px",
  height: "392px",
  borderRadius: "9px",
  overflow: "hidden",
  position: "relative",
});

const StyledLine = styled("img")({
  width: "3px",
  height: "60px",
  position: "absolute",
});

const StyledImage = styled("img")({
  width: "413px",
  height: "372px",
  objectFit: "cover",
  position: "absolute",
  top: 0,
  left: 0,
});

export default ProductDescription