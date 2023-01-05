import { ChangeEvent } from 'react';

export type FileUploadProps = {
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
