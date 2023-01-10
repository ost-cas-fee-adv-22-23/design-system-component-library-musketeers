import React from 'react';
import { ProfileImageProps } from './profile-image.types';
import { Avatar } from '../avatar/avatar';
import { AvatarSize } from '../avatar/avatar.types';
import EditIcon from '../../components/icons/Edit';
import { Button } from '../button/button';
import { ButtonSize, ButtonType } from '../button/button.types';

export const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, onClick }) => {
  return (
    <div className="inline-block relative w-[160px] h-[160px]">
      <Avatar src={src} alt={alt} size={AvatarSize.XL} showBorder={true} />

      <div className="absolute bottom-0 right-0">
        <Button showBorder={false} onClick={onClick} type={ButtonType.DEFAULT} size={ButtonSize.S} isIconOnly={true}>
          <EditIcon width="16" height="16" />
        </Button>
      </div>
    </div>
  );
};
