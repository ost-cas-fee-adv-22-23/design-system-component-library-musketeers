import React from 'react';
import { ButtonProps, ButtonSize, ButtonType } from './button.types';

export const Button: React.FC<ButtonProps> = ({ showBorder = true, ...props }) => {
  const baseClasses = ['flex items-center h-fit text-white rounded-default transition'];
  const iconClasses = [
    'text-white rounded-38 bg-slate-600 hover:bg-slate-700 hover:border-slate-100 focus:border-slate-200 transition',
  ];

  if (props.type === ButtonType.DEFAULT) {
    baseClasses.push('bg-slate-600 hover:bg-slate-700 hover:border-slate-100 focus:border-slate-200');
  }

  if (props.type === ButtonType.VIOLET) {
    baseClasses.push('bg-violet-600 hover:bg-violet-700 hover:border-violet-100 focus:border-violet-200');
  }

  if (props.type === ButtonType.GRADIENT) {
    baseClasses.push('bg-gradient-to-r from-pink-500 to-violet-600 hover:border-violet-100 focus:border-violet-200');
  }

  if (props.type === ButtonType.GREY) {
    baseClasses.push('bg-slate-300 hover:bg-slate-300 text-slate-500 hover:border-slate-100 focus:border-slate-200');
  }

  if (props.size === ButtonSize.S) {
    baseClasses.push('px-xs py-xxs');
    iconClasses.push('p-s');
  }

  if (props.size === ButtonSize.M) {
    baseClasses.push('px-s py-xs');
    iconClasses.push('p-m');
  }

  if (props.size === ButtonSize.L) {
    baseClasses.push('px-m py-s');
    iconClasses.push('p-m');
  }

  if (showBorder) {
    baseClasses.push('border-4 border-white');
  }

  return (
    <button
      onClick={props.onClick}
      aria-label={props.label}
      className={props.isIconOnly ? iconClasses.join(' ') : baseClasses.join(' ')}
    >
      <span hidden={props.isIconOnly}>{props.label}</span>
      <span className={props.isIconOnly ? '' : 'pl-xs'}>{props.children}</span>
    </button>
  );
};
