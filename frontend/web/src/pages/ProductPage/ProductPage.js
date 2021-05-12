import React from 'react';
import { Department, Title, Price, Ratings } from '@wow/shared/Product/Product';
import Navbar from '../../components/Navbar/Navbar';
import Wrapper from '../../components/Wrapper/Wrapper';
import "./ProductPage.scss";
import {useParams} from "@wow/shared/Router/index";
import Column from '../../components/Column/Column';

export default function ProductPage() {
    let { department, hash } = useParams();

    let productListing = {
        department: department,
        title: 'Title',
        price: 18.00,
        ratings: 4.5
    }

    return (
        <>
            <Navbar />
            <Wrapper>
                <Column>
                    <Department {...productListing}/>
                    <Title {...productListing}/>
                    <Price {...productListing}/>
                    <Ratings {...productListing}/>
                </Column>
            </Wrapper>
        </>
    )
}
