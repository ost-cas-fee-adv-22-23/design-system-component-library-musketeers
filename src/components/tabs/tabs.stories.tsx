import React, { useState } from 'react';
import { StorybookMeta } from '../components.config';
import { Tabs } from './tabs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TabsItem } from './tabs-item';

export default {
  title: `${StorybookMeta.COMPONENTS}/Tabs`,
  component: Tabs,
  parameters: {
    componentSubtitle: `Renders Tabs, the TabsItem component can be used and passed in via children.`,
  },
} as ComponentMeta<typeof Tabs>;

export const TabsComponent: ComponentStory<typeof Tabs> = () => {
  const [activeTab, setActiveTab] = useState('mumbles');

  return (
    <Tabs>
      <TabsItem onClick={() => setActiveTab('mumbles')} label={'Deine Mumbels'} active={activeTab === 'mumbles'}></TabsItem>
      <TabsItem onClick={() => setActiveTab('likes')} label={'Deine Likes'} active={activeTab === 'likes'}></TabsItem>
    </Tabs>
  );
};
