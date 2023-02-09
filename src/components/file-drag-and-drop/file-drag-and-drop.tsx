import React, { useState } from 'react';
import Upload from '../icons/Upload';
import Checkmark from '../icons/Checkmark';
import { FileDragAndDropProps, FileInputState } from './file-drag-and-drop.types';

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

  const baseClasses = ['border-2 border-dotted border-slate-200 rounded-16 mb-4 p-xxl'];
  const fieldClasses = ['flex flex-col justify-center items-center truncate'];
  const headingClasses = 'heading-4 text-slate-500 mb-xs';
  const paragraphClasses = 'paragraph-m text-slate-400';
  const errorClasses = 'text-right text-red text-12';

  if (fileInputState.isOverDragArea) {
    baseClasses.push('bg-slate-300');
  } else {
    baseClasses.push('bg-slate-100');
  }

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragEnter}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={baseClasses.join(' ')}
      >
        {!fileInputState.isFileSelected ? (
          <div className={fieldClasses.join(' ')}>
            <span className="mb-xs">
              <Upload color="text-slate-500" width={30} height={30} />
            </span>
            <h4 className={headingClasses}>{props.title}</h4>
            <p className={paragraphClasses}>{props.restrictions}</p>
          </div>
        ) : (
          <div className={fieldClasses.join(' ')}>
            <Checkmark color="text-slate-500" width={30} height={30} />
            <p className={paragraphClasses}>{`${fileInputState.fileName} wurde hinzugefügt`}</p>
          </div>
        )}
      </div>
      <div className={errorClasses}>{fileInputState.errorMessage}</div>
    </div>
  );
};
