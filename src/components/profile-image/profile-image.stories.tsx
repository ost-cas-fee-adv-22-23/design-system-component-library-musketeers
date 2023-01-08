import React from 'react';
import { StorybookMeta } from '../components.config';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileImage } from './profile-image';

export default {
  title: `${StorybookMeta.COMPONENTS}/ProfileImage`,
  component: ProfileImage,
} as ComponentMeta<typeof ProfileImage>;

const withSingleProfileImage: ComponentStory<typeof ProfileImage> = (args) => {
  return <ProfileImage src={args.src} alt={args.alt} onClick={args.onClick} />;
};

export const WithSingleProfileImage: ComponentStory<typeof ProfileImage> = withSingleProfileImage.bind({});
WithSingleProfileImage.args = {
  src: 'https://randompicturegenerator.com/img/people-generator/gd121f56d8674f28d00ce9f1c44686e7a9bee58b8d33a3c57daaada1fa493c214290f9490833d1ff18f4ee16cd5298e1f_640.jpg',
  alt: 'Profile Image alt attribute text',
};
