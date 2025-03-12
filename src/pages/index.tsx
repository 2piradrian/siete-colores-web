import React from "react";
import Hero from "../ui/components/hero/hero";
import Categories from "../ui/components/categories/categories";
import News from "../ui/components/news/news";
import useViewModel from "../ui/viewmodels/home/useViewModel";
import Offerts from "../ui/components/offerts/offerts";
import Sellers from "../ui/components/sellers/sellers";
import { SEO } from "../ui/components/seo/seo";
import * as style from "./style.module.css";

export default function IndexPage() {

  const { news, offerts, addProduct } = useViewModel();

  return (
    <div className={style.container}>
      <Hero />
      <Categories />
      <News news={news} onAdd={addProduct} />
      <Offerts offerts={offerts} onAdd={addProduct} />
      <Sellers />
    </div>
  );
};

export const Head = () => (
  <SEO />
);