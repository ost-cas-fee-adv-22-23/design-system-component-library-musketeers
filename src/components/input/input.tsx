import React, { useId } from 'react';
import { InputType, InputProps } from './input.types';

export const Input: React.FC<InputProps> = ({ label, type = InputType.TEXT, value, onChange, placeholder, children }) => {
  const id = useId();

  const labelBaseClasses = `label-m`;

  const inputBaseClasses = [
    'w-full',
    'rounded-default',
    'border',
    'border-slate-200',
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
  if (children) {
    inputBaseClasses.push('pr-xl');
  }

  const iconBaseClasses = `block absolute right-s top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-600`;

  return (
    <div>
      <label className={labelBaseClasses} htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={inputBaseClasses.join(' ')}
        />
        {children && <span className={iconBaseClasses}>{children}</span>}
      </div>
    </div>
  );
};
