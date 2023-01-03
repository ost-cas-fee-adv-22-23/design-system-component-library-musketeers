import React from 'react';
import { ContainerProps } from './container.types';

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container px-s lg:px-0 lg:max-w-[680px]">{children}</div>;
};
