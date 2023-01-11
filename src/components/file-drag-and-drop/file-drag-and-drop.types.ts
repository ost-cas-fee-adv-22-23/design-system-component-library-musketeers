export type FileDragAndDropProps = {
  title: string;
  restrictions: string;
  onAddFile: (file: File) => void;
  maximumFileSize?: number;
  validFileExtensions?: Array<string>;
};
