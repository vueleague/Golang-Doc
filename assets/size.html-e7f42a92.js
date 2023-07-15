import{_ as t,V as i,W as o,X as n,Y as s,$ as e,Z as p,F as c}from"./framework-44a66fc7.js";const l={},u=n("h1",{id:"size",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#size","aria-hidden":"true"},"#"),s(" size")],-1),r=n("p",null,"dstgo/size是一个很方便的将字符串与文件大小相互转换的库",-1),d={href:"https://github.com/dstgo/size",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/dstgo/size#readme",target:"_blank",rel:"noopener noreferrer"},v=p(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ go get https://github.com/dstgo/size
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">const</span> <span class="token punctuation">(</span>
	B  Size <span class="token operator">=</span> <span class="token number">1</span>
	KB      <span class="token operator">=</span> B <span class="token operator">*</span> <span class="token number">1024</span>
	MB      <span class="token operator">=</span> KB <span class="token operator">*</span> <span class="token number">1024</span>
	GB      <span class="token operator">=</span> MB <span class="token operator">*</span> <span class="token number">1024</span>
	TB      <span class="token operator">=</span> GB <span class="token operator">*</span> <span class="token number">1024</span>
	PB      <span class="token operator">=</span> TB <span class="token operator">*</span> <span class="token number">1024</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> SizeMeta <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Data <span class="token builtin">float64</span>
	Unit Size
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该库使用起来相当简单，只有两个对外暴露的函数</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ParseSize</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">)</span> SizeMeta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>ParseSize</code>将字符串转换成一个<code>SizeMeta</code>结构体，存储了数据大小，以及单位大小</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">ParseTargetSize</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">,</span> size Size<span class="token punctuation">)</span> SizeMeta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>ParseTargetSize</code>将字符串转换成指定大小的<code>SizeMeta</code></p><p>示例如下：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;github.com/dstgo/size&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	parseSize <span class="token operator">:=</span> size<span class="token punctuation">.</span><span class="token function">ParseSize</span><span class="token punctuation">(</span><span class="token string">&quot;1.2MB&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%+v\\n&quot;</span><span class="token punctuation">,</span> parseSize<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%+v\\n&quot;</span><span class="token punctuation">,</span> parseSize<span class="token punctuation">.</span><span class="token function">Round</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	parseSize1 <span class="token operator">:=</span> size<span class="token punctuation">.</span><span class="token function">ParseSize</span><span class="token punctuation">(</span><span class="token string">&quot;2.3-asdajl&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%+v\\n&quot;</span><span class="token punctuation">,</span> parseSize1<span class="token punctuation">)</span>

	targetSize <span class="token operator">:=</span> size<span class="token punctuation">.</span><span class="token function">ParseTargetSize</span><span class="token punctuation">(</span><span class="token string">&quot;2.65MB&quot;</span><span class="token punctuation">,</span> size<span class="token punctuation">.</span>KB<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%+v&quot;</span><span class="token punctuation">,</span> targetSize<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%+v&quot;</span><span class="token punctuation">,</span> targetSize<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转换后可以使用<code>Round</code>方法来修改保留多少位，也可以使用<code>String</code>方法来获取其字符串形式，示例输出如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.20MB
1.2      
         
2713.60KB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function m(g,b){const a=c("ExternalLinkIcon");return i(),o("div",null,[u,r,n("p",null,[s("仓库地址："),n("a",d,[s("dstgo/size: Fast conversion between file size and string (github.com)"),e(a)])]),n("p",null,[s("文档地址："),n("a",k,[s("dstgo/size: Fast conversion between file size and string (github.com)"),e(a)])]),v])}const h=t(l,[["render",m],["__file","size.html.vue"]]);export{h as default};
