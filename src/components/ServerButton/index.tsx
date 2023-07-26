import { faker } from '@faker-js/faker';
import React from 'react';

import Logo from '../../assets/logo.png';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={Logo} style={{ width: '100%', height: '100%' }} alt="Rocketseat" />}
      {!isHome && <img src={faker.image.url()} style={{ width: '100%', height: '100%', borderRadius: 25 }} alt="Rocketseat" />}
    </Button>
  );
};

export default ServerButton;
