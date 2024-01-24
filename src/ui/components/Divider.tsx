import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledNavbar = styled(Box)({
  position: "relative",
  width: "1440px",
  height: "91px",
  background: "white",
});

const StyledSection = styled(Box)({
  position: "absolute",
});

const StyledLink = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: "600",
  fontSize: "14px",
  color: "text-secondary-text-color",
  textAlign: "center",
  letterSpacing: "0.20px",
  lineHeight: "24px",
  whiteSpace: "nowrap",
});

const Line = styled('hr')({
  background: "#ECECEC",
  width: "1049px",
  height: "1px",
});

const Divider = (): JSX.Element => {
  return (
    <>
    <StyledNavbar>
      <StyledSection width="1051px" height="72px" top="10px" left="193px">
        <StyledSection width="134px" height="72px" top="0" left="280px">
          <Box display="flex" alignItems="center" justifyContent="center" gap="8px" p="24px" position="relative">
            <StyledLink>
              Description
            </StyledLink>
          </Box>
        </StyledSection>
        <StyledSection width="355px" height="72px" top="0" left="414px">
          <StyledSection width="220px" height="72px" top="0" left="0">
            <Box display="flex" alignItems="center" justifyContent="center" gap="8px" p="24px" position="relative">
              <StyledLink>
                Additional Information
              </StyledLink>
            </Box>
          </StyledSection>
          <StyledSection width="138px" height="72px" top="0" left="217px">
            <Box display="flex" alignItems="center" justifyContent="center" gap="8px" p="24px" position="relative">
              <StyledLink>
                Reviews
              </StyledLink>
              <StyledLink color="text-secondary-color-1">
                (0)
              </StyledLink>
            </Box>
          </StyledSection>
        </StyledSection>
      </StyledSection>
    </StyledNavbar>
    <Line/>
    </>
  );
};

export default Divider;
