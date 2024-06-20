import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote-app',
  exposes: {
    './Routes': 'apps/remote-app/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
