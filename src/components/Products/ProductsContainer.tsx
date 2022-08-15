import React from "react";
import { Container, Grid } from "@mui/material";

import { Product } from "../../types/ProductTypes";
import ProductCard from "./ProductCard";

interface IProps {
  products: Product[];
}

const ProductsContainer: React.FC<IProps> = ({ products }: IProps) => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {products?.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </Grid>
      </Container>
    </>
  );
};

export default ProductsContainer;
