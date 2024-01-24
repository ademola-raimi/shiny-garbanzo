import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Chip,
  Snackbar,
  Breadcrumbs,
  Link,
} from '@mui/material';
import styled from '@emotion/styled';
import { getCurrentPrice } from '../../utils';
import { useDispatch, useSelector } from '../../store/store';
import { setCurrentImageIndex } from '../../store/slices/productSlice';
import { addToBasket, addToWishlist } from '../../store/slices/productsSlice';
import { ProductType } from '../../types';

const Product = (): JSX.Element => {
  const dispatch = useDispatch();
  const { product, loading, currentImageIndex } = useSelector(
    (state) => state.product
  );
  const { basket, wishlist } = useSelector((state) => state.products);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Check if the product is in the basket or wishlist
  const isInBasket =
    basket.some((item: ProductType) => item.id === product?.id) || false;
  const isInWishlist =
    wishlist.some((item: ProductType) => item.id === product?.id) || false;

  const handleAddToBasket = () => {
    if (isInBasket || !product) return;
    const productCopy: ProductType | null = { ...product };
    productCopy.quantity = 1;
    dispatch(addToBasket(productCopy));
    setSnackbarOpen(true);
  };

  const handleAddToWishlist = () => {
    if (isInWishlist || !product) return;
    const productCopy: ProductType = { ...product };
    productCopy.quantity = 1;
    dispatch(addToWishlist(productCopy));
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleChevronClick = (direction: string) => {
    if (!product) return;
    const lastIndex = product.images.length - 1;

    dispatch((dispatch, getState) => {
      const { currentImageIndex } = getState().product;

      if (direction === 'right') {
        dispatch(
          setCurrentImageIndex(
            currentImageIndex === lastIndex ? 0 : currentImageIndex + 1
          )
        );
      } else if (direction === 'left') {
        dispatch(
          setCurrentImageIndex(
            currentImageIndex === 0 ? lastIndex : currentImageIndex - 1
          )
        );
      }
    });
  };

  const handleThumbnailClick = (index: number) => {
    dispatch(setCurrentImageIndex(index));
  };

  const breadcrumbs = [
    <Breadcrumb underline="hover" key="1" href="/">
      Home
    </Breadcrumb>,
    <BreadcrumbText key="2">Shop</BreadcrumbText>,
  ];

  return (
    <>
      <StyledBreadcrumbsWrapper>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </StyledBreadcrumbsWrapper>
      <StyledContainer>
        {product && (
          <StyledContent container spacing={0}>
            <Grid container gap="30px">
              <Grid xs={12} md={5.7}>
                <StyledProductImage>
                  <StyledImageOverlay
                    productImage={product?.images?.[currentImageIndex]}
                  >
                    <StyledSecondImage />
                  </StyledImageOverlay>
                  <StyledCarouselControl
                    alt="Carousel control"
                    src="/icons/ChevronRight.svg"
                    onClick={() => handleChevronClick('right')}
                    style={{ left: '450px' }}
                  />
                  <StyledCarouselControl
                    alt="Carousel control"
                    src="/icons/ChevronLeft.svg"
                    style={{ left: '20px' }}
                    onClick={() => handleChevronClick('left')}
                  />
                </StyledProductImage>
              </Grid>
              <div>
              <StyledText style={{ maxWidth: 'none' }} xs={12} md={6}>
                <StyledContainerInner>
                  <div>
                    <StyledTitle>{product.brand}</StyledTitle>
                    <StyledReviews>
                      <StyledStars alt="Stars" src="/icons/stars.svg" />
                      <StyledReviewsText>10 Reviews</StyledReviewsText>
                    </StyledReviews>
                    <StyledPrice>
                      $
                      {getCurrentPrice(
                        product.price,
                        product.discountPercentage
                      )}
                    </StyledPrice>
                    <StyledAvailability>
                      <StyledAvailabilityText>
                        Availability&nbsp;&nbsp;:
                      </StyledAvailabilityText>
                      {product.stock > 0 ? (
                        <StyledInStock>In Stock</StyledInStock>
                      ) : (
                        <Chip label="Sold Out" />
                      )}
                    </StyledAvailability>
                  </div>
                  <SecondSection>
                    <StyledHr />
                    <StyledColorOptions>
                      <StyledColorOption color="#23A6F0" />
                      <StyledColorOption color="#2DC071" />
                      <StyledColorOption color="#E77C40" />
                      <StyledColorOption color="#252B42" />
                    </StyledColorOptions>
                    <StyledActions>
                      <StyledSelectOptions>
                        <Button variant="contained">Select Options</Button>
                      </StyledSelectOptions>
                      <StyledIcon
                        alt="Like"
                        onClick={handleAddToWishlist}
                        disabled={isInWishlist}
                        src="/icons/like-2.svg"
                      />
                      <StyledIcon
                        alt="Basket"
                        onClick={handleAddToBasket}
                        disabled={isInBasket}
                        src="/icons/basket-2.svg"
                      />
                      <StyledIcon alt="More" src="/icons/more-2.svg" />
                    </StyledActions>
                  </SecondSection>
                </StyledContainerInner>
              </StyledText>
              </div>
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                message="Item added successfully!"
              />
            </Grid>
            <StyledCaptionsContainer xs={12} md={6}>
              {product?.images?.map((image, index) => (
                <StyledCaptionImage
                  key={index}
                  alt="Carousel captions"
                  isActive={currentImageIndex === index}
                  onClick={() => handleThumbnailClick(index)}
                  src={image}
                />
              ))}
            </StyledCaptionsContainer>
          </StyledContent>
        )}
      </StyledContainer>
    </>
  );
};

export default Product;

const StyledBreadcrumbsWrapper = styled('div')`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 16px 24px 38px;
  text-align: left;
`;

const Breadcrumb = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #252b42;
`;

const BreadcrumbText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #bdbdbd;
`;

const SecondSection = styled('div')`
  @media (min-width: 768px) {
    margin-top: 100px;
  }
`;

const StyledCaptionsContainer = styled(Grid)`
  display: flex;
`;

const StyledCaptionImage = styled('img')<{ isActive?: boolean }>`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;
  border: 2px solid transparent; /* Border for non-active thumbnails */
  ${(props) =>
    props.isActive &&
    `
    border-color: #ff5722; /* Border color for active thumbnail */
  `}
`;

const StyledContainer = styled(Box)({
  maxWidth: '1050px',
  width: '100%',
  margin: '0 auto',
});
const StyledContainerInner = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledContent = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  paddingTop: 0,
  paddingBottom: '48px',
  paddingLeft: 0,
});

const StyledProductImage = styled('div')({
  maxWidth: '506px',
  width: '100%',
  height: '450px',
  borderRadius: '5px',
  position: 'relative'
});

const StyledImageOverlay = styled('div')<{ productImage: string }>(
  ({ productImage }) => ({
    maxWidth: '506px',
    width: '100%',
    height: '450px',
    backgroundImage: `url(${productImage})`, // Dynamic image URL
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
  })
);

const StyledSecondImage = styled(Box)({
  height: '450px',
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
});

const StyledCarouselControl = styled('img')({
  position: 'absolute',
  width: '24px',
  height: '44px',
  top: '259px',
  cursor: 'pointer',
});

const StyledText = styled(Grid)`
  padding: 11px 24px;
`;

const StyledTitle = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.2px;
  color: #252b42;
  margin-bottom: 12px;
`;

const StyledReviews = styled('div')`
  display: flex;
  alignitems: center;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #737373;
  margin-bottom: 20px;
`;

const StyledStars = styled('img')({
  flex: '0 0 auto',
});

const StyledReviewsText = styled(Typography)({
  ...getTextStyles('--h-6'),
  color: 'var(--second-text-color)',
});

const StyledPrice = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.1px;
  color: #252b42;
`;

const StyledAvailability = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',

  top: '134px',
  left: '24px',
});

const StyledAvailabilityText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #737373;
`;

const StyledInStock = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #23a6f0;
`;

const StyledHr = styled('hr')({
  maxWidth: '445px',
  width: '100%',
  height: '1px',
  background: '#BDBDBD',
});

const StyledColorOptions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginTop: '20px',
  top: '306px',
  left: '24px',
});

const StyledColorOption = styled(Box)<{ color: string }>(({ color }) => ({
  backgroundColor: color,
  width: '30px',
  height: '30px',
  borderRadius: '15px',
}));

const StyledActions = styled(Box)({
  display: 'flex',
  alignItems: 'start',
  gap: '10px',
  marginTop: '40px',
  top: '403px',
  left: '24px',
});

const StyledSelectOptions = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  backgroundColor: 'var(--primary-color)',
  borderRadius: '5px',
  overflow: 'hidden',
});

const StyledIcon = styled('img')<{ disabled?: boolean }>(({ disabled }) => ({
  width: '40px',
  height: '40px',
  cursor: disabled ? 'not-allowed' : 'pointer',
  filter: disabled ? 'grayscale(100%)' : 'none',
  opacity: disabled ? 0.5 : 1,
}));

function getTextStyles(prefix: string) {
  return {
    fontFamily: `var(${prefix}-font-family)`,
    fontWeight: `var(${prefix}-font-weight)`,
    fontSize: `var(${prefix}-font-size)`,
    letterSpacing: `var(${prefix}-letter-spacing)`,
    lineHeight: `var(${prefix}-line-height)`,
    fontStyle: `var(${prefix}-font-style)`,
    color: 'var(--text-color)',
  };
}
