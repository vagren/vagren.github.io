import{_ as e,c as a,o as i,d as r}from"./app.79b189f8.js";const u='{"title":"\u534F\u8BAE","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u900F\u89C6 HTTP \u534F\u8BAE - \u7F57\u5251\u950B\uFF08Chrono\uFF09","slug":"\u900F\u89C6-http-\u534F\u8BAE-\u7F57\u5251\u950B\uFF08chrono\uFF09"}],"relativePath":"net/index 2.md","lastUpdated":1640451298000}',t={},l=r('<h1 id="\u534F\u8BAE" tabindex="-1">\u534F\u8BAE <a class="header-anchor" href="#\u534F\u8BAE" aria-hidden="true">#</a></h1><p>\u53EF\u9760\u3001\u5B8C\u6574</p><p>\u9AD8\u53EF\u7528()\u3001\u9AD8\u6027\u80FD()\u3001\u5B89\u5168</p><p>\u7EBF\u4E0A\u5316\u3001\u914D\u7F6E\u5316\u3001\u667A\u80FD\u5316</p><h3 id="\u900F\u89C6-http-\u534F\u8BAE-\u7F57\u5251\u950B\uFF08chrono\uFF09" tabindex="-1"><a href="https://time.geekbang.org/column/intro/100029001?tab=catalog" target="_blank" rel="noopener noreferrer">\u900F\u89C6 HTTP \u534F\u8BAE - \u7F57\u5251\u950B\uFF08Chrono\uFF09</a> <a class="header-anchor" href="#\u900F\u89C6-http-\u534F\u8BAE-\u7F57\u5251\u950B\uFF08chrono\uFF09" aria-hidden="true">#</a></h3><h4 id="_01-\u65F6\u52BF\u4E0E\u82F1\u96C4\uFF1Ahttp\u7684\u524D\u4E16\u4ECA\u751F" tabindex="-1">01 | \u65F6\u52BF\u4E0E\u82F1\u96C4\uFF1AHTTP\u7684\u524D\u4E16\u4ECA\u751F <a class="header-anchor" href="#_01-\u65F6\u52BF\u4E0E\u82F1\u96C4\uFF1Ahttp\u7684\u524D\u4E16\u4ECA\u751F" aria-hidden="true">#</a></h4><p>ARPA \u7F51\uFF1A\u5B83\u6709\u56DB\u4E2A\u5206\u5E03\u5728\u5404\u5730\u7684\u8282\u70B9\uFF0C\u88AB\u8BA4\u4E3A\u662F\u5982\u4ECA\u4E92\u8054\u7F51\u7684\u201C\u59CB\u7956\u201D\u3002</p><p>1989 \u5E74\uFF0C\u4EFB\u804C\u4E8E\u6B27\u6D32\u6838\u5B50\u7814\u7A76\u4E2D\u5FC3\uFF08CERN\uFF09\u7684\u8482\u59C6\xB7\u4F2F\u7EB3\u65AF - \u674E\uFF08Tim Berners-Lee\uFF09\u53D1\u8868\u4E86\u4E00\u7BC7\u8BBA\u6587\uFF0C\u63D0\u51FA\u4E86\u5728\u4E92\u8054\u7F51\u4E0A\u6784\u5EFA\u8D85\u94FE\u63A5\u6587\u6863\u7CFB\u7EDF\u7684\u6784\u60F3\u3002\u8FD9\u7BC7\u8BBA\u6587\u4E2D\u4ED6\u786E\u7ACB\u4E86\u4E09\u9879\u5173\u952E\u6280\u672F\u3002</p><ul><li>URI\uFF1A\u5373\u7EDF\u4E00\u8D44\u6E90\u6807\u8BC6\u7B26\uFF0C\u4F5C\u4E3A\u4E92\u8054\u7F51\u4E0A\u8D44\u6E90\u7684\u552F\u4E00\u8EAB\u4EFD\uFF1B</li><li>HTML\uFF1A\u5373\u8D85\u6587\u672C\u6807\u8BB0\u8BED\u8A00\uFF0C\u63CF\u8FF0\u8D85\u6587\u672C\u6587\u6863\uFF1B</li><li>HTTP\uFF1A\u5373\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE\uFF0C\u7528\u6765\u4F20\u8F93\u8D85\u6587\u672C\u3002</li></ul><p>\u8482\u59C6\u628A\u8FD9\u4E2A\u7CFB\u7EDF\u79F0\u4E3A\u201C\u4E07\u7EF4\u7F51\u201D\uFF08World Wide Web\uFF09\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u73B0\u5728\u6240\u719F\u77E5\u7684 Web\u3002</p><h5 id="http-0-9-20-\u4E16\u7EAA-90-\u5E74\u4EE3\u521D\u671F" tabindex="-1">HTTP/0.9 - 20 \u4E16\u7EAA 90 \u5E74\u4EE3\u521D\u671F <a class="header-anchor" href="#http-0-9-20-\u4E16\u7EAA-90-\u5E74\u4EE3\u521D\u671F" aria-hidden="true">#</a></h5><p>\u7ED3\u6784\u6BD4\u8F83\u7B80\u5355\uFF0C\u4E3A\u4E86\u4FBF\u4E8E\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u5904\u7406\uFF0C\u5B83\u91C7\u7528\u4E86\u7EAF\u6587\u672C\u683C\u5F0F\u3002\u8482\u59C6\xB7\u4F2F\u7EB3\u65AF - \u674E\u6700\u521D\u8BBE\u60F3\u7684\u7CFB\u7EDF\u91CC\u7684\u6587\u6863\u90FD\u662F\u53EA\u8BFB\u7684\uFF0C\u6240\u4EE5\u53EA\u5141\u8BB8\u7528\u201CGET\u201D\u52A8\u4F5C\u4ECE\u670D\u52A1\u5668\u4E0A\u83B7\u53D6 HTML \u6587\u6863\uFF0C\u5E76\u4E14\u5728\u54CD\u5E94\u8BF7\u6C42\u4E4B\u540E\u7ACB\u5373\u5173\u95ED\u8FDE\u63A5\uFF0C\u529F\u80FD\u975E\u5E38\u6709\u9650\u3002</p><h5 id="http-1-0-1996-\u5E74\u6B63\u5F0F\u53D1\u5E03" tabindex="-1">HTTP/1.0 - 1996 \u5E74\u6B63\u5F0F\u53D1\u5E03 <a class="header-anchor" href="#http-1-0-1996-\u5E74\u6B63\u5F0F\u53D1\u5E03" aria-hidden="true">#</a></h5><ul><li>\u589E\u52A0\u4E86 HEAD\u3001POST \u7B49\u65B0\u65B9\u6CD5\uFF1B</li><li>\u589E\u52A0\u4E86\u54CD\u5E94\u72B6\u6001\u7801\uFF0C\u6807\u8BB0\u53EF\u80FD\u7684\u9519\u8BEF\u539F\u56E0\uFF1B</li><li>\u5F15\u5165\u4E86\u534F\u8BAE\u7248\u672C\u53F7\u6982\u5FF5\uFF1B</li><li>\u5F15\u5165\u4E86 HTTP Header\uFF08\u5934\u90E8\uFF09\u7684\u6982\u5FF5\uFF0C</li><li>\u8BA9 HTTP \u5904\u7406\u8BF7\u6C42\u548C\u54CD\u5E94\u66F4\u52A0\u7075\u6D3B\uFF1B\u4F20\u8F93\u7684\u6570\u636E\u4E0D\u518D\u4EC5\u9650\u4E8E\u6587\u672C\u3002</li></ul><h5 id="http-1-1-1999-\u53D1\u5E03\u4E86-rfc2616" tabindex="-1">HTTP/1.1 - 1999 \u53D1\u5E03\u4E86 RFC2616 <a class="header-anchor" href="#http-1-1-1999-\u53D1\u5E03\u4E86-rfc2616" aria-hidden="true">#</a></h5><ul><li>\u589E\u52A0\u4E86 PUT\u3001DELETE \u7B49\u65B0\u7684\u65B9\u6CD5\uFF1B</li><li>\u589E\u52A0\u4E86\u7F13\u5B58\u7BA1\u7406\u548C\u63A7\u5236\uFF1B</li><li>\u660E\u786E\u4E86\u8FDE\u63A5\u7BA1\u7406\uFF0C\u5141\u8BB8\u6301\u4E45\u8FDE\u63A5\uFF1B</li><li>\u5141\u8BB8\u54CD\u5E94\u6570\u636E\u5206\u5757\uFF08chunked\uFF09\uFF0C\u5229\u4E8E\u4F20\u8F93\u5927\u6587\u4EF6\uFF1B</li><li>\u5F3A\u5236\u8981\u6C42 Host \u5934\uFF0C\u8BA9\u4E92\u8054\u7F51\u4E3B\u673A\u6258\u7BA1\u6210\u4E3A\u53EF\u80FD\u3002</li></ul><blockquote><p>RFC wiki: <a href="https://zh.wikipedia.org/wiki/RFC" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/RFC</a> RFC: <a href="https://www.rfc-editor.org/" target="_blank" rel="noopener noreferrer">https://www.rfc-editor.org/</a> \u8BF7\u6C42\u610F\u89C1\u7A3F\uFF08\u82F1\u8BED\uFF1ARequest for Comments\uFF0C\u7F29\u5199\uFF1ARFC\uFF09 \u662F\u7531\u4E92\u8054\u7F51\u5DE5\u7A0B\u4EFB\u52A1\u7EC4\uFF08IETF\uFF09\u53D1\u5E03\u7684\u4E00\u7CFB\u5217\u5907\u5FD8\u5F55\u3002 \u76EE\u524DRFC\u6587\u4EF6\u662F\u7531\u4E92\u8054\u7F51\u534F\u4F1A\uFF08ISOC\uFF09\u8D5E\u52A9\u53D1\u884C\u3002</p></blockquote><h5 id="http-2-0" tabindex="-1">HTTP/2.0 <a class="header-anchor" href="#http-2-0" aria-hidden="true">#</a></h5><ul><li>\u4E8C\u8FDB\u5236\u534F\u8BAE\uFF0C\u4E0D\u518D\u662F\u7EAF\u6587\u672C\uFF1B</li><li>\u53EF\u53D1\u8D77\u591A\u4E2A\u8BF7\u6C42\uFF0C\u5E9F\u5F03\u4E86 1.1 \u91CC\u7684\u7BA1\u9053\uFF1B</li><li>\u4F7F\u7528\u4E13\u7528\u7B97\u6CD5\u538B\u7F29\u5934\u90E8\uFF0C\u51CF\u5C11\u6570\u636E\u4F20\u8F93\u91CF\uFF1B</li><li>\u5141\u8BB8\u670D\u52A1\u5668\u4E3B\u52A8\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\u6570\u636E\uFF1B</li><li>\u589E\u5F3A\u4E86\u5B89\u5168\u6027\uFF0C\u201C\u4E8B\u5B9E\u4E0A\u201D\u8981\u6C42\u52A0\u5BC6\u901A\u4FE1\u3002</li></ul><h5 id="http-3" tabindex="-1">HTTP/3 <a class="header-anchor" href="#http-3" aria-hidden="true">#</a></h5><h4 id="_02-http\u662F\u4EC0\u4E48\uFF1Fhttp\u53C8\u4E0D\u662F\u4EC0\u4E48\uFF1F" tabindex="-1">02 | HTTP\u662F\u4EC0\u4E48\uFF1FHTTP\u53C8\u4E0D\u662F\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#_02-http\u662F\u4EC0\u4E48\uFF1Fhttp\u53C8\u4E0D\u662F\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h4><h4 id="_05-\u5E38\u8BF4\u7684\u201C\u56DB\u5C42\u201D\u548C\u201C\u4E03\u5C42\u201D\u5230\u5E95\u662F\u4EC0\u4E48\uFF1F\u201C\u4E94\u5C42\u201D\u201C\u516D\u5C42\u201D\u54EA\u53BB\u4E86\uFF1F" tabindex="-1">05 | \u5E38\u8BF4\u7684\u201C\u56DB\u5C42\u201D\u548C\u201C\u4E03\u5C42\u201D\u5230\u5E95\u662F\u4EC0\u4E48\uFF1F\u201C\u4E94\u5C42\u201D\u201C\u516D\u5C42\u201D\u54EA\u53BB\u4E86\uFF1F <a class="header-anchor" href="#_05-\u5E38\u8BF4\u7684\u201C\u56DB\u5C42\u201D\u548C\u201C\u4E03\u5C42\u201D\u5230\u5E95\u662F\u4EC0\u4E48\uFF1F\u201C\u4E94\u5C42\u201D\u201C\u516D\u5C42\u201D\u54EA\u53BB\u4E86\uFF1F" aria-hidden="true">#</a></h4><p>TCP/IP \u534F\u8BAE\u662F\u4E00\u4E2A\u201C\u6709\u5C42\u6B21\u7684\u534F\u8BAE\u6808\u201D</p><p>\u56DB\u5C42\u8D1F\u8F7D\u5747\u8861\u201D\u201C\u4E03\u5C42\u8D1F\u8F7D\u5747\u8861\u201D \u201C\u4E8C\u5C42\u8F6C\u53D1\u201D\u201C\u4E09\u5C42\u8DEF\u7531\u201D</p><ul><li>TCP/IP \u7F51\u7EDC\u5206\u5C42\u6A21\u578B <ul><li>link layer, frame</li><li>internet layer, package</li><li>transport layer, segment</li><li>application layer, message</li></ul></li><li>OSI \u7F51\u7EDC\u5206\u5C42\u6A21\u578B <ul><li>L1: physical layer</li><li>L2: data link layer</li><li>L3: network layer</li><li>L4: transport layer</li><li>L5: session layer</li><li>L6: presentation layer</li><li>L7: application layer</li></ul></li></ul>',25),h=[l];function n(d,o,p,s,c,T){return i(),a("div",null,h)}var f=e(t,[["render",n]]);export{u as __pageData,f as default};
