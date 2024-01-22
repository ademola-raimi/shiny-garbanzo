import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledRow = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
  padding: "0",
  paddingTop: "50px",
  position: "relative",
});

const StyledColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "auto",
  alignItems: "center",
  position: "relative",
});

const StyledImage = styled("img")({
  width: "auto",
  height: "auto",
});

const Logos = (): JSX.Element => {
  return (
    <StyledRow>
      <StyledColumn width="153px">
        <StyledImage alt="Fa brands" src="/icons/fa-brands-1.svg" width="103px" height="34px" />
      </StyledColumn>
      <StyledColumn width="146px">
        <StyledImage alt="Fa brands" src="/icons/fa-brands-2.svg" width="83px" height="59px" />
      </StyledColumn>
      <StyledColumn width="152px">
        <StyledImage alt="Fa brands" src="/icons/fa-brands-3.svg" width="102px" height="75px" />
      </StyledColumn>
      <StyledImage alt="Col md" src="/icons/fa-brands-4.svg" width="151px" />
      <StyledImage alt="Col md" src="/icons/fa-brands-5.svg" width="151px" />
      <StyledImage alt="Col md" src="/icons/fa-brands-6.svg" width="149px" />
    </StyledRow>
  );
};

export default Logos;
