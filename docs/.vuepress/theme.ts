import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";

export default hopeTheme({
  hostname: "https://sena-nana.github.io",
  author: {
    name: "星奈 Sena",
    url: "https://space.bilibili.com/82717585",
  },
  //pure:true,
  themeColor:{
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#3eaf7c",
      orange: "#fb9b5f",
  },
  backToTop:true,
  iconAssets: "iconfont",
  logo: "",
  repo: "sena-nana/sena-nana.github.io",
  docsDir: "demo/src",
  navbar: navbar,
  sidebar: {
    "/main/":"structure",
    "/story/":"structure",
  },
  footer: "后面没有了哦~",
  displayFooter: true,
  copyright:"MIT Licensed / CC-BY-NC-SA | Copyright © 2022-present 星奈 Sena",
  pageInfo: ["Author", "ReadingTime","Word"],
  blog: {
    description: "一个不正经的 V",
    intro: "/README.md",
    medias: {
      Bilibili: "https://space.bilibili.com/82717585",
      Notion: "https://senanana.notion.com",
      Github: "https://sena-nana.github.io",
    },
  },
  plugins: {
    git:{
      updatedTime: true,
      contributors:true,
      createdTime:false,
    },
    photoSwipe:{},
    pwa:{
      showInstall: true,
    },
    sitemap:{},
    mdEnhance: {
      gfm:true,
      container:true,
      tabs:true,
      codetabs:true,
      align:true,
      tasklist:true,
      flowchart:true,
      stylize:[],
      presentation: false,
    },
  },
});
