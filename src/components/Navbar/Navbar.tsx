import { AppBar, Badge, Container } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logo from "../../assets/rohlik-cz-logo-vector.png";
import Filter from "../Filter/Filter";
import { GlobalContext } from "../../context/GlobalContext";

const Navbar: React.FC = () => {
  const { cart, cartBadge } = useContext(GlobalContext);

  console.log(cart)

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ height: "5em", padding: "1em", backgroundColor: "white" }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Box sx={{ cursor: "pointer" }}>
              <Link href="/">
                <Image src={logo} alt="logo" width={100} height={50} />
              </Link>
            </Box>
            <Filter />
            <Box
              sx={{
                zIndex: "1500",
                backgroundColor: "white",
                paddingRight: "1em",
                cursor: "pointer",
              }}
            >
              <Link href="/cart">
                <Badge badgeContent={cartBadge} color="primary">
                  <ShoppingCartIcon style={{ color: "black" }} />
                </Badge>
              </Link>
            </Box>
          </Stack>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
