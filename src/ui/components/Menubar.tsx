import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Typography, Button, IconButton, List, ListItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from '../../store/store';
import Modal from './Modal';
import Link from 'next/link';


const Menubar = (): JSX.Element => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const basketItems = useSelector((state) => state.products.basket);
  const wishlistItems = useSelector((state) => state.products.wishlist);

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
    closeMobileMenu();
  };

  const handleWishlistToggle = () => {
    setWishlistOpen(!isWishlistOpen);
    closeMobileMenu();
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <StyledNavbarLight>
      <Brand>
        <BrandText>Bandage</BrandText>
      </Brand>
      <ActionButtons>
          <ActionButton>
            <AvatarIcon alt="Avatar icn" src="/icons/avatar.svg" />
            <ActionButtonText>Login / Register</ActionButtonText>
          </ActionButton>
          <ActionButton>
            <ActionButtonIcon alt="Li" src="/icons/search.svg" />
          </ActionButton>
          <ActionButton onClick={handleCartToggle} style={{ cursor: 'pointer' }}>
            <ActionButtonIcon alt="basket icn" src="/icons/basket.svg" />
            <ActionButtonText>{basketItems.length}</ActionButtonText>
          </ActionButton>
          <ActionButton onClick={handleWishlistToggle} style={{ cursor: 'pointer' }}>
            <ActionButtonIcon alt="love icn" src="/icons/love.svg" />
            <ActionButtonText>{wishlistItems.length}</ActionButtonText>
          </ActionButton>
        </ActionButtons>
      <MobileMenuToggle onClick={handleMobileMenuToggle}>
        <MenuIcon />
      </MobileMenuToggle>
      {isMobileMenuOpen ? (
        <NavLinksContainer mobileMenuOpen={isMobileMenuOpen}>
          <List>
            <ListItem>
              <Link href="/">
                <NavLinkText onClick={closeMobileMenu}>Home</NavLinkText>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="">
                <NavLinkText onClick={closeMobileMenu}>Shop</NavLinkText>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
                <NavLinkText onClick={closeMobileMenu}>About</NavLinkText>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
                <NavLinkText onClick={closeMobileMenu}>Blog</NavLinkText>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
                <NavLinkText onClick={closeMobileMenu}>Contact</NavLinkText>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
                <NavLinkText onClick={closeMobileMenu}>Pages</NavLinkText>
              </Link>
            </ListItem>
          </List>
        </NavLinksContainer>
      ) : (
        <NavLinksContainerDesktop>
          <NavLink>
            <Link href="/">
              <NavLinkItem>
                <NavLinkText >Home</NavLinkText>
              </NavLinkItem>
            </Link>
            <Link href="/">
              <NavLinkItem>
                <NavLinkText style={{ fontWeight: 500, color: '#252B42' }}>
                  Shop
                  <ExpandMoreIcon />
                </NavLinkText>
              </NavLinkItem>
            </Link>
            <Link href="/">
              <NavLinkItem>
                <NavLinkText>About</NavLinkText>
              </NavLinkItem>
            </Link>
            <Link href="/">
              <NavLinkItem>
                <NavLinkText>Blog</NavLinkText>
              </NavLinkItem>
            </Link>
            <Link href="/">
              <NavLinkItem>
                <NavLinkText>Contact</NavLinkText>
              </NavLinkItem>
            </Link>
            <Link href="/">
              <NavLinkItem>
                <NavLinkText>Pages</NavLinkText>
              </NavLinkItem>
            </Link>
          </NavLink>
        </NavLinksContainerDesktop>
      )}
      <Modal
        open={isCartOpen}
        handleToggle={handleCartToggle}
        title={"Cart"}
        items={basketItems}
      />
      <Modal
        open={isWishlistOpen}
        handleToggle={handleWishlistToggle}
        title={"Wish List"}
        items={wishlistItems}
      />
    </StyledNavbarLight>
  );
};

const StyledNavbarLight = styled('div')({
  maxWidth: '1440px',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px 0 38px',
  marginTop: '12px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding: '16px',
    alignItems: 'flex-start',
  },
});

const NavLinksContainerDesktop = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  '@media (max-width: 768px)': {
    display: 'none',
  },
});

const MobileMenuToggle = styled(IconButton)({
  display: 'none',
  '@media (max-width: 768px)': {
    display: 'block',
    position: 'absolute',
    top: '16px',
    right: '16px',
  },
});


const NavLinksContainer = styled('div')<{ mobileMenuOpen: boolean }>((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  flexDirection: props.mobileMenuOpen ? 'column' : 'row',
  position: 'relative',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    position: 'absolute',
    top: '70px',
    left: '0',
    width: '100%',
    background: 'white',
    boxShadow: '0px 8px 16px rgba(37, 43, 66, 0.04)',
    borderRadius: '8px',
    zIndex: 1000,
    display: props.mobileMenuOpen ? 'flex' : 'none',
  },
}));

const Brand = styled('div')({
  width: '187px',
  display: 'flex',
  alignItems: 'center',
});

const BrandText = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 700,
  letterSpacing: '0.10000000149011612px',
  lineHeight: '32px',
  color: 'rgba(37, 43, 66, 1)',
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
  fontFamily: "'Montserrat', sans-serif",
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
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 700,
  letterSpacing: '0.20000000298023224px',
  lineHeight: '24px',
  color: 'rgba(35, 166, 240, 1)',
});

export default Menubar;
