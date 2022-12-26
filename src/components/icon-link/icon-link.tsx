import React from 'react';
import {IconLinkProps} from "./icon-link.types";

export const IconLink: React.FC<IconLinkProps> = (props) => {
    const baseClasses = [''];

    return (
        <button aria-label={props.label} className={baseClasses.join(' ')}>
            <span>
                {props.children}
            </span>
            <span>
                {props.label}
            </span>
        </button>
    );
}
