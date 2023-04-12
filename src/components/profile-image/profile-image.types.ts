import { MouseEvent } from 'react';
import { AvatarSize } from '../avatar/avatar.types';

export type ProfileImageProps = {
  src: string;
  alt: string;
  size?: AvatarSize;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
