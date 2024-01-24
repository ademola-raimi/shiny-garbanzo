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
            <StyledParagraph>
              {product.title}
            </StyledParagraph>
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
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
  paddingTop: "24px",
  paddingBottom: "48px",
});

const StyledContentWrapper = styled(Box)({
  display: "flex",
  width: "1056px",
  alignItems: "flex-start",
  gap: "30px",
  position: "relative",
  marginInline: "auto",
});

const StyledTextSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "599px",
  alignItems: "flex-start",
  gap: "30px",
  paddingTop: 0,
  paddingBottom: "25px",
  position: "relative",
  borderRadius: "9px",
  overflow: "hidden",
});

const StyledParagraph = styled(Typography)({
  fontFamily: "'Montserrat-Regular', Helvetica",
  fontSize: "20px",
  lineHeight: "30px",
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