import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types/products";
import Layout from "../layout/Layout";
import useProducts from "../hooks/useProducts";
import Description from "../components/organisms/Descrption/Description";
import ProductNotFound from "../components/atoms/ProductNotFound/ProductNotFound";

export default function Details() {
    const [product, setProduct] = useState<Product | null>(null);
    const { getProduct, loading} = useProducts();

    const params = useParams<{ code: string }>();
    useEffect(() => {
        const product = getProduct(params.code ? params.code : "");
        if (product) {
            setProduct(product);
        }
    }, [params.code, loading]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
      <Layout>
        {(!product && <ProductNotFound />)}
        {(product && <Description product={product} />)}
      </Layout>
    );
}