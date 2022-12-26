import {ReactNode} from "react";

export enum IconLinkType {
    DEFAULT = 'default',
    VIOLET = 'violet',
}

export type IconLinkProps = {
    type?: IconLinkType;
    label?: string;
    children?: ReactNode;
};
