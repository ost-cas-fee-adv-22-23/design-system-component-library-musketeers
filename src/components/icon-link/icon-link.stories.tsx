import React from 'react';
import { storybookMeta } from '../components.config';
import { IconLink } from './icon-link';
import { IconLinkProps, IconLinkType } from './icon-link.types';
import Profile from '../../assets/icons/Profile.svg';

export default {
  title: `${storybookMeta.type}/IconLink`,
  component: IconLink,
  argTypes: {
    type: {
      options: [IconLinkType.DEFAULT, IconLinkType.VIOLET],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
    target: {
      options: ['_self', '_blank', '_parent', '_top'],
      control: { type: 'select' },
    },
  },
};

const withSingleIconLink = (args: IconLinkProps) => {
  return (
    <IconLink type={args.type} label={args.label} href={args.href} target={args.target}>
      <Profile />
    </IconLink>
  );
};

export const WithSingleIconLink: { (args: IconLinkProps): JSX.Element; args?: IconLinkProps } = withSingleIconLink.bind({});
WithSingleIconLink.args = {
  type: IconLinkType.VIOLET,
  label: 'Username',
};
