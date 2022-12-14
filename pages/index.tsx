import type { GetServerSideProps } from "next";
import Head from "next/head";
import ProductsContainer from "../src/components/Products/ProductsContainer";

import { GlobalContext } from "../src/context/GlobalContext";
import { Product } from "../src/types/ProductTypes";
import { useContext, useEffect, useState } from "react";

interface IProps {
  items: Product[];
}

const Home: React.FC<IProps> = ({ items }: IProps) => {
  const { searchTerm } = useContext(GlobalContext);
  const [products, setProducts] = useState(items);

  useEffect(() => {
    if (searchTerm === null) {
      setProducts(items);
    } else {
      const filteredData = items.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
      setProducts(filteredData);
    }
    console.log(products);
  }, [searchTerm, items]);

  return (
    <div>
      <Head>
        <title>Rohlik Eshop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProductsContainer products={products} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return { props: { items: data } };
};

export default Home;
