import React from 'react';
import {ButtonProps, ButtonSize, ButtonType} from "./button.types";

export const Button: React.FC<ButtonProps> = (props) => {
    const base = ['flex items-center text-white rounded-default border-4 border-white'];
    const icon = 'border-4 border-white text-white rounded-38 p-m bg-slate-600 hover:bg-slate-700 hover:border-slate-100 focus:border-slate-200';

    if(props.type === ButtonType.DEFAULT) base.push('bg-slate-600 hover:bg-slate-700 hover:border-slate-100 focus:border-slate-200');
    if(props.type === ButtonType.VIOLET) base.push('bg-violet-600 hover:bg-violet-700 hover:border-violet-100 focus:border-violet-200');
    if(props.type === ButtonType.GRADIENT) base.push('bg-gradient-to-r from-pink-500 to-violet-600 hover:border-violet-100 focus:border-violet-200');

    if(props.size === ButtonSize.M) base.push('p-s');
    if(props.size === ButtonSize.L) base.push('py-m px-s');

    return (
        <button className={props.onlyIcon ? icon : base.join(' ')}>
            <span hidden={props.onlyIcon}>
                {props.label}
            </span>
            <span className={props.onlyIcon ? '' : 'pl-xs'}>
                {props.children}
            </span>
        </button>
    );
}
