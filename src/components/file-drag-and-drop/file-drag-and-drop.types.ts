export type FileDragAndDropProps = {
  title: string;
  restrictions: string;
  onAddFile: (file: File) => void;
  maximumFileSize?: number;
  validFileExtensions?: Array<string>;
};

export interface FileInputState {
  fileName: string;
  isFileSelected: boolean;
  isOverDragArea: boolean;
  errorMessage: string;
}
