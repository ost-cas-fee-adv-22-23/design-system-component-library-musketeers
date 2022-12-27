import React, {useEffect, useState} from "react";
import {storybookMeta} from '../components.config';
import Mumble from "../../assets/icons/Mumble.svg";
import Heart from "../../assets/icons/Heart.svg";
import HeartFilled from "../../assets/icons/HeartFilled.svg";
import Reply from "../../assets/icons/Reply.svg";
import ReplyFilled from "../../assets/icons/ReplyFilled.svg";
import {Interaction} from "./interaction";
import {InteractionType} from "./interaction.types";
import {ComponentStory} from "@storybook/react";

export default {
    title: `${storybookMeta.type}/Interaction`,
    component: Interaction,
    argTypes: {
        type: {
            options: [InteractionType.DEFAULT, InteractionType.VIOLET, InteractionType.PINK],
            control: {type: 'select'},
        },
        active: {
            control: {type: 'boolean'},
        },
    },
};

const withSingleInteraction = (args: any) => {
    return (
        <Interaction type={args.type} active={args.active}>
            <Mumble/>
            Copy link
        </Interaction>
    );
};

export const WithSingleInteraction: any = withSingleInteraction.bind({});
WithSingleInteraction.args = {
    type: InteractionType.DEFAULT,
    active: false,
};

export const LikeInteractionComponent: ComponentStory<any> = ({numberOfLikes}) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        setLikes(numberOfLikes);
        setLiked(false);
    }, [numberOfLikes]);

    useEffect(() => {
        if (liked) {
            setLikes(likes + 1);
        } else if (liked && likes > 0) {
            setLikes(likes - 1);
        }
    }, [liked]);

    return (
        <Interaction type={InteractionType.PINK} active={liked} onClick={() => setLiked((l) => !l)}>
            {liked ? <HeartFilled/> : <Heart/>}
            {likes > 0 ? `${likes} Likes` : liked ? 'Liked' : 'Like'}
        </Interaction>
    );
};

LikeInteractionComponent.storyName = 'With Like Interaction';
LikeInteractionComponent.args = {numberOfLikes: 0} as any;


export const CommentInteractionComponent: ComponentStory<any> = ({numberOfComments}) => {
    const [commented, setCommented] = useState(false);
    const [comments, setComments] = useState(0);

    useEffect(() => {
        setComments(numberOfComments);
        setCommented(false);
    }, [numberOfComments]);

    useEffect(() => {
        if (commented) {
            setComments(comments + 1);
        } else if (commented && comments > 0) {
            setComments(comments - 1);
        }
    }, [commented]);

    return (
        <Interaction type={InteractionType.VIOLET} active={commented} onClick={() => setCommented((c) => !c)}>
            {commented ? <ReplyFilled/> : <Reply/>}
            {comments > 0 ? `${comments} Comments` : 'Comment'}
        </Interaction>
    );
};

CommentInteractionComponent.storyName = 'With Comment Interaction';
CommentInteractionComponent.args = {numberOfComments: 0} as any;