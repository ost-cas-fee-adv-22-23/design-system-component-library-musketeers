import React from 'react';
import { StorybookMeta } from '../components.config';
import { NavigationItem } from './navigation-item';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Mumble from '../../components/icons/Mumble';

export default {
  title: `${StorybookMeta.COMPONENTS}/NavigationItem`,
  component: NavigationItem,
} as ComponentMeta<typeof NavigationItem>;

const withSingleNavigationItem: ComponentStory<typeof NavigationItem> = (args) => {
  return (
    <div className="bg-slate-400">
      <NavigationItem {...args}>
        <Mumble />
      </NavigationItem>
    </div>
  );
};

export const WithSingleNavigationItem: ComponentStory<typeof NavigationItem> = withSingleNavigationItem.bind({});
WithSingleNavigationItem.args = {
  label: 'Item',
};
