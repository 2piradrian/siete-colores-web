import React from 'react';
import SearchBar from '../../ui/components/search-bar/search-bar';
import useViewModel from '../../ui/viewmodels/products/useViewModel';
import * as style from './style.module.css';

export default function ProductsPage() {

    const { products, categorySelected, subCategories, filters, loading, updateFilters, clearFilters } = useViewModel();

    return (
        <section className={style.container}>
            <h1 className={style.title}>
                Mirá lo que tenemos para ofrecerte 
            </h1>
            <SearchBar 
                filters={filters}
                updateFilters={updateFilters} 
                clearFilters={clearFilters}
                category={categorySelected}
                subCategories={subCategories}
            />
            {
                loading ? 
                <p>Cargando...</p> :
                <ul className={style.products}>
                    {
                        products.map(product => (
                            <li key={product.id} className={style.product}>
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                                <p>${product.price}</p>
                            </li>
                        ))
                    }
                </ul>
            }
        </section>
    );
}