import React from 'react';
import "./Header.scss";
import Wrapper from "../Wrapper/Wrapper";
import { useAppContext } from '@app/shared/dist/Context/app-context';
const Link = require("react-router-dom").Link;

export default function Header() {
    const { values, functions } = useAppContext();
    const { number } = values;
    return (
        <>
            <header className="flex items-center">
                <Wrapper
                flex
                spaceBetween
                >
                    <div className="logo">
                        <Link to="/">Eddie.js</Link>
                    </div>
                    <ul className="nav flex">
                        <li><Link to="/about">About</Link></li>
                        <li><Link target="__blank" to="/resume.pdf">Resume</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </Wrapper>
            </header>
        </>
    )
}
