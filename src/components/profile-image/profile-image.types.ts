import { MouseEvent } from 'react';

export type ProfileImageProps = {
  src: string;
  alt: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
