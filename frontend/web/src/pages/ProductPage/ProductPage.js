import Product from '@wow/shared/Product/Product';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "./ProductPage.scss";

export default function ProductPage() {
    return (
        <>
            <Navbar />
            <Product />
        </>
    )
}
