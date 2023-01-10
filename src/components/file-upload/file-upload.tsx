import React, { useId, useRef, MutableRefObject } from 'react';
import { FileUploadProps } from './file-upload.types';
import { Button } from '../button/button';
import { ButtonType, ButtonSize } from '../button/button.types';
import Upload from '../../components/icons/Upload';

export const FileUpload: React.FC<FileUploadProps> = (props) => {
  const id = useId();
  const fileInputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleUploadBtnClick = () => {
    fileInputRef.current.click();
  };

  return (
    <label htmlFor={id}>
      <Button type={ButtonType.GREY} size={ButtonSize.M} label={props.label} onClick={handleUploadBtnClick}>
        <Upload />
      </Button>
      <input type="file" ref={fileInputRef} id={id} className="hidden" onChange={props.onChange} />
    </label>
  );
};
