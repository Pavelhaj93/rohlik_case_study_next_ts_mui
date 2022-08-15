import { Button, Typography } from "@mui/material";
import React, { useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import { Product } from "../../types/ProductTypes";

interface IProps {
  product: Product;
}

const QtyButtons: React.FC<IProps> = ({ product }: IProps) => {
  const { onAdd, onRemove } = useContext(GlobalContext);

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => onRemove(product)}
      >
        -
      </Button>
      <Typography
        variant="h6"
        sx={{ fontWeight: "700", color: "secondary", width: "40px", textAlign: "center" }}
      >
        {product.quantity}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onAdd(product)}
      >
        +
      </Button>
    </>
  );
};

export default QtyButtons;
