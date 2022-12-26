import React from 'react';
import {IconLinkProps} from "./icon-link.types";

export const IconLink: React.FC<IconLinkProps> = (props) => {
    const baseClasses = [''];

    return (
        <a target={props.target} href={props.href} className={baseClasses.join(' ')} aria-label={props.label}>
            <span>
                {props.children}
            </span>
            <span>
                {props.label}
            </span>
        </a>
    );
}
