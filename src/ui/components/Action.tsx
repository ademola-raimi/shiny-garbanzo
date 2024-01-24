import React from "react";
import { styled } from "@mui/system";
import { Container as MuiContainer, Typography, Button } from "@mui/material";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 160px;
  padding-bottom: 112px;
  padding-left: 0;
  position: relative;
  background-image: url("/icons/action-bg.svg"); /* Add your background image source here */
  background-size: cover;
  width: 100%;
`;

const SectionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  position: relative;
  padding: 24px;
  border-radius: 8px;
`;

const Title = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #252b42;
  text-align: center;
  letter-spacing: 0.2px;
  line-height: 28px;
`;

const Subtitle = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 28px;
  color: #23a6f0;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 36px;
`;

const Paragraph = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: #727272;
  text-align: center;
  letter-spacing: normal;
  line-height: 24px;
`;

const Price = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 24px;
  color: #23a6f0;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 32px;
`;

const ActionButton = styled(Button)`
  && {
    display: inline-flex;
    flex-direction: column;
    height: 52px;
    align-items: center;
    gap: 10px;
    padding: 15px;
    background-color: #23a6f0;
    border-radius: 5px;
    overflow: hidden;
  }
`;

const CallToActionText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
  font-size: 16px;
  color: #fff;
  text-align: center;
  letter-spacing: normal;
  line-height: 24px;
`;

const Action = (): JSX.Element => {
  return (
    <Container>
      <SectionContainer>
        <Title variant="h6" color="primary">
          Designing Better Experience
        </Title>
        <Subtitle>
          Problems trying to resolve <br />
          the conflict between
        </Subtitle>
        <Paragraph>
          Problems trying to resolve the conflict between the two major realms of Classical physics:
        </Paragraph>
        <Price variant="h3">$16.48</Price>
        <ActionButton>
          <CallToActionText variant="button">
            ADD YOUR CALL TO ACTION
          </CallToActionText>
        </ActionButton>
      </SectionContainer>
    </Container>
  );
};

export default Action;
