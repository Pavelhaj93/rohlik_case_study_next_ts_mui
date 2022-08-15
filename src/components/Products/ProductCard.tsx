import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

import { Product } from "../../types/ProductTypes";
import CartButton from "../Buttons/CartButton";
import { Stack } from "@mui/system";
import { GlobalContext } from "../../context/GlobalContext";

interface IProps {
  product: Product;
}



const ProductCard: React.FC<IProps> = ({ product }: IProps) => {
  const { cart } = useContext(GlobalContext);
  const [inCart, setInCart] = useState<boolean>(false);

  return (
    <>
      {/* <Tooltip
        title={""}
        title={`V košíku máte ${product.quantity} ks za ${
          (product.price.full * product.quantity)
        } Kč`}
      > */}
        <Grid item sm={1.5} xs={12} key={product.id}>
          <Card sx={{ height: 400 }}>
            <CardContent>
              <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={150}
                    layout="fixed"
                    objectFit="contain"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  {product.name}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  {product.price.full} {product.price.currency}
                </Typography>
                <CardActions>
                  <CartButton product={product} />
                </CardActions>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      {/* </Tooltip> */}
    </>
  );
};

export default ProductCard;
