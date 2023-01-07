import React, { Children } from 'react';
import { InteractionProps, InteractionType } from './interaction.types';

export const Interaction: React.FC<InteractionProps> = (props) => {
  const baseClasses = ['flex items-center h-fit py-xs px-s rounded-16 text-slate-600 transition'];
  const activeIconClasses: string[] = [];

  if (props.type === InteractionType.DEFAULT) {
    baseClasses.push('hover:bg-slate-100 hover:text-slate-700');
  }

  if (props.type === InteractionType.PINK) {
    baseClasses.push('hover:bg-pink-50 hover:text-pink-600');

    if (props.active) {
      baseClasses.push('bg-transparent text-pink-900');
      activeIconClasses.push('text-pink-500');
    }
  }

  if (props.type === InteractionType.VIOLET) {
    baseClasses.push('hover:bg-violet-50 hover:text-violet-600');

    if (props.active) {
      activeIconClasses.push('text-violet-600');
    }
  }

  const interactionContent = Children.map(props.children, (child) => {
    if (typeof child === 'string') {
      return <span className={'pl-xs'}>{child}</span>;
    } else {
      return <span className={activeIconClasses.join(' ')}>{child}</span>;
    }
  });

  return (
    <button className={baseClasses.join(' ')} onClick={props.onClick}>
      {interactionContent}
    </button>
  );
};
