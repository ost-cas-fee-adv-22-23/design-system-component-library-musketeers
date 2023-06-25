import React from 'react';
import { HashtagProps, HashtagSize } from './hashtag.types';

export const Hashtag: React.FC<HashtagProps> = ({ size = HashtagSize.L, ...props }) => {
  const baseClasses = ['text-violet-600 hover:text-violet-500 transition break-all text-left'];

  if (size === HashtagSize.M) {
    baseClasses.push('paragraph-m');
  }

  if (size === HashtagSize.L) {
    baseClasses.push('paragraph-l');
  }

  return (
    <button onClick={props.onClick} title={props.label} className={baseClasses.join(' ')} data-testid={props.testid}>
      #{props.label}
    </button>
  );
};
