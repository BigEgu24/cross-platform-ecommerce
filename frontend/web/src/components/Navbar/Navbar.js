import React, {useEffect, useReducer} from 'react'
import { useAppContext } from '@wow/shared/Context/app-context';
import {Text} from "react-native";
import { Link } from '@wow/shared/Router/index';
import "./Navbar.scss";
import Wrapper from '../Wrapper/Wrapper';
import Logo from '@wow/shared/Logo/Logo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Row from '../Row/Row';
import Column from '../Column/Column';
import {ShoppingCart, SearchIcon} from '@wow/shared/Icons';

export default function Navbar() {
    const {authReducer} = useAppContext();
    const {auth} = authReducer;
    let User = auth.auth;

    return (
        <header>
           <div className="nav-belt flex">
               <Wrapper>
                    <div className="start-section flex">
                        {/* Hello, {User.fname} */}
                        <Link to="/" className="logo">
                            <Logo fill="#fff" height="50" width="50"/>
                        </Link>
                        <ul className="primary-menu flex">
                            <li>
                                <Link to="/product-page/1">
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link to="/product-page">
                                    Deals
                                </Link>
                            </li>
                            <li>
                                <Link to="/product-page">
                                    What's New
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Pickup &amp; Delivery
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Pickup &amp; Delivery
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="middle-section flex">
                        <form className="search-form flex">
                            <input type="text" name=""/>
                            <button className="pointer">
                                {/* <Icon name="search" size={30} color="#000" /> */}
                                <SearchIcon />
                            </button>
                        </form>
                    </div>
                    <div className="end-section flex">
                        <ul className="listing flex">
                            <li>
                                <Link to="/sign-in">Sign in</Link>
                            </li>
                            <li className="cart-icon flex">
                                <Link to="/shopping-cart" className="flex relative">
                                    {/* <Icon name="shopping-cart" size={30} color="#fff" /> */}
                                    <ShoppingCart />
                                    <div className="counter absolute flex">1</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
               </Wrapper>
            </div> 
            <div className="nav-main flex">
                <Wrapper>
                    <Row>
                        <Column>
                            <div className="address-section">
                                <div>Hello</div>
                            </div>
                        </Column>
                        <Column>
                            <div className="etc-links flex align-right">
                                <ul className="etc-menu flex">
                                    <li>
                                        <Link to="/register">
                                            Register Gift
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Column>
                    </Row>
                </Wrapper>
            </div>
        </header>
    )
}
