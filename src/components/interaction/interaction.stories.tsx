import React, { useEffect, useState } from 'react';
import { StorybookMeta } from '../components.config';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Mumble from '../../assets/icons/Mumble.svg';
import Heart from '../../assets/icons/Heart.svg';
import HeartFilled from '../../assets/icons/HeartFilled.svg';
import Reply from '../../assets/icons/Reply.svg';
import ReplyFilled from '../../assets/icons/ReplyFilled.svg';
import { Interaction } from './interaction';
import { InteractionType } from './interaction.types';

export default {
  title: `${StorybookMeta.COMPONENTS}/Interaction`,
  component: Interaction,
  argTypes: {
    type: {
      options: [InteractionType.DEFAULT, InteractionType.VIOLET, InteractionType.PINK],
      control: { type: 'select' },
    },
    active: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Interaction>;

const withSingleInteraction: ComponentStory<typeof Interaction> = (args) => {
  return (
    <Interaction type={args.type} active={args.active}>
      <Mumble />
      Copy link
    </Interaction>
  );
};

export const WithSingleInteraction: ComponentStory<typeof Interaction> = withSingleInteraction.bind({});
WithSingleInteraction.args = {
  type: InteractionType.DEFAULT,
  active: false,
};

export const LikeInteractionComponent: ComponentStory<typeof Interaction> = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(0);
    setLiked(false);
  }, [0]);

  useEffect(() => {
    if (liked) {
      setLikes(likes + 1);
    }
  }, [liked]);

  return (
    <Interaction type={InteractionType.PINK} active={liked} onClick={() => setLiked((l) => !l)}>
      {liked ? <HeartFilled /> : <Heart />}
      {likes > 0 ? `${likes} Likes` : liked ? 'Liked' : 'Like'}
    </Interaction>
  );
};

LikeInteractionComponent.storyName = 'With Like Interaction';

export const CommentInteractionComponent: ComponentStory<typeof Interaction> = () => {
  const [commented, setCommented] = useState(false);
  const [comments, setComments] = useState(0);

  useEffect(() => {
    setComments(0);
    setCommented(false);
  }, [0]);

  useEffect(() => {
    if (commented) {
      setComments(comments + 1);
    }
  }, [commented]);

  return (
    <Interaction type={InteractionType.VIOLET} active={commented} onClick={() => setCommented((c) => !c)}>
      {commented ? <ReplyFilled /> : <Reply />}
      {comments > 0 ? `${comments} Comments` : 'Comment'}
    </Interaction>
  );
};

CommentInteractionComponent.storyName = 'With Comment Interaction';
