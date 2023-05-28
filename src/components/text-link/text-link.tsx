import React from 'react';
import { TextLinkProps } from './text-link.types';

export const TextLink: React.FC<TextLinkProps> = ({ elementType: Component = 'a', ...props }) => {
  const baseClasses =
    'text-violet-600 border-b-2 border-violet-600 hover:border-violet-200 h-fit text-14 font-semibold cursor-pointer';

  return (
    <Component target={props.target} href={props.href} className={baseClasses} aria-label={props.label} data-e2e={props.e2e}>
      {props.label}
    </Component>
  );
};
