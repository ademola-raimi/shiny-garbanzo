import React from 'react';
import styled from '@emotion/styled';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';

const NavbarContainer = styled(AppBar)`
  background-color: rgba(35, 133, 109, 1);
  overflow: hidden;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const ToolbarContainer = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 24px 3px 24px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
`;

const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  overflow: hidden;
`;

const UserInfoText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
`;

const FollowUsContainer = styled.div`
  padding: 10px;
`;

const FollowUsText = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
`;

const SocialsColMd = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px',
});

const FollowText = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 700,
  letterSpacing: '0.20000000298023224px',
  lineHeight: '24px',
  color: 'rgba(255, 255, 255, 1)',
});

const IconContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '5.5px',
});

const FollowUsIcon = styled('img')({
  padding: '5px',
});

const Topbar = (): JSX.Element => {
  return (
    <NavbarContainer position="static">
      <ToolbarContainer>
        <UserInfoContainer>
          <SettingsContainer>
            <img alt="phone icon" src="/icons/phone.svg" />
            <UserInfoText>(225) 555-0118</UserInfoText>
          </SettingsContainer>

          <SettingsContainer>
            <img alt="mail icon" src="/icons/mail.svg" />
            <UserInfoText>michelle.rivera@example.com</UserInfoText>
          </SettingsContainer>
        </UserInfoContainer>
        <FollowUsContainer>
          <FollowUsText>Follow Us and get a chance to win 80% off</FollowUsText>
        </FollowUsContainer>
        <SocialsColMd>
          <FollowText variant="h6">Follow Us&nbsp;&nbsp;:</FollowText>
          <IconContainer>
            <FollowUsIcon alt="instagram icon" src="/icons/social1.svg" />
            <FollowUsIcon
              alt="video icon"
              src="/icons/social2.svg"
              style={{ left: '32px' }}
            />
            <FollowUsIcon
              alt="facebook icon"
              src="/icons/social3.svg"
              style={{ left: '62px' }}
            />
            <FollowUsIcon
              alt="twitter icon"
              src="/icons/social4.svg"
              style={{ left: '94px' }}
            />
          </IconContainer>
        </SocialsColMd>
      </ToolbarContainer>
    </NavbarContainer>
  );
};

export default Topbar;
