/// <reference types="@capacitor/keyboard" />
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.anuranjans.teachers',
  appName: 'My Teacher',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true,
    },
  },
  server: {
    cleartext: false
  }
};

export default config;
