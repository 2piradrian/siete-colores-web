import React from 'react';
import SearchBar from '../../ui/components/search-bar/search-bar';
import useViewModel from '../../ui/viewmodels/products/useViewModel';
import ProductList from '../../ui/components/product-list/product-list';
import * as style from './style.module.css';
import PageSelector from '../../ui/components/page-selector/page-selector';

export default function ProductsPage() {

    const { loading, products, subCategories, filters, updateFilters, clearFilters, addProduct, page, totalPages, prevPage, nextPage } = useViewModel();

    return (
        <section className={style.container}>
            <h1 className={style.title}>
                Mirá lo que tenemos para ofrecerte 
            </h1>
            <SearchBar 
                filters={filters}
                updateFilters={updateFilters}
                clearFilters={clearFilters}
                subCategories={subCategories}
            />
			<PageSelector currentPage={page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} />
			{ loading && <span>Cargando...</span> }
            <ProductList list={products} onAdd={addProduct}/>
			<PageSelector currentPage={page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} />
        </section>
    );
}