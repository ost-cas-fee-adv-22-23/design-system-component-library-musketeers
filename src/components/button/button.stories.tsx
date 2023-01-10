import React from 'react';
import { StorybookMeta } from '../components.config';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './button';
import { ButtonSize, ButtonType } from './button.types';
import Mumble from '../../components/icons/Mumble';

export default {
  title: `${StorybookMeta.COMPONENTS}/Button`,
  component: Button,
  argTypes: {
    size: {
      options: [ButtonSize.M, ButtonSize.L],
      control: { type: 'select' },
    },
    type: {
      options: [ButtonType.DEFAULT, ButtonType.VIOLET, ButtonType.GRADIENT, ButtonType.GREY],
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
    <Button onClick={args.onClick} type={args.type} size={args.size} label={args.label} isIconOnly={args.isIconOnly}>
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

export const ButtonDefault: ComponentStory<typeof Button> = withSingleButton.bind({});
ButtonDefault.args = {
  size: ButtonSize.M,
  type: ButtonType.DEFAULT,
  label: 'Button Label',
  isIconOnly: false,
};

export const ButtonViolet: ComponentStory<typeof Button> = withSingleButton.bind({});
ButtonViolet.args = {
  size: ButtonSize.M,
  type: ButtonType.VIOLET,
  label: 'Button Label',
  isIconOnly: false,
};

export const ButtonGradient: ComponentStory<typeof Button> = withSingleButton.bind({});
ButtonGradient.args = {
  size: ButtonSize.M,
  type: ButtonType.GRADIENT,
  label: 'Button Label',
  isIconOnly: false,
};

export const ButtonGrey: ComponentStory<typeof Button> = withSingleButton.bind({});
ButtonGrey.args = {
  size: ButtonSize.M,
  type: ButtonType.GREY,
  label: 'Button Label',
  isIconOnly: false,
};
