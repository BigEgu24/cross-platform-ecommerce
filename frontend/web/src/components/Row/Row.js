import React from 'react';

export default function Row(props) {
    return (
        <div className="flex row">
            {props.children}
        </div>
    )
}
