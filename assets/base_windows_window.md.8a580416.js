import{_ as e,c as n,o as i,d as s}from"./app.79b189f8.js";const b='{"title":"Windows","description":"","frontmatter":{},"headers":[{"level":2,"title":"Window 10","slug":"window-10"},{"level":3,"title":"Windows 10 \u5404\u7248\u672C\u533A\u522B","slug":"windows-10-\u5404\u7248\u672C\u533A\u522B"},{"level":3,"title":"\u67E5\u770B\u7248\u672C\u65B9\u5F0F","slug":"\u67E5\u770B\u7248\u672C\u65B9\u5F0F"},{"level":2,"title":"U\u76D8\u8BFB\u5199\u6743\u9650","slug":"u\u76D8\u8BFB\u5199\u6743\u9650"},{"level":2,"title":"\u53CC\u7CFB\u7EDF","slug":"\u53CC\u7CFB\u7EDF"}],"relativePath":"base/windows/window.md","lastUpdated":1632636220660}',a={},r=s(`<h1 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-hidden="true">#</a></h1><h2 id="window-10" tabindex="-1">Window 10 <a class="header-anchor" href="#window-10" aria-hidden="true">#</a></h2><p><code>https://www.microsoft.com/zh-cn/software-download/windows10</code></p><p>consumer_editions \u7248\u672C\u5305\u542B\uFF1AHome(\u5BB6\u5EAD\u7248); Education(\u6559\u80B2\u7248) ; Professional(\u4E13\u4E1A\u7248)\uFF1B business_editions \u7248\u672C\u5305\u542B\uFF1AEducation(\u6559\u80B2\u7248); Enterprise (\u4F01\u4E1A\u7248); Professional(\u4E13\u4E1A\u7248)\uFF1B</p><h3 id="windows-10-\u5404\u7248\u672C\u533A\u522B" tabindex="-1">Windows 10 \u5404\u7248\u672C\u533A\u522B <a class="header-anchor" href="#windows-10-\u5404\u7248\u672C\u533A\u522B" aria-hidden="true">#</a></h3><ul><li>\u5BB6\u5EAD\u7248(Home)\uFF1A\u4F9B\u5BB6\u5EAD\u7528\u6237\u4F7F\u7528\uFF0C\u65E0\u6CD5\u52A0\u5165Active Directory\u548CAzure AD\uFF0C\u4E0D\u5141\u8BB8\u8FDC\u7A0B\u94FE\u63A5</li><li>\u4E13\u4E1A\u7248(Professional)\uFF1A\u4F9B\u5C0F\u578B\u4F01\u4E1A\u4F7F\u7528 \u5728\u5BB6\u5EAD\u7248\u57FA\u7840\u4E0A\u589E\u52A0\u4E86\u57DF\u8D26\u53F7\u52A0\u5165\u3001bitlocker\u3001\u4F01\u4E1A\u5546\u5E97\u7B49\u529F\u80FD</li><li>\u4F01\u4E1A\u7248(Enterprise): \u4F9B\u4E2D\u5927\u578B\u4F01\u4E1A\u4F7F\u7528 \u5728\u4E13\u4E1A\u7248\u57FA\u7840\u4E0A\u589E\u52A0\u4E86DirectAccess\uFF0CAppLocker\u7B49\u9AD8\u7EA7\u4F01\u4E1A\u529F\u80FD</li><li>\u6559\u80B2\u7248(Education): \u4F9B\u5B66\u6821\u4F7F\u7528 (\u5B66\u6821\u804C\u5458, \u7BA1\u7406\u4EBA\u5458, \u8001\u5E08\u548C\u5B66\u751F) \u5176\u529F\u80FD\u57FA\u672C\u548C\u4F01\u4E1A\u7248\u7684\u4E00\u6837</li><li>LTSB\u7248: \u65E0Edge\u6D4F\u89C8\u5668\u3001\u5C0F\u5A1C\uFF0C\u65E0\u78C1\u8D34\uFF0C\u53EF\u9009\u662F\u5426\u4E0B\u8F7D\u548C\u5B89\u88C5\u8865\u4E01\uFF0C\u5176\u5B83\u7248\u90FD\u4E0D\u80FD\u81EA\u9009\u8865\u4E01</li><li>N\u7248: \u5E26\u201CN\u201D\u7684\u7248\u672C\u76F8\u5F53\u4E8E\u9609\u5272\u7248\uFF0C\u79FB\u9664\u4E86Windows Media Player\uFF0C\u51E0\u4E4E\u7528\u4E0D\u5230N\u7248\u3002</li></ul><h3 id="\u67E5\u770B\u7248\u672C\u65B9\u5F0F" tabindex="-1">\u67E5\u770B\u7248\u672C\u65B9\u5F0F <a class="header-anchor" href="#\u67E5\u770B\u7248\u672C\u65B9\u5F0F" aria-hidden="true">#</a></h3><ul><li><code>Win+R =&gt; winver</code></li><li><code>Cmd =&gt; systeminfo | findstr Build</code></li></ul><h2 id="u\u76D8\u8BFB\u5199\u6743\u9650" tabindex="-1">U\u76D8\u8BFB\u5199\u6743\u9650 <a class="header-anchor" href="#u\u76D8\u8BFB\u5199\u6743\u9650" aria-hidden="true">#</a></h2><div class="language-"><pre><code>\u65B9\u5F0F1\uFF1Agpedit.msc
\u5728\u5F00\u59CB\u83DC\u5355\u6216\u8FD0\u884C\u4E2D\u8F93\u5165gpedit.msc\uFF0C\u5C55\u5F00 \u8BA1\u7B97\u673A\u914D\u7F6E - \u7BA1\u7406\u6A21\u677F - \u7CFB\u7EDF\uFF0C\u9009\u62E9\u7CFB\u7EDF\u4E0B\u7684\u201C\u53EF\u79FB\u52A8\u5B58\u50A8\u8BBF\u95EE\u201D
\u65B9\u5F0F2\uFF1Aregedit
1.HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows
2.\u53F3\u952E\u70B9\u51FBWindows\uFF0C\u9009\u62E9 \u65B0\u5EFA - \u9879\uFF0C\u547D\u540D\u4E3ARemovableStorageDevices\uFF0C\u5728RemovableStorageDevices\u4E0B\u65B0\u5EFA\u9879\uFF0C\u547D\u540D\u4E3A{53f5630d-b6bf-11d0-94f2-00a0c91efb8b}
3.\u53F3\u952E\u70B9\u51FB{53f5630d-b6bf-11d0-94f2-00a0c91efb8b}\uFF0C\u9009\u62E9 \u65B0\u5EFA - DWORD\uFF0832\u4F4D\uFF09\u503C\uFF0C\u4E0B\u9762\u662F\u5404\u540D\u79F0\u6240\u5BF9\u5E94\u7684\u4F5C\u7528
Deny_Execute - \u7981\u6B62\u6267\u884C\u6743\u9650
Deny_Read - \u7981\u6B62\u8BFB\u53D6\u6743\u9650
Deny_Write - \u7981\u6B62\u5199\u5165\u6743\u9650
\u9700\u8981\u7981\u6B62\u54EA\u4E2A\u6743\u9650\uFF0C\u521B\u5EFA\u5BF9\u5E94\u540D\u79F0\u7684\u503C\uFF0C\u4FEE\u6539\u6570\u636E\u4E3A 1 \u5373\u53EF\u3002
\u82E5\u8981\u6062\u590D\uFF0C\u53EF\u5C06\u5B83\u4EEC\u7684\u6570\u636E\u4FEE\u6539\u4E3A 0\uFF0C\u6216\u76F4\u63A5\u5220\u9664\u65B0\u5EFA\u7684\u6CE8\u518C\u8868\u9879
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u53CC\u7CFB\u7EDF" tabindex="-1">\u53CC\u7CFB\u7EDF <a class="header-anchor" href="#\u53CC\u7CFB\u7EDF" aria-hidden="true">#</a></h2><ul><li>diskgenius: <a href="https://www.diskgenius.cn/" target="_blank" rel="noopener noreferrer">https://www.diskgenius.cn/</a></li><li>transmac</li><li>\u9ED1\u679C\u5C0F\u5175</li><li>\u56DB\u53F6\u8349</li></ul>`,12),l=[r];function d(o,t,c,p,u,h){return i(),n("div",null,l)}var _=e(a,[["render",d]]);export{b as __pageData,_ as default};
