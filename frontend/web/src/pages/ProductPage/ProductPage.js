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

    useEffect(() => {
        const awaitDep = async() => {
            const data = await getProductInfo(productID)
            // console.log(data)
            let payload = {
                id: data.id,
                title: data.title,
                price: data.price,
                rating: data.rating
            }
            
            productsDispatch({ type: PRODUCTS_ACTIONS.SELECTED_PRODUCT, payload: payload })
        }
        awaitDep()
    }, [])
    
    const {api, token} = dotenv();
    // AMAZON DP Stands for details page in the url
    // AMAZON GP Stands for general products page in the url.
    console.log(selectedProduct)
    //console.log(products)

    return (
        <>
            <Navbar />
            <Wrapper>
                <Column>
                    {/* <Department department={productListing.department}/> */}
                    {/* {selectedProduct.store ? selectedProduct.store : ''} */}
                    <Title title={selectedProduct.title}/>
                    <Price price={selectedProduct.price}/>
                    {`${selectedProduct.rating} out of 5` || "N/A" }
                    <Ratings rating={selectedProduct.rating}/> 
                    
                </Column>
            </Wrapper>
        </>
    )
}
