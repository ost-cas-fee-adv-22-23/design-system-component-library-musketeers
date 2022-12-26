import React from 'react';
import {ButtonProps, ButtonSize, ButtonType} from "./button.types";

export const Button: React.FC<ButtonProps> = (props) => {
    const baseClasses = ['flex items-center text-white rounded-default border-4 border-white'];
    const iconClasses = 'border-4 border-white text-white rounded-38 p-m bg-slate-600 hover:bg-slate-700 hover:border-slate-100 focus:border-slate-200';

    if (props.type === ButtonType.DEFAULT) {
        baseClasses.push('bg-slate-600 hover:bg-slate-700 hover:border-slate-100 focus:border-slate-200');
    }

    if (props.type === ButtonType.VIOLET) {
        baseClasses.push('bg-violet-600 hover:bg-violet-700 hover:border-violet-100 focus:border-violet-200');
    }

    if (props.type === ButtonType.GRADIENT) {
        baseClasses.push('bg-gradient-to-r from-pink-500 to-violet-600 hover:border-violet-100 focus:border-violet-200');
    }


    if (props.size === ButtonSize.M) {
        baseClasses.push('p-s');
    }
    if (props.size === ButtonSize.L) {
        baseClasses.push('py-m px-s');
    }

    return (
        <button aria-label={props.label} className={props.isIconOnly ? iconClasses : baseClasses.join(' ')}>
            <span hidden={props.isIconOnly}>
                {props.label}
            </span>
            <span className={props.isIconOnly ? '' : 'pl-xs'}>
                {props.children}
            </span>
        </button>
    );
}
