import React from 'react';
import SearchBar from '../../ui/components/search-bar/search-bar';
import useViewModel from '../../ui/viewmodels/products/useViewModel';
import ProductList from '../../ui/components/product-list/product-list';
import * as style from './style.module.css';

export default function ProductsPage() {

    const { products, subCategories, filters, clearFilters, addProduct } = useViewModel();

    return (
        <section className={style.container}>
            <h1 className={style.title}>
                Mirá lo que tenemos para ofrecerte 
            </h1>
            <SearchBar 
                filters={filters}
                clearFilters={clearFilters}
                subCategories={subCategories}
            />
            <ProductList list={products} onAdd={addProduct}/>
        </section>
    );
}