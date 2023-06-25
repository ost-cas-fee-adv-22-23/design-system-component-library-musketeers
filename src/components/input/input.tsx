import React, { useId } from 'react';
import { InputType, InputProps } from './input.types';
import Cancel from '../../components/icons/Cancel';

export const Input: React.FC<InputProps> = ({ type = InputType.TEXT, ...props }) => {
  const id = useId();

  const labelBaseClasses = `label-m`;

  const inputBaseClasses = [
    'w-full',
    'rounded-default',
    'bg-slate-50',
    'p-s',
    'leading-none',
    'text-16',
    'font-medium',
    'h-xl',
    'placeholder:placeholder',
    'outline-transparent',
    'hover:border-violet-600',
    'focus:outline-violet-600',
  ];
  if (props.children) {
    inputBaseClasses.push('pr-xl');
  }
  if (props.hasError) {
    inputBaseClasses.push('border-2 border-red');
  } else {
    inputBaseClasses.push('border border-slate-200');
  }

  const errorMessageClasses = ['font-sans font-medium leading-normal text-red text-12 text-right py-xxs'];

  const iconBaseClasses = [
    'block',
    'absolute',
    'right-s',
    'top-1/2',
    'transform',
    '-translate-y-1/2',
    'pointer-events-none',
    'text-slate-600',
  ];

  return (
    <div>
      <label className={labelBaseClasses} htmlFor={id}>
        {props.label}
      </label>
      <div className="relative">
        <input
          id={id}
          value={props.value}
          onChange={props.onChange}
          type={type}
          placeholder={props.placeholder}
          className={inputBaseClasses.join(' ')}
          data-testid={props.testid}
        />
        {(props.children || props.hasError) && (
          <span className={iconBaseClasses.join(' ')}>{props.hasError ? <Cancel color="text-red" /> : props.children}</span>
        )}
      </div>
      {props.hasError && props.errorMessage ? <div className={errorMessageClasses.join(' ')}>{props.errorMessage}</div> : ''}
    </div>
  );
};
