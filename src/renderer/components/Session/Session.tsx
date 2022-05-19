import * as React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import useSessionStore from '../../services/stores/session';

export default function Session() {
  const keycloakClient = useSessionStore((state) => state.keycloakClient);
  const userInfo = useSessionStore((state) => state.userInfo);

  if (keycloakClient === null) {
    return null;
  }

  if (userInfo === null) {
    return <Button onClick={() => keycloakClient.login()}>Login</Button>;
  }

  return (
    <Box>
      <Text>{userInfo.name}</Text>
      <Button onClick={() => keycloakClient.logout()}>Logout</Button>
    </Box>
  );
}
