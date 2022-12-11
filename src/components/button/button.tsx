import React from 'react';
import {ButtonProps, ButtonSize, ButtonType} from "./button.types";

export const Button: React.FC<ButtonProps> = (props) => {
    const classes = [];
    if(props.type === ButtonType.DEFAULT) classes.push('bg-slate-600');
    if(props.size === ButtonSize.M) classes.push('p-s');
    if(props.size === ButtonSize.L) classes.push('p-m');

    return (
        <button className={'bg-slate-500 text-48 text-blue-500'}>
            {props.label}
        </button>
    );
}
