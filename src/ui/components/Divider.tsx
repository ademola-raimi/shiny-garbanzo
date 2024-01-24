import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledNavbar = styled('div')({
  maxWidth: '1050px',
  width: '100%',
  margin: '0 auto',
  borderBottom: '1px solid #ECECEC',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media screen and (max-width: 767px)': {
    display: 'none',
  },
});

const StyledLink = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: '600',
  fontSize: '14px',
  color: '#737373',
  textAlign: 'center',
  letterSpacing: '0.20px',
  lineHeight: '24px',
  whiteSpace: 'nowrap',
});

const Divider = (): JSX.Element => {
  return (
    <StyledNavbar>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="8px"
        p="24px"
        position="relative"
      >
        <StyledLink>Description</StyledLink>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="8px"
        p="24px"
      >
        <StyledLink>Additional Information</StyledLink>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="8px"
        p="24px"
      >
        <StyledLink>Reviews</StyledLink>
        <StyledLink color="text-secondary-color-1">(0)</StyledLink>
      </Box>
    </StyledNavbar>
  );
};

export default Divider;
