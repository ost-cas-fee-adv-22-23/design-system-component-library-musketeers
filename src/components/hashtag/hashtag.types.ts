import { MouseEvent } from 'react';

export type HashtagProps = {
  label?: string;
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
};
