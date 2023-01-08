import { ReactNode, MouseEvent } from 'react';

export type TweetProps = {
  avatar: ReactNode;
  displayName: string;
  userName: string;
  timestamp: string;
  children?: ReactNode;
  footer?: ReactNode;
  onClickUserName: (e: MouseEvent<HTMLAnchorElement>) => void;
  onClickTimestamp: (e: MouseEvent<HTMLAnchorElement>) => void;
};
