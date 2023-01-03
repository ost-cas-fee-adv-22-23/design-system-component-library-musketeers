import React from 'react';
import { StorybookMeta } from '../components.config';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './header';

import { Navigation } from '../navigation/navigation';

export default {
  title: `${StorybookMeta.COMPONENTS}/Header`,
  component: Header,
} as ComponentMeta<typeof Header>;

const withSingleHeader: ComponentStory<typeof Header> = (args) => {
  return <Header {...args}></Header>;
};

export const WithSingleHeader: ComponentStory<typeof Header> = withSingleHeader.bind({});

const withNavigationComponent: ComponentStory<typeof Header> = (args) => {
  return (
    <Header {...args}>
      <Navigation />
    </Header>
  );
};

export const WithNavigationComponent: ComponentStory<typeof Header> = withNavigationComponent.bind({});
