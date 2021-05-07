import React from 'react';
import "./Wrapper.scss";

export default function Wrapper(props) {
    return (
        <div className={`wrapper flex margin-auto`}>
            {props.children}
        </div>
    )
}
