import React from 'react';
import { StorybookMeta } from '../components.config';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { FileUpload } from './file-upload';

export default {
  title: `${StorybookMeta.COMPONENTS}/FileUpload`,
  component: FileUpload,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => {
  return <FileUpload {...args}></FileUpload>;
};

export const FileUploadComponent: ComponentStory<typeof FileUpload> = Template.bind({});
FileUploadComponent.args = {
  label: '... oder Datei auswählen',
};
