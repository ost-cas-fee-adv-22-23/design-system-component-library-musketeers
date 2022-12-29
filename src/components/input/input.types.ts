import { ChangeEvent, ReactNode } from 'react';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
}

export type InputProps = {
  type: InputType;
  label?: string;
  value: string;
  placeholder?: string;
  children?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
