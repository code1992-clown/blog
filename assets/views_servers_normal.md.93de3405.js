import{_ as s,c as n,o as a,d as l}from"./app.8bb00f2e.js";const C=JSON.parse('{"title":"js\u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":2,"title":"js\u57FA\u7840","slug":"js\u57FA\u7840"},{"level":2,"title":"js\u6280\u5DE7","slug":"js\u6280\u5DE7"},{"level":2,"title":"css\u6280\u5DE7","slug":"css\u6280\u5DE7"},{"level":2,"title":"\u6742\u8C08","slug":"\u6742\u8C08"}],"relativePath":"views/servers/normal.md"}'),p={name:"views/servers/normal.md"},o=l(`<h2 id="js\u57FA\u7840" tabindex="-1">js\u57FA\u7840 <a class="header-anchor" href="#js\u57FA\u7840" aria-hidden="true">#</a></h2><ul><li>\u53D8\u91CF\u58F0\u660E\u548C\u53D8\u91CF\u8D4B\u503C</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u547D\u540D\u591A\u4E2A</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. \u52A8\u6001\u8BED\u8A00\uFF1A\u6839\u636E\u503C\u6765\u8BC6\u522B\u53D8\u91CF\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5F31\u7C7B\u578B\u8BED\u8A00</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. \u9759\u6001\u8BED\u8A00\uFF1A \u7F16\u8BD1\u578B\u8BED\u8A00\uFF0C\u5F3A\u7C7B\u578B\u8BED\u8A00</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6570\u636E\u7C7B\u578B</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">//\u539F\u59CB\u503C\uFF0C \u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF1A Number String Boolean null undefined Symbol Bigint</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u5F15\u7528\u503C\uFF0CObject,Array,Function,Date,RegExp \u7B49</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ul><li>\u6808\u5185\u5B58(Stack)\uFF0C\u5806\u5185\u5B58(Heap)</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">1.</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">\u6808\u5185\u5B58</span><span style="color:#A6ACCD;">(Stack): \u4E0D\u4F1A\u8DDF\u7740\u503C\u7684\u6539\u53D8\u800C\u6539\u53D8\uFF0C\u4FEE\u6539\u7684\u8BDD\uFF0C\u53C8\u5F00\u8F9F\u4E86\u4E00\u4E2A\u65B0\u7684\u7A7A\u95F4\uFF0C\u539F\u6765\u7684\u7A7A\u95F4\u4F1A\u4FDD\u7559\uFF0C\u5C06\u6765\u8981\u5360\u7528\u7684\u8BDD\uFF0C\u9700\u8981\u8FDB\u884C\u8986\u76D6\uFF1B</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2.</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">\u5806\u5185\u5B58</span><span style="color:#A6ACCD;">(Heap)</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">\u5F15\u7528\u7C7B\u578B\u7684\u6307\u9488\u5B58\u5728\u6808\u5185\u5B58</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#FFCB6B;">\u6307\u9488\u6307\u5411\u5806\u5185\u5B58</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#FFCB6B;">\u8FDB\u884C\u8D4B\u503C\u7684\u65F6\u5019</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#FFCB6B;">\u4F1A\u6307\u5411\u540C\u4E00\u4E2A\u6307\u9488</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">\u540C\u4E00\u5757\u5806\u5185\u5B58\u7A7A\u95F4</span></span>
<span class="line"></span></code></pre></div><ul><li>\u9519\u8BEF</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u8BED\u6CD5\u9519\u8BEF\uFF1A \u4EE3\u7801\u4E00\u884C\u90FD\u4E0D\u4F1A\u6267\u884C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u901A\u7528\u9519\u8BEF\uFF1A \u4F1A\u4E2D\u65AD\u6267\u884C\uFF0C\u4E4B\u524D\u6267\u884C\uFF0C\u540E\u9762\u4E0D\u6267\u884C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u811A\u672C\u5757\u4E0E\u811A\u672C\u5757\u9519\u8BEF\u4E0D\u76F8\u4E92\u5F71\u54CD</span></span>
<span class="line"></span></code></pre></div><ul><li>\u5224\u65AD\u6570\u636E\u7C7B\u578B</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">124</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// \u8FD9\u4E2A\u65B9\u6CD5\u5F88\u72EC\u7279\uFF0C\u9700\u8981\u7814\u7A76\u7814\u7A76</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// null: \u5386\u53F2\u9057\u7559\u95EE\u9898\uFF0C\u5F00\u59CB\u4E4B\u521D\u662F\u8868\u793A\u7A7A\u5BF9\u8C61(\u7A7A\u6307\u9488)\uFF0C2015\uFF0C\u63D0\u8BAE\u6539\u6210null\u7C7B\u578B\uFF0CECMA\u62D2\u7EDD(\u4EE3\u7801\u517C\u5BB9\u95EE\u9898),\u662F\u4E2Abug</span></span>
<span class="line"></span></code></pre></div><ul><li>\u8FD0\u7B97\u7B26 <ol><li>\u52A0\u6CD5: \u57FA\u672C\u6570\u636E\u7C7B\u578B +string = string</li><li>\u9664\u6CD5\uFF1A0/0, NaN(not a number),\u7C7B\u578B\u4E3Anumber; 1/0,Infinity,number\u7C7B\u578B</li><li>\u53D6\u4F59\uFF1A %</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5148\u6253\u5370\u540E\u8FD0\u7B97 ++ \u4F18\u5148\u7EA7\u611F\u89C9\u6BD4\u8D4B\u503C\u8FD0\u7B97\u7B26\u8FD8\u4F4E</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a) </span><span style="color:#676E95;font-style:italic;">//2</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>\u6BD4\u8F83\u8FD0\u7B97\u7B26,\u5B57\u7B26\u4E32\u4F1A\u6BD4\u8F83ASCII\u7801</li><li>NaN \u4E0E\u4EFB\u4F55\u503C\u90FD\u4E0D\u76F8\u7B49</li></ol></li><li>\u5FAA\u73AF</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// for \u5FAA\u73AF\u548C while\u5FAA\u73AF \u53EF\u4EE5\u76F8\u4E92\u8F6C\u6362</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">i</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;">(i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">i</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// break: \u4E2D\u6B62\u5FAA\u73AF\uFF0C\u8BA9\u5FAA\u73AF\u4E2D\u6B62\u7B49\u4EF7\u529F\u80FD\u662F\u9650\u5236\u5FAA\u73AF\u6761\u4EF6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// continue: \u8DF3\u8FC7\u5FAA\u73AF\u6761\u4EF6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5C0F\u6848\u4F8B</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">--;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// n\u6B21\u65B9</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">*=</span><span style="color:#F78C6C;">10</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//10\u7684n\u6B21\u5E42</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// num*=i // \u9636\u4E58</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(num)</span></span>
<span class="line"></span></code></pre></div><ul><li><p>\u7C7B\u578B\u8F6C\u6362</p><ol><li>\u663E\u5F0F\u7C7B\u578B\u8F6C\u6362</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Number: \u8F6C\u6570\u5B57 \u201Csdfas\u201D=&gt;NaN, true=&gt;1,false=&gt;0,null=&gt;0,undefined=&gt;NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1ss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">parseInt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 16</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">parseInt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 10</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">parseInt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">parseInt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">parseInt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 10</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">parseInt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">parseInt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">23a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// 23</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//\u8F6C\u6570\u5B57</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// String: \u8F6C\u5B57\u7B26\u4E32  null\u548Cundefined\u6CA1\u6709toString\u65B9\u6CD5\uFF0CtoString\u6709\u4E2A\u65B9\u6CD5\uFF0C\u8FDB\u5236</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Boolean: \u8F6C\u5E03\u5C14\u503C</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false </span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5168\u5C40\u7684isNaN,\u4F1A\u8FDB\u884C\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362=&gt;Number</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">isNaN</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log({}==!{})</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log([]==![])</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. \u539F\u59CB\u503C=&gt;\u539F\u59CB\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Number()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Number(undefined)) // NaN</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Number(null)) // 0    null\u7A7A\u6307\u9488\uFF0C\u5BF9\u8C61\u7C7B\u578B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Boolean()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Boolean(undefined)) // false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Boolean(null)) // false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Boolean(Infinity)) // true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// falsey(\u865A\u503C)\uFF1A null ,undefined,0(+0,-0),NaN,false,&#39;&#39; 6\u4E2A\u6216\u80057\u4E2A\uFF0C\u53EA\u6709\u8FD9\u51E0\u4E2A\u90FD\u662Ftrue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(typeof Infinity) // number \u65E0\u7A77\u5927</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Number(Infinity)); // Infinity</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. \u5BF9\u8C61=&gt;\u539F\u59CB\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5E03\u5C14\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Boolean([])) // true </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Boolean(Symbol())) // true </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Boolean(new Error())) // true </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Boolean({})) // true </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(typeof Symbol()) // symbol</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(typeof 1n) // bigint</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(typeof function(){}) // function</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(typeof Date); // function</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(typeof Date()); // string </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(typeof new Date()); // Object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6570\u5B57\u7C7B\u578B</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1. \u8C03\u7528valueOf\uFF0C\u5982\u679C\u662F\u539F\u59CB\u503C\uFF0C\u8FD4\u56DE\u539F\u59CB\u503C\uFF0C\u5426\u5219\u8D70toString,\u5982\u679C\u662F\u539F\u59CB\u503C\uFF0C\u8FD4\u56DE\uFF0C\u5426\u5219\u7EE7\u7EED\u6CBF\u7740\u539F\u578B\u94FE\u7F51\u4E0A\u627E</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">toString</span><span style="color:#89DDFF;">(){</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// return [] // \u8FD9\u4E2A\u4F1A\u62A5\u9519\uFF0C\u4E0D\u80FD\u91CD\u5199</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">44</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//44</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">valueOf</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// return 2 // console.log(Number(obj)) // 2</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// console.log(Number(obj)) // NaN</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Object.prototype.toString.call({}),&#39;ss&#39;)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Number(obj)) </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. valueOf ,\u503C\u662F\u539F\u59CB\u503C\uFF0CNumber\u5305\u88C5\u4EE5\u540E\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. \u4E0D\u662F\u539F\u59CB\u503C\uFF0C toString() \u662F\u539F\u59CB\u503C\uFF0CNumber\u5305\u88C5\u4EE5\u540E\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. toString \u8FD4\u56DE\u4E0D\u662F\u539F\u59CB\u503C\uFF0C\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Number</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">])) </span><span style="color:#676E95;font-style:italic;">// NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Number</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">])) </span><span style="color:#676E95;font-style:italic;">// 10</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Number</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)) </span><span style="color:#676E95;font-style:italic;">// NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// null undefined \u6CA1\u6709\u76F8\u5BF9\u5E94\u7684\u5305\u88C5\u7C7B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(null.toString()) // \u62A5\u9519</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log((12).toString()) // 12</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// String \u7B49\u4EF7\u4E8E \u201C\u201D + xxxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var test1 = {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     toString(){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         return 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     },</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     valueOf(){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//         return 33</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(&#39;&#39;+{}) // [object Object]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(String(test1)) // \u5BFB\u627E\u7684\u987A\u5E8F\u662FNumber\u76F8\u53CD\uFF0C\u5148\u8D70toString,\u7136\u540E\u8D70valueOf,\u5176\u4ED6\u5B8C\u5168\u4E00\u6837</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// function fn(){}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(String(fn)) // function fn(){}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(fn.toString()) // function fn(){}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Number(023)) // \u516B\u8FDB\u5236 19</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Number(&#39;124&#39;)) // 124</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Number(&#39;    124&#39;)) // 124</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Number(&#39;.124&#39;)) // 0.124</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Number(&#39;abc124&#39;)) // NaN</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Number(&#39; 2 4&#39;)) // NaN</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// parseInt parseFloat \u8FDB\u5236\u7684\u8303\u56F40--36</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(parseInt(&#39;11&#39;,0)) // 0 \u662F\u6309\u7167\u5341\u8FDB\u5236\u5904\u7406\u7684</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(parseInt(&#39;1&#39;,1)) // 1 NaN</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(parseInt(&#39;11&#39;,2)) // 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(parseInt(&#39;11&#39;,3)) // 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(parseInt(&#39;11&#39;,3)) // 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(parseInt(&#39;11&#39;,undefined)) // 11 \u8FDB\u5236\u4E0D\u5B58\u5728\u6309\u7167\u9ED8\u8BA4\u5341\u8FDB\u5236</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(parseInt(&#39;11&#39;,&#39;&#39;))// 11 \u8FDB\u5236\u4E0D\u5B58\u5728\u6309\u7167\u9ED8\u8BA4\u5341\u8FDB\u5236</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(parseInt(&#39;11&#39;,false))// 11 \u8FDB\u5236\u4E0D\u5B58\u5728\u6309\u7167\u9ED8\u8BA4\u5341\u8FDB\u5236</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u6D89\u53CA\u5E03\u5C14\u8F6C\u6362</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// if while switch &amp;&amp; || ! !! for(;;) ?:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6570\u5B57\u8F6C\u6362</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// + - * / % ~~ &lt;&lt; &gt;&gt; &amp; | ^</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// == !== &gt; &lt; &gt;= &lt;=</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u8BB0\u4F4F\u8F6CNumber</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u539F\u59CB\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(true == 1) // true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(&#39;1&#39; == true) // true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(&#39;1&#39; == 1) // true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(undefined == true) // false </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(null == 0) // false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(null == 1) // false </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(NaN == NaN) // false </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(null == undefined) //true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5F15\u7528\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log([1]==1) // true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log([&#39;1&#39;]==true) // true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log([]==false) // true</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">([]</span><span style="color:#89DDFF;">==!</span><span style="color:#A6ACCD;">[]) </span><span style="color:#676E95;font-style:italic;">//  0 == 0</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}=={}</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">//Nan == NaN</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. \u7C7B\u578B\u76F8\u540C\u4E0D\u7528\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. \u7279\u4F8B\uFF1A undefined == null \u53EA\u6709\u8FD9\u4E00\u4E2A \u548C\u89C4\u5219\u4E0D\u7B26</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//          NaN \u4E0E\u4EFB\u4F55\u503C\u90FD\u4E0D\u60F3\u7B49</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u51FD\u6570</p><ol><li>\u51FD\u6570\u5F0F\u7F16\u7A0B</li><li>\u9AD8\u5185\u805A\uFF0C\u4F4E\u8026\u5408 ---&gt; \u6A21\u5757\u7684\u5355\u4E00\u804C\u8D23</li><li>\u89E3\u8026\u5408 ----&gt; \u7528\u51FD\u6570\u53EF\u4EE5\u5F88\u597D\u7684\u89E3\u8026\u5408</li><li>\u51FD\u6570\u6700\u57FA\u672C\u7684\u5199\u6CD5 -----&gt; \u51FD\u6570\u58F0\u660E</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u51FD\u6570\u58F0\u660E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var fn = function(){} // \u8868\u8FBE\u5F0F \u5B57\u9762\u91CF\u7684\u65B9\u5F0F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> fn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){}</span><span style="color:#676E95;font-style:italic;">// \u533F\u540D\u51FD\u6570\u8868\u8FBE\u5F0F \u51FD\u6570\u5B57\u9762\u91CF</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> fn1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fnnn</span><span style="color:#89DDFF;">(){</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">// fnnn\u5916\u90E8\u4E0D\u53EF\u89C1\uFF0C\u4F1A\u88AB\u5FFD\u7565\uFF0C\u9012\u5F52\u53EF\u4EE5\u7528\u5230\uFF0C</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(fn</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name) </span><span style="color:#676E95;font-style:italic;">// fn</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>\u547D\u540D\u89C4\u5219: \u5C0F\u9A7C\u5CF0\u547D\u540D</li><li>\u5F62\u53C2\u548C\u5B9E\u53C2\u6570</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// \u83B7\u53D6\u5B9E\u53C2</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">arguments</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// arguments\u4F2A\u6570\u7EC4,\u53EF\u4EE5\u5FAA\u73AF</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// \u83B7\u53D6\u5F62\u53C2\u957F\u5EA6 2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4F8B\u5B50</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">arguments</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">sum</span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">sum</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4F8B\u5B502</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">100</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u53EF\u4EE5\u4FEE\u6539\u5B9E\u9645\u53C2\u6570\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]) </span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4F8B\u5B503</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">88</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// b\u4E3Aundefined</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">arguments</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(xxxx) </span><span style="color:#676E95;font-style:italic;">// \u62A5\u9519 xxxx \u4E0D\u5B58\u5728</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;">(xxx)) </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u603B\u7ED3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4F20\u5165\u503C\u7684\u53EF\u4EE5\u4FEE\u6539\uFF0C\u6CA1\u4F20\u5165\u7684\u65E0\u6CD5\u4FEE\u6539</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u51FD\u6570\uFF1A\u4E00\u4E2A\u56FA\u5B9A\u7684\u529F\u80FD\u6216\u7A0B\u5E8F\u6BB5\u88AB\u5C01\u88C5\u7684\u8FC7\u7A0B\u3002\u5B9E\u73B0\u4E00\u4E2A\u56FA\u5B9A\u7684\u529F\u80FD\u6216\u7A0B\u5E8F\uFF0C\u5728\u8FD9\u4E2A\u5C01\u88C5\u4F53\u4E2D\u9700\u8981\u4E00\u4E2A\u51FA\u53E3(\u8FD4\u56DE\u503C)\u548C\u5165\u53E3(\u53C2\u6570)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u9ED8\u8BA4\u503C\uFF1A\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C\u662Fundefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ol start="7"><li>\u9884\u7F16\u8BD1</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// Ao activation Object \u6D3B\u8DC3\u7684\u5BF9\u8C61\uFF0C\u51FD\u6570\u4E0A\u4E0B\u6587</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. \u5BFB\u627E\u884C\u53C2\u548C\u53D8\u91CF\u58F0\u660E</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. \u5B9E\u53C2\u503C\u8D4B\u503C\u7ED9\u884C\u53C2\uFF1B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3. \u627E\u51FD\u6570\u58F0\u660E\uFF0C\u8D4B\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4. \u6267\u884C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6697\u793A\u5168\u5C40\u53D8\u91CF</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">b) </span><span style="color:#676E95;font-style:italic;">//a = window.a  b=window.b</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">fn</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a)</span><span style="color:#676E95;font-style:italic;">//\u62A5\u9519 b\u4E3A\u5168\u5C40\u53D8\u91CF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4F8B\u5B50</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// f a() {}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#676E95;font-style:italic;">//1</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;">)</span><span style="color:#676E95;font-style:italic;">// fn(){}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">d</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Ao { // \u51FD\u6570\u533A\u57DF\u4E0A\u4E0B\u95EE</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// a: undefined,2:fn, 1</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// b:undefiined</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//d:fn</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a) </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//GO { \u7B49\u4EF7\u4E8E window</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 1. \u5B9E\u53C2\u503C\u8D4B\u503C\u7ED9\u884C\u53C2\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 2. \u627E\u51FD\u6570\u58F0\u660E\uFF0C\u8D4B\u503C</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 3. \u6267\u884C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// undefined AO\u91CC\u6709\uFF0C\u4E0D\u4F1A\u5F80GO\u91CC\u627E</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//\u4F1A\u5728AO\u91CC\u53D8\u91CF\u63D0\u5347</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u7EE7\u7EED\u8D70Ao</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">fn</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> (window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// ()\u7684\u4F18\u5148\u7EA7\u6700\u9AD8</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">a)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u603B\u7ED3\uFF1A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. \u51FD\u6570\u58F0\u660E\u6574\u4F53\u63D0\u5347\uFF0C\u53D8\u91CF\u53EA\u6709\u58F0\u660E\u63D0\u5347\uFF0C\u8D4B\u503C\u662F\u4E0D\u63D0\u5347</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u4F5C\u7528\u57DF\u548C\u4F5C\u7528\u57DF\u94FE</p><ol><li>\u51FD\u6570\u4E5F\u662F\u4E00\u79CD\u5BF9\u8C61\u7C7B\u578B</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name) </span><span style="color:#676E95;font-style:italic;">// test</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length) </span><span style="color:#676E95;font-style:italic;">// 0</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u95ED\u5305</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u5F53\u5185\u90E8\u51FD\u6570\u88AB\u8FD4\u56DE\u5230\u5916\u90E8\u5E76\u4FDD\u5B58\u65F6\uFF0C\u4E00\u5B9A\u4F1A\u4EA7\u751F\u95ED\u5305\uFF0C\u95ED\u5305\u4F1A\u4EA7\u751F\u539F\u6765\u7684\u4F5C\u7528\u57DF\u94FE\u4E0D\u91CA\u653E\uFF0C\u8FC7\u5EA6\u7684\u95ED\u5305\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5185\u5B58\u6CC4\u9732\u6216\u52A0\u8F7D\u8FC7\u6162</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u95ED\u5305</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u95ED\u5305\u53EF\u4EE5\u505A\u6570\u636E\u7F13\u5B58</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">add</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">minus</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">add</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">minus</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">arr[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]() </span><span style="color:#676E95;font-style:italic;">// 101</span></span>
<span class="line"><span style="color:#A6ACCD;">arr[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]() </span><span style="color:#676E95;font-style:italic;">// 100</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u7ACB\u5373\u6267\u884C\u51FD\u6570</p></li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u7ACB\u5373\u6267\u884C\uFF0C\u6267\u884C\u5B8C\u6210\u540E\u7ACB\u5373\u9500\u6BC1, </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// IIFE \uFF1A immediately-invoked-function-express</span></span>
<span class="line"><span style="color:#A6ACCD;">    (</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){}</span><span style="color:#A6ACCD;">)()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u7B2C\u4E00\u79CD\u5199\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    (</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){}</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u7B2C\u4E8C\u79CD\u5199\u6CD5 W3C\u63A8\u8350\u5199\u6CD5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// (function(a,b){ // \u6267\u884C\u5B8C\u4E4B\u540E\uFF0C\u7ACB\u5373\u9500\u6BC1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     // var a=1,b=2;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     console.log(a+b) // 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }(3,4));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var sum = (function(a,b){return a+b}(4,5));</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(sum) // 9</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// function fn(){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     console.log(22)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }(); // \u62A5\u8BED\u6CD5\u9519\u8BEF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> fn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">22</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u53EF\u4EE5\u6267\u884C  \u8868\u8FBE\u5F0F\u624D\u80FD\u88AB\u6267\u884C\u7B26\u53F7\u6267\u884C ()\u4F1A\u628A\u4EC0\u4E48\u53D8\u6210\u8868\u8FBE\u5F0F,\u4F1A\u5FFD\u7565\u51FD\u6570\u540D</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// + - || \uFF01 &amp;&amp;  \u7B49\uFF0C\u8BA9\u51FD\u6570\u4EC0\u4E48\u53D8\u6210\u8868\u8FBE\u5F0F\uFF0C\u5E76\u4E14\u51FD\u6570\u540D\u4F1A\u81EA\u52A8\u5FFD\u7565</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8868\u8FBE\u5F0F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(fn) </span><span style="color:#676E95;font-style:italic;">// undefined \u6267\u884C\u5B8C\u5C31\u9500\u6BC1\u4E86</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4F8B\u5B50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// function test(){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     console.log(1)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }() // \u62A5\u9519</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// \u4E0D\u62A5\u9519 \u4F1A\u628A\u51FD\u6570\u58F0\u660E\u770B\u6210\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ,: \u4E5F\u662F\u4E00\u79CD\u8FD0\u7B97\u7B26\u53F7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">b</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//(function b(){}) \u4F1A\u5FFD\u7565b \u53D8\u6210\u8868\u8FBE\u5F0F\uFF0C\u5FFD\u7565\u51FD\u6570\u540D</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">+=typeof</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a) </span><span style="color:#676E95;font-style:italic;">// 10undefined</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6784\u9020\u51FD\u6570</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> teacher</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1. \u5BF9\u8C61\u5B57\u9762\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sex</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">male</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">weight</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">teach</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">weight</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">i can teach</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,this.</span><span style="color:#A6ACCD;">weight</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">teacher</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">teach</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 76</span></span>
<span class="line"><span style="color:#A6ACCD;">teacher</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">teach</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 77</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. \u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ssss</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(obj)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3. \u81EA\u5B9A\u4E49\u6784\u9020\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Teacher</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">say</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> t1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Teacher</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">luck</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">t1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u539F\u7406</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// function Car(color){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     this.color = color</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     // return {} [] function(){} \u8FD4\u56DE\u5F15\u7528\u503C\u4F1A\u6539\u53D8\u8FD4\u56DE\u7684\u4E1C\u897F\uFF0C\u539F\u59CB\u503C\u4E0D\u8D77\u4F5C\u7528</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Car(&#39;yello&#39;)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(window.color)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5305\u88C5\u7C7B new Number / new String / new Boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var a = 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// // a.name = 12 // \u539F\u59CB\u503C\u6CA1\u6709\u81EA\u5DF1\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var b =new Number(1) // \u53D8\u6210\u6570\u5B57\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// b.age =&#39;sss&#39; // \u53EF\u4EE5\u589E\u52A0\u5C5E\u6027</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(b); // Number\xA0{1, age: &#39;sss&#39;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(null.length) // \u62A5\u9519</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(undefined.length) // \u62A5\u9519</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">len </span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u4E0D\u62A5\u9519</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// new Number(num).len = 20 =&gt;delete num.len</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(num</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">len) </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u7ECF\u8FC7\u4E00\u4E2A\u5305\u88C5\u7C7B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// new String(str).length</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length) </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str) </span><span style="color:#676E95;font-style:italic;">// abc \u6570\u7EC4\u6709\u622A\u65AD\u65B9\u6CD5\uFF0Cstr\u4E0D\u80FD\u622A\u65AD\uFF0C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// new String(str).length =1 delete</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(str</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"></span></code></pre></div><ul><li>\u539F\u578B</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u539F\u578B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">??</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u5C5E\u6027\u95EE\u9898\uFF0C\u4E00\u822C\u5199\u5230\u5C5E\u6027\u4E0A</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// var this = { // \u672C\u8D28</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     __proto__:Person.prototype // \u9ED8\u8BA4\u5C31\u7ED9\u88C5\u4E0A\u4E86\uFF0C__proto__ z\u8FD9\u4E2A\u53EF\u4EE5\u4FEE\u6539</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">say</span><span style="color:#89DDFF;">=</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//\u65B9\u6CD5\u4E00\u822C\u4F1A\u5199\u5230\u539F\u578B\u4E0A</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Tel</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Person.prototype.constructor === Person</span></span>
<span class="line"><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Tel </span><span style="color:#676E95;font-style:italic;">// \u6539\u53D8Person\u6784\u9020\u51FD\u6570\u7684\u539F\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// {constructor: \u0192}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lucy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Test</span><span style="color:#89DDFF;">(){}</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Test</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#FFCB6B;">Test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">resolve</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u91CD\u5199\uFF0Cconstructor\u5B9E\u4F8B\u5316\u7684\u65F6\u5019\uFF0C\u5DF2\u7ECF\u662F\u539F\u578B\u7684\uFF0C\u6240\u4EE5\u91CD\u5199\u5728\u5B9E\u4F8B\u5316\u4E4B\u540E\u4E0D\u5F71\u54CD</span></span>
<span class="line"><span style="color:#FFCB6B;">Test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">99</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u7ED9prototype\u8D4B\u503C\uFF0C\u4F1A\u5F71\u54CDname\u5C5E\u6027\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(t</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name) </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. \u539F\u578B\u7684\u9876\u7AEF\u662FObject.prototype  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. Object.prototype.toString()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3. \u5B50\u96C6\u4E0D\u80FD\u4FEE\u6539\u7236\u7EA7\u7684\u539F\u59CB\u503C\u7C7B\u578B\uFF0C\u80FD\u4FEE\u6539\u5F15\u7528\u7C7B\u578B</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4. \u4E0D\u662F\u6240\u6709\u7684\u5BF9\u8C61\u90FD\u7EE7\u627F\u4E0EObject.prototype, Object.create(null)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u8D77\u5230\u9694\u79BB\u53D8\u91CF\u7684\u4F5C\u7528</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Test</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Test</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Test</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)()</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// undefined null \u4E0D\u80FD\u7ECF\u8FC7\u5305\u88C5\u7C7B\uFF0C\u8FD8\u6CA1\u539F\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">// var num = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">// var obj = </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">// var obj2 = Object.create(null)</span></span>
<span class="line"><span style="color:#A6ACCD;">// obj2.toString = function()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     return &#39;obj2&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// document.write(obj)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// document.write(obj2)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u539F\u578B\u65B9\u6CD5\u7684\u91CD\u5199</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// call /apply</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// function fn(){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     console.log(&#39;a&#39;)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// fn() // \u7B49\u4EF7\u4E8E fn.call() \u7CFB\u7EDF\u9ED8\u8BA4\u4F1A\u7ED9\u4E2A.call</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u94FE\u5F0F\u8C03\u7528</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// return this</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// car.key -&gt; car[&#39;key&#39;]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// hasOwnProperty</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var czf = {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     age:30</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// for ... in ....; xx in obj; \u80FD\u6253\u5370\u539F\u578B\u94FE\u7684\u4E1C\u897F</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(&#39;age&#39; in czf)// true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(czf.hasOwnProperty(&#39;age&#39;)) // true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// function Car (){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     this.name = &#39;bwo&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var car = new Car()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(car instanceof Car); // true instanceof\u4F1A\u67E5\u539F\u578B\u94FE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var a = []</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(a.constructor) // f Array</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(a instanceof Array) // true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Object.prototype.toString.call(a)) // [object Array]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// callee /caller</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// function test(a,b,c){</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     // arguments.callee \u8FD4\u56DE\u51FD\u6570\u672C\u8EAB</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     console.log(arguments.callee.length) // 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     console.log(test.length) // 3</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     console.log(arguments.length) // 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// test(2,5,4,5) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arguments</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">callee</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">n</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(sum) </span><span style="color:#676E95;font-style:italic;">// 55 callee\u7684\u8FD0\u7528</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// caller \u8FD4\u56DE\u8C01\u8C03\u7528\u4E86\u8BE5\u51FD\u6570\uFF0C\u4E25\u683C\u6A21\u5F0F\u4E0B\u4F1A\u62A5\u9519</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">var aa </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">var bb </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">aa</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(aa </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> bb)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4E25\u683C\u6A21\u5F0F</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u4E25\u683C\u6A21\u5F0F  \u9759\u9ED8\u5931\u8D25=&gt;\u62A5\u9519</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// &#39;use strict&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//    var a=1 // {value: 1, writable: true, enumerable: true,configurable: false}</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// {value: 10, writable: true, enumerable: true, configurable: true}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// delete window.a</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// console.log(a)</span></span>
<span class="line"><span style="color:#A6ACCD;">        console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOwnPropertyDescriptor</span><span style="color:#A6ACCD;">(window</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u53D8\u91CF</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 1. \u53D8\u91CF\u4F7F\u7528\u524D\u5FC5\u987B\u8981\u58F0\u660E(\u53D8\u91CF\u4F7F\u7528\u524D\u9700\u8981\u58F0\u660E)</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 2. \u4E0D\u80FD\u76F4\u63A5\u5BF9\u53D8\u91CF\u64CD\u4F5Cdelete(\u9759\u9ED8\u5931\u8D25=&gt;\u53D8\u91CF\u62A5\u9519)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u5BF9\u8C61</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 1. \u5C5E\u6027\u63CF\u8FF0\u7B26\u51FA\u73B0\u4E0D\u5F53\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u4F1A\u62A5\u9519</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u5728\u4E25\u683C\u6A21\u5F0F\u4E0B</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u53C2\u6570\u662F\u552F\u4E00</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u5F62\u53C2\u548C\u5B9E\u53C2\u6620\u5C04\u5173\u7CFB\u4E0D\u5B58\u5728</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u4E0D\u80FD\u4F7F\u7528arguments.callee caller</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u4E0D\u5141\u8BB8\u4F7F\u7528 eval(\u6709\u5B89\u5168\u6F0F\u6D1E) with(\u53EF\u4EE5\u6539\u53D8\u51FD\u6570\u5728\u6267\u884C\u65F6\u5019\u7684\u4E0A\u4E0B\u6587)</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// eval argumengts \u4E0D\u80FD \u4F5C\u4E3A\u6807\u8BC6\u7B26</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u4E0D\u5141\u8BB8\u51FA\u73B0\u516B\u8FDB\u5236</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u51FD\u6570\u9ED8\u8BA4\u6307\u5411undefined</span></span>
<span class="line"></span></code></pre></div><ul><li>Es6 \u4E09\u5927\u6838\u5FC3</li></ul><ol><li>\u7C7B Class</li><li>Promise</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// promise</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> promise </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> promise1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> promise2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#82AAFF;">reject</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(promise) </span><span style="color:#676E95;font-style:italic;">// Promise\xA0{&lt;pending&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(promise1) </span><span style="color:#676E95;font-style:italic;">// Promise\xA0{&lt;fulfilled&gt;: 2}</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(promise2) </span><span style="color:#676E95;font-style:italic;">// Promise\xA0{&lt;rejected&gt;: 2}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u57FA\u4E8EPromise A+ \u89C4\u8303\uFF1B</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//3\u79CD\u72B6\u6001</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// pending (\u51C6\u5907\u72B6\u6001)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// fullfilled (\u6210\u529F\u72B6\u6001)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// rejected (\u5931\u8D25\u72B6\u6001)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u6CE8\u610F\uFF1Apromise\u72B6\u6001\u4E00\u65E6\u66F4\u6539\uFF0C\u5C31\u4E0D\u518D\u66F4\u6539</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// \u4F1A\u8D70\u6210\u529F</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    p</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(res</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;">error</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>\u6A21\u5757\u5316 Module</li></ol><h2 id="js\u6280\u5DE7" tabindex="-1">js\u6280\u5DE7 <a class="header-anchor" href="#js\u6280\u5DE7" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u6570\u7EC4\u8F6C\u6570\u7EC4</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arrlike </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">job</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">length</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">3</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">helloworld</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#A6ACCD;">(arrlike)) </span><span style="color:#676E95;font-style:italic;">// Es6\u63D0\u4F9B\u7684\u65B9\u6CD5\uFF0C\u53EA\u80FD\u5B9E\u73B0\u6D45\u62F7\u8D1D\uFF0C\u6BD4\u8F83\u63A8\u8350\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">slice</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(arrlike))</span><span style="color:#676E95;font-style:italic;">// this\u6307\u5411\u95EE\u9898\uFF0C\u53EF\u4EE5\u884D\u751F\u51FA\u5F88\u591A\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">str]) </span><span style="color:#676E95;font-style:italic;">// \u4E0D\u9002\u7528\u4E8E\u975E\u8FED\u4EE3\u5BF9\u8C61\u4E0A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4F7F\u7528\u6848\u4F8B</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">length</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">},(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(res)</span></span>
<span class="line"></span></code></pre></div><ul><li>this</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 1. \u9ED8\u8BA4\u7ED1\u5B9A\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">global</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,this</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> window) </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#676E95;font-style:italic;">// \u51FD\u6570\u7684\u72EC\u7ACB\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,this</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()  </span><span style="color:#676E95;font-style:italic;">// \u7B49\u4EF7\u4E8Ewindow.test() </span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// 2. \u9690\u5F0F\u7ED1\u5B9A\uFF1A\u8C01\u8C03\u7528\u5C31\u6307\u5411\u8C01\uFF08\u9690\u5F0F\u4E22\u5931\uFF0C\u53C2\u6570\u7ED1\u5B9A\uFF09</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// true this\u6307\u5411obj\uFF0C\u56E0\u4E3A\u662Fobj\u8C03\u7528\u7684</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">window</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// window \u51FD\u6570\u7684\u72EC\u7ACB\u8C03\u7528</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">a</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            (</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">iife</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,this</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// \u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF0Cthis=&gt;window // globalThis</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">c</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">c</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,this</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// window</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">c</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u95ED\u5305</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()() </span><span style="color:#676E95;font-style:italic;">// \u6BCF\u4E2A\u51FD\u6570\u5728\u6267\u884C\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u6709\u81EA\u5DF1\u7684this\u6307\u5411</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">foo </span><span style="color:#676E95;font-style:italic;">// \u9690\u5F0F\u4E22\u5931</span></span>
<span class="line"><span style="color:#82AAFF;">fn</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// this \u6307\u5411window</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// 3. \u663E\u5F0F\u7ED1\u5B9A\uFF1A call apply bind</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(obj) </span><span style="color:#676E95;font-style:italic;">// \u6539\u53D8this\u6307\u5411</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> ob </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// ob</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(ob)</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// 4. new \u7ED1\u5B9A </span></span>
<span class="line"><span style="color:#A6ACCD;">\u4F18\u5148\u7EA7\u6700\u9AD8</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u7BAD\u5934\u51FD\u6570\u4E2D\u7684this;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7BAD\u5934\u51FD\u6570\u4E2D\u6CA1\u6709this,\u662F\u7531\u7236\u7EA7\u4F5C\u7528\u57DF\u51B3\u5B9A;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// this\u6307\u5411\u4E0D\u80FD\u4FEE\u6539;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4E0D\u5B58\u5728arguments\u5BF9\u8C61;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">:()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// \u5916\u5C42\u4F5C\u7528\u57DF window</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">() </span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> bar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">bar</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// \u62A5\u9519</span></span>
<span class="line"></span></code></pre></div><ul><li>null \u548C undefined</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">undefined</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> \u539F\u59CB\u503C\u7684\u521D\u59CB\u503C\uFF1B\u4E3A\u5B9A\u4E49\uFF1B</span></span>
<span class="line"><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> \u5BF9\u8C61\u7684\u539F\u59CB\u503C\uFF0C\u7A7A\u5BF9\u8C61\u7684\u5F15\u7528\uFF1B</span></span>
<span class="line"></span></code></pre></div><ul><li>Es6</li></ul><ol><li>let \u548C const</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // Es6</span></span>
<span class="line"><span style="color:#A6ACCD;">    // [[scope]] \u4F5C\u7528\u57DF GO AO</span></span>
<span class="line"><span style="color:#A6ACCD;">    // kiss keep it simple stuped</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    // let \u5757\u7EA7\u4F5C\u7528\u57DF  </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    // 1. if()</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 2. for(;1;)</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 3. </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7279\u5F81\uFF1A 1.\u540C\u4E00\u53D8\u91CF\u5728\u540C\u4E00\u4E2A\u4F5C\u7528\u57DF\u4E2D(GO,AO)\uFF0C\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E;</span></span>
<span class="line"><span style="color:#A6ACCD;">    //       2.let \u4E0D\u4F1A\u58F0\u660E\u63D0\u5347\uFF0C\u4F1A\u4EA7\u751F\u4E00\u4E2A\u6682\u65F6\u6027\u6B7B\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">    //       3.let \u53EA\u80FD\u5728\u5F53\u524D\u7684\u5757\u7EA7\u4F5C\u7528\u57DF\u4E0B\u751F\u6548</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    // const \u5B9A\u4E49\u5FC5\u987B\u8D4B\u503C\uFF0C\u503C\u4E0D\u80FD\u88AB\u4FEE\u6539\uFF0C\u5176\u4ED6\u548Clet\u4E00\u6837</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F15\u7528\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u628A\u5BF9\u8C61\u51BB\u7ED3\uFF0Cfreeze</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    // let const \u4E0D\u5C5E\u4E8E\u9876\u5C42\u5BF9\u8C61(window)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    const arr = [1,3]</span></span>
<span class="line"><span style="color:#A6ACCD;">    Object.freeze(arr) // \u51BB\u7ED3</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr.push(23)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(arr)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    // let a = 2</span></span>
<span class="line"><span style="color:#A6ACCD;">    // // let a =1</span></span>
<span class="line"><span style="color:#A6ACCD;">    // console.log(a) // \u5168\u5C40\u7684\u91CD\u590D\u58F0\u660E</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    // function fn(a)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//         let a = 100</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//         console.log(a) // 100 {}\u4F5C\u7528\u57DF</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     let a = 10 // \u62A5\u9519 \u51FD\u6570\u4F5C\u7528\u57DF\u7684\u91CD\u590D\u58F0\u660E</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     console.log(a)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// fn()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u4E34\u65F6\u6027\u6B7B\u533A</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// console.log(a) // \u62A5\u9519</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// let a = 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// var x =x </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// console.log(x) // undefined</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// let y = y</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// console.log(y) // \u62A5\u9519</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// function test(x=y,y=3){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     console.log(x,y) // y\u62A5\u9519\uFF0C\u6682\u65F6\u6027\u6B7B\u533A</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// test()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// console.log(typeof a) // \u62A5\u9519\uFF0Ctypeof \u4E0D\u518D\u5B89\u5168 </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// let a  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     let a = 1 // let \u53EA\u80FD\u5728\u5F53\u524D\u7684\u5757\u7EA7\u4F5C\u7528\u57DF\u4E0B\u751F\u6548</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// console.log(typeof a ) // undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// for(let i = 0; i&lt;10;i++){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     // let i = &#39;a&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     var i = &#39;a&#39; // \u62A5\u9519</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     console.log(i) // 10 \u4E2A a  \u548C\u4E0B\u9762\u7684\u7B49\u4EF7</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// if(1){ //\u5757\u7EA7\u4F5C\u7528\u57DF\u6F5C\u9003</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     let a = 1</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//         let a = 10</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//         console.log(a)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// for(var i = 0;i&lt;10;i++){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     var i =&#39;a&#39; </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     console.log(i) // 1\u4E2Aa</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u4E0D\u5EFA\u8BAE\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u51FD\u6570</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5757\u7EA7\u4F5C\u7528\u57DF\u6CA1\u8FD4\u56DE\u503C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// let a = 1</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     // \u51FD\u6570\u53D8\u91CF\u63D0\u5347\u53EA\u63D0\u5347\u5230\u5176\u4F5C\u7528\u57DF\u9876\u90E8</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     function a (){</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// console.log(a) // 1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// var x=1</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     let x = x  // \u4E34\u65F6\u6027\u6B7B\u533A TDZ</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     console.log(x) // \u62A5\u9519</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// function add(x=2,y=x){ // \u9ED8\u8BA4\u503Cx=2  =&gt; let x = 2</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     console.log(x+y)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// add()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// let x = 10</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// function fn(x){ // \u62A5\u9519\uFF0C \u76F8\u5F53\u4E8E\u5728\u4F5C\u7528\u57DF\u9876\u5C42\u8BBE\u7F6E let x = undefined</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     let x =100</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     console.log(x)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    let x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">){</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">//():\u6709\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF Cannot access &#39;x&#39; before initialization</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">fn</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u60F0\u6027\u6C42\u503C\uFF1A\u6BCF\u4E00\u6B21\u90FD\u4F1A\u91CD\u65B0\u8BA1\u7B97\u8868\u8FBE\u5F0F\u7684\u503C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>\u89E3\u6784\u8D4B\u503C</li></ol><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u89E3\u6784 \u6A21\u5F0F\u5339\u914D(\u7ED3\u6784\u5316\u8D4B\u503C) \u4E24\u8FB9\u7684\u7ED3\u6784\u5B8C\u5168\u76F8\u540C</span></span>
<span class="line"><span style="color:#A6ACCD;">// let [a,b,[c]] =[1,2,[6]]</span></span>
<span class="line"><span style="color:#A6ACCD;">// console.log(a,b,c) // 1 2 6</span></span>
<span class="line"><span style="color:#A6ACCD;">// // \u89E3\u6784\u5931\u8D25(\u53D8\u91CF\u591A\u4E86)</span></span>
<span class="line"><span style="color:#A6ACCD;">// let [d,e,[f]] =[1,2,[]]</span></span>
<span class="line"><span style="color:#A6ACCD;">// console.log(d,e,f) // 1,2,undefined</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// // \u4E0D\u5B8C\u5168\u89E3\u6784(\u503C\u591A\u4E86)</span></span>
<span class="line"><span style="color:#A6ACCD;">// let [x,,[y]] =[1,2,[5]]</span></span>
<span class="line"><span style="color:#A6ACCD;">// console.log(x,y) // 1,5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// // \u9ED8\u8BA4\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">// // let [w=10,z=100+w]=[undefined]//\u9664\u4E86undefined,\u90FD\u4F1A\u751F\u6548</span></span>
<span class="line"><span style="color:#A6ACCD;">// // console.log(w,z)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// const fn=()=&gt;3</span></span>
<span class="line"><span style="color:#A6ACCD;">// let [w=fn()]=[33] // \u53EF\u4EE5\u7ED9\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">// console.log(w)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5BF9\u8C61\u89E3\u6784</span></span>
<span class="line"><span style="color:#A6ACCD;">// let first = &#39;n&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// let second = &#39;ame&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// let eat = function()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     console.log(999)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let obj = {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     first,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     second,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     eat,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     [first+second]:&#39;\u62FC\u63A5&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(obj,&#39;obj&#39;)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// obj.eat()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let {name,age,a:as=10}={name:1,age:&#39;age&#39;} // \u5BF9\u8C61\u7684\u7ED3\u6784\u4E0D\u5B58\u5728\u987A\u5E8F</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(name,age,as)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//\u6280\u5DE7</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let a;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ({a}={a:1}) // \u53D8\u6210\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(a)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let arr = [1,3,4],obj={};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [obj.a,obj.b,obj.c]=arr</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(obj)//{a: 1, b: 3, c: 4}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let arr = [1,2,3] // \u6570\u7EC4\u4E5F\u662F\u7279\u6B8A\u7684\u961F\u5F62\uFF0C\u4E5F\u53EF\u4EE5\u8FDB\u884C\u89E3\u6784\u8D4B\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let {0:first,[arr.length-1]:last} = arr</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(first,last) // 1 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ([x])=[&#39;x&#39;]// \u62A5\u9519 \u6A21\u5F0F\u4E0D\u5339\u914D</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. \u7528 let/var \u58F0\u660E\uFF0C\u52A0\uFF08\uFF09\u5C31\u62A5\u9519</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4EA4\u6362\u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let a = 1,b=19;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// [a,b]=[b,a]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(a,b) // 19 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u53D8\u91CF\u7684\u89E3\u6784\u672C\u8D28\u662F\u53D8\u91CF\u7684\u8D4B\u503C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let {a:x,a:y}={a:100} //\u6A21\u5F0F\u5339\u914D\u53EF\u4EE5\u5339\u914D\u540C\u6E90\u5C5E\u6027\uFF08\u540C\u4E00\u4E2A\u6E90\u5C5E\u6027\uFF09</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(x,y) // 100 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u89E3\u6784\u7684\u9690\u5F0F\u8F6C\u6362</span></span>
<span class="line"><span style="color:#A6ACCD;">const [a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">e] </span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">e) </span><span style="color:#676E95;font-style:italic;">// h e l l o</span></span>
<span class="line"><span style="color:#A6ACCD;">const </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">len</span><span style="color:#89DDFF;">}=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(len) </span><span style="color:#676E95;font-style:italic;">// 5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">let </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">toString</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">}=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(s) </span><span style="color:#676E95;font-style:italic;">// \u51FD\u6570</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5E03\u5C14\u503C\uFF0Cnumber\uFF0Cstring\u90FD\u80FD\u8FDB\u884C\u9690\u7C7B\u578B\u8F6C\u6362</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// undefined null \u6CA1\u6709\u5BF9\u5E94\u7684\u5305\u88C5\u7C7B\uFF0C\u4E0D\u80FD\u8FDB\u884C\u9690\u5F0F\u8F6C\u6362</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u7BAD\u5934\u51FD\u6570</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// function test(a,b,c=1,d){</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     arguments[2]=100</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     console.log(arguments) // \u7ED9\u4E86\u9ED8\u8BA4\u503C\uFF0C\u6620\u5C04\u5173\u7CFB\u4E0D\u5B58\u5728</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// test(1,3,4,5)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// console.log(test.length) //2 \u51FD\u6570\u7684\u5F62\u53C2\u4F1A\u6839\u636E\u7ED9\u7684\u9ED8\u8BA4\u503C\u4F4D\u7F6E\u8BA1\u7B97</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// function fn({x,y=10}={}){ // \u517C\u5BB9\u5904\u7406</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     console.log(x,y)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// } </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// fn()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u7BAD\u5934\u51FD\u6570\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u7BAD\u5934\u51FD\u6570\u662F\u4E2A\u64CD\u4F5C\u7B26</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u57FA\u672C\u5F62\u5F0F ()=&gt;{} const f  =  a=&gt;a</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u7BAD\u5934\u51FD\u6570\u548C\u89E3\u6784\u8D4B\u503C\u4E00\u8D77\u4F7F\u7528</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// const full = ({first=1,last=2}={})=&gt;first+last</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// console.log(full()) // 3</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u7BAD\u5934\u51FD\u6570\u7684\u7279\u6027</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 1. \u6CA1\u6709arguments,\u672C\u8D28\u4E0A\u5E76\u4E0D\u662Ffunction\uFF0C\u662F\u80D6\u7BAD\u5934  / spread/rest \u8FD0\u7B97\u7B26  ... ,\u7528\u6765\u5C55\u5F00\u548C\u6536\u8D77</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// const add = (...args)=&gt;{ // \u6536\u96C6\u539F\u5219</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     console.log(args) // [1,3]</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// add(1,3)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// const full = (x,y,z)=&gt;{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     console.log(x,y,z) // 1 3 4</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// full(...[1,3,4]) // \u5C55\u5F00\u539F\u5219</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// full.apply(null/undefined,[])// \u4E0D\u6539\u53D8this\u6307\u5411</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 2. </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// let a = [2,3,4]</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// let b = [1,...a,5]</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// console.log(b) // [1,2,3,4,5] \u53EF\u4EE5\u66FF\u4EE3Array.concate\u65B9\u6CD5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 1. \u7BAD\u5934\u51FD\u6570this\u7531\u6700\u5916\u5C42\u6765\u51B3\u5B9A\uFF0C\u6307\u5411\u662F\u56FA\u5316\u7684\uFF0C\u7BAD\u5934\u51FD\u6570\u5185\u90E8\u6CA1\u6709this\uFF0C\u6CA1\u6709bind\uFF0Ccall\uFF0Capply\u7B49\u65B9\u6CD5;\u672C\u8D28\u4E0A\u4E0D\u662F\u901A\u8FC7function\u6765\u5B9A\u4E49\u7684</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 2. \u4E0D\u80FD\u591F\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u6765\u4F7F\u7528</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 3. \u6CA1\u6709arguments\u5BF9\u8C61\uFF0C \u4F7F\u7528rest\u6765\u66FF\u4EE3</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 4. yield\u547D\u4EE4\u4E0D\u80FD\u751F\u6548\uFF0C\u5728generator\u51FD\u6570\u4E2D</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6269\u5C55</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u51FD\u6570\u540D\u7684\u6269\u5C55</span></span>
<span class="line"><span style="color:#A6ACCD;">// const fn = function()</span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">// console.log(fn.name) // fn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// console.log((new Function).name) // anonymous</span></span>
<span class="line"><span style="color:#A6ACCD;">// console.log(fn.bind(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">).name) // bound fn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// \u5BF9\u8C61\u7684\u6269\u5C55</span></span>
<span class="line"><span style="color:#A6ACCD;">// const foo = &#39;foo&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">// const obj = </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">say</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     console.log(&#39;i can say&#39;)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }} // \u5C5E\u6027\u7B80\u5199\u548C\u65B9\u6CD5\u7B80\u5199</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(obj) // {foo: &#39;foo&#39;}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// obj.say() // i can say</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const full = (a=1,b=12)=&gt;({a,b})</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(full())// {a: 1, b: 12}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const obj = {}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// const fn  = ()=&gt;({</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     // toString:()=&gt;&#39;foo&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// })</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// obj[fn()] = &#39;99&#39; // [] \u5185\u90E8\u4F1A\u8FDB\u884CtoString\u8F6C\u6362</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// obj[true] = &#39;boolean&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(obj) // {[object Object]: &#39;99&#39;, true: &#39;boolean&#39;} </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5C5E\u6027\u63CF\u8FF0\u7B26</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let obj = {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     a:1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Object.getOwnPropertyDescriptor(obj,&#39;a&#39;)) // \u5C5E\u6027\u63CF\u8FF0\u7B26</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {value: 1, writable: true, enumerable: true, configurable: true}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// writable:\u53EF\u5199,\u662F\u5426\u53EF\u4EE5\u4FEE\u6539\u5C5E\u6027\uFF0C\u4F46\u662F\u53EF\u4EE5\u5220\u9664\uFF08\u6709bug\uFF09</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enumerable: \u53EF\u679A\u4E3E, </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// configurable: \u53EF\u914D\u7F6E\uFF0C \u662F\u5426\u53EF\u4EE5\u91CD\u65B0\u914D\u7F6E\u5BF9\u8C61\u7684\u5C5E\u6027, \u4F46\u662F\u53EF\u4EE5\u5220\u9664\uFF08\u6709bug\uFF09</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// value: \u503C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// configurable\uFF1Afalse \u548C  writable:false,  \u4E0D\u80FD\u5220\u9664\u4E5F\u4E0D\u80FD\u4FEE\u6539</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// defineProperty \u4FEE\u6539\u6216\u8005\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u5C5E\u6027</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Object.defineProperty(obj,&#39;ss&#39;,{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     value:100,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     enumerable:true,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     writable:true,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     configurable:true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// })</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(obj)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// get\u64CD\u4F5C  put\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">(){</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// get \u5B9A\u4E49\u7684\u5FAE\u5C5E\u6027</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">_name</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">_name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">v</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.a) </span><span style="color:#676E95;font-style:italic;">// 1 \u672C\u8D28\uFF1A[[Get]] \u9ED8\u8BA4\u64CD\u4F5C\uFF0C\u67E5\u627E\u5F53\u524D\u5C5E\u6027\uFF0C\u6CA1\u6709\u7684\u8BDD\u67E5\u8BE2\u539F\u578B\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">90</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u8D4B\u503C\u64CD\u4F5C [[Put]]\u9ED8\u8BA4\u64CD\u4F5C\uFF1A</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. getter setter</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. writeable: false </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3. \u8D4B\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.name) </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ssss</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(obj.name) </span><span style="color:#676E95;font-style:italic;">// ssss</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6B63\u5219\u8868\u8FBE\u5F0F</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u6B63\u5219\u8868\u8FBE\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u6B63\u5219\uFF1A\u7528\u6765\u5904\u7406(\u5339\u914D)\u5B57\u7B26\u4E32\uFF0C\u662F\u5355\u72EC\u7684\u8BED\u6CD5\u4F53\u7CFB</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // 1. \u5143\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">        // . [] [^] ? * + </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">min</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> ^ $ ()  \\1\\2 |</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // \u8F6C\u610F\u5B57\u7B26: \\  \u5904\u7406\u5143\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/\\+/.test(&#39;+&#39;)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/a/.test(&#39;hal&#39;)) // true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // 2. \u5B57\u7B26\u7EC4</span></span>
<span class="line"><span style="color:#A6ACCD;">        // []\u8303\u56F4\uFF1B\u5728\u56FA\u5B9A\u8303\u56F4\u5185\u5339\u914D\u4E00\u4E2A\uFF0C\u6CE8\u610F\u5B57\u7B26\u7EC4\u7684\u987A\u5E8F</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/1/.test(&#39;1&#39;)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/[123456789]/.test(&#39;1489&#39;)) // true \u592A\u8FC7\u7E41\u7410</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/[1-9]/.test(&#39;1489&#39;)) //  true \u5FC5\u987B\u662F\u8FDE\u7EED\u7684\u4E14\u6709\u987A\u5E8F\uFF0CASCII</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/[1-9a-zA-Z]/.test(&#39;1aAss&#39;)) // true \u4F18\u5316\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/[^0-9]/.test(9)) // false  \u53D6\u53CD</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/[^sa]/.test(&#39;^&#39;)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \\d [0-9]  \\D [^0-9]</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \\w [a-zA-Z0-9_]  \\W [^a-zA-Z0-9_]</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \\s [\\f\\n\\r\\t...]  \\S [^\\f\\n\\r\\t...]  \u975E\u6253\u5370\u5B57\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        // 3. \u91CF\u8BCD</span></span>
<span class="line"><span style="color:#A6ACCD;">        // </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> \u5339\u914Dn\u6B21  </span></span>
<span class="line"><span style="color:#A6ACCD;">        // </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> \u5339\u914D\u6700\u5C11n\u6B21\uFF0C\u6700\u591Am\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">        // </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">,}</span><span style="color:#A6ACCD;"> \u6700\u5C11n\u6B21\uFF0C\u6700\u591A\u65E0\u9650\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u7A7A\u683C\u662F\u6709\u7279\u6B8A\u8BED\u610F\u7684\uFF0C\u4E0D\u8981\u52A0\u7A7A\u683C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // \uFF1F</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        // * </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,}</span></span>
<span class="line"><span style="color:#A6ACCD;">        // + </span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // \u6B63\u5219\u7684\u8D2A\u5A6A\u6A21\u5F0F\uFF1A\u80FD\u591A\u5C31\u591A</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u6B63\u5219\u7684\u975E\u8D2A\u5A6A\u6A21\u5F0F\uFF1A\u80FD\u5C11\u5C31\u5C11 &quot;\u91CF\u8BCD&quot;\u540E\u52A0\uFF1F</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/[0-9]</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/.test(&#39;123456&#39;)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/\\d</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/.test(&#39;123456&#39;)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/\\d</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/.exec(&#39;a199456&#39;)) // [&#39;199456&#39;, index: 1, input: &#39;a199456&#39;, groups: undefined]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/\\d</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/.exec(&#39;32445&#39;)) // \u81F3\u5C112\uFF0C\u6700\u591A6\uFF0C \u5339\u914D6\u4E2A [&#39;32445&#39;, index: 0, input: &#39;32445&#39;, groups: undefined]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/\\d</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">?/.exec(&#39;32445&#39;)) // \u81F3\u5C112\uFF0C\u6700\u591A6\uFF0C \u5339\u914D6\u4E2A [&#39;32&#39;, index: 0, input: &#39;32445&#39;, groups: undefined]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // 4. \u5206\u7EC4\u548C\u6355\u83B7 ()</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u53CD\u5411\u5F15\u7528 /1/2</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/./.test(&#39;a&#39;)) // true .\u53EF\u4EE5\u5339\u914D\u201C\u4EFB\u610F\u5B57\u7B26\u201D\uFF0C\u5177\u4F53\u9700\u8981\u67E5\u770B\u6587\u6863</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/ab</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/.test(&#39;abb&#39;)) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/(ab)</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/.exec(&#39;abab&#39;)) //\u5206\u7EC4\u4E0E\u6355\u83B7 [&#39;abab&#39;, &#39;ab&#39;, index: 0, input: &#39;abab&#39;, groups: undefined]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/(\\d</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)-(\\d</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)-(\\d</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)/.exec(&#39;2020-09-09&#39;)) // [&#39;2020-09-09&#39;, &#39;2020&#39;, &#39;09&#39;, &#39;09&#39;, index: 0, input: &#39;2020-09-09&#39;, groups: undefined]</span></span>
<span class="line"><span style="color:#A6ACCD;">        // // \u83B7\u53D6\u65B9\u5F0F\u6709\u5C40\u9650\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(RegExp.$1) // 2020</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(RegExp.$2) // 09</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(RegExp.$3) // 09</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        //\u6784\u9020\u51FD\u6570\u7684\u65B9\u5F0F new \u7684\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">        // const exp1 = new RegExp(&#39;ab</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(exp1.test(&#39;abb&#39;)) // true </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/([a-z])\\1/.exec(&#39;aa&#39;)) // [&#39;aa&#39;, &#39;a&#39;, index: 0, input: &#39;aa&#39;, groups: undefined]</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/([a-z])\\1/.exec(&#39;ab&#39;)) // null</span></span>
<span class="line"><span style="color:#A6ACCD;">        // // </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/&lt;([^</span><span style="color:#89DDFF;">&lt;&gt;</span><span style="color:#A6ACCD;">]+)&gt;[/d/D]*?&lt;\\/\\1&gt;/.exec(&#39;</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">&#39;)) // [&#39;</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">&#39;, &#39;h1&#39;, index: 0, input: &#39;</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">&#39;, groups: undefined]  \u53CD\u5411\u5F15\u7528</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/(abc)</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/.exec(&#39;abcabc&#39;)) // (2)\xA0[&#39;abcabc&#39;, &#39;abc&#39;, index: 0, input: &#39;abcabc&#39;, groups: undefined]</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/(?:abc)</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">/.exec(&#39;abcabc&#39;)) // [&#39;abcabc&#39;, index: 0, input: &#39;abcabc&#39;, groups: undefined] \u975E\u6355\u83B7 (?:)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // 5. \u9009\u62E9 \uFF5C </span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/12|34|56/.test(&#39;34&#39;)) // true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // 6. \u65AD\u8A00 \\b\u5355\u8BCD\u8FB9\u754C \\B \u975E\u5355\u8BCD\u8FB9\u754C</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/\\ban\\b/.test(&#39;an apple&#39;)) // true \u5355\u8BCD\u8FB9\u754C</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/\\ban\\b/.test(&#39;anapple&#39;)) // false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/^ap/.test(&#39;apple&#39;)) // true \u662F\u5426\u4EE5xx\u5F00\u59CB</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/le$/.test(&#39;apple&#39;)) // true \u662F\u5426\u4EE5xx\u7ED3\u675F</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // \u73AF\u89C6</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/a(?=b)/.test(&#39;ab&#39;)) // true //\u5339\u914Da\u540E\u9762\u662F\u4E0D\u662F\u7D27\u8DDF\u7740b</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/a(?!b)/.test(&#39;ab&#39;)) // false //\u5339\u914Da\u540E\u9762\u4E0D\u662F\u7D27\u8DDF\u7740b</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/a(?=c)/.test(&#39;ab&#39;)) // false</span></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/a(?!c)/.test(&#39;ab&#39;)) // true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5339\u914D\u65B9\u5F0F g: global \u5168\u5C40\u5339\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">        // i: ignore case  \u5FFD\u7565\u5927\u5C0F\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">        // m\uFF1A: multiply \u591A\u884C\u5339\u914D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        // console.log(/a/g.exec(&#39;1a,2a,3a&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;1a,2a,3a&#39;.replace(/a/,&#39;b&#39;)) // 1b,2a,3a</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;1a,2a,3a&#39;.replace(/a/g,&#39;b&#39;)) // 1b,2b,3b</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;1A,2a,3a&#39;.replace(/a/gi,&#39;b&#39;)) // 1b,2b,3b</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(/world$/m.test(&#39;hello world\\n&#39;)) // true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     // 7. \u4F18\u5148\u7EA7</span></span>
<span class="line"><span style="color:#A6ACCD;">     console.log(/(m|f)ood/.exec(&#39;mood&#39;))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     // 8. \u7F51\u7AD9</span></span>
<span class="line"><span style="color:#A6ACCD;">    //  https://ihateregex.io/</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="css\u6280\u5DE7" tabindex="-1">css\u6280\u5DE7 <a class="header-anchor" href="#css\u6280\u5DE7" aria-hidden="true">#</a></h2><ul><li>offsetHeight,clientHeight,scrollHeight\u5374\u522B</li></ul><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">offsetHeight</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">box</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">offsetHeight) </span><span style="color:#676E95;font-style:italic;">// \u5185\u5BB9\u9AD8\u5EA6+padding+border</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">clientHeight</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">box</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">clientHeight) </span><span style="color:#676E95;font-style:italic;">// \u5185\u5BB9\u9AD8\u5EA6+padding</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scrollHeight</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">box</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollHeight) </span><span style="color:#676E95;font-style:italic;">// \u5185\u5BB9\u5B9E\u9645\u5C3A\u5BF8+ padding</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6742\u8C08" tabindex="-1">\u6742\u8C08 <a class="header-anchor" href="#\u6742\u8C08" aria-hidden="true">#</a></h2><ul><li>5\u5927\u4E3B\u6D41\u6D4F\u89C8\u5668(\u6709\u81EA\u5DF1\u7684\u5185\u6838)</li></ul><table><thead><tr><th>\u6D4F\u89C8\u5668\u540D\u79F0</th><th>\u5185\u6838</th></tr></thead><tbody><tr><td>chrome</td><td>webkit blink</td></tr><tr><td>IE</td><td>trident</td></tr><tr><td>Safari</td><td>webkit</td></tr><tr><td>FileFox</td><td>gecko</td></tr><tr><td>Opera</td><td>presto</td></tr></tbody></table><ul><li>\u8F6E\u6D41\u65F6\u95F4\u7247 <ol><li>\u4EFB\u52A11 \u4EFB\u52A12</li><li>\u5207\u5206\u4EFB\u52A11 \u4EFB\u52A12</li><li>\u968F\u673A\u6392\u5217\u8FD9\u4E9B\u4EFB\u52A1\u65F6\u95F4\u7247\u6BB5\uFF0C\u7EC4\u6210\u961F\u5217</li><li>\u6309\u7167\u559D\u8FD9\u4E2A\u961F\u5217\u987A\u5E8F\u5C06\u4EFB\u52A1\u7247\u6BB5\u9001\u8FDBJS\u8FDB\u7A0B</li><li>JS\u7EBF\u7A0B\u6267\u884C\u4E00\u4E2A\u53C8\u4E00\u4E2A\u7684\u4EFB\u52A1\u7247\u6BB5</li></ol></li></ul>`,54),e=[o];function t(c,r,y,i,D,F){return a(),n("div",null,e)}var f=s(p,[["render",t]]);export{C as __pageData,f as default};
