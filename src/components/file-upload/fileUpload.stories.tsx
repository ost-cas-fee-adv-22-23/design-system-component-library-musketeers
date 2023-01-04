import React from 'react';
import { StorybookMeta } from '../components.config';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FileUpload } from './fileUpload';

export default {
  title: `${StorybookMeta.COMPONENTS}/FileUpload`,
  component: FileUpload,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof FileUpload>;

const withSingleFileUpload: ComponentStory<typeof FileUpload> = (args) => {
  return <FileUpload label={args.label} onChange={args.onChange}></FileUpload>;
};

export const WithSingleFileUpload: ComponentStory<typeof FileUpload> = withSingleFileUpload.bind({});
WithSingleFileUpload.args = {
  label: '... oder Datei auswählen',
  onChange: (event) => {
    alert('onChange: ' + event.currentTarget.value);
  },
};
