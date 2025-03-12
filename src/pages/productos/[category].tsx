import React from 'react';
import SearchBar from '../../ui/components/search-bar/search-bar';
import useViewModel from '../../ui/viewmodels/productos/useViewModel';
import ProductList from '../../ui/components/product-list/product-list';
import PageSelector from '../../ui/components/page-selector/page-selector';
import { SEO } from '../../ui/components/seo/seo';
import { Toaster } from 'react-hot-toast';
import * as style from './style.module.css';

type Props = {
    pageContext: {
      static_categoryName: string;
      static_products: any[];
    };
};

export default function ProductosPage({ pageContext }: Props) {
    const { static_categoryName, static_products } = pageContext;
    const { loading, products, subCategories, filters, handleFormChange, updateFilters, clearFilters, addProduct, totalPages, prevPage, nextPage } = useViewModel();

    return (
        <section className={style.container}>
            <h1 className={style.title}>
                {`Estás viendo ${loading ? static_categoryName : filters.category}`} 
            </h1>
            <SearchBar 
                filters={filters}
                handleFormChange={handleFormChange}
                updateFilters={updateFilters}
                clearFilters={clearFilters}
                subCategories={subCategories}
            />
			<PageSelector currentPage={filters.page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} />
            { loading ?
                <ProductList loading={loading} list={static_products} onAdd={addProduct} />
                :
                <ProductList loading={loading} list={products} onAdd={addProduct} />
            }
			<PageSelector currentPage={filters.page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} />
			<Toaster />
        </section>
    );
}

export const Head = () => (
    <SEO />
);