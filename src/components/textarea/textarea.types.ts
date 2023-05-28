import { ChangeEvent } from 'react';

export type TextareaProps = {
  label?: string;
  value: string;
  placeholder?: string;
  rows?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  hasError?: boolean;
  errorMessage?: string;
  e2e?: string;
};
