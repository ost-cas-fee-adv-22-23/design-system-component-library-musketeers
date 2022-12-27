import React from 'react';
import { storybookMeta } from '../components.config';
import { Button } from './button';
import { ButtonProps, ButtonSize, ButtonType } from './button.types';
import Mumble from '../../assets/icons/Mumble.svg';

export default {
  title: `${storybookMeta.type}/Button`,
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
};

const withSingleButton = (args: ButtonProps) => {
  return (
    <Button type={args.type} size={args.size} label={args.label} isIconOnly={args.isIconOnly}>
      <Mumble />
    </Button>
  );
};

export const WithSingleButton: { (args: ButtonProps): JSX.Element; args?: ButtonProps } = withSingleButton.bind({});
WithSingleButton.args = {
  size: ButtonSize.M,
  type: ButtonType.DEFAULT,
  label: 'Button Label',
  isIconOnly: false,
};
