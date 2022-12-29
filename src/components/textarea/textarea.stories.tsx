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
  },
} as ComponentMeta<typeof Textarea>;

const withSingleTextarea: ComponentStory<typeof Textarea> = (args) => {
  const [input, setInput] = useState('');

  useEffect(() => {
    setInput(args.value);
  }, [args.value]);

  return <Textarea {...args} value={input} onChange={(event) => setInput(event.currentTarget.value)}></Textarea>;
};

export const WithSingleTextarea = withSingleTextarea.bind({});
WithSingleTextarea.args = {
  label: 'Textarea label',
  value: '',
  placeholder: 'Textarea placeholder',
  rows: 8,
};
