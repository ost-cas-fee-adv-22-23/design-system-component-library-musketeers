import React from 'react';
import { StorybookMeta } from '../components.config';
import { Header } from './header';
import { HeaderProps } from './header.types';

import { Navigation } from '../navigation/navigation';

export default {
  title: `${StorybookMeta.COMPONENTS}/Header`,
  component: Header,
};

const withSingleHeader = (args: HeaderProps) => {
  return <Header {...args}></Header>;
};

export const WithSingleHeader: { (args: HeaderProps): JSX.Element; args?: HeaderProps } = withSingleHeader.bind({});

const withNavigationComponent = (args: HeaderProps) => {
  return (
    <Header {...args}>
      <Navigation />
    </Header>
  );
};

export const WithNavigationComponent: { (args: HeaderProps): JSX.Element; args?: HeaderProps } =
  withNavigationComponent.bind({});
