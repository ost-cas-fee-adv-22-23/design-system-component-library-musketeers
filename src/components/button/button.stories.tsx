import React from "react";
import {storybookMeta} from '../components.config';
import {Button} from "./button";
import {ButtonSize, ButtonType} from "./button.types";
import Mumble from "../../assets/icons/Mumble.svg";

export default {
    title: `${storybookMeta.type}/Button`,
    component: Button,
    argTypes: {
        size: {
            options: [ButtonSize.M, ButtonSize.L],
            control: { type: 'select' },
        },
    },
};

const withAllTypes = (args: any) => {
    return (
        <div className={'flex space-x-s'}>
            <Button type={ButtonType.DEFAULT} size={args.size} label={'Button Label'}>
                <Mumble/>
            </Button>
            <Button type={ButtonType.VIOLET} size={args.size} label={'Button Label'}>
                <Mumble/>
            </Button>
            <Button type={ButtonType.GRADIENT} size={args.size} label={'Button Label'}>
                <Mumble/>
            </Button>
            <Button isIconOnly={true}>
                <Mumble/>
            </Button>
        </div>
    );
};

export const WithAllTypes: any = withAllTypes.bind({});
WithAllTypes.args = {
    size: ButtonSize.M,
};
