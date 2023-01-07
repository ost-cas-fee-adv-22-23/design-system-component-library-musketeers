import { ReactNode } from 'react';

export type TweetProps = {
  avatar: ReactNode;
  displayName: string;
  userName: string;
  timestamp: string;
  children?: ReactNode;
  footer?: ReactNode;
};
