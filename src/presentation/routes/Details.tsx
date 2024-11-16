import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../core";
import { useParams } from "react-router-dom";
import { Product } from "../../domain/types/products";
import Layout from "../layout/Layout";
import ProductNotFound from "../components/atoms/ProductNotFound/ProductNotFound";
import Description from "../components/organisms/Descrption/Description";

export default function Details() {
    const [product, setProduct] = useState<Product | null>(null);

    const { fetchProductByCode, loading } = useContext(ProductsContext);

    const params = useParams<{ code: string }>();
    useEffect(() => {
        const fetchProduct = async () => {
            const product = params.code ? await fetchProductByCode(params.code) : undefined;
            if (product) {
                setProduct(product || null);
            }
        };
        fetchProduct();
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