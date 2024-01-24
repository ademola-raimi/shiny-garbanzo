import React from 'react';
import { styled } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';

const FooterContainer = styled('div')`
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
`;

const FooterTopContent = styled('div')`
  padding: 40px 0;
  @media screen and (max-width: 991px) {
    padding: 40px 10px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 10px;
  }
`;

const FooterLogoSection = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 58px;
  @media screen and (max-width: 767px) {
    height: auto;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 40px 45px 40px 44px;
    gap: 11.5px;
  }
`;

const FooterLogoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const LogoText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.1px;
  line-height: 32px;
  color: #252b42;
  @media screen and (max-width: 767px) {
    padding: 13px 0;
  }
`;

const FooterSocial = styled('div')`
  width: 236px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 767px) {
    justify-content: start;
  }
`;

const FooterBottomContent = styled(Grid)`
  padding: 50px 0;
  border-top: 1px solid #e6e6e6;
  @media screen and (max-width: 991px) {
    padding: 50px 10px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 47px 0 46px;
    border: none;
  }
`;

const FooterColumn = styled(Grid)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 148px;
`;

const FooterColumnTitle = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.1px;
  line-height: 24px;
  color: #252b42;
  margin-bottom: 10px;
`;

const FooterLink = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 24px;
  color: #737373;
`;

const FooterInputContainer = styled('div')`
  width: 321px;
`;

const FooterInputBackground = styled('div')`
  background-color: #f9f9f9;
  border: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const FooterInput = styled('input')`
  padding: 14px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(108, 117, 125, 1);
  border: none;
  outline: none;
  background: transparent;
`;

const SubscribeButton = styled(Button)`
  width: 117px;
  height: 58px;
  background-color: #23a6f0;
  border-radius: 0 5px 5px 0;
  border: 1px solid #e6e6e6;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 28px;
  color: #fff;
  text-align: center;
  &:hover {
    background-color: #23a6f0;
  }
`;

const CopyrightContent = styled('div')`
  padding: 25px 0;
  background: #fafafa;
  @media screen and (max-width: 991px) {
    padding: 25px 10px;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
    max-width: 200px;
    width: 100%;
    margin: 0 auto;
  }
`;

const Copyright = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 24px;
  color: #737373;
`;

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterTopContent>
        <FooterLogoSection>
          <FooterLogoContainer>
            <LogoText>Bandage</LogoText>
          </FooterLogoContainer>
          <FooterSocial>
            <img alt="Facebook icon" src="/icons/facebook.svg" />
            <img alt="Instagram icon" src="/icons/instagram.svg" />
            <img alt="Twiter icon" src="/icons/twitter.svg" />
          </FooterSocial>
        </FooterLogoSection>
      </FooterTopContent>
      <FooterBottomContent container gap="30px">
        <FooterColumn xs={12} sm={3} md={1.6}>
          <FooterColumnTitle>Company Info</FooterColumnTitle>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Carrier</FooterLink>
          <FooterLink>We are hiring</FooterLink>
          <FooterLink>Blog</FooterLink>
        </FooterColumn>
        <FooterColumn xs={12} sm={3} md={1.6}>
          <FooterColumnTitle>Legal</FooterColumnTitle>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Carrier</FooterLink>
          <FooterLink>We are hiring</FooterLink>
          <FooterLink>Blog</FooterLink>
        </FooterColumn>
        <FooterColumn xs={12} sm={3} md={1.6}>
          <FooterColumnTitle>Features</FooterColumnTitle>
          <FooterLink>Business Marketing</FooterLink>
          <FooterLink>User Analytic</FooterLink>
          <FooterLink>Live Chat</FooterLink>
          <FooterLink>Unlimited Support</FooterLink>
        </FooterColumn>
        <FooterColumn xs={12} sm={5.4} md={1.6}>
          <FooterColumnTitle>Resources</FooterColumnTitle>
          <FooterLink>IOS & Android</FooterLink>
          <FooterLink>Watch a Demo</FooterLink>
          <FooterLink>Customers</FooterLink>
          <FooterLink>API</FooterLink>
        </FooterColumn>
        <FooterColumn xs={12} sm={6} md={3.68}>
          <FooterColumnTitle>Get In Touch</FooterColumnTitle>
          <FooterInputContainer>
            <FooterInputBackground>
              <FooterInput placeholder="Your Email" />
              <SubscribeButton>Subscribe</SubscribeButton>
            </FooterInputBackground>
            <Typography
              style={{
                fontFamily: 'Montserrat',
                fontSize: '12px',
                color: '#737373',
                letterSpacing: '0.20px',
                lineHeight: '28px',
              }}
            >
              Lore imp sum dolor Amit
            </Typography>
          </FooterInputContainer>
        </FooterColumn>
      </FooterBottomContent>
      <CopyrightContent>
        <Copyright>Made With Love By Finland All Right Reserved </Copyright>
      </CopyrightContent>
    </FooterContainer>
  );
};

export default Footer;
