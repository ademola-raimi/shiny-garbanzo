import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

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
  whiteSpace: "nowrap",
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

const ProductDescription = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledContentWrapper>
        <StyledTextSection>
          <StyledParagraph>
            the quick fox jumps over
          </StyledParagraph>
          <StyledParagraph>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met.
          </StyledParagraph>
          <Box display="flex" alignItems="flex-start" gap="24px" position="relative" overflow="hidden">
            <StyledLine src="line-2.svg" alt="Line" />
            <StyledParagraph>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
              RELIT Mollie. Excitation venial consequent sent nostrum met.
            </StyledParagraph>
          </Box>
          <StyledParagraph>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM
            RELIT Mollie. Excitation venial consequent sent nostrum met.
          </StyledParagraph>
        </StyledTextSection>
        <StyledImageWrapper>
          <StyledImageContainer>
            <StyledLine src="#c4c4c433" alt="Line" />
            <StyledImage src="/icons/unsplash.svg" alt="Unsplash" />
          </StyledImageContainer>
        </StyledImageWrapper>
      </StyledContentWrapper>
    </StyledContainer>
  );
};

export default ProductDescription