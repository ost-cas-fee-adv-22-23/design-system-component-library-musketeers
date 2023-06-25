import React from 'react';
import { IconLinkProps, IconLinkType } from './icon-link.types';

export const IconLink: React.FC<IconLinkProps> = ({ elementType: Component = 'a', ...props }) => {
  const baseClasses = ['flex items-center h-fit text-14 font-semibold'];

  if (props.href || props.onClick) {
    baseClasses.push('cursor-pointer transition');
  }

  if ((props.href || props.onClick) && props.type === IconLinkType.DEFAULT) {
    baseClasses.push('hover:text-slate-600');
  }

  if ((props.href || props.onClick) && props.type === IconLinkType.VIOLET) {
    baseClasses.push('hover:text-violet-900');
  }

  if (props.type === IconLinkType.DEFAULT) {
    baseClasses.push('text-slate-400');
  }

  if (props.type === IconLinkType.VIOLET) {
    baseClasses.push('text-violet-600');
  }

  return (
    <Component
      onClick={props.onClick}
      target={props.target}
      href={props.href}
      className={baseClasses.join(' ')}
      aria-label={props.label}
      data-testid={props.testid}
    >
      <span>{props.children}</span>
      <span className={'pl-xxs'}>{props.label}</span>
    </Component>
  );
};
