import React from 'react';
import SearchBar from '../../ui/components/search-bar/search-bar';
import useViewModel from '../../ui/viewmodels/productos/useViewModel';
import ProductList from '../../ui/components/product-list/product-list';
import PageSelector from '../../ui/components/page-selector/page-selector';
import * as style from './style.module.css';

export default function ProductosPage() {

    const { loading, products, subCategories, filters, handleFormChange, updateFilters, clearFilters, addProduct, totalPages, prevPage, nextPage } = useViewModel();

    return (
        <section className={style.container}>
            <h1 className={style.title}>
                {`Estás viendo ${filters.category}`} 
            </h1>
            <SearchBar 
                filters={filters}
                handleFormChange={handleFormChange}
                updateFilters={updateFilters}
                clearFilters={clearFilters}
                subCategories={subCategories}
            />
			<PageSelector currentPage={filters.page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} />
			{ loading && <span>Cargando...</span> }
            <ProductList list={products} onAdd={addProduct}/>
			<PageSelector currentPage={filters.page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} />
        </section>
    );
}