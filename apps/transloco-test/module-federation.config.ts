import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'transloco-test',
  remotes: ['remote-app'],
};

export default config;
