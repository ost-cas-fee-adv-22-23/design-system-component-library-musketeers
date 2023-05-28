import { MouseEvent } from 'react';

export enum HashtagSize {
  M = 'm',
  L = 'l',
}

export type HashtagProps = {
  label?: string;
  size?: HashtagSize;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  e2e?: string;
};
