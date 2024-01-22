import React from "react";
import { styled } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";

const FeaturesContainer = styled(Container)`
  position: relative;
  width: 1440px;
//   height: 632px;
//   background-color: #f8f8f8;
`;

const FeaturesContent = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  padding: 80px 0;
  position: relative;
  // left: 195px;
`;

const TitleWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled(Typography)`
  font-family: 'Montserrat-Bold', Helvetica;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.10px;
  line-height: 32px;
  color: #000;
`;

const Description = styled(Typography)`
  font-family: 'Montserrat-Regular', Helvetica;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 24px;
  color: #767676;
`;

const FeatureCardContainer = styled(Grid)`
  display: flex;
  items-start;
  justify-content: center;
  gap: 30px;
  position: relative;
`;

const FeatureCard = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled("img")`
  width: 72px;
  height: 72px;
`;

const FeatureTitle = styled(Typography)`
  font-family: 'Montserrat-Bold', Helvetica;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 24px;
  color: #000;
`;

const FeatureDescription = styled(Typography)`
  font-family: 'Montserrat-Regular', Helvetica;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 20px;
  color: #767676;
`;

const Features = (): JSX.Element => {
  return (
    <FeaturesContainer>
      <FeaturesContent container>
        <TitleWrapper item>
          <Typography variant="h4" color="secondary" mt="-1px" textAlign="center">
            Featured Products
          </Typography>
          <Title>
            THE BEST SERVICES
          </Title>
          <Description>
            Problems trying to resolve the conflict between
          </Description>
        </TitleWrapper>
        <FeatureCardContainer item>
          <FeatureCard>
            <Icon src="/icons/easy-win.svg" alt="Icon cool icon" />
            <FeatureTitle>
              Easy Wins
            </FeatureTitle>
            <FeatureDescription>
              Get your best looking smile now!
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <Icon src="/icons/concrete.svg" alt="Icon cool icon" />
            <FeatureTitle>
              Concrete
            </FeatureTitle>
            <FeatureDescription>
              Defalcate is most focused on helping you discover your most beautiful smile
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <Icon src="/icons/growth.svg" alt="Icon cool icon" />
            <FeatureTitle>
              Hack Growth
            </FeatureTitle>
            <FeatureDescription>
              Overcome any hurdle or any other problem.
            </FeatureDescription>
          </FeatureCard>
        </FeatureCardContainer>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default Features;
