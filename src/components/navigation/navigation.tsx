import React from 'react';
import { NavigationProps } from './navigation.types';

export const Navigation: React.FC<NavigationProps> = (props) => {
  const navigationBaseClasses = 'flex items-center gap-m';

  return <ul className={navigationBaseClasses}>{props.children}</ul>;
};
