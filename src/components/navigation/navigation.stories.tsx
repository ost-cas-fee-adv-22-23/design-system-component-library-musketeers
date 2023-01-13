import React from 'react';
import { StorybookMeta } from '../components.config';
import { Navigation } from './navigation';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: `${StorybookMeta.COMPONENTS}/Navigation`,
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => {
  return (
    <div className="bg-slate-400">
      <Navigation {...args}></Navigation>
    </div>
  );
};

export const NavigationComponent: ComponentStory<typeof Navigation> = Template.bind({});
