import React from 'react';
import { StorybookMeta } from '../components.config';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './avatar';
import { AvatarSize } from './avatar.types';

export default {
  title: `${StorybookMeta.COMPONENTS}/Avatar`,
  component: Avatar,
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
    size: {
      options: [AvatarSize.S, AvatarSize.M, AvatarSize.L, AvatarSize.XL],
      control: { type: 'select' },
    },
    showBorder: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Avatar>;

const withSingleAvatar: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar src={args.src} alt={args.alt} size={args.size} showBorder={args.showBorder}></Avatar>;
};

export const WithSingleAvatar: ComponentStory<typeof Avatar> = withSingleAvatar.bind({});
WithSingleAvatar.args = {
  src: 'https://randompicturegenerator.com/img/people-generator/gd121f56d8674f28d00ce9f1c44686e7a9bee58b8d33a3c57daaada1fa493c214290f9490833d1ff18f4ee16cd5298e1f_640.jpg',
  alt: '',
  size: AvatarSize.M,
  showBorder: false,
};
