import React from 'react';
import { ModalProps, ModalSize } from './modal.types';
import { Button } from '../button/button';
import Cancel from '../icons/Cancel';
import { ButtonType, ButtonSize } from '../button/button.types';

export const Modal: React.FC<ModalProps> = (props) => {
  const baseClasses = ['bg-white border-2 border-slate-200 rounded-16'];
  const headerClasses = ['bg-violet-600 rounded-t-16 p-m heading-3 text-white flex items-center justify-between'];
  const contentClasses = ['p-m'];
  const footerClasses = ['flex gap-xs p-m'];

  if (props.size === ModalSize.S) {
    baseClasses.push('w-[465px]');
  } else if (props.size === ModalSize.XL) {
    baseClasses.push('w-[623px]');
  }

  return (
    <div className={baseClasses.join(' ')}>
      <div className={headerClasses.join(' ')}>
        {props.header}
        <button onClick={props.onClickCancel}>
          <Cancel width={16} height={16} />
        </button>
      </div>
      <div className={contentClasses.join(' ')}>{props.children}</div>
      <div className={footerClasses.join(' ')}>
        <Button
          label="Abbrechen"
          onClick={props.onClickCancel}
          size={ButtonSize.M}
          type={ButtonType.DEFAULT}
          isFullWidth={true}
          showBorder={false}
        >
          <Cancel />
        </Button>
        <Button
          label="Speichern"
          onClick={props.onClickSave}
          size={ButtonSize.M}
          type={ButtonType.VIOLET}
          isFullWidth={true}
          showBorder={false}
        >
          <Cancel />
        </Button>
      </div>
    </div>
  );
};
