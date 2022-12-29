import React from 'react';
import { StorybookMeta } from '../components.config';
import { Container } from './container';
import { ContainerProps } from './container.types';

export default {
  title: `${StorybookMeta.COMPONENTS}/Container`,
  component: Container,
};

const withSingleContainer = () => {
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

export const WithSingleContainer: { (args: ContainerProps): JSX.Element; args?: ContainerProps } = withSingleContainer.bind(
  {}
);
