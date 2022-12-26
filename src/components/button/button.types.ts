import {ReactNode} from "react";

export enum ButtonType {
    DEFAULT = 'default',
    VIOLET = 'violet',
    GRADIENT = 'gradient'
}

export enum ButtonSize {
    M = 'm',
    L = 'l'
}

export type ButtonProps = {
    type?: ButtonType;
    size?: ButtonSize;
    label?: string;
    children?: ReactNode;
    isIconOnly?: boolean;
};
