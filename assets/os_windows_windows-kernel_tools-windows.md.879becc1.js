import{_ as s,c as t,o as e,d as n}from"./app.79b189f8.js";const _='{"title":"\u7CFB\u7EDF\u5DE5\u5177","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u7CFB\u7EDF\u5DE5\u5177","slug":"\u7CFB\u7EDF\u5DE5\u5177"}],"relativePath":"os/windows/windows-kernel/tools-windows.md","lastUpdated":1639844872000}',l={},a=n(`<h3 id="\u7CFB\u7EDF\u5DE5\u5177" tabindex="-1">\u7CFB\u7EDF\u5DE5\u5177 <a class="header-anchor" href="#\u7CFB\u7EDF\u5DE5\u5177" aria-hidden="true">#</a></h3><ul><li><p>cmd.exe</p></li><li><p>powershell.exe</p></li><li><p>msinfo32</p></li><li><p>winver</p></li><li><p>systeminfo</p></li><li><p>WINDOWS\u7684\u8F6F\u4EF6\u6388\u6743\u7BA1\u7406\u5DE5\u5177slmgr.vbs</p></li></ul><h4 id="slmgr-vbs" tabindex="-1">slmgr.vbs <a class="header-anchor" href="#slmgr-vbs" aria-hidden="true">#</a></h4><p>slmgr\u5168\u79F0Software License Manager\uFF0C\u5373\u8F6F\u4EF6\u8BB8\u53EF\u8BC1\u7BA1\u7406\u3002</p><ul><li>SLMGR\u662F\u7BA1\u7406\u7CFB\u7EDF\u6FC0\u6D3B\u548C\u5BC6\u94A5\u3001\u8BC1\u4E66\u7684\u4E3B\u8981\u7EC4\u4EF6\u3002</li><li>SLMGR\u7684\u6240\u6709\u529F\u80FD\u90FD\u662F\u901A\u8FC7slmgr.vbs\u63D0\u4F9B\u7684\uFF0C\u91C7\u7528VBScript\u547D\u4EE4\u884C\u65B9\u5F0F\u6267\u884C\u3002</li><li>slmgr.vbs\u5B58\u5728\u4E8E\u7CFB\u7EDFSystem32\u76EE\u5F55</li></ul><div class="language-sh line-numbers-mode"><pre><code>	slmgr.vbs -?
	slmgr.vbs /dlv						# \u663E\u793A\u8BE6\u7EC6\u7684\u6FC0\u6D3B\u4FE1\u606F
	slmgr.vbs -dli						# \u663E\u793A\u7B80\u5355\u7684\u6FC0\u6D3B\u4FE1\u606F
	slmgr.vbs -xpr						# \u67E5\u770B\u5F53\u524D\u8BB8\u53EF\u8BC1\u72B6\u6001\u7684\u622A\u6B62\u65E5\u671F
	slmgr.vbs -cpky						# \u4ECE\u6CE8\u518C\u8868\u4E2D\u6E05\u9664\u4EA7\u54C1\u5BC6\u94A5\u4FE1\u606F
	slmgr.vbs -rearm					# \u5EF6\u957F\u8BD5\u7528\u671F30\u5929
	slmgr.vbs -ilc						# \u5BFC\u5165OEM\u8BC1\u4E66
	slmgr.vbs -upk						# \u5378\u8F7D\u5F53\u524D\u4EA7\u54C1\u5BC6\u94A5\uFF0C\u91CD\u542F\u7535\u8111\u4E4B\u540E\u7CFB\u7EDF\u5C06\u91CD\u5F52\u672A\u6FC0\u6D3B\u72B6\u6001
	slmgr /ipk x-x-x-x-x			# install product key, \u5B89\u88C5\u4EA7\u54C1\u5BC6\u94A5\uFF0C\u4E5F\u53EF\u4EE5\u8BF4\u662F\u66FF\u6362\u73B0\u6709\u5BC6\u94A5
	slmgr /skms x.x.x.x				# set kms(\u5BC6\u94A5\u7BA1\u7406\u670D\u52A1)\uFF0C \u8BBE\u7F6EKMS\u670D\u52A1\u5668IP\u5730\u5740\u53CA\u7AEF\u53E3
	slmgr /ato								# at: attempt online\uFF0C\u5C1D\u8BD5\u5728\u7EBF\u6FC0\u6D3BWindows
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,6),r=[a];function i(p,m,c,o,b,d){return e(),t("div",null,r)}var v=s(l,[["render",i]]);export{_ as __pageData,v as default};
