import React from 'react';
import { Toaster } from 'react-hot-toast';
import { CategoryEntity } from '../../domain';
import PageSelector from '../../ui/components/page-selector/page-selector';
import ProductList from '../../ui/components/product-list/product-list';
import SearchBar from '../../ui/components/search-bar/search-bar';
import { SEO } from '../../ui/components/seo/seo';
import useViewModel from '../../ui/viewmodels/productos/useViewModel';
import * as style from './style.module.css';

type Props = {
    pageContext: {
        static_categoryName: string;
    };
};

export default function ProductosPage({ pageContext }: Props) {
    const { loading, products, subCategories, filters, handleFormChange, updateFilters, clearFilters, addProduct, totalPages, prevPage, nextPage } = useViewModel();

    return (
        <section className={style.container}>
            <h1 className={style.title}>
                {`Estás viendo ${CategoryEntity.denormalize(filters.category || "")}`}
            </h1>
            <SearchBar
                filters={filters}
                handleFormChange={handleFormChange}
                updateFilters={updateFilters}
                clearFilters={clearFilters}
                subCategories={subCategories}
            />
            <PageSelector currentPage={filters.page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} />
            <ProductList loading={loading} list={products} onAdd={addProduct} />
            <PageSelector currentPage={filters.page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} />
            <Toaster />
        </section>
    );
}

export const Head = () => (
    <SEO />
);