import React, { useState, createContext, useEffect } from "react";
import { Product } from "../types/ProductTypes";

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

interface IProps {
  product: Product;
}

type GlobalContextType = {
  searchTerm: any;
  setSearchTerm: React.Dispatch<React.SetStateAction<any>>;
  cart: any;
  setCart: any;
  onAdd: ({}) => void;
  onRemove: ({}) => void;
  onDelete: ({}) => void;
  cartBadge: number;
  setCartBadge: React.Dispatch<React.SetStateAction<number>>;
};

export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [cart, setCart] = useState<IProps[]>([]);
  const [cartBadge, setCartBadge] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setCartBadge(cart.length);
  }, [cart]);

  const onAdd = (product: any) => {
    const findProductInCart = cart.find((item: any) => item.id === product.id);

    if (findProductInCart) {
      const newCartItems = cart.map((cartProduct: any) => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        else return cartProduct;
      });
      setCart(newCartItems);
    } else {
      product.quantity = 1;
      setCart((cartItems: IProps[]) => [...cartItems, product]);
    }
  };

  const onRemove = (product: any) => {
    if (product.quantity > 1) {
      const newCartItems = cart.map((cartProduct: any) => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        else return cartProduct;
      });
      setCart(newCartItems);
    } else {
      onDelete(product);
    }
  };

  const onDelete = (product: any) => {
    const newCartItems = cart.filter(
      (cartItem: any) => cartItem.id !== product.id
    );

    setCart(newCartItems);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        cart,
        setCart,
        onAdd,
        onRemove,
        onDelete,
        cartBadge,
        setCartBadge,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
