import {ReactNode} from "react";

export enum CardSize {
    S = 'S',
    XL = 'XL'
}

export type CardProps = {
    size: CardSize,
    hasRoundBorders?: boolean,
    children?: ReactNode
};
