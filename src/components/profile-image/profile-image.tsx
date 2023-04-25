import React from 'react';
import { ProfileImageProps } from './profile-image.types';
import { Avatar } from '../avatar/avatar';
import { AvatarSize } from '../avatar/avatar.types';
import EditIcon from '../../components/icons/Edit';
import { Button } from '../button/button';
import { ButtonSize, ButtonType } from '../button/button.types';

export const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  size = AvatarSize.XL,
  onClick,
  editButtonAriaLabel,
}) => {
  const baseClasses = ['inline-block relative'];
  const buttonWrapperClasses = ['absolute bottom-0 right-0'];

  if (size === AvatarSize.S) {
    baseClasses.push('w-[40px] h-[40px]');
    buttonWrapperClasses.push('opacity-0');
  }

  if (size === AvatarSize.M) {
    baseClasses.push('w-[64px] h-[64px]');
    buttonWrapperClasses.push('opacity-0');
  }

  if (size === AvatarSize.L) {
    baseClasses.push('w-[96px] h-[96px]');
  }

  if (size === AvatarSize.XL) {
    baseClasses.push('w-[160px] h-[160px]');
  }

  return (
    <div className={baseClasses.join(' ')}>
      <Avatar src={src} alt={alt} size={size} showBorder={true} />

      <div className={buttonWrapperClasses.join(' ')}>
        <Button
          showBorder={false}
          onClick={onClick}
          type={ButtonType.DEFAULT}
          size={ButtonSize.S}
          isIconOnly={true}
          ariaLabel={editButtonAriaLabel}
        >
          <EditIcon width="16" height="16" />
        </Button>
      </div>
    </div>
  );
};
