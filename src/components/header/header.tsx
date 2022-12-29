import React from 'react';
import { HeaderProps } from './header.types';
import MumbleLogo from '../../assets/logo/MumbleLogoInlineWhite.svg';

import { Container } from '../container/container';

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="bg-violet-700 h-20">
      <Container>
        <div className="h-20 flex items-center place-content-between">
          <div className="w-52">
            <a href="">
              <img src={MumbleLogo} alt="Mumble Logo" />
            </a>
          </div>
          <div>{children}</div>
        </div>
      </Container>
    </header>
  );
};
