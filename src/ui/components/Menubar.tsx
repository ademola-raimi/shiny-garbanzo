import React from "react";
import { styled } from '@mui/system';
import { Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledNavbarLight = styled('div')({
    position: 'relative',
    width: '1437px',
    height: '58px',
  });
  
  const Brand = styled('div')({
    position: 'absolute',
    width: '187px',
    height: '58px',
    top: '0',
    left: '38px',
  });
  
  const BrandText = styled(Typography)({
    position: 'absolute',
    top: '12px',
    left: '0',
    fontFamily: 'Montserrat-Bold, Helvetica',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: '0.10000000149011612px',
    lineHeight: '32px',
    color: 'rgba(37, 43, 66, 1)',
  });
  
  const NavLinksContainer = styled('div')({
    position: 'absolute',
    width: '1155px',
    height: '58px',
    top: '0',
    left: '265px',
    overflow: 'hidden',
  });
  
  const NavLink = styled('div')({
    display: 'inline-flex',
    alignItems: 'start',
    gap: '15px',
    position: 'absolute',
    top: '16px',
    left: '0',
  });
  
  const NavLinkItem = styled('div')({
    position: 'relative',
    width: '43px',
    height: '24px',
  });
  
  const NavLinkText = styled(Typography)({
    position: 'absolute',
    top: '-2px',
    left: '6px',
    fontFamily: 'Montserrat-Bold, Helvetica',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: '0.20px',
    lineHeight: '28px',
    color: 'rgba(37, 43, 66, 1)',
  });
  
  const IconImage = styled('img')({
    position: 'absolute',
    width: '10px',
    height: '6px',
    top: '10px',
    left: '53px',
  });
  
  const ActionButtons = styled('div')({
    display: 'inline-flex',
    alignItems: 'center',
    position: 'absolute',
    top: '2px',
    left: '832px',
  });
  
  const ActionButton = styled(Button)({
    'all': 'unset',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '15px',
    position: 'relative',
    borderRadius: '37px',
    overflow: 'hidden',
  });
  
  const ActionButtonIcon = styled('img')({
    position: 'relative',
    width: '16px',
    height: '16px',
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
  
  const IconImageLi = styled('img')({
    position: 'relative',
    
  });
  
  const Menubar = (): JSX.Element => {
    return (
      <StyledNavbarLight>
        <Brand>
          <BrandText>
            Bandage
          </BrandText>
        </Brand>
        <NavLinksContainer>
          <NavLink>
            <NavLinkItem>
              <NavLinkText>
                Home
              </NavLinkText>
            </NavLinkItem>
            <NavLinkItem>
              <NavLinkText>
                Shop
              </NavLinkText>
              <ExpandMoreIcon style={{ position: 'absolute', left: '40px' }}/>
            </NavLinkItem>
            <NavLinkItem>
              <NavLinkText>
                About
              </NavLinkText>
            </NavLinkItem>
            <NavLinkItem>
              <NavLinkText>
                Blog
              </NavLinkText>
            </NavLinkItem>
            <NavLinkItem>
              <NavLinkText>
                Contact
              </NavLinkText>
            </NavLinkItem>
            <NavLinkItem>
              <NavLinkText>
                Pages
              </NavLinkText>
            </NavLinkItem>
          </NavLink>
          <ActionButtons>
            <ActionButton>
              <ActionButtonIcon alt="Icn settings icn xs" src="/icons/avatar.svg" />
              <ActionButtonText>
                Login / Register
              </ActionButtonText>
            </ActionButton>
            <IconImageLi alt="Li" src="/icons/search.svg" />
            <ActionButton>
              <ActionButtonIcon alt="Icn settings icn xs" src="/icons/basket.svg" />
              <ActionButtonText>
                1
              </ActionButtonText>
            </ActionButton>
            <ActionButton>
              <ActionButtonIcon alt="Icn settings icn xs" src="/icons/love.svg" />
              <ActionButtonText>
                1
              </ActionButtonText>
            </ActionButton>
          </ActionButtons>
        </NavLinksContainer>
      </StyledNavbarLight>
    );
  };

export default Menubar;