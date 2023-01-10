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
