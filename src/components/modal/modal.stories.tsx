import React from 'react';
import { StorybookMeta } from '../components.config';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './modal';
import { ModalSize } from './modal.types';

export default {
  title: `${StorybookMeta.COMPONENTS}/Modal`,
  component: Modal,
  argTypes: {
    size: {
      options: [ModalSize.S, ModalSize.XL],
      control: { type: 'select' },
    },
  },
  parameters: {
    componentSubtitle: `Renders a Modal Component. JSX for the header slot can be passed in. Children are used to fill the content. The Cancel and Save buttons with handlers are included.`,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  return (
    <Modal {...args}>
      <div className="label-xl">Persönliche Einstellungen</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ad illum unde consectetur officiis hic quidem asperiores,
        porro dolores numquam consequuntur reiciendis in, repellendus, excepturi atque autem dicta cupiditate labore.
      </p>
    </Modal>
  );
};

export const ModalComponent: ComponentStory<typeof Modal> = Template.bind({});
ModalComponent.args = {
  size: ModalSize.XL,
  header: <h3>Einstellungen</h3>,
};
