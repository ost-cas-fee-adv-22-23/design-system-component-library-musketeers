import React from 'react';
import { AvatarProps, AvatarSize } from './avatar.types';

export const Avatar: React.FC<AvatarProps> = ({
  elementType: Component = 'a',
  imageElementType: ImageComponent = 'img',
  ...props
}) => {
  const imageClasses = ['inline-block rounded-full bg-violet-200 hover:scale-125 group-hover:scale-125 duration-300'];
  const wrapperClasses = ['inline-block rounded-full overflow-hidden'];

  if (props.size === AvatarSize.S) {
    imageClasses.push('w-[40px] h-[40px]');
  }

  if (props.size === AvatarSize.M) {
    imageClasses.push('w-[64px] h-[64px]');
  }

  if (props.size === AvatarSize.L) {
    imageClasses.push('w-[96px] h-[96px]');
  }

  if (props.size === AvatarSize.XL) {
    imageClasses.push('w-[160px] h-[160px]');
  }

  if (props.showBorder) {
    wrapperClasses.push('outline outline-6 outline-slate-100');
  }

  if (props.href) {
    return (
      <Component href={props.href}>
        <span className={wrapperClasses.join(' ')}>
          <ImageComponent className={imageClasses.join(' ')} src={props.src} alt={props.alt} />
        </span>
      </Component>
    );
  }

  return (
    <span className={wrapperClasses.join(' ')}>
      <ImageComponent className={imageClasses.join(' ')} src={props.src} alt={props.alt} />
    </span>
  );
};
