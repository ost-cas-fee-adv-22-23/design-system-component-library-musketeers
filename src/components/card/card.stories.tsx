import React from 'react';
import { StorybookMeta } from '../components.config';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './card';
import { CardSize } from './card.types';

export default {
  title: `${StorybookMeta.COMPONENTS}/Card`,
  component: Card,
  argTypes: {
    size: {
      options: [CardSize.S, CardSize.XL],
      control: { type: 'select' },
    },
    hasRoundBorders: {
      control: { type: 'boolean' },
    },
    hasTopRoundBorders: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Card>;

const withSingleCard: ComponentStory<typeof Card> = (args) => {
  return (
    <Card size={args.size} hasRoundBorders={args.hasRoundBorders} hasTopRoundBorders={args.hasTopRoundBorders}>
      <div>
        Sed at eleifend erat. Ut mattis malesuada tristique. Aliquam eget ultricies ipsum. Quisque rutrum orci non risus
        dignissim, a semper tortor ultricies. Nam commodo lacus mi, molestie malesuada mi scelerisque eu. Aenean et
        pellentesque lectus, in iaculis sem. In ac efficitur lectus. Quisque consectetur est libero, eu sagittis magna
        vestibulum a. Etiam consectetur lobortis ipsum et bibendum. Maecenas id purus quam.
      </div>
    </Card>
  );
};

export const WithSingleCard: ComponentStory<typeof Card> = withSingleCard.bind({});
WithSingleCard.args = {
  size: CardSize.XL,
  hasRoundBorders: false,
  hasTopRoundBorders: false,
};
