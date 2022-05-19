import Keycloak from 'keycloak-js';

// eslint-disable-next-line import/prefer-default-export
export const create = () => {
  return new Keycloak({
    url: 'https://auth.vodon.gg/auth',
    realm: 'vodon',
    clientId: 'vodon-pro',
  });
};
