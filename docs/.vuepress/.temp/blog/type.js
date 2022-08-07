export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-79fdd481","v-c7e971d2","v-444f99d2","v-14f0b23d","v-d71d8bda","v-340124ee","v-3d1fdecc","v-fae750ea","v-252a67e5","v-58c05ad0","v-5b30c9b2"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
