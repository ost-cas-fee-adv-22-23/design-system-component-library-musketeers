import React from 'react';
import { storybookMeta } from '../components.config';
import { Avatar } from './avatar';
import { AvatarProps, AvatarSize } from './avatar.types';

export default {
  title: `${storybookMeta.type}/Avatar`,
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
};

const withSingleAvatar = (args: AvatarProps) => {
  return <Avatar src={args.src} alt={args.alt} size={args.size} showBorder={args.showBorder}></Avatar>;
};

export const WithSingleAvatar: { (args: AvatarProps): JSX.Element; args?: AvatarProps } = withSingleAvatar.bind({});
WithSingleAvatar.args = {
  src: 'https://randompicturegenerator.com/img/people-generator/gd121f56d8674f28d00ce9f1c44686e7a9bee58b8d33a3c57daaada1fa493c214290f9490833d1ff18f4ee16cd5298e1f_640.jpg',
  alt: '',
  size: AvatarSize.M,
  showBorder: false,
};
