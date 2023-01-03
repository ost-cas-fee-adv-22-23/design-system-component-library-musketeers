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
} as ComponentMeta<typeof TextLink>;

const withSingleTextLink: ComponentStory<typeof TextLink> = (args) => {
  return <TextLink label={args.label} href={args.href} target={args.target}></TextLink>;
};

export const WithSingleTextLink: ComponentStory<typeof TextLink> = withSingleTextLink.bind({});
WithSingleTextLink.args = {
  label: 'Link Label',
};
