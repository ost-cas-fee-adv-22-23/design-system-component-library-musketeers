import React from 'react';
import { StorybookMeta } from '../components.config';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './header';

import { Navigation } from '../navigation/navigation';

export default {
  title: `${StorybookMeta.COMPONENTS}/Header`,
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args}></Header>;
};

export const HeaderComponent: ComponentStory<typeof Header> = Template.bind({});

export const HeaderWithNavigation: ComponentStory<typeof Header> = (args) => {
  return (
    <Header {...args}>
      <Navigation />
    </Header>
  );
};
