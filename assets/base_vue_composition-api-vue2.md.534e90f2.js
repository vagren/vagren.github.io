import{_ as e,c as t,o as a,d as r}from"./app.79b189f8.js";const v='{"title":"\u751F\u547D\u5468\u671F\u7684\u53D8\u5316","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u751F\u547D\u5468\u671F\u7684\u53D8\u5316","slug":"\u751F\u547D\u5468\u671F\u7684\u53D8\u5316"},{"level":3,"title":"setup","slug":"setup"},{"level":3,"title":"reactive & toRefs","slug":"reactive-torefs"},{"level":3,"title":"watch & watchEffect","slug":"watch-watcheffect"},{"level":3,"title":"\u4F7F\u7528 2.x \u7684 store","slug":"\u4F7F\u7528-2-x-\u7684-store"},{"level":3,"title":"@vueblocks/vue-use-vuex","slug":"vueblocks-vue-use-vuex"}],"relativePath":"base/vue/composition-api-vue2.md","lastUpdated":1642421282940}',o={},i=r('<p>Vue2 \u4E2D\u4F7F\u7528 compositionApi</p><blockquote><p><a href="https://juejin.cn/post/6874927606820274184" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6874927606820274184</a></p></blockquote><h3 id="\u751F\u547D\u5468\u671F\u7684\u53D8\u5316" tabindex="-1">\u751F\u547D\u5468\u671F\u7684\u53D8\u5316 <a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u7684\u53D8\u5316" aria-hidden="true">#</a></h3><ul><li><s>beforeCreate</s> -&gt; \u4F7F\u7528 setup()</li><li><s>created</s> -&gt; \u4F7F\u7528 setup()</li><li>beforeMount -&gt; onBeforeMount</li><li>mounted -&gt; onMounted</li><li>beforeUpdate -&gt; onBeforeUpdate</li><li>updated -&gt; onUpdated</li><li>beforeDestroy -&gt; onBeforeUnmount</li><li>destroyed -&gt; onUnmounted</li><li>errorCaptured -&gt; onErrorCaptured</li></ul><h3 id="setup" tabindex="-1">setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h3><h3 id="reactive-torefs" tabindex="-1">reactive &amp; toRefs <a class="header-anchor" href="#reactive-torefs" aria-hidden="true">#</a></h3><h3 id="watch-watcheffect" tabindex="-1">watch &amp; watchEffect <a class="header-anchor" href="#watch-watcheffect" aria-hidden="true">#</a></h3><ul><li>watch \u662F\u76D1\u542C\u6307\u5B9A\u7684\u5C5E\u6027\uFF0C\u5F53\u6307\u5B9A\u5C5E\u6027\u53D8\u5316\u65F6\uFF0C\u624D\u4F1A\u6267\u884C\u56DE\u8C03\u3002watch \u53EF\u4EE5\u63A5\u6536\u6307\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5C5E\u6027\u3002 watch\u4E2D\u53EF\u4EE5\u83B7\u53D6\u72B6\u6001\u53D8\u5316\u524D\u540E\u7684\u503C\u3002</li><li>watchEffect \u5728\u7EC4\u4EF6\u521D\u59CB\u5316\u65F6\uFF0C\u7ACB\u5373\u6267\u884C\u4F20\u5165\u7684\u4E00\u4E2A\u526F\u4F5C\u7528\u51FD\u6570\u3002\u5E76\u4E14\u5728\u526F\u4F5C\u7528\u51FD\u6570\u4E2D\u4F7F\u7528\u7684\u5C5E\u6027\u6709\u53D8\u5316\u65F6\uFF0C\u4F1A\u91CD\u65B0\u6267\u884C\u3002\u9700\u8981\u6CE8\u610F\uFF0C\u5F53\u526F\u4F5C\u7528\u51FD\u6570\u4E2D\u6267\u884C\u7684\u51FD\u6570\uFF0C\u82E5\u8BE5\u51FD\u6570\u53C8\u6539\u53D8\u4E86\u54CD\u5E94\u5F0F\u7684\u6570\u636E\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u6B7B\u5FAA\u73AF\u95EE\u9898\u3002</li></ul><h3 id="\u4F7F\u7528-2-x-\u7684-store" tabindex="-1">\u4F7F\u7528 2.x \u7684 store <a class="header-anchor" href="#\u4F7F\u7528-2-x-\u7684-store" aria-hidden="true">#</a></h3><h3 id="vueblocks-vue-use-vuex" tabindex="-1">@vueblocks/vue-use-vuex <a class="header-anchor" href="#vueblocks-vue-use-vuex" aria-hidden="true">#</a></h3>',10),s=[i];function l(c,u,n,d,h,p){return a(),t("div",null,s)}var _=e(o,[["render",l]]);export{v as __pageData,_ as default};