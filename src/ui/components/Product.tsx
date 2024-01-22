import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import styled from "@emotion/styled";

const StyledContainer = styled(Box)({
  position: "relative",
  width: "1440px",
  height: "598px",
  backgroundColor: "#f9f9f9",
});

const StyledContent = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  paddingTop: 0,
  paddingBottom: "48px",
  paddingLeft: 0,
  position: "relative",
  left: "195px",
});

const StyledImageContainer = styled(Box)({
  display: "flex",
  gap: "30px",
  flex: "0 0 auto",
});

const StyledImage = styled(Box)({
  position: "relative",
  width: "510px",
  height: "550px",
});

const StyledProductImage = styled(Box)({
  position: "relative",
  width: "506px",
  height: "546px",
  borderRadius: "5px",
});

const StyledImageOverlay = styled(Box)({
  position: "absolute",
  width: "506px",
  height: "450px",
  top: 0,
  left: 0,
  backgroundImage: "url(/icons/single-product.svg)",
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
});

const StyledSecondImage = styled(Box)({
  height: "450px",
  backgroundImage: "url(/icons/single-product.svg)",
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
});

const StyledCarouselControl = styled("img")({
  position: "absolute",
  width: "24px",
  height: "44px",
  top: "259px",
});

const StyledCaptionsContainer = styled(Box)({
  position: "absolute",
  width: "219px",
  height: "75px",
  top: "471px",
  left: 0,
});

const StyledCaptionImage = styled("img")({
  position: "absolute",
  width: "100px",
  height: "75px",
  top: 0,
  left: 0,
});

const StyledCaptionThumb = styled(Box)({
  position: "absolute",
  width: "100px",
  height: "75px",
  top: 0,
  left: "119px",
  backgroundImage: "url(/icons/single-product-1-thumb-2.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
});

const StyledText = styled(Typography)({
  // Add your text styles here
});

const StyledButton = styled(Button)({
  // Add your button styles here
});


// const StyledContainer = styled(Box)({
//     position: "relative",
//     width: "510px",
//     height: "471px",
//   });
  
  const StyledTitle = styled(Typography)({
    position: "absolute",
    top: "10px",
    left: "24px",
    ...getTextStyles("--h-4"),
  });
  
  const StyledReviews = styled(Box)({
    display: "flex",
    alignItems: "start",
    gap: "10px",
    position: "absolute",
    top: "53px",
    left: "24px",
  });
  
  const StyledStars = styled("img")({
    position: "relative",
    flex: "0 0 auto",
  });
  
  const StyledReviewsText = styled(Typography)({
    ...getTextStyles("--h-6"),
    color: "var(--second-text-color)",
  });
  
  const StyledPrice = styled(Typography)({
    position: "absolute",
    top: "96px",
    left: "26px",
    ...getTextStyles("--h-3"),
    textAlign: "center",
  });
  
  const StyledAvailability = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "5px",
    position: "absolute",
    top: "134px",
    left: "24px",
  });
  
  const StyledAvailabilityText = styled(Typography)({
    ...getTextStyles("--h-6"),
    color: "var(--second-text-color)",
  });
  
  const StyledInStock = styled(Typography)({
    ...getTextStyles("--h-6"),
    color: "var(--primary-color)",
  });
  
  const StyledParagraph = styled(Typography)({
    position: "absolute",
    top: "189px",
    left: "24px",
    color: "#848484",
  });
  
  const StyledHr = styled("img")({
    position: "absolute",
    width: "445px",
    height: "1px",
    top: "276px",
    left: "25px",
    objectFit: "cover",
  });
  
  const StyledColorOptions = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    position: "absolute",
    top: "306px",
    left: "24px",
  });
  
  const StyledColorOption = styled(Box)({
    backgroundColor: "var(--primary-color)",
    width: "30px",
    height: "30px",
    borderRadius: "15px",
  });
  
  const StyledActions = styled(Box)({
    display: "flex",
    alignItems: "start",
    gap: "10px",
    position: "absolute",
    top: "403px",
    left: "24px",
  });
  
  const StyledSelectOptions = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "20px",
    backgroundColor: "var(--primary-color)",
    borderRadius: "5px",
    overflow: "hidden",
  });
  
  const StyledSelectOptionsText = styled(Typography)({
    ...getTextStyles("--h-6"),
    color: "var(--light-text-color)",
    textAlign: "center",
  });
  
  const StyledIcon = styled("img")({
    width: "40px",
    height: "40px",
  });

const Product = (): JSX.Element => {
  return (
    <StyledContainer>
      <StyledContent container spacing={0}>
        <StyledImageContainer item>
          <StyledImage>
            <StyledProductImage>
              <StyledImageOverlay>
                <StyledSecondImage />
              </StyledImageOverlay>
              <StyledCarouselControl
                alt="Carousel control"
                src="/icons/ChevronRight.svg"
                style={{left: '450px'}}
              />
              <StyledCarouselControl
                alt="Carousel control"
                src="/icons/ChevronLeft.svg"
                style={{left: '20px'}}
              />
            </StyledProductImage>
            <StyledCaptionsContainer>
              <StyledCaptionImage
                alt="Carousel captions"
                src="/icons/single-product-1-thumb-1.svg"
              />
              <StyledCaptionThumb />
            </StyledCaptionsContainer>
            <StyledCaptionsContainer style={{left: '114px'}}>
              <StyledCaptionImage
                alt="Carousel captions"
                src="/icons/single-product-1-thumb-2.svg"
              />
              <StyledCaptionThumb />
            </StyledCaptionsContainer>
          </StyledImage>
          <StyledText>
            <StyledContainer>
                <StyledTitle>Floating Phone</StyledTitle>
                <StyledReviews>
                    <StyledStars alt="Stars" src="/icons/stars.svg" />
                    <StyledReviewsText>10 Reviews</StyledReviewsText>
                </StyledReviews>
                <StyledPrice>$1,139.33</StyledPrice>
                <StyledAvailability>
                    <StyledAvailabilityText>Availability&nbsp;&nbsp;:</StyledAvailabilityText>
                    <StyledInStock>In Stock</StyledInStock>
                </StyledAvailability>
                <StyledParagraph>{""}</StyledParagraph>
                <StyledHr alt="Hr" src="hr.svg" />
                <StyledColorOptions>
                    <StyledColorOption />
                    <StyledColorOption />
                    <StyledColorOption />
                    <StyledColorOption />
                </StyledColorOptions>
                <StyledActions>
                    <StyledSelectOptions>
                    <StyledSelectOptionsText>Select Options</StyledSelectOptionsText>
                    </StyledSelectOptions>
                    <StyledIcon alt="Like" src="/icons/like-2.svg" />
                    <StyledIcon alt="Basket" src="/icons/basket-2.svg" />
                    <StyledIcon alt="More" src="/icons/more-2.svg" />
                </StyledActions>
            </StyledContainer>
          </StyledText>
          <StyledButton>
            {/* Your button content */}
          </StyledButton>
        </StyledImageContainer>
      </StyledContent>
    </StyledContainer>
  );
};

export default Product;


function getTextStyles(prefix) {
    return {
      fontFamily: `var(${prefix}-font-family)`,
      fontWeight: `var(${prefix}-font-weight)`,
      fontSize: `var(${prefix}-font-size)`,
      letterSpacing: `var(${prefix}-letter-spacing)`,
      lineHeight: `var(${prefix}-line-height)`,
      fontStyle: `var(${prefix}-font-style)`,
      color: "var(--text-color)",
    };
  }