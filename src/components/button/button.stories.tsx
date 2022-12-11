import React from "react";
import {cosyMeta} from '../components.config';
import {Button} from "./button";
import {ButtonSize, ButtonType} from "./button.types";

//TODO CHECK FOR CORRECT TS CONFIG
import Mumble from "../../assets/icons/Mumble.svg";

export default {
    title: `${cosyMeta.type}/Button`,
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
            <Button onlyIcon={true}>
                <Mumble/>
            </Button>
        </div>
    );
};

export const WithAllTypes = withAllTypes.bind({});
WithAllTypes.args = {
    size: ButtonSize.M,
};
