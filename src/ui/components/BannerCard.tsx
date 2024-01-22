import React from "react";
import { styled } from "@mui/system";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const ContainerWrapper = styled("div")`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 0;
  position: relative;
`;

const CardImage = styled("div")`
  position: relative;
  width: 452px;
  height: 616px;
  background: url(/icons/card-cover-1.svg);
  background-size: 100% 100%;
`;

const CardContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

const MediaCardContent = styled(CardContent)`
  background: url(/icons/card-cover-2.svg);
  background-size: cover;
  height: 300px;
  width: 550px;
`;

const ImageCardContent = styled(CardContent)`
  background: url(/icons/card-cover-3.svg);
  background-size: cover;
  height: 300px;
`;

const OverlayImage = styled("div")`
  position: relative;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(/icons/card-cover-4.svg);
    background-size: cover;
  }
`;

const Container = (): JSX.Element => {
  return (
    <ContainerWrapper>
      <Grid container spacing={15}>
        <Grid item>
          <Card>
            <CardImage>
                <Typography color="success-text-color" variant="h6">
                  5 Items
                </Typography>
                <Typography variant="h3">FURNITURE</Typography>
                <Typography color="success-text-color">Read More</Typography>
            </CardImage>
          </Card>
        </Grid>
        <Grid item>
          <CardContentContainer>
            <Card>
              <MediaCardContent>
                <Typography color="success-text-color" variant="h6">
                  5 Items
                </Typography>
                <Typography variant="h3">FURNITURE</Typography>
                <Typography color="success-text-color">Read More</Typography>
              </MediaCardContent>
            </Card>
            <Grid container spacing={2}>
              <Grid item>
                <Card>
                  <ImageCardContent>
                    <Typography color="success-text-color" variant="h6">
                      5 Items
                    </Typography>
                    <Typography variant="h3">FURNITURE</Typography>
                    <Typography color="success-text-color">Read More</Typography>
                  </ImageCardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card>
                  <OverlayImage>
                    <Typography color="success-text-color" variant="h6">
                      5 Items
                    </Typography>
                    <Typography variant="h3">FURNITURE</Typography>
                    <Typography color="success-text-color">Read More</Typography>
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
