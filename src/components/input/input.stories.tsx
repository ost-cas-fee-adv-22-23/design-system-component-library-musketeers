import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { StorybookMeta } from '../components.config';
import { Input } from './input';
import { InputType } from './input.types';
import Mumble from '../../components/icons/Mumble';

export default {
  title: `${StorybookMeta.COMPONENTS}/Input`,
  component: Input,
  argTypes: {
    type: {
      options: [InputType.TEXT, InputType.PASSWORD, InputType.EMAIL],
      control: { type: 'select' },
    },
    value: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Input>;

const withSingleInput: ComponentStory<typeof Input> = (args) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(args.value);
  }, [args.value]);

  return (
    <Input {...args} value={input} onChange={(event) => setInput(event.currentTarget.value)}>
      <Mumble />
    </Input>
  );
};

export const WithSingleInput = withSingleInput.bind({});
WithSingleInput.args = {
  type: InputType.TEXT,
  label: 'Input label',
  value: '',
  placeholder: 'Input placeholder',
};

const inputTextWithoutIcon: ComponentStory<typeof Input> = (args) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(args.value);
  }, [args.value]);

  return <Input {...args} value={input} onChange={(event) => setInput(event.currentTarget.value)}></Input>;
};

export const InputTextWithoutIcon = inputTextWithoutIcon.bind({});
InputTextWithoutIcon.args = {
  type: InputType.TEXT,
  label: 'Input label',
  value: '',
  placeholder: 'Input placeholder',
};
