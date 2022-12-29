import React, { useId } from 'react';
import { TextareaProps } from './textarea.types';

export const Textarea: React.FC<TextareaProps> = ({ label, value, onChange, placeholder, rows = 8 }) => {
  const id = useId();

  const labelBaseClasses = `label-m`;

  const textareaBaseClasses = [
    'w-full',
    'rounded-default',
    'bg-slate-50',
    'border',
    'border-slate-200',
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

  return (
    <div>
      <label className={labelBaseClasses} htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={textareaBaseClasses.join(' ')}
        rows={rows}
      />
    </div>
  );
};
