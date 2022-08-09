export const themeData = JSON.parse("{\"blog\":{\"description\":\"一个不正经的 V\",\"intro\":\"/README.md\",\"medias\":{\"Bilibili\":\"https://space.bilibili.com/82717585\",\"Notion\":\"https://senanana.notion.com\",\"Github\":\"https://sena-nana.github.io\"}},\"encrypt\":{},\"pure\":false,\"darkmode\":\"switch\",\"themeColor\":{\"blue\":\"#2196f3\",\"red\":\"#f26d6d\",\"green\":\"#3eaf7c\",\"orange\":\"#fb9b5f\"},\"fullscreen\":false,\"locales\":{\"/\":{\"blog\":{},\"repoDisplay\":true,\"navbarIcon\":true,\"navbarAutoHide\":\"mobile\",\"hideSiteNameonMobile\":true,\"sidebar\":{\"/main/\":\"structure\",\"/story/\":\"structure\",\"/database/\":\"structure\",\"/dlc/\":\"structure\"},\"sidebarIcon\":true,\"headerDepth\":2,\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"404msg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"author\":{\"name\":\"星奈 Sena\",\"url\":\"https://space.bilibili.com/82717585\"},\"logo\":\"\",\"repo\":\"sena-nana/sena-nana.github.io\",\"docsDir\":\"demo/src\",\"navbar\":[{\"text\":\"主规则书\",\"icon\":\"creative\",\"link\":\"/main/\"},{\"text\":\"扩展规则\",\"icon\":\"creative\",\"link\":\"/dlc/\"},{\"text\":\"模组\",\"icon\":\"creative\",\"link\":\"/story/\"},{\"text\":\"数据库\",\"icon\":\"creative\",\"link\":\"/database/\"},{\"text\":\"二版规则\",\"icon\":\"creative\",\"link\":\"https://sena-nana.github.io\"}],\"footer\":\"后面没有了哦~\",\"displayFooter\":true,\"copyright\":\"MIT Licensed / CC-BY-NC-SA | Copyright © 2022-present 星奈 Sena\",\"pageInfo\":[\"Author\",\"ReadingTime\",\"Word\"]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
