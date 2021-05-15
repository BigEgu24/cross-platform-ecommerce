import React, { useEffect } from 'react';
import { Department, Title, Price, Ratings } from '@wow/shared/Product/Product';
import Navbar from '../../components/Navbar/Navbar';
import Wrapper from '../../components/Wrapper/Wrapper';
import "./ProductPage.scss";
import {useParams} from "@wow/shared/Router/index";
import Column from '../../components/Column/Column';
import getDepartment from '@wow/shared/utils/departments/departments';
import { useAppContext } from '@wow/shared/Context/app-context';
import {getProductInfo} from '@wow/shared/utils/products/products';
import dotenv from '@wow/shared/utils/variables/dotenv';

export default function ProductPage() {
    let { productID, hash } = useParams();
    const {
        productsReducer
    } = useAppContext();
    const {
        PRODUCTS_ACTIONS,
        products,
        productsDispatch
    } = productsReducer;
    var selectedProduct = products.product;

    const awaitDep = async() => {
        const data = await getProductInfo(productID)
        getProductInfo(productID)
        
        let payload = {
            id: data[0].id,
            title: data[0].title,
            price: data[0].price,
            rating: data[0].rating
        }
        
        
        productsDispatch({ type: PRODUCTS_ACTIONS.SELECTED_PRODUCT, payload: payload })
        //console.log(selectedProduct)
    }

    useEffect(() => {
        awaitDep()
    }, [])
    
    const {api, token} = dotenv();
    // AMAZON DP Stands for details page in the url
    // AMAZON GP Stands for general products page in the url.
    //console.log(selectedProduct)

    return (
        <>
            <Navbar />
            <Wrapper>
                <Column>
                    {/* <Department department={productListing.department}/> */}
                    {/* {selectedProduct.store ? selectedProduct.store : ''} */}
                    {/* <Title title={selectedProduct.title}/> */}
                    {/* <Price price={selectedProduct.price}/> */}
                    {/* {selectedProduct.rating3 ? '' : `${selectedProduct.rating} out of 5` || "N/A" } */}
                    {/* {selectedProduct.rating3 ? '' : <Ratings rating={selectedProduct.rating}/> } */}
                    
                </Column>
            </Wrapper>
        </>
    )
}
