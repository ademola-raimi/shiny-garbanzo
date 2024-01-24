import React from 'react';
import { styled } from '@mui/system';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

const BlogContainer = styled('div')`
  max-width: 1070px !important;
  width: 100%;
  margin: 0 auto;
`;

const BlogContent = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  padding: 112px 0;
`;

const BlogTitleWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeaturedText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 24px;
  color: #23a6f0;
  text-align: center;
`;

const Title = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0.2px;
  color: #252b42;
  text-align: center;
`;

const ContentTitle = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.2px;
  color: #252b42;
`;

const CardContentWrapper = styled(CardContent)`
  padding: 25px 25px 35px !important;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledFrame = styled('div')({
  width: 298,
  height: 46,
  paddingTop: 15,
  paddingBottom: 15,
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'inline-flex',
});

const StyledInnerFrame = styled('div')({
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 5,
  display: 'flex',
});

const StyledIcon = styled('img')({
  width: 16,
  height: 16,
});

const TopicsWrapper = styled('div')({
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 10,
  display: 'flex',
});

const Topic = styled('span')({
  color: '#737373',
  fontSize: '12px',
  fontFamily: 'Montserrat',
  fontWeight: '400',
  lineHeight: '16px',
  letterSpacing: 0.2,
});

const Description = styled(Typography)({
  color: '#737373',
  fontSize: '14px',
  fontFamily: 'Montserrat',
  fontWeight: '400',
  lineHeight: '20px',
  letterSpacing: 0.2,
});

const StyledSmall = styled(Typography)({
  color: '#737373',
  fontSize: '12px',
  fontFamily: 'Montserrat',
  fontWeight: '400',
  lineHeight: '16px',
  letterSpacing: 0.2,
});

const LearnMore = styled(Button)({
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 10,
  display: 'flex',
  fontSize: '14px',
  fontFamily: 'Montserrat',
  fontWeight: '700',
  lineHeight: '24px',
});

const FeaturedPost = (): JSX.Element => {
  return (
    <BlogContainer>
      <BlogContent container>
        <BlogTitleWrapper item>
          <FeaturedText variant="h6">Practice Advice</FeaturedText>
          <Title>Featured Posts</Title>
        </BlogTitleWrapper>
        <Grid container gap="10px">
          {[1, 2, 3].map((item) => (
            <Grid xs={12} lg={3.9} key={item}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={`/icons/post-${item}.svg`}
                  alt="Paella dish"
                />
                <CardContentWrapper>
                  <TopicsWrapper>
                    <Topic style={{ color: '#8EC2F2' }}>Google</Topic>
                    <Topic>Trending</Topic>
                    <Topic>New</Topic>
                  </TopicsWrapper>
                  <ContentTitle>
                    Loudest à la Madison #1 (L'integral)
                  </ContentTitle>
                  <Description>
                    We focus on ergonomics and meeting you where you work. It's
                    only a keystroke away.
                  </Description>
                  <StyledFrame>
                    <StyledInnerFrame>
                      <StyledIcon
                        alt="calendar"
                        src="/icons/calendar-icon.svg"
                      />
                      <StyledSmall>22 April 2021</StyledSmall>
                    </StyledInnerFrame>
                    <StyledInnerFrame>
                      <StyledIcon alt="barchart" src="/icons/barchart.svg" />
                      <StyledSmall>10 comments</StyledSmall>
                    </StyledInnerFrame>
                  </StyledFrame>
                  {/* <LearnMore> */}
                    <LearnMore style={{ color: '#737373' }} size="small">
                      Learn More <img src="/icons/arrow-right.svg" width="9px" height="16px" />
                    </LearnMore>
                    
                  {/* </LearnMore> */}
                </CardContentWrapper>
              </Card>
            </Grid>
          ))}
        </Grid>
      </BlogContent>
    </BlogContainer>
  );
};

export default FeaturedPost;
