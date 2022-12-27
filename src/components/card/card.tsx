import React from 'react';
import { CardProps, CardSize } from './card.types';

export const Card: React.FC<CardProps> = (props) => {
  const baseClasses = ['bg-white border-2 border-slate-200'];

  if (props.size === CardSize.XL) {
    baseClasses.push('py-l px-xl');
  }

  if (props.size === CardSize.S) {
    baseClasses.push('p-s');
  }

  if (props.hasRoundBorders) {
    baseClasses.push('rounded-16');
  }

  if (props.hasTopRoundBorders) {
    baseClasses.push('rounded-t-16');
  }

  return <div className={baseClasses.join(' ')}>{props.children}</div>;
};
