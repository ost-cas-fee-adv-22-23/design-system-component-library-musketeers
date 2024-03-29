import React from 'react';
import { StorybookMeta } from '../components.config';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextLink } from './text-link';

export default {
  title: `${StorybookMeta.COMPONENTS}/TextLink`,
  component: TextLink,
  argTypes: {
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
    componentSubtitle: `Renders a styled Text Link.`,
  },
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = (args) => {
  return <TextLink {...args}></TextLink>;
};

export const TextLinkComponent: ComponentStory<typeof TextLink> = Template.bind({});
TextLinkComponent.args = {
  label: 'Link Label',
  href: '',
  target: '',
};
