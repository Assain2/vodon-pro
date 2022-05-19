import createStore from 'zustand';
import Keycloak from 'keycloak-js';

export type UserInfo = {
  name: string;
};

interface StateData {
  keycloakClient: Keycloak | null;
  userInfo: UserInfo | null;
}

interface State extends StateData {
  setKeyclockClient: (client: Keycloak) => void;
  setUserInfo: (userInfo: UserInfo) => void;
}

const emptyState: StateData = {
  keycloakClient: null,
  userInfo: null,
};

const useStore = createStore<State>((set) => ({
  setKeyclockClient: (keycloakClient) => set(() => ({ keycloakClient })),
  setUserInfo: (userInfo) => set(() => ({ userInfo })),
  ...emptyState,
}));

export default useStore;
