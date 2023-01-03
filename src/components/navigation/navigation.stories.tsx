import React from 'react';
import { StorybookMeta } from '../components.config';
import { Navigation } from './navigation';
import { NavigationProps } from './navigation.types';

export default {
  title: `${StorybookMeta.COMPONENTS}/Navigation`,
  component: Navigation,
};

const withSingleNavigation = (args: NavigationProps) => {
  return (
    <div className="bg-slate-400">
      <Navigation {...args}></Navigation>
    </div>
  );
};

export const WithSingleNavigation: { (args: NavigationProps): JSX.Element; args?: NavigationProps } =
  withSingleNavigation.bind({});
