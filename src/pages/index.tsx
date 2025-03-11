import React from "react";
import Hero from "../ui/components/hero/hero";
import Categories from "../ui/components/categories/categories";
import News from "../ui/components/news/news";
import useViewModel from "../ui/viewmodels/home/useViewModel";
import Offerts from "../ui/components/offerts/offerts";
import Sellers from "../ui/components/sellers/sellers";
import { SEO } from "../ui/components/seo/seo";

export default function IndexPage() {

  const { news, offerts, addProduct } = useViewModel();

  return (
    <>
      <Hero />
      <Categories />
      <News news={news} onAdd={addProduct} />
      <Offerts offerts={offerts} onAdd={addProduct} />
      <Sellers />
    </>
  );
};

export const Head = () => (
  <SEO />
);