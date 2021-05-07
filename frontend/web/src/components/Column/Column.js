import React from 'react';

export default function Column(props) {
    return (
        <div className="flex column">
            {props.children}
        </div>
    )
}
