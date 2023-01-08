import { ReactNode, MouseEvent } from 'react';

export enum InteractionType {
  DEFAULT = 'default',
  VIOLET = 'violet',
  PINK = 'pink',
}

export type InteractionProps = {
  type?: InteractionType;
  active?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
};
