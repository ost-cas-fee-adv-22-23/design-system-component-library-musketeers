export enum AvatarSize {
  S = 's',
  M = 'm',
  L = 'l',
  XL = 'xl',
}

export type AvatarProps = {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  showBorder?: boolean;
  elementType?: React.ElementType;
  imageElementType?: React.ElementType;
  imageComponentProps?: { [key: string]: string };
  href?: string;
};
