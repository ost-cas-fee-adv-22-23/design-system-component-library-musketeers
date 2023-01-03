import React from 'react';
import { StorybookMeta } from '../components.config';
import { Container } from './container';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: `${StorybookMeta.COMPONENTS}/Container`,
  component: Container,
} as ComponentMeta<typeof Container>;

const withSingleContainer: ComponentStory<typeof Container> = () => {
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

export const WithSingleContainer: ComponentStory<typeof Container> = withSingleContainer.bind({});
