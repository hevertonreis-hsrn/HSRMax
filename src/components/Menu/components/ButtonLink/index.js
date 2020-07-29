import React from 'react';

export default function ButtonLink(props) {
    console.log(props)
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    )
}