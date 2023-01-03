import React from 'react';
import { StorybookMeta } from '../components.config';
import { Navigation } from './navigation';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: `${StorybookMeta.COMPONENTS}/Navigation`,
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const withSingleNavigation: ComponentStory<typeof Navigation> = (args) => {
  return (
    <div className="bg-slate-400">
      <Navigation {...args}></Navigation>
    </div>
  );
};

export const WithSingleNavigation: ComponentStory<typeof Navigation> = withSingleNavigation.bind({});
