import React, {useEffect, useReducer} from 'react'
import { useAppContext } from '@wow/shared/Context/app-context';
import {Text} from "react-native";
import { Link } from '@wow/shared/Router/index';
import "./Navbar.scss";
import Wrapper from '../Wrapper/Wrapper';
import Logo from '@wow/shared/Logo/Logo';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
                    </div>
                    <div className="middle-section flex">
                        <form className="search-form flex">
                            <input type="text" name=""/>
                            <button>
                                <Icon name="search" size={30} color="#000" />
                            </button>
                        </form>
                    </div>
                    <div className="end-section flex">
                        <ul className="listing flex">
                            <li>
                                <Link to="/sign-in">Sign in</Link>
                            </li>
                            <li className="cart-icon relative flex">
                                <Link to="/shopping-cart" className="flex">
                                    <Icon name="shopping-cart" size={30} color="#fff" />
                                    <div className="counter absolute flex">1</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
               </Wrapper>
            </div> 
            <div className="nav-main flex">
                <Wrapper>
                    <Link to="/hello">Sign in</Link>
                </Wrapper>
            </div>
        </header>
    )
}
