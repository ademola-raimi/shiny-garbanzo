import React from "react";
import { styled } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";

const FeaturesContainer = styled('div')`
  max-width: 1050px !important;
  width: 100%;
  margin: 0 auto;
`;

const FeaturesContent = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  padding: 80px 0;
`;

const TitleWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FeaturedText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 30px;
  color: #737373;
  text-align: center;
`;

const Title = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.1px;
  color: #252b42;
  text-align: center;
`;

const Description = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #737373;
  text-align: center;
`;

const FeatureCardContainer = styled(Grid)`
  display: flex;
  justify-content: center;
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
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 24px;
  color: #000;
`;

const FeatureDescription = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
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
          <FeaturedText variant="h4">
            Featured Products
          </FeaturedText>
          <Title>
            THE BEST SERVICES
          </Title>
          <Description>
            Problems trying to resolve the conflict between
          </Description>
        </TitleWrapper>
        <FeatureCardContainer container rowGap="30px">
          <FeatureCard xs={12} lg={4} paddingX="35px" paddingY="40px" gap="20px">
            <Icon src="/icons/easy-win.svg" alt="Icon cool icon" />
            <FeatureTitle>
              Easy Wins
            </FeatureTitle>
            <FeatureDescription>
              Get your best looking smile now!
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard xs={12} lg={4} paddingX="35px" paddingY="40px" gap="20px">
            <Icon src="/icons/concrete.svg" alt="Icon cool icon" />
            <FeatureTitle>
              Concrete
            </FeatureTitle>
            <FeatureDescription>
              Defalcate is most focused on helping you discover your most beautiful smile
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard xs={12} lg={4} paddingX="35px" paddingY="40px" gap="20px">
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
