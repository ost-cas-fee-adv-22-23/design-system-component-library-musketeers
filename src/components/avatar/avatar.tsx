import React from 'react';
import { AvatarProps, AvatarSize } from './avatar.types';

export const Avatar: React.FC<AvatarProps> = ({ size, showBorder, src, alt }) => {
  const imageClasses = ['inline-block rounded-full bg-violet-200 hover:scale-125 group-hover:scale-125 duration-300'];
  const wrapperClasses = ['inline-block rounded-full overflow-hidden'];

  if (size === AvatarSize.S) {
    imageClasses.push('w-[40px] h-[40px]');
  }

  if (size === AvatarSize.M) {
    imageClasses.push('w-[64px] h-[64px]');
  }

  if (size === AvatarSize.L) {
    imageClasses.push('w-[96px] h-[96px]');
  }

  if (size === AvatarSize.XL) {
    imageClasses.push('w-[160px] h-[160px]');
  }

  if (showBorder) {
    wrapperClasses.push('outline outline-6 outline-slate-100');
  }

  return (
    <span className={wrapperClasses.join(' ')}>
      <img className={imageClasses.join(' ')} src={src} alt={alt} />
    </span>
  );
};
