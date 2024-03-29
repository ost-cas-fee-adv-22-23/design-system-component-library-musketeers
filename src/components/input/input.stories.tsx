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
    hasError: {
      control: { type: 'boolean' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
  },
  parameters: {
    componentSubtitle: `Renders a Text Input field. An Icon can be passed in via children. (Optional) See the examples below including error styles.`,
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
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

const TemplateWithoutIcon: ComponentStory<typeof Input> = (args) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(args.value);
  }, [args.value]);

  return <Input {...args} value={input} onChange={(event) => setInput(event.currentTarget.value)}></Input>;
};

export const InputComponent = Template.bind({});
InputComponent.args = {
  type: InputType.TEXT,
  label: 'Input label',
  value: '',
  placeholder: 'Input placeholder',
};

export const InputWithoutIcon = TemplateWithoutIcon.bind({});
InputWithoutIcon.args = {
  type: InputType.TEXT,
  label: 'Input label',
  value: '',
  placeholder: 'Input placeholder',
};

export const InputWithError = TemplateWithoutIcon.bind({});
InputWithError.args = {
  type: InputType.TEXT,
  label: 'Input label',
  value: '',
  placeholder: 'Input placeholder',
  hasError: true,
  errorMessage: 'This field has an error.',
};
