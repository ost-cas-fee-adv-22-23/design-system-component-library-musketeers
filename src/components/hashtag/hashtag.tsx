import React, { MouseEvent } from 'react';
import { HashtagProps } from './hashtag.types';

export const Hashtag: React.FC<HashtagProps> = (props) => {
  const baseClasses = ['paragraph-l text-violet-600 hover:text-violet-500 transition'];
  const onClickHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    props.onClick(event);
  };

  return (
    <a href="" onClick={onClickHandler} title={props.label} className={baseClasses.join(' ')}>
      #{props.label}
    </a>
  );
};
