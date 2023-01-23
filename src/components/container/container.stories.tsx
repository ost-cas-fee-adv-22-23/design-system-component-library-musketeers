import React from 'react';
import { StorybookMeta } from '../components.config';
import { Container } from './container';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: `${StorybookMeta.COMPONENTS}/Container`,
  component: Container,
  parameters: {
    componentSubtitle: `Renders a container. Childrens will be used to fill the container. The container is centered, full width for small viewports and restricted in width for viewports >= lg`,
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = () => {
  return (
    <div className="bg-violet-700">
      <Container>
        <div className="bg-violet-600 h-l text-center text-white flex items-center">
          <div>Children content..</div>
        </div>
      </Container>
    </div>
  );
};

export const ContainerComponent: ComponentStory<typeof Container> = Template.bind({});
