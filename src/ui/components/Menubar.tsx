import React from 'react';
import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledNavbarLight = styled('div')({
  maxWidth: '1440px',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px 0 38px',
  marginTop: '12px',
});

const Brand = styled('div')({
  width: '187px',
  display: 'flex',
  alignItems: 'center',
});

const BrandText = styled(Typography)({
  fontFamily: 'Montserrat-Bold, Helvetica',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 700,
  letterSpacing: '0.10000000149011612px',
  lineHeight: '32px',
  color: 'rgba(37, 43, 66, 1)',
});

const NavLinksContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

const NavLink = styled('div')({
  display: 'flex',
  alignItems: 'start',
  gap: '15px',
  paddingLeft: '40px',
});

const NavLinkItem = styled('div')({
  position: 'relative',
});

const NavLinkText = styled(Typography)({
  fontFamily: 'Montserrat, Helvetica',
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.20px',
  lineHeight: '28px',
  color: '#737373',
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
});

const ActionButtons = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const ActionButton = styled(Button)({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  padding: '15px',
});

const ActionButtonIcon = styled('img')({
  width: '16px',
  height: '16px',
});

const AvatarIcon = styled('img')({
  width: '12px',
  height: '12px',
});

const ActionButtonText = styled(Typography)({
  position: 'relative',
  width: 'fit-content',
  marginTop: '-1px',
  fontFamily: 'Montserrat-Bold, Helvetica',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 700,
  letterSpacing: '0.20000000298023224px',
  lineHeight: '24px',
  color: 'rgba(35, 166, 240, 1)',
});

const Menubar = (): JSX.Element => {
  return (
    <StyledNavbarLight>
      <Brand>
        <BrandText>Bandage</BrandText>
      </Brand>
      <NavLinksContainer>
        <NavLink>
          <NavLinkItem>
            <NavLinkText>Home</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText style={{ fontWeight: 500, color: '#252B42' }}>
              Shop
              <ExpandMoreIcon />
            </NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText>About</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText>Blog</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText>Contact</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText>Pages</NavLinkText>
          </NavLinkItem>
        </NavLink>
        <ActionButtons>
          <ActionButton>
            <AvatarIcon
              alt="Avatar icn"
              src="/icons/avatar.svg"
            />
            <ActionButtonText>Login / Register</ActionButtonText>
          </ActionButton>
          <ActionButton>
            <ActionButtonIcon alt="Li" src="/icons/search.svg" />
          </ActionButton>
          <ActionButton>
            <ActionButtonIcon
              alt="basket icn"
              src="/icons/basket.svg"
            />
            <ActionButtonText>1</ActionButtonText>
          </ActionButton>
          <ActionButton>
            <ActionButtonIcon alt="love icn" src="/icons/love.svg" />
            <ActionButtonText>1</ActionButtonText>
          </ActionButton>
        </ActionButtons>
      </NavLinksContainer>
    </StyledNavbarLight>
  );
};

export default Menubar;
