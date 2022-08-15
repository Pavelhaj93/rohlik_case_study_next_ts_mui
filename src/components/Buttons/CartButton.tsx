import { Button } from "@mui/material";
import React, { Dispatch, SetStateAction, useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";
import { Product } from "../../types/ProductTypes";

interface IProps {
  product: Product;
}

interface FnProps {
  setInCart: Dispatch<SetStateAction<boolean>>
}

const CartButton: React.FC<IProps> = ({ product }: IProps, setInCart: FnProps) => {
  const { onAdd } = useContext(GlobalContext);
  return (
    <>
      <Button
        variant="contained"
        // color="primary"
        onClick={() => onAdd(product)}
        sx={{
          backgroundColor: "secondary.light",
          color: "secondary.dark",
          margin: 0,
          "&:hover": {
            backgroundColor: "primary.light",
            color: "secondary.light",
          },
        }}
      >
        Do košíku
      </Button>
    </>
  );
};

export default CartButton;
