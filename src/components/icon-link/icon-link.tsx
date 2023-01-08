import React from 'react';
import { IconLinkProps, IconLinkType } from './icon-link.types';

export const IconLink: React.FC<IconLinkProps> = (props) => {
  const baseClasses = ['flex items-center h-fit text-14 font-semibold cursor-pointer transition'];

  if (props.type === IconLinkType.DEFAULT) {
    baseClasses.push('text-slate-400 hover:text-slate-600');
  }

  if (props.type === IconLinkType.VIOLET) {
    baseClasses.push('text-violet-600 hover:text-violet-900');
  }

  return (
    <a
      onClick={props.onClick}
      target={props.target}
      href={props.href}
      className={baseClasses.join(' ')}
      aria-label={props.label}
    >
      <span>{props.children}</span>
      <span className={'pl-xxs'}>{props.label}</span>
    </a>
  );
};
