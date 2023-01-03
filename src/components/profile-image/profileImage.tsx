import React from 'react';
import { ProfileImageProps } from './profileImage.types';
import { Avatar } from '../avatar/avatar';
import { AvatarSize } from '../avatar//avatar.types';
import EditIcon from '../../assets/icons/Edit.svg';

export const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, onClick }) => {
  return (
    <div className="inline-block relative w-[160px] h-[160px]">
      <Avatar src={src} alt={alt} size={AvatarSize.XL} showBorder={true} />
      <button
        onClick={onClick}
        className="absolute bottom-0 right-0 inline-block text-white p-s bg-slate-600 hover:bg-slate-700 transition rounded-full"
      >
        <EditIcon width="16" height="16" />
      </button>
    </div>
  );
};
