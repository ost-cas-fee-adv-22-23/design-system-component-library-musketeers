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
    isFullWidth: {
      control: { type: 'boolean' },
    },
    showBorder: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Button {...args}>
      <Mumble />
    </Button>
  );
};

export const ButtonComponent: ComponentStory<typeof Button> = Template.bind({});
ButtonComponent.args = {
  size: ButtonSize.M,
  type: ButtonType.DEFAULT,
  label: 'Button Label',
  isIconOnly: false,
};

export const ButtonDefault: ComponentStory<typeof Button> = Template.bind({});
ButtonDefault.args = {
  size: ButtonSize.M,
  type: ButtonType.DEFAULT,
  label: 'Button Label',
  isIconOnly: false,
};

export const ButtonViolet: ComponentStory<typeof Button> = Template.bind({});
ButtonViolet.args = {
  size: ButtonSize.M,
  type: ButtonType.VIOLET,
  label: 'Button Label',
  isIconOnly: false,
};

export const ButtonGradient: ComponentStory<typeof Button> = Template.bind({});
ButtonGradient.args = {
  size: ButtonSize.M,
  type: ButtonType.GRADIENT,
  label: 'Button Label',
  isIconOnly: false,
};

export const ButtonGrey: ComponentStory<typeof Button> = Template.bind({});
ButtonGrey.args = {
  size: ButtonSize.M,
  type: ButtonType.GREY,
  label: 'Button Label',
  isIconOnly: false,
};

export const ButtonVioletFullWidth: ComponentStory<typeof Button> = Template.bind({});
ButtonVioletFullWidth.args = {
  size: ButtonSize.M,
  type: ButtonType.VIOLET,
  label: 'Button Label',
  isIconOnly: false,
  isFullWidth: true,
};

export const ButtonIconOnly: ComponentStory<typeof Button> = Template.bind({});
ButtonIconOnly.args = {
  size: ButtonSize.M,
  isIconOnly: true,
  isFullWidth: true,
};
