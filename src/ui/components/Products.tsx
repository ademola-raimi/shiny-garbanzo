import React from "react";
import { styled } from "@mui/system";
// import ButtonMd from "./ButtonMd";
import Link from 'next/link';
import { Card, CardContent, Typography, Grid, CardMedia, Box } from "@mui/material";

const ContainerWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  gap: "24px",
  padding: "80px 0",
});

const SectionWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  gap: "10px",
});

const FeaturedText = styled("div")({
  margin: "-1px 0 0",
  fontFamily: "var(--h-4-font-style)",
  fontWeight: "var(--h-4-font-weight)",
  fontSize: "var(--h-4-font-size)",
  color: "var(--second-text-color)",
  textAlign: "center",
});

const BestsellerText = styled("div")({
  fontFamily: "var(--h-3-font-style)",
  fontWeight: "var(--h-3-font-weight)",
  fontSize: "var(--h-3-font-size)",
  color: "var(--text-color)",
  textAlign: "center",
});

const ParagraphText = styled("p")({
  fontFamily: "var(--paragraph-font-style)",
  fontWeight: "var(--paragraph-font-weight)",
  fontSize: "var(--paragraph-font-size)",
  color: "var(--second-text-color)",
  textAlign: "center",
});

const StyledCard = styled(Card)({
    maxWidth: 183,
    margin: "0 10px",
    backgroundColor: "lightblue",
  });
  
  const StyledCardMedia = styled(CardMedia)({
    height: 238,
    backgroundSize: "cover",
  });
  
  const StyledTypography = styled(Typography)({
    marginTop: -1,
  });
  
  const StyledLink = styled(Typography)({
    marginLeft: -6.5,
    marginRight: -6.5,
  });
  
  const StyledPrice = styled(Box)({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 5,
    padding: "3px 5px",
  });

const ResponsiveButtonMd = styled("button")({
  width: "100%",
  alignSelf: "center",
  flex: "0 0 auto",
});


const Container = (): JSX.Element => {
  return (
    <ContainerWrapper>
      <SectionWrapper>
        <FeaturedText>Featured Products</FeaturedText>
        <BestsellerText>BESTSELLER PRODUCTS</BestsellerText>
        <ParagraphText>
          Problems trying to resolve the conflict between
        </ParagraphText>
      </SectionWrapper>
      <Grid container spacing={2}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Grid key={item} item xs={12} sm={6} md={4} lg={3}>
            <Link href={`/products/${item}`} passHref>
                <StyledCard>
                    <StyledCardMedia image={`/icons/product-test.svg`} />
                    <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, paddingTop: 25, paddingBottom: 35, paddingLeft: 25, position: "relative", width: "100%", flex: "0 0 auto" }}>
                    <StyledTypography variant="h5">Graphic Design</StyledTypography>
                    <StyledLink variant="subtitle1">English Department</StyledLink>
                    <StyledPrice>
                        <Typography variant="h5" style={{ color: "grey" }}>$16.48</Typography>
                        <Typography variant="h5" style={{ color: "blue" }}>$6.48</Typography>
                    </StyledPrice>
                    </CardContent>
                </StyledCard>
            </Link>
        </Grid>
      ))}
    </Grid>
      <ResponsiveButtonMd
        className="!flex-[0_0_auto]"
        dropdown={false}
        icon={false}
        iconLeft
        next={false}
        outlined
        play={false}
        previous={false}
        rounded={false}
        text
        text1="LOAD MORE PRODUCTS"
      />
    </ContainerWrapper>
  );
};

export default Container;
