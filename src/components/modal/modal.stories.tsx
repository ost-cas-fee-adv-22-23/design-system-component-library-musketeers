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
} as ComponentMeta<typeof Modal>;

const withSingleModal: ComponentStory<typeof Modal> = (args) => {
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

export const WithSingleModal: ComponentStory<typeof Modal> = withSingleModal.bind({});
WithSingleModal.args = {
  size: ModalSize.XL,
  header: <h3>Einstellungen</h3>,
};
