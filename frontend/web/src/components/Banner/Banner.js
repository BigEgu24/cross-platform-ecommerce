import React from 'react';
import "./Banner.scss";

export default function Banner(props) {
    return (
        <div className={props.homepage ? "banner homepage" : "banner"}>
            {props.children}
        </div>
    )
}
