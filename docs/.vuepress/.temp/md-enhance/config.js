import { defineClientConfig } from "@vuepress/client";
    import { defineAsyncComponent } from "vue";
import CodeTabs from "D:/PROJECT/magiahonkai1/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.88/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "D:/PROJECT/magiahonkai1/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.88/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import "D:/PROJECT/magiahonkai1/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.88/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import Tabs from "D:/PROJECT/magiahonkai1/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.88/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs";
import "D:/PROJECT/magiahonkai1/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.88/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("FlowChart", FlowChart);
    app.component("Tabs", Tabs);
    
  }
});