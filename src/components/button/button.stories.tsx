import React from 'react';
import { StorybookMeta } from '../components.config';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './button';
import { ButtonSize, ButtonType } from './button.types';
import Mumble from '../../assets/icons/Mumble.svg';

export default {
  title: `${StorybookMeta.COMPONENTS}/Button`,
  component: Button,
  argTypes: {
    size: {
      options: [ButtonSize.M, ButtonSize.L],
      control: { type: 'select' },
    },
    type: {
      options: [ButtonType.DEFAULT, ButtonType.VIOLET, ButtonType.GRADIENT],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    isIconOnly: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Button>;

const withSingleButton: ComponentStory<typeof Button> = (args) => {
  return (
    <Button type={args.type} size={args.size} label={args.label} isIconOnly={args.isIconOnly}>
      <Mumble />
    </Button>
  );
};

export const WithSingleButton: ComponentStory<typeof Button> = withSingleButton.bind({});
WithSingleButton.args = {
  size: ButtonSize.M,
  type: ButtonType.DEFAULT,
  label: 'Button Label',
  isIconOnly: false,
};
