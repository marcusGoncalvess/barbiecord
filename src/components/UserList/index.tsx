import React from 'react';
import { faker } from '@faker-js/faker';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar url={faker.image.avatar()} className={isBot ? 'bot' : ''} />

      <strong style={{  color: 'white'}}>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname={faker.internet.userName()} />

      <Role>Offline - 18</Role>
      {/* <UserRow nickname="Diego Fernandes" isBot /> */}
      {Array.from(Array(150).keys()).map((n) => (
          <UserRow
            key={n}
            nickname={faker.internet.userName()}
          />
        ))}
      {/* <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" /> */}
    </Container>
  );
};

export default UserList;
