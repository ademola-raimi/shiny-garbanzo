import React from "react";
import { styled } from "@mui/system";
import {
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Box,
  Typography
} from "@mui/material";

const BlogContainer = styled(Container)`
  position: relative;
  width: 1440px;
  // height: 994px;
  background-color: #fff;
`;

const BlogContent = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  padding: 112px 0;
  left: 195px;
`;

const BlogTitleWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const BlogTitle = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 14px;
  color: #23a6f0;
  text-align: center;
  letter-spacing: 0.20px;
  line-height: 24px;
`;

const BlogSubtitle = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #252b42;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 32px;
`;

const BlogCardContainer = styled(Grid)`
  display: flex;
  items-start;
  justify-content: center;
  gap: 30px;
  position: relative;
`;

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const FeaturedPost = (): JSX.Element => {
  return (
    <BlogContainer>
      <BlogContent container>
        <BlogTitleWrapper item>
          <Typography variant="h6" color="primary" mt="-1px" textAlign="center">
            Practice Advice
          </Typography>
          <BlogSubtitle>
            Featured Posts
          </BlogSubtitle>
        </BlogTitleWrapper>
        <BlogCardContainer item>
          <Card sx={{ minWidth: 275 }}>
          <CardMedia
            component="img"
            height="194"
            image="/icons/post-1.svg"
            alt="Paella dish"
          />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              component="img"
              height="194"
              image="/icons/post-2.svg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardMedia
              component="img"
              height="194"
              image="/icons/post-3.svg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </BlogCardContainer>
      </BlogContent>
    </BlogContainer>
  );
};

export default FeaturedPost;
