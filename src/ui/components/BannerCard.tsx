import React from 'react';
import { styled } from '@mui/system';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const ContainerWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  max-width: 1146px;
  width: 100%;
  margin: 0 auto;
  .margin-auto {
    margin: 0 auto;
  }
`;

const CardImage = styled(CardContent)`
  width: 452px;
  height: 616px;
  background: url(/icons/card-cover-1.svg);
  background-size: cover;
  padding: 24px;
  @media screen and (max-width: 767px) {
    width: 331px;
    height: 300px;
  }
`;

const CardContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const MediaCardContent = styled(CardContent)`
  background: url(/icons/card-cover-2.svg);
  background-size: cover;
  height: 300px;
  width: 679px;
  padding: 24px;
  @media screen and (max-width: 767px) {
    width: 331px;
  }
`;

const ImageCardContent = styled(CardContent)`
  background: url(/icons/card-cover-3.svg);
  background-size: cover;
  width: 331px;
  height: 300px;
  padding: 24px;
`;

const OverlayImage = styled(CardContent)`
  background: url(/icons/card-cover-4.svg);
  background-size: cover;
  width: 331px;
  height: 300px;
  padding: 24px;
`;

const HeaderText = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '40px',
  fontWeight: 700,
  letterSpacing: '0.2px',
  lineHeight: '50px',
  color: '#252B42',
});

const ReadMoreText = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.2px',
  lineHeight: '24px',
  color: '#252B42',
});

const ItemsText = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.2px',
  lineHeight: '24px',
  color: '#2DC071',
});

const FlexCol5 = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Container = (): JSX.Element => {
  return (
    <ContainerWrapper>
      <Grid container gap={'15px'}>
        <Grid item style={{ margin: '0 auto' }}>
          <Card>
            <CardImage>
              <FlexCol5>
                <ItemsText>5 Items</ItemsText>
                <HeaderText>FURNITURE</HeaderText>
                <ReadMoreText>Read More</ReadMoreText>
              </FlexCol5>
            </CardImage>
          </Card>
        </Grid>
        <Grid item>
          <CardContentContainer>
            <Card style={{ margin: '0 auto' }}>
              <MediaCardContent>
                <FlexCol5>
                  <ItemsText>5 Items</ItemsText>
                  <HeaderText>FURNITURE</HeaderText>
                  <ReadMoreText>Read More</ReadMoreText>
                </FlexCol5>
              </MediaCardContent>
            </Card>
            <Grid container gap="15px" style={{ margin: '0 auto' }}>
              <Grid item style={{ margin: '0 auto' }}>
                <Card>
                  <ImageCardContent>
                    <FlexCol5>
                      <ItemsText>5 Items</ItemsText>
                      <HeaderText>FURNITURE</HeaderText>
                      <ReadMoreText>Read More</ReadMoreText>
                    </FlexCol5>
                  </ImageCardContent>
                </Card>
              </Grid>
              <Grid item style={{ margin: '0 auto' }}>
                <Card>
                  <OverlayImage>
                    <FlexCol5>
                      <ItemsText>5 Items</ItemsText>
                      <HeaderText>FURNITURE</HeaderText>
                      <ReadMoreText>Read More</ReadMoreText>
                    </FlexCol5>
                  </OverlayImage>
                </Card>
              </Grid>
            </Grid>
          </CardContentContainer>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
};

export default Container;
