import React, { Fragment } from 'react';
import { StorybookMeta } from '../components.config';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tweet } from './tweet';
import { Container } from '../container/container';

import { Hashtag } from '../hashtag/hashtag';

import { Avatar } from '../avatar/avatar';
import { AvatarSize } from '../avatar/avatar.types';

import Share from '../../components/icons/Share';

import { CommentInteractionComponent, LikeInteractionComponent } from '../interaction/interaction.stories';
import { Interaction } from '../interaction/interaction';
import { InteractionType } from '../interaction/interaction.types';

export default {
  title: `${StorybookMeta.EXAMPLES}/Tweet`,
  component: Tweet,
  parameters: {
    componentSubtitle: `This is an example, how a possible component implementation could look like. It shows a Tweet component, build in a next.js application. Please checkout tweet.tsx for example component code. Of yourse you need to adapt the import paths laters.`,
  },
} as ComponentMeta<typeof Tweet>;

const Template: ComponentStory<typeof Tweet> = (args) => {
  return (
    <div className="bg-slate-400 p-xl">
      <Container>
        <Tweet
          displayName={args.displayName}
          userName={args.userName}
          timestamp={args.timestamp}
          avatar={args.avatar}
          footer={args.footer}
          onClickUserName={args.onClickUserName}
          onClickTimestamp={args.onClickTimestamp}
        >
          <div>
            Sed at eleifend erat. Ut mattis malesuada tristique. Aliquam eget ultricies ipsum. Quisque rutrum orci non risus
            dignissim, a semper tortor ultricies. Nam commodo lacus mi, molestie malesuada mi scelerisque eu. Aenean et
            pellentesque lectus, in iaculis sem. In ac efficitur lectus. Quisque consectetur est libero, eu sagittis magna
            vestibulum a. Etiam consectetur lobortis ipsum et bibendum. Maecenas id purus quam.
          </div>
          <div className="flex gap-xs">
            <Hashtag
              label="myhashtag"
              onClick={() => {
                alert('Hashtag clicked!');
              }}
            />
            <Hashtag
              label="myhashtag2"
              onClick={() => {
                alert('Hashtag2 clicked!');
              }}
            />
          </div>
          <img
            className="block rounded-default"
            src="https://randompicturegenerator.com/img/people-generator/gd121f56d8674f28d00ce9f1c44686e7a9bee58b8d33a3c57daaada1fa493c214290f9490833d1ff18f4ee16cd5298e1f_640.jpg"
            alt=""
          />
        </Tweet>
      </Container>
    </div>
  );
};

export const TweetComponent: ComponentStory<typeof Tweet> = Template.bind({});
TweetComponent.parameters = {
  docs: {
    description: {
      component: `

      --
      import React from 'react';
      import { TweetProps } from './tweet.types';

      import { Card } from '../card/card';
      import { CardSize } from '../card/card.types';

      import { IconLink } from '../icon-link/icon-link';
      import { IconLinkType } from '../icon-link/icon-link.types';

      import Profile from '../../components/icons/Profile';
      import Time from '../../components/icons/Time';

      export const Tweet: React.FC<TweetProps> = (props) => {
        return (
          <Card size={CardSize.XL} hasRoundBorders={true}>
            <div className="relative">
              <div className="absolute -top-s -left-[80px]">{props.avatar}</div>

              <div className="label-xl text-slate-900 mb-xxs">{props.displayName}</div>

              <div className="flex gap-s">
                <IconLink type={IconLinkType.VIOLET} label={props.userName} href="" target="" onClick={props.onClickUserName}>
                  <Profile />
                </IconLink>
                <IconLink type={IconLinkType.DEFAULT} label={props.timestamp} href="" target="" onClick={props.onClickTimestamp}>
                  <Time />
                </IconLink>
              </div>

              <div className="paragraph-l text-slate-900 grid pt-m gap-m">{props.children}</div>

              <div className="py-m flex gap-s">{props.footer}</div>
            </div>
          </Card>
        );
      };

      `,
    },
  },
};
TweetComponent.args = {
  displayName: 'Hans Muster',
  userName: 'hansmuster',
  timestamp: 'timestamp',
  avatar: (
    <Avatar
      size={AvatarSize.M}
      showBorder={true}
      src="https://randompicturegenerator.com/img/people-generator/gd121f56d8674f28d00ce9f1c44686e7a9bee58b8d33a3c57daaada1fa493c214290f9490833d1ff18f4ee16cd5298e1f_640.jpg"
      alt="Display Name @displayName"
    />
  ),
  footer: (
    <Fragment>
      <CommentInteractionComponent />

      <LikeInteractionComponent />

      <Interaction type={InteractionType.DEFAULT} onClick={(event) => event}>
        <Share />
        Copy link
      </Interaction>
    </Fragment>
  ),
  onClickUserName: (event) => event,
  onClickTimestamp: (event) => event,
};
