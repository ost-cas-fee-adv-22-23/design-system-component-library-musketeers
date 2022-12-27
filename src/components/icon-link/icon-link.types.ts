import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

export enum IconLinkType {
  DEFAULT = 'default',
  VIOLET = 'violet',
}

export type IconLinkProps = {
  type?: IconLinkType;
  label?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  children?: ReactNode;
};
