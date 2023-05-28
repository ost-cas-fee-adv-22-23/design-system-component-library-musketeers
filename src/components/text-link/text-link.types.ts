import { HTMLAttributeAnchorTarget } from 'react';

export type TextLinkProps = {
  label?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  elementType?: React.ElementType;
  e2e?: string;
};
