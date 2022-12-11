import {storiesOf} from "@storybook/react";
import {cosyMeta} from '../components.config';
import {Button} from "./button";
import {ButtonSize, ButtonType} from "./button.types";

storiesOf(`${cosyMeta.type}/Button`, module)
    .add('with all types', () => {
        return (
            <Button type={ButtonType.DEFAULT} size={ButtonSize.M} label={'Button Label'}></Button>
        );
    });