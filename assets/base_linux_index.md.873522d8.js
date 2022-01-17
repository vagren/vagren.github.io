import{_ as a,c as e,o as n,d as r}from"./app.79b189f8.js";const o='{"title":"Linux \u5305\u7BA1\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"RPM","slug":"rpm"},{"level":3,"title":"\u8F6F\u4EF6\u5305\u6765\u6E90","slug":"\u8F6F\u4EF6\u5305\u6765\u6E90"}],"relativePath":"base/linux/index.md","lastUpdated":1642421130160}',t={},s=r(`<h1 id="linux-\u5305\u7BA1\u7406" tabindex="-1">Linux \u5305\u7BA1\u7406 <a class="header-anchor" href="#linux-\u5305\u7BA1\u7406" aria-hidden="true">#</a></h1><table><thead><tr><th>Distribution</th><th>Format</th><th>Tool</th></tr></thead><tbody><tr><td>Redhat\u3001CentOS</td><td>.rpm</td><td>rpm, yum</td></tr><tr><td>Fedora</td><td>.rpm</td><td>rpm, dnf</td></tr><tr><td>Debian\u3001Ubuntu</td><td>.deb</td><td>apt, apt-cache, api-get, dpkg</td></tr><tr><td>SuSe</td><td>.rpm</td><td>rpm, East, zypper</td></tr></tbody></table><h2 id="rpm" tabindex="-1">RPM <a class="header-anchor" href="#rpm" aria-hidden="true">#</a></h2><p>rpm\uFF0C Red-Hat Package Manage/RPM Package Manager</p><div class="language-sh line-numbers-mode"><pre><code># install
rpm -ivh FileName.rpm

# query
rpm -ql PackageName
rpm -qi PackageName
rpm -qc PackageName

# update
rpm -Uvh FileName.rpm

# erase\uFF08\u5378\u8F7D\uFF09
rpm -e PackageName
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u8F6F\u4EF6\u5305\u6765\u6E90" tabindex="-1">\u8F6F\u4EF6\u5305\u6765\u6E90 <a class="header-anchor" href="#\u8F6F\u4EF6\u5305\u6765\u6E90" aria-hidden="true">#</a></h3><ul><li>\u91C7\u7528\u73B0\u6709\u7684RPM\u8F6F\u4EF6\u5305 <ul><li>\u53D1\u884C\u7248\u7684\u5B89\u88C5\u4ECB\u8D28</li><li>\u53D1\u884C\u7248\u7684\u8F6F\u4EF6\u4ED3\u5E93</li><li>\u8F6F\u4EF6\u5B98\u65B9\u7F51\u7AD9\u4E0B\u8F7D</li><li>\u7B2C\u4E09\u65B9\u7F51\u7AD9\u4E0B\u8F7D <ul><li>RPM Find</li><li>RPM Search</li><li>...</li></ul></li></ul></li><li>\u4F7F\u7528\u6E90\u4EE3\u7801\u8FDB\u884C\u7F16\u8BD1\u3001\u6253\u5305\u751F\u6210RPM\u8F6F\u4EF6\u5305</li></ul><h1 id="linux-\u5E38\u7528\u547D\u4EE4" tabindex="-1">Linux \u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#linux-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h1>`,8),l=[s];function i(d,p,c,m,u,h){return n(),e("div",null,l)}var _=a(t,[["render",i]]);export{o as __pageData,_ as default};
