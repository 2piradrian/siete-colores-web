import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../types/products";
import useProducts from "../../core/hooks/useProducts";
import Layout from "../layout/Layout";
import ProductNotFound from "../components/atoms/ProductNotFound/ProductNotFound";
import Description from "../components/organisms/Descrption/Description";

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