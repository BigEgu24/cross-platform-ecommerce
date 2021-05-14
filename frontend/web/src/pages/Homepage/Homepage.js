import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { useAppContext } from '@wow/shared/Context/app-context';
import Banner from '../../components/Banner/Banner';

export default function Homepage() {
    const {productsReducer} = useAppContext();
    const {products} = productsReducer;
    let Products = products.products;

    return (
        <div>
            <Navbar />
            <Banner homepage={true}>
            </Banner>
            {/* {
                Products.map((product, index) => {
                    console.log(product)
                    return(
                        <div>
                            {product.desc}
                        </div>
                    )
                    
                })
            } */}
        </div>
    )
}
