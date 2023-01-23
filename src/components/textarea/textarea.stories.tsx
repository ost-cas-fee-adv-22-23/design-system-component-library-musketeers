import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { StorybookMeta } from '../components.config';
import { Textarea } from './textarea';

export default {
  title: `${StorybookMeta.COMPONENTS}/Textarea`,
  component: Textarea,
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    rows: {
      control: { type: 'number' },
    },
    hasError: {
      control: { type: 'boolean' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
  },
  parameters: {
    componentSubtitle: `Renders a Textarea field. See the examples below including error styles.`,
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(args.value);
  }, [args.value]);

  return <Textarea {...args} value={input} onChange={(event) => setInput(event.currentTarget.value)}></Textarea>;
};

export const TextareaComponent = Template.bind({});
TextareaComponent.args = {
  label: 'Textarea label',
  value: '',
  placeholder: 'Textarea placeholder',
  rows: 8,
};

export const TextareaWithError = Template.bind({});
TextareaWithError.args = {
  label: 'Textarea label',
  value: '',
  placeholder: 'Textarea placeholder',
  rows: 8,
  hasError: true,
  errorMessage: 'The entered value has an error.',
};
