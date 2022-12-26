import React from "react";
import {storybookMeta} from '../components.config';
import {IconLink} from "./icon-link";
import {IconLinkType} from "./icon-link.types";
import Mumble from "../../assets/icons/Mumble.svg";

export default {
    title: `${storybookMeta.type}/IconLink`,
    component: IconLink,
    argTypes: {
        type: {
            options: [IconLinkType.DEFAULT, IconLinkType.VIOLET],
            control: {type: 'select'},
        },
        label: {
            control: {type: 'text'},
        },
    },
};

const withSingleIconLink = (args: any) => {
    return (
        <IconLink type={args.type} label={args.label}>
            <Mumble/>
        </IconLink>
    );
};

export const WithSingleIconLink: any = withSingleIconLink.bind({});
WithSingleIconLink.args = {
    type: IconLinkType.DEFAULT,
    label: 'Label',
};
