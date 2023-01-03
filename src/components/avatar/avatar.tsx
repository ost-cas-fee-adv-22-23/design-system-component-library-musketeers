import React from 'react';
import { AvatarProps, AvatarSize } from './avatar.types';

export const Avatar: React.FC<AvatarProps> = ({ size, showBorder, src, alt }) => {
  const baseClasses = ['inline-block rounded-full bg-violet-200'];

  if (size === AvatarSize.S) {
    baseClasses.push('w-[40px] h-[40px]');
  }

  if (size === AvatarSize.M) {
    baseClasses.push('w-[64px] h-[64px]');
  }

  if (size === AvatarSize.L) {
    baseClasses.push('w-[96px] h-[96px]');
  }

  if (size === AvatarSize.XL) {
    baseClasses.push('w-[160px] h-[160px]');
  }

  if (showBorder) {
    baseClasses.push('border-6 border-slate-100');
  }

  return <img className={baseClasses.join(' ')} src={src} alt={alt} />;
};
