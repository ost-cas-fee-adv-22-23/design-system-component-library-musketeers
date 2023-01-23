import React from 'react';
import { StorybookMeta } from '../components.config';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Hashtag } from './hashtag';

export default {
  title: `${StorybookMeta.COMPONENTS}/Hashtag`,
  component: Hashtag,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
  parameters: {
    componentSubtitle: `Displays a Hashtag component.`,
  },
} as ComponentMeta<typeof Hashtag>;

const Template: ComponentStory<typeof Hashtag> = (args) => {
  return <Hashtag {...args}></Hashtag>;
};

export const HashtagComponent: ComponentStory<typeof Hashtag> = Template.bind({});
HashtagComponent.args = {
  label: 'hashtagLabel',
};
