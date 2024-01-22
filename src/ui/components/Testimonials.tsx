import React from "react";
import { styled } from "@mui/system";
import { Container, Typography, Box } from "@mui/material";

const StyledContainer = styled(Container)`
  && {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 1440px;
    // height: 682px;
    // background-color: #f8f8f8;
    position: relative;
    margin-left: 0px
  }
`;

const ContentWrapper = styled(Box)`
  && {
    display: flex;
    width: 1128px;
    align-items: start;
    justify-content: space-between;
    padding: 48px;
    position: relative;
    margin-left: 117px;
  }
`;

const TestimonialsText = styled(Typography)`
  && {
    width: fit-content;
    margin-top: -1px;
    color: #252b42;
    font-size: var(--h-3-font-size);
    letter-spacing: var(--h-3-letter-spacing);
    line-height: var(--h-3-line-height);
    font-weight: var(--h-3-font-weight);
    text-align: center;
    font-style: var(--h-3-font-style);
    margin: auto;
  }
`;

const TestimonialCard = styled(Box)`
  && {
    width: 446px;
    padding: 30px;
    margin-left: -4px;
    margin-right: -4px;
    // background-color: #f8f8f8;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    position: relative;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const TestimonialImage = styled(Box)`
  && {
    width: 90px;
    height: 90px;
    background: url("/icons/avatar-user.svg") center/cover;
    margin-bottom: 20px;
    margin: auto;
  }
`;

const StarsImage = styled("img")`
  && {
    width: 50%;
    margin: auto;
  }
`;

const TestimonialContent = styled(Typography)`
  && {
    width: 451px;
    margin-left: -4.5px;
    margin-right: -4.5px;
    color: #727272;
    font-size: var(--h-6-font-size);
    letter-spacing: var(--h-6-letter-spacing);
    line-height: var(--h-6-line-height);
    font-weight: var(--h-6-font-weight);
    text-align: center;
    font-style: var(--h-6-font-style);
    white-space: pre-line;
  }
`;

const TestimonialInfo = styled(Box)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: auto;
    padding: 10px;
  }
`;

const TestimonialLink = styled(Typography)`
  && {
    width: fit-content;
    margin-top: -1px;
    color: #23a6f0;
    font-size: var(--link-font-size);
    letter-spacing: var(--link-letter-spacing);
    line-height: var(--link-line-height);
    font-weight: var(--link-font-weight);
    text-align: center;
    font-style: var(--link-font-style);
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
      <ContentWrapper>
        <div>
          <TestimonialsText variant="h6">
            What they say about us
          </TestimonialsText>
          <TestimonialCard>
            <TestimonialImage />
            <StarsImage src="/icons/stars.svg" alt="Stars" />
            <TestimonialContent>
              Slate helps you see how many more days you need to work to
              reach your financial goal.
            </TestimonialContent>
            <TestimonialInfo>
              <TestimonialLink variant="body1">
                Regina Miles
              </TestimonialLink>
              <TestimonialRole variant="h6">
                Designer
              </TestimonialRole>
            </TestimonialInfo>
          </TestimonialCard>
        </div>
        <img src="/icons/frame.svg" alt="Col md" style={{ width: "464px", height: "426px" }} />
      </ContentWrapper>
    </StyledContainer>
  );
};

export default Testimonials;
