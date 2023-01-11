import React, { useState } from 'react';
import Upload from '../icons/Upload';
import Checkmark from '../icons/Checkmark';
import { FileDragAndDropProps } from './file-drag-and-drop.types';

interface FileInputState {
  fileName: string;
  isFileSelected: boolean;
  isOverDragArea: boolean;
  errorMessage: string;
}

export const FileDragAndDrop: React.FC<FileDragAndDropProps> = ({
  maximumFileSize = 5000000,
  validFileExtensions = ['jpg', 'png'],
  ...props
}) => {
  const defaultFileInputState: FileInputState = {
    fileName: '',
    isFileSelected: false,
    isOverDragArea: false,
    errorMessage: '',
  };

  const [fileInputState, setFileInputState] = useState(defaultFileInputState);

  const preventBrowserDefaults = (event: React.DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent): void => {
    preventBrowserDefaults(event);
    const files = event.dataTransfer.files;
    const file = files[0];
    const fileName = file.name;
    const fileSize = file.size;
    const fileExtension = fileName?.split('.').pop() || '';

    if (files.length > 1) {
      setFileInputState((state: FileInputState) => ({
        ...state,
        errorMessage: 'Too many files.',
        isOverDragArea: false,
      }));
    } else if (fileSize && fileSize >= maximumFileSize) {
      setFileInputState((state: FileInputState) => ({
        ...state,
        errorMessage: 'The file is bigger than the maximum allowed size.',
        isOverDragArea: false,
      }));
    } else if (fileExtension && !validFileExtensions.includes(fileExtension)) {
      setFileInputState((state: FileInputState) => ({
        ...state,
        errorMessage: 'File extension ist not allowed.',
        isOverDragArea: false,
      }));
    } else {
      setFileInputState((state: FileInputState) => ({
        ...state,
        errorMessage: '',
        isFileSelected: true,
        fileName,
        isOverDragArea: false,
      }));
      props.onAddFile(file);
    }
  };

  const handleDragEnter = (event: React.DragEvent): void => {
    preventBrowserDefaults(event);
    setFileInputState((state: FileInputState) => ({
      ...state,
      isOverDragArea: true,
    }));
  };

  const handleDragLeave = (event: React.DragEvent): void => {
    preventBrowserDefaults(event);
    setFileInputState((state: FileInputState) => ({
      ...state,
      isOverDragArea: false,
    }));
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragEnter}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dotted border-slate-200 rounded-16 mb-4 p-xxl ${
          fileInputState.isOverDragArea ? 'bg-slate-300' : 'bg-slate-100'
        }`}
      >
        {!fileInputState.isFileSelected ? (
          <div className="flex flex-col items-center">
            <div className="mb-xs">
              <Upload color="text-slate-500" width={30} height={30} />
            </div>
            <h4 className="label-xl text-slate-500 mb-xs">{props.title}</h4>
            <p className="paragraph-m text-slate-400">{props.restrictions}</p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center truncate">
            <div className="rounded-lg bg-slate-300 pt-4 px-2 pb-2 mb-2">
              <Checkmark color="text-slate-600" width={30} height={30} />
            </div>
            <p className="text-slate-600 text-center">{`${fileInputState.fileName} wurde hinzugefügt`}</p>
          </div>
        )}
      </div>
      <div className="text-right text-red text-12">{fileInputState.errorMessage}</div>
    </div>
  );
};
