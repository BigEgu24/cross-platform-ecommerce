import React from 'react';
import "./Wrapper.scss";

export default function Wrapper(props) {
    return (
        <div className={props.flex ? `wrapper-md margin-auto flex ${props.spaceBetween ? "space-between" : null}` : "wrapper-md margin-auto"}>
            {props.children}
        </div>
    )
}
