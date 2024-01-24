import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Box, Grid } from '@mui/material';

const StyledContainer = styled('div')`
  max-width: 1128px;
  width: 100%;
  margin: 80px auto;
  padding: 48px;
`;

const ContentWrapper = styled(Grid)`
  display: flex;
  justify-content: space-between;
  .center {
    justify-content: center;
    margin: 0 auto;
    text-align: center;
  }
`;

const TestimonialsText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #252b42;
  text-align: center;
  letter-spacing: 0.1px;
  line-height: 32px;
  margin-bottom: 28px;
`;

const TestimonialCard = styled(Box)`
  padding: 30px 35px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const TestimonialImage = styled(Box)`
  width: 90px;
  height: 90px;
  background: url('/icons/avatar-user.svg') center/cover;
  margin-bottom: 20px;
  margin: auto;
`;

const StarsImage = styled('img')`
  width: 50%;
  margin: auto;
`;

const TestimonialContent = styled(Typography)`
  color: #737373;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  text-align: center;
`;

const TestimonialInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const TestimonialLink = styled(Typography)`
  color: #23a6f0;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;
  &.role {
    color: #252b42;
  }
`;

const TestimonialRole = styled(Typography)`
  && {
    width: fit-content;
    margin-top: -1px;
    color: #252b42;
    font-size: var(--h-6-font-size);
    letter-spacing: var(--h-6-letter-spacing);
    line-height: var(--h-6-line-height);
    font-weight: var(--h-6-font-weight);
    text-align: center;
    font-style: var(--h-6-font-style);
  }
`;

const Testimonials = (): JSX.Element => {
  return (
    <StyledContainer>
      <ContentWrapper container>
        <Grid style={{ maxWidth: '438px' }} xs={12} lg={6} className="center">
          <TestimonialsText variant="h6">
            What they say about us
          </TestimonialsText>
          <TestimonialCard gap="20px">
            <TestimonialImage />
            <StarsImage src="/icons/stars.svg" alt="Stars" />
            <TestimonialContent>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </TestimonialContent>
            <TestimonialInfo>
              <TestimonialLink>Regina Miles</TestimonialLink>
              <TestimonialLink className="role">Designer</TestimonialLink>
            </TestimonialInfo>
          </TestimonialCard>
        </Grid>
        <Grid xs={12} lg={6} className="center">
          <img
            src="/icons/frame.svg"
            alt="frame"
            style={{ maxWidth: '100%' }}
          />
        </Grid>
      </ContentWrapper>
    </StyledContainer>
  );
};

export default Testimonials;
