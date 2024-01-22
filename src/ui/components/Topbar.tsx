import React from "react";
import styled from "@emotion/styled";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
// import MailIcon from "../icons/mail-icon.svg";
// import PhoneIcon from "../icons/phone.svg";

const NavbarContainer = styled(AppBar)`
  width: 1439px;
  height: 58px;
  background-color: rgba(35, 133, 109, 1);
  overflow: hidden;
`;

const ToolbarContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden;
`;

const SettingsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  overflow: hidden;
`;

const UserInfoText = styled(Typography)`
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
`;

const FollowUsContainer = styled.div`
  display: inline-flex;
  gap: 10px;
  padding: 10px;
`;

const FollowUsText = styled(Typography)`
  font-family: "Montserrat-Bold", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
`;

const SocialsColMd = styled('div')({
    display: 'inline-flex',
    height: '46px',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    position: 'relative',
});

const FollowText = styled(Typography)({
    fontFamily: 'Montserrat-Bold, Helvetica',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: '0.20000000298023224px',
    lineHeight: '24px',
    color: 'rgba(255, 255, 255, 1)',
});
  
const IconContainer = styled('div')({
    position: 'relative',
    width: '120px',
    height: '26px',
});

const FollowUsIcon = styled('img')({
    position: 'absolute',
    width: '26px',
    height: '26px',
    top: '0',
});

const Topbar = (): JSX.Element => {
  return (
    <NavbarContainer position="static">
      <ToolbarContainer>
        <UserInfoContainer>
          <img alt="phone icon" src="/icons/phone.svg" />
          <SettingsContainer>
            <img alt="mail icon" src="/icons/mail.svg" />
            <UserInfoText>
              michelle.rivera@example.com
            </UserInfoText>
          </SettingsContainer>
        </UserInfoContainer>
        <FollowUsContainer>
          <FollowUsText>
            Follow Us and get a chance to win 80% off
          </FollowUsText>
        </FollowUsContainer>
        <SocialsColMd>
            <FollowText variant="h6" mt={-1}>
                Follow Us&nbsp;&nbsp;:
            </FollowText>
            <IconContainer>
                <FollowUsIcon alt="instagram icon" src="/icons/social1.svg" />
                <FollowUsIcon alt="video icon" src="/icons/social2.svg" style={{ left: '32px' }} />
                <FollowUsIcon alt="facebook icon" src="/icons/social3.svg" style={{ left: '62px' }} />
                <FollowUsIcon alt="twitter icon" src="/icons/social4.svg" style={{ left: '94px' }} />
            </IconContainer>
        </SocialsColMd>
      </ToolbarContainer>
    </NavbarContainer>
  );
};

export default Topbar;
