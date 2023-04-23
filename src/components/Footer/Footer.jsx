import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const FooterContainer = styled("footer")(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          © 2023 Ivan Macià. Source code available <Link href="https://github.com/iMaciaP/ponentBloc">here</Link>.
        </Typography>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

