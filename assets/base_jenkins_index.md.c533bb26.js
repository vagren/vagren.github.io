import{_ as n,c as e,o as s,d as a}from"./app.79b189f8.js";const m='{"title":"Jenkins","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installing Jenkins","slug":"installing-jenkins"}],"relativePath":"base/jenkins/index.md","lastUpdated":1642421109280}',r={},i=a(`<h1 id="jenkins" tabindex="-1"><a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer">Jenkins</a> <a class="header-anchor" href="#jenkins" aria-hidden="true">#</a></h1><h2 id="installing-jenkins" tabindex="-1"><a href="https://www.jenkins.io/doc/book/installing/" target="_blank" rel="noopener noreferrer">Installing Jenkins</a> <a class="header-anchor" href="#installing-jenkins" aria-hidden="true">#</a></h2><p><a href="https://www.jenkins.io/doc/book/installing/docker/" target="_blank" rel="noopener noreferrer">Docker (jenkins.io)</a></p><div class="language-sh line-numbers-mode"><pre><code># english
docker run --name jenkins-docker --rm --detach \\
  --privileged --network jenkins --network-alias docker \\
  --env DOCKER_TLS_CERTDIR=/certs \\
  --volume jenkins-docker-certs:/certs/client \\
  --volume jenkins-data:/var/jenkins_home \\
  --publish 2376:2376 docker:dind --storage-driver overlay2

# chinese
docker run \\
  -u root \\
  --rm \\
  -d \\
  -p 8080:8080 \\
  -p 50000:50000 \\
  -v jenkins-data:/var/jenkins_home \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  jenkinsci/blueocean
  
docker run \\
  --rm \\
  -u root \\
  -p 8080:8080 \\
  -v jenkins-data:/var/jenkins_home \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -v &quot;$HOME&quot;:/home \\
  jenkinsci/blueocean
  
# 5: \uFF08\u53EF\u9009\uFF0C\u4F46\u5F3A\u70C8\u5EFA\u8BAE\uFF09\u6620\u5C04\u5728\u5BB9\u5668\u4E2D\u7684\`/var/jenkins_home\` \u76EE\u5F55\u5230\u5177\u6709\u540D\u5B57 jenkins-data \u7684volume\u3002 
# 6: 	\u53EF\u9009, /var/run/docker.sock \u8868\u793ADocker\u5B88\u62A4\u7A0B\u5E8F\u901A\u8FC7\u5176\u76D1\u542C\u7684\u57FA\u4E8EUnix\u7684\u5957\u63A5\u5B57\u3002 \u8BE5\u6620\u5C04\u5141\u8BB8 jenkinsci/blueocean \u5BB9\u5668\u4E0EDocker\u5B88\u62A4\u8FDB\u7A0B\u901A\u4FE1\uFF0C \u5982\u679C jenkinsci/blueocean \u5BB9\u5668\u9700\u8981\u5B9E\u4F8B\u5316\u5176\u4ED6Docker\u5BB9\u5668\uFF0C\u5219\u8BE5\u5B88\u62A4\u8FDB\u7A0B\u662F\u5FC5\u9700\u7684\u3002 \u5982\u679C\u8FD0\u884C\u58F0\u660E\u5F0F\u7BA1\u9053\uFF0C\u5176\u8BED\u6CD5\u5305\u542Bagent\u90E8\u5206\u7528 docker \u4F8B\u5982\uFF0C agent { docker { ... } } \u6B64\u9009\u9879\u662F\u5FC5\u9700\u7684\u3002 


</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p><code>agent</code> \u6307\u4EE4\u544A\u8BC9Jenkins\u5728\u54EA\u91CC\u4EE5\u53CA\u5982\u4F55\u6267\u884CPipeline\u6216\u8005Pipeline\u5B50\u96C6\u3002\u6240\u6709\u7684Pipeline\u90FD\u9700\u8981 <code>agent</code> \u6307\u4EE4\u3002</p>`,5),l=[i];function c(p,o,b,t,d,k){return s(),e("div",null,l)}var _=n(r,[["render",c]]);export{m as __pageData,_ as default};
