import React from "react";
import {storybookMeta} from '../components.config';
import {TextLink} from "./text-link";

export default {
    title: `${storybookMeta.type}/TextLink`,
    component: TextLink,
    argTypes: {
        label: {
            control: {type: 'text'},
        },
        href: {
            control: {type: 'text'},
        },
        target: {
            options: ['_self', '_blank', '_parent', '_top'],
            control: {type: 'select'},
        },
    },
};

const withSingleTextLink = (args: any) => {
    return (
        <TextLink label={args.label} href={args.href} target={args.target}></TextLink>
    );
};

export const WithSingleTextLink: any = withSingleTextLink.bind({});
WithSingleTextLink.args = {
    label: 'Link Label',
};
