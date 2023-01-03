import React, { useState } from 'react';
import { StorybookMeta } from '../components.config';
import { Tabs } from './tabs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TabsItem } from './tabs-item';

export default {
  title: `${StorybookMeta.COMPONENTS}/Tabs`,
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const withSingleTabs = () => {
  return (
    <Tabs>
      <TabsItem label={'Deine Mumbels'} active={true}></TabsItem>
      <TabsItem label={'Deine Likes'} active={false}></TabsItem>
    </Tabs>
  );
};
export const WithSingleTabs: ComponentStory<typeof Tabs> = withSingleTabs.bind({});

export const TabsComponent: ComponentStory<typeof Tabs> = () => {
  const [activeTab, setActiveTab] = useState('mumbles');

  return (
    <Tabs>
      <TabsItem onClick={() => setActiveTab('mumbles')} label={'Deine Mumbels'} active={activeTab === 'mumbles'}></TabsItem>
      <TabsItem onClick={() => setActiveTab('likes')} label={'Deine Likes'} active={activeTab === 'likes'}></TabsItem>
    </Tabs>
  );
};

TabsComponent.storyName = 'With Active Tab Interaction';
