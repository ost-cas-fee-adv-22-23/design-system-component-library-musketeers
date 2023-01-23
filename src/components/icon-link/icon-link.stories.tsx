import React from 'react';
import { StorybookMeta } from '../components.config';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconLink } from './icon-link';
import { IconLinkType } from './icon-link.types';
import Profile from '../../components/icons/Profile';

export default {
  title: `${StorybookMeta.COMPONENTS}/IconLink`,
  component: IconLink,
  argTypes: {
    type: {
      options: [IconLinkType.DEFAULT, IconLinkType.VIOLET],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
    target: {
      options: ['_self', '_blank', '_parent', '_top'],
      control: { type: 'select' },
    },
  },
  parameters: {
    componentSubtitle: `Renders an IconLink component with configuration options. An Icon can be passed in via children.`,
  },
} as ComponentMeta<typeof IconLink>;

const Template: ComponentStory<typeof IconLink> = (args) => {
  return (
    <IconLink {...args}>
      <Profile />
    </IconLink>
  );
};

export const IconLinkComponent: ComponentStory<typeof IconLink> = Template.bind({});
IconLinkComponent.args = {
  type: IconLinkType.VIOLET,
  label: 'Username',
};
