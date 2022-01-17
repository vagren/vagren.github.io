import{_ as n,c as s,o as a,d as p}from"./app.79b189f8.js";const d='{"title":"Rule \u4EE3\u7801\u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u826F\u597D\u7684\u4EE3\u7801\u987A\u5E8F","slug":"\u826F\u597D\u7684\u4EE3\u7801\u987A\u5E8F"},{"level":3,"title":"\u5355\u6587\u4EF6\u7EC4\u4EF6\u9876\u7EA7\u5143\u7D20\u987A\u5E8F","slug":"\u5355\u6587\u4EF6\u7EC4\u4EF6\u9876\u7EA7\u5143\u7D20\u987A\u5E8F"},{"level":3,"title":"\u7EC4\u4EF6\u9009\u9879\u9ED8\u8BA4\u987A\u5E8F","slug":"\u7EC4\u4EF6\u9009\u9879\u9ED8\u8BA4\u987A\u5E8F"},{"level":3,"title":"\u5143\u7D20\u7279\u6027\u7684\u987A\u5E8F","slug":"\u5143\u7D20\u7279\u6027\u7684\u987A\u5E8F"}],"relativePath":"base/vue/rule.md","lastUpdated":1642421282940}',t={},e=p(`<h1 id="rule-\u4EE3\u7801\u89C4\u8303" tabindex="-1">Rule \u4EE3\u7801\u89C4\u8303 <a class="header-anchor" href="#rule-\u4EE3\u7801\u89C4\u8303" aria-hidden="true">#</a></h1><h2 id="\u826F\u597D\u7684\u4EE3\u7801\u987A\u5E8F" tabindex="-1">\u826F\u597D\u7684\u4EE3\u7801\u987A\u5E8F <a class="header-anchor" href="#\u826F\u597D\u7684\u4EE3\u7801\u987A\u5E8F" aria-hidden="true">#</a></h2><p>Vuejs \u5B98\u65B9\u63A8\u8350\u7684</p><h3 id="\u5355\u6587\u4EF6\u7EC4\u4EF6\u9876\u7EA7\u5143\u7D20\u987A\u5E8F" tabindex="-1">\u5355\u6587\u4EF6\u7EC4\u4EF6\u9876\u7EA7\u5143\u7D20\u987A\u5E8F <a class="header-anchor" href="#\u5355\u6587\u4EF6\u7EC4\u4EF6\u9876\u7EA7\u5143\u7D20\u987A\u5E8F" aria-hidden="true">#</a></h3><h3 id="\u7EC4\u4EF6\u9009\u9879\u9ED8\u8BA4\u987A\u5E8F" tabindex="-1">\u7EC4\u4EF6\u9009\u9879\u9ED8\u8BA4\u987A\u5E8F <a class="header-anchor" href="#\u7EC4\u4EF6\u9009\u9879\u9ED8\u8BA4\u987A\u5E8F" aria-hidden="true">#</a></h3><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">let</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// - \u526F\u4F5C\u7528</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token comment">// - \u5168\u5C40\u611F\u77E5</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token comment">// - \u7EC4\u4EF6\u7C7B\u578B</span>
  <span class="token literal-property property">functional</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token comment">// - \u6A21\u7248\u4FEE\u6539\u5668</span>
  <span class="token literal-property property">delimiters</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">comments</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token comment">// - \u6A21\u7248\u4F9D\u8D56</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token comment">// - \u7EC4\u5408</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token comment">// - \u63A5\u53E3</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">propsData</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token comment">// - \u672C\u5730\u72B6\u6001</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// - \u4E8B\u4EF6</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">activated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">deactivated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeDestory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// - \u975E\u54CD\u5E94\u5F0F\u5C5E\u6027</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// - \u6E32\u67D3</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">renderError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h3 id="\u5143\u7D20\u7279\u6027\u7684\u987A\u5E8F" tabindex="-1">\u5143\u7D20\u7279\u6027\u7684\u987A\u5E8F <a class="header-anchor" href="#\u5143\u7D20\u7279\u6027\u7684\u987A\u5E8F" aria-hidden="true">#</a></h3><ul><li>is</li><li>v-for</li><li>v-if</li><li>v-else-if</li><li>v-else</li><li>v-show</li><li>v-cloak</li><li>v-pre</li><li>v-once</li><li>id</li><li>ref</li><li>key</li><li>slot</li><li>v-model</li><li>other props</li><li>v-on</li><li>v-html</li><li>v-text</li></ul>`,8),o=[e];function l(c,r,u,i,k,b){return a(),s("div",null,o)}var y=n(t,[["render",l]]);export{d as __pageData,y as default};