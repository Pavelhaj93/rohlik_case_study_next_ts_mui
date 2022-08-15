import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import ClearIcon from "@mui/icons-material/Clear";

import { GlobalContext } from "../../context/GlobalContext";
import { Product } from "../../types/ProductTypes";
import QtyButtons from "../Buttons/QtyButtons";
import { useContext } from "react";

interface IProps {
  product: Product;
}

const CartCard: React.FC<IProps> = ({ product }: IProps) => {
  const { onDelete } = useContext(GlobalContext);
  return (
    <>
      {product.quantity && product.quantity >= 1 && (
        <Grid item sm={12} key={product.id}>
          <Card sx={{ height: 150, width: "100%" }}>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={1}
              >
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    layout="fixed"
                    objectFit="contain"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
                <Typography variant="h6">{product.name}</Typography>
                <CardActions>
                  <QtyButtons product={product} />
                </CardActions>
                <Typography variant="h6">
                  {(product.quantity * product.price.full).toFixed(2) +
                    " " +
                    product.price.currency}
                </Typography>
                <CardActions>
                  <ClearIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => onDelete(product)}
                  />
                </CardActions>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      )}
    </>
  );
};

export default CartCard;
