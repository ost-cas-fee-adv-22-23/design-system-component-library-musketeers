import React from 'react';
import { StorybookMeta } from '../components.config';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FileDragAndDrop } from './file-drag-and-drop';

export default {
  title: `${StorybookMeta.COMPONENTS}/FileDragAndDrop`,
  component: FileDragAndDrop,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    restrictions: {
      control: { type: 'text' },
    },
    maximumFileSize: {
      control: { type: 'number' },
    },
    validFileExtensions: {
      control: { type: 'object' },
    },
  },
  parameters: {
    componentSubtitle: `Full featured File Drag-And-Drop component. Please note: This one uses internal component state.`,
  },
} as ComponentMeta<typeof FileDragAndDrop>;

const Template: ComponentStory<typeof FileDragAndDrop> = (args) => {
  return <FileDragAndDrop {...args} />;
};

export const FileDragAndDropComponent = Template.bind({});
FileDragAndDropComponent.args = {
  title: 'Datei hierhin ziehen',
  restrictions: 'JPEG oder PNG, maximal 5 MB',
};
