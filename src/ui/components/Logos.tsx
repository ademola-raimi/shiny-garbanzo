import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledRow = styled(Grid)({
  maxWidth: '1054px',
  width: '100%',
  margin: '0 auto',
  gap: '30px',
  padding: '50px 0',
  alignItems: 'center',
  justifyContent: 'center',
  '@media screen and (max-width: 991px)': {
    textAlign: 'center'
  }
});

const StyledImage = styled('img')({
  width: 'auto',
  height: 'auto',
});

const Logos = (): JSX.Element => {
  return (
    <StyledRow container className="center">
      <Grid item xs={12} sm={4} md={4} lg={1.6}>
        <StyledImage
          alt="Fa brands"
          src="/icons/fa-brands-1.svg"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={1.6}>
        <StyledImage
          alt="Fa brands"
          src="/icons/fa-brands-2.svg"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={1.6}>
        <StyledImage
          alt="Fa brands"
          src="/icons/fa-brands-3.svg"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={1.6}>
        <StyledImage alt="Col md" src="/icons/fa-brands-4.svg" />
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={1.6}>
        <StyledImage alt="Col md" src="/icons/fa-brands-5.svg" />
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={1.6}>
        <StyledImage alt="Col md" src="/icons/fa-brands-6.svg" />
      </Grid>
    </StyledRow>
  );
};

export default Logos;
