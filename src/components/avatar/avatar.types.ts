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
};
