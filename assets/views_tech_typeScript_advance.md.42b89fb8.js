import{_ as s,c as n,o as a,d as e}from"./app.8bb00f2e.js";const D=JSON.parse('{"title":"ts\u7684\u201C\u51FD\u6570\u201D","description":"","frontmatter":{},"headers":[{"level":2,"title":"ts\u7684\u201C\u51FD\u6570\u201D","slug":"ts\u7684\u201C\u51FD\u6570\u201D"},{"level":3,"title":"\u57FA\u672C\u65B9\u6CD5","slug":"\u57FA\u672C\u65B9\u6CD5"}],"relativePath":"views/tech/typeScript/advance.md"}'),l={name:"views/tech/typeScript/advance.md"},p=e(`<h2 id="ts\u7684\u201C\u51FD\u6570\u201D" tabindex="-1">ts\u7684\u201C\u51FD\u6570\u201D <a class="header-anchor" href="#ts\u7684\u201C\u51FD\u6570\u201D" aria-hidden="true">#</a></h2><h3 id="\u57FA\u672C\u65B9\u6CD5" tabindex="-1">\u57FA\u672C\u65B9\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u65B9\u6CD5" aria-hidden="true">#</a></h3><ol><li>keyof</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">interface ITest {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name?:string,</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: number</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type TA = keyof ITest // \u76F8\u5F53\u4E8E type TA = &#39;name&#39;|&#39;age&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let a:TA =&#39;name&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type TPoly =  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    x:string,</span></span>
<span class="line"><span style="color:#A6ACCD;">    y: number</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type TB = keyof TPoly // \u76F8\u5F53\u4E8E type TB = &#39;x&#39;|&#39;y&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">let b:TB =&#39;y&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type TObject = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [k: number]: boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type TO = keyof TObject // =&gt; type TO = number,</span></span>
<span class="line"><span style="color:#A6ACCD;">let d: TO =666</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">type Tarray = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    [k: string]: boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">type T = keyof Tarray // =&gt; type T = number|string,\u53EA\u662Fjs\u7684\u4E00\u4E2A\u95EE\u9898obj[0]===obj[&#39;0&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">let c: T =&#39;c&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol><li>typeof</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>TS\u7684\u6620\u5C04\u7C7B\u578B</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[p];function c(t,r,i,A,C,y){return a(),n("div",null,o)}var T=s(l,[["render",c]]);export{D as __pageData,T as default};
