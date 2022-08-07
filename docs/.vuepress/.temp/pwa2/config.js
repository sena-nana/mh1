import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "D:/PROJECT/magiahonkai/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-pwa2@2.0.0-beta.85/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup";
import PWAInstall from "D:/PROJECT/magiahonkai/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-pwa2@2.0.0-beta.85/node_modules/vuepress-plugin-pwa2/lib/client/components/PWAInstall";
import SWUpdatePopup from "D:/PROJECT/magiahonkai/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-pwa2@2.0.0-beta.85/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    PWAInstall,
    SWUpdatePopup,
    
  ],
});