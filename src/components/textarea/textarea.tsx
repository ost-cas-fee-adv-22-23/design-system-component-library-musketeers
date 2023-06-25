import React, { useId } from 'react';
import { TextareaProps } from './textarea.types';

export const Textarea: React.FC<TextareaProps> = ({ rows = 8, ...props }) => {
  const id = useId();

  const labelBaseClasses = `label-m`;

  const textareaBaseClasses = [
    'w-full',
    'rounded-default',
    'bg-slate-50',
    'p-s',
    'leading-normal',
    'text-16',
    'font-medium',
    'h-xl',
    'placeholder:placeholder',
    'outline-transparent',
    'hover:border-violet-600',
    'focus:outline-violet-600',
    'resize-none',
    'h-auto',
  ];

  if (props.hasError) {
    textareaBaseClasses.push('border-2 border-red');
  } else {
    textareaBaseClasses.push('border border-slate-200');
  }

  const errorMessageClasses = ['font-sans font-medium leading-normal text-red text-12 text-right'];

  return (
    <div>
      <label className={labelBaseClasses} htmlFor={id}>
        {props.label}
      </label>
      <textarea
        id={id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={textareaBaseClasses.join(' ')}
        rows={rows}
        data-testid={props.testid}
      />
      {props.hasError && props.errorMessage ? <div className={errorMessageClasses.join(' ')}>{props.errorMessage}</div> : ''}
    </div>
  );
};
