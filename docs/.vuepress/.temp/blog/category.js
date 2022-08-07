export const categoryMap = {"category":{"/":{"path":"/category/","map":{"主规则书":{"path":"/category/%E4%B8%BB%E8%A7%84%E5%88%99%E4%B9%A6/","keys":["v-14f0b23d"]},"模组":{"path":"/category/%E6%A8%A1%E7%BB%84/","keys":["v-d71d8bda","v-340124ee"]}}}},"tag":{"/":{"path":"/tag/","map":{"Markdown":{"path":"/tag/markdown/","keys":["v-3d1fdecc","v-fae750ea","v-58c05ad0","v-5b30c9b2"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
