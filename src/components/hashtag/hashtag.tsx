import React from 'react';
import { HashtagProps } from './hashtag.types';

export const Hashtag: React.FC<HashtagProps> = (props) => {
  const baseClasses = ['paragraph-l text-violet-600 hover:text-violet-500 transition'];

  return (
    <button onClick={props.onClick} title={props.label} className={baseClasses.join(' ')}>
      #{props.label}
    </button>
  );
};
