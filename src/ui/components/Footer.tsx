import React from "react";
import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";

const FooterContainer = styled("div")`
  position: relative;
  width: 1440px;
  height: 488px;
  background-color: rgba(255, 255, 255, 1);
`;

const FooterTop = styled("div")`
  position: absolute;
  width: 1440px;
  height: 142px;
  top: 0;
  left: 0;
`;

const FooterTopBackground = styled("div")`
  position: absolute;
  width: 1440px;
  height: 142px;
  top: 0;
  left: 0;
  background-color: rgba(250, 250, 250, 1);
`;

const FooterTopContent = styled("div")`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  width: 1050px;
  position: relative;
  left: 195px;
`;

const FooterLogoSection = styled("div")`
  display: flex;
  align-items: center;
  gap: 577.5px;
  position: relative;
  flex: 0 0 auto;
`;

const FooterLogoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const FooterLogo = styled("div")`
  position: relative;
  width: 187px;
  height: 58px;
`;

const LogoText = styled(Typography)`
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.10000000149011612px;
  line-height: 32px;
  color: rgba(37, 43, 66, 1);
`;

const FooterSocial = styled("div")`
  position: relative;
  width: 236px;
`;

const HorizontalRule = styled("img")`
  position: absolute;
  width: 1057px;
  height: 1px;
  top: 138px;
  left: 195px;
`;

const FooterBottom = styled("div")`
  position: absolute;
  width: 1440px;
  height: 272px;
  top: 142px;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
`;

const FooterBottomContent = styled("div")`
  padding: 50px 0;
  display: -webkit-box;
  flex-direction: column;
  width: 1050px;
  position: relative;
  left: 195px;
`;

const FooterColumn = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 148px;
  position: relative;
`;

const FooterColumnTitle = styled(Typography)`
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.10000000149011612px;
  line-height: 24px;
  color: rgba(37, 43, 66, 1);
`;

const FooterLink = styled(Typography)`
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.10000000149011612px;
  line-height: 28px;
  color: rgba(108, 117, 125, 1);
`;

const FooterInputContainer = styled("div")`
  position: relative;
  width: 321px;
  height: 87px;
`;

const FooterInputBackground = styled("div")`
  position: absolute;
  width: 321px;
  height: 58px;
  top: 0;
  left: 0;
  background-color: rgba(248, 248, 248, 1);
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 5px;
  overflow: hidden;
`;

const FooterInput = styled("input")`
  width: 100%;
  height: 100%;
  padding: 14px 20px;
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: rgba(108, 117, 125, 1);
  border: none;
  outline: none;
  background: transparent;
`;

const SubscribeButton = styled(Button)`
  all: unset;
  box-sizing: border-box;
  position: absolute;
  width: 117px;
  height: 58px;
  top: 0;
  left: 204px;
`;

const SubscribeButtonContent = styled("div")`
  position: relative;
  height: 100%;
  background-color: rgba(52, 144, 220, 1);
  border-radius: 0 5px 5px 0;
  overflow: hidden;
  border: 1px solid rgba(230, 230, 230, 1);
`;

const SubscribeButtonText = styled(Typography)`
  font-family: "Montserrat-Regular", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
`;

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterTopBackground />
        <FooterTopContent>
          <FooterLogoSection>
            <FooterLogoContainer>
              <FooterLogo>
                <LogoText>
                  Bandage
                </LogoText>
              </FooterLogo>
            </FooterLogoContainer>
            <FooterSocial>
                <img alt="Facebook icon" src="/icons/facebook.svg" />
                <img alt="Instagram icon" src="/icons/instagram.svg" />
                <img alt="Twiter icon" src="/icons/twitter.svg" />
            </FooterSocial>
          </FooterLogoSection>
        </FooterTopContent>
        {/* <HorizontalRule alt="Hr stroke" src="hr-stroke.svg" /> */}
      </FooterTop>
      <FooterBottom>
        <FooterBottomContent>
          <FooterColumn>
            <FooterColumnTitle>Company Info</FooterColumnTitle>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Carrier</FooterLink>
            <FooterLink>We are hiring</FooterLink>
            <FooterLink>Blog</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>Legal</FooterColumnTitle>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Carrier</FooterLink>
            <FooterLink>We are hiring</FooterLink>
            <FooterLink>Blog</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>Features</FooterColumnTitle>
            <FooterLink>Business Marketing</FooterLink>
            <FooterLink>User Analytic</FooterLink>
            <FooterLink>Live Chat</FooterLink>
            <FooterLink>Unlimited Support</FooterLink>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>Resources</FooterColumnTitle>
            <FooterLink>IOS & Android</FooterLink>
            <FooterLink>Watch a Demo</FooterLink>
            <FooterLink>Customers</FooterLink>
            <FooterLink>API</FooterLink>
          </FooterColumn>
          <FooterInputContainer>
            <FooterInputBackground>
              <FooterInput placeholder="Your Email" />
              <SubscribeButton>
                <SubscribeButtonContent>
                  <SubscribeButtonText>Subscribe</SubscribeButtonText>
                </SubscribeButtonContent>
              </SubscribeButton>
            </FooterInputBackground>
            <Typography
              style={{
                position: "absolute",
                top: "58px",
                left: "2px",
                fontFamily: "Montserrat-Regular",
                fontSize: "12px",
                color: "rgba(108, 117, 125, 1)",
                letterSpacing: "0.20px",
                lineHeight: "28px",
                whiteSpace: "nowrap",
              }}
            >
              Lore imp sum dolor Amit
            </Typography>
          </FooterInputContainer>
        </FooterBottomContent>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
