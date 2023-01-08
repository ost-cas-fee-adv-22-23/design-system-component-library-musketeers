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
} as ComponentMeta<typeof Hashtag>;

const withSingleHashtag: ComponentStory<typeof Hashtag> = (args) => {
  return <Hashtag onClick={args.onClick} label={args.label}></Hashtag>;
};

export const WithSingleHashtag: ComponentStory<typeof Hashtag> = withSingleHashtag.bind({});
WithSingleHashtag.args = {
  label: 'hashtagLabel',
};
