---
title: "Koffer 动态脚本安全解释器"
description: "分层执行 · 沙箱隔离 · 全链路安全引擎 — ABSLN 核心底层执行中枢"
---

<section id="hero" class="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-surface">
  <div class="max-w-content mx-auto px-4 py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
    <!-- 左侧文字 -->
    <div class="flex-1 text-center lg:text-left">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep leading-tight mb-4">
        Koffer 动态脚本安全解释器
      </h1>
      <p class="text-lg sm:text-xl text-gray-600 mb-3 leading-relaxed">
        分层执行 · 沙箱隔离 · 全链路安全引擎
      </p>
      <p class="text-sm sm:text-base text-gray-500 mb-6 leading-relaxed">
        ABSLN 核心底层执行中枢，支撑复杂业务逻辑与 AI 智能体安全运行
      </p>
      <p class="text-brand font-semibold text-sm sm:text-base mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
        兼顾高阶算法开发与低代码轻量化流程，为企业自动化、AI 工具调用提供<strong>加密、隔离、可授权、可审计</strong>的一体化运行环境
      </p>
      <!-- 标签组 -->
      <div class="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
        <span
          class="px-3 py-1.5 bg-brand-light text-brand text-xs sm:text-sm rounded-full font-medium">Python脚本加密</span>
        <span class="px-3 py-1.5 bg-brand-light text-brand text-xs sm:text-sm rounded-full font-medium">DSL低代码</span>
        <span class="px-3 py-1.5 bg-brand-light text-brand text-xs sm:text-sm rounded-full font-medium">AI沙箱隔离</span>
        <span class="px-3 py-1.5 bg-brand-light text-brand text-xs sm:text-sm rounded-full font-medium">机器码授权审计</span>
      </div>
      <!-- 按钮组 -->
      <div class="flex flex-wrap justify-center lg:justify-start gap-3">
        <a href="https://quant.absln.com"
          class="inline-block px-6 py-3 bg-brand text-white rounded-lg font-medium text-sm hover:bg-brand-dark transition-colors">立即体验</a>
        <a href="https://docs.absln.com/koffer"
          class="inline-block px-6 py-3 border-2 border-brand text-brand rounded-lg font-medium text-sm hover:bg-brand-light transition-colors">查看技术文档</a>
      </div>
    </div>
    <!-- 右侧配图 -->
    <div class="flex-1 w-full max-w-lg lg:max-w-none">
      <div class="code-block p-4 sm:p-6 rounded-lg shadow-lg">
        <div class="flex items-center gap-1.5 mb-4">
          <span class="w-3 h-3 rounded-full bg-red-400"></span>
          <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span class="w-3 h-3 rounded-full bg-green-400"></span>
          <span class="ml-2 text-xs text-gray-400">koffer_runtime.py</span>
        </div>
        <pre class="text-xs sm:text-sm leading-relaxed overflow-x-auto"><code><span style="color:#569CD6;">import</span> <span style="color:#dcdcaa;">koffer</span>

<span style="color:#6A9955;"># Koffer 安全执行环境</span>
<span style="color:#569CD6;">@koffer.sandbox</span>(<span style="color:#ce9178;">isolate</span>=<span style="color:#569CD6;">True</span>, <span style="color:#ce9178;">audit</span>=<span style="color:#569CD6;">True</span>)
<span style="color:#569CD6;">def</span> <span style="color:#dcdcaa;">run_agent_task</span>(<span style="color:#9cdcfe;">script</span>, <span style="color:#9cdcfe;">params</span>):
    <span style="color:#6A9955;">"""AI Agent 任务执行入口"""</span>
    <span style="color:#9cdcfe;">runtime</span> = koffer.<span style="color:#dcdcaa;">Runtime</span>(<span style="color:#ce9178;">mode</span>=<span style="color:#ce9178;">"secure"</span>)
    <span style="color:#9cdcfe;">result</span> = runtime.<span style="color:#dcdcaa;">execute</span>(<span style="color:#9cdcfe;">script</span>, <span style="color:#9cdcfe;">**params</span>)
    <span style="color:#569CD6;">return</span> <span style="color:#9cdcfe;">result</span>

<span style="color:#6A9955;"># DSL 轻量化流程</span>
<span style="color:#9cdcfe;">dsl_flow</span> = <span style="color:#ce9178;">"""
LOAD data FROM dms://sales/2024
FILTER amount > 10000
GROUP BY region
EXPORT TO dms://reports/summary
"""</span>
koffer.<span style="color:#dcdcaa;">dsl_run</span>(<span style="color:#9cdcfe;">dsl_flow</span>)</code></pre>
      </div>
      <!-- 沙箱隔离示意 -->
      <div class="mt-4 bg-white rounded-lg shadow p-4 flex items-center gap-3 text-xs text-gray-500">
        <div class="flex-1 text-center p-2 bg-blue-50 rounded border border-blue-100">
          <span class="block font-medium text-brand mb-0.5">沙箱 1</span>Agent Task A
        </div>
        <span class="text-brand font-bold">|</span>
        <div class="flex-1 text-center p-2 bg-green-50 rounded border border-green-100">
          <span class="block font-medium text-green-600 mb-0.5">沙箱 2</span>Agent Task B
        </div>
        <span class="text-brand font-bold">|</span>
        <div class="flex-1 text-center p-2 bg-purple-50 rounded border border-purple-100">
          <span class="block font-medium text-purple-600 mb-0.5">沙箱 3</span>DSL Flow
        </div>
      </div>
    </div>
  </div>
</section>

<section id="overview" class="py-20 lg:py-28 bg-white">
  <div class="max-w-content mx-auto px-4">
    <h2 class="text-2xl sm:text-3xl font-bold text-deep text-center mb-10">产品概述</h2>
    <div class="max-w-3xl mx-auto text-center">
      <p class="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
        Koffer 并非单一的脚本加密工具，而是面向企业数字化、AI 智能体场景打造的<strong class="text-deep">一体化动态脚本安全执行引擎</strong>。
      </p>
      <p class="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
        基于 Python 内核深度定制，分层适配不同使用场景：既支持技术人员开发自定义网络模型、复杂算法、深度业务逻辑；也通过内置 DSL 领域专用语言，降低使用门槛，让业务人员快速完成数据处理、简易流程编排。
      </p>
      <p class="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
        同时针对 AI Agent 运行环境做专项安全强化，提供独立隔离沙箱、权限管控、异常熔断能力，是 ABSLN 整套平台的<strong class="text-deep">执行中枢与安全防火墙</strong>，广泛应用于企业流程自动化、数据量化分析、AI 工具调用等场景。
      </p>
      <p class="text-brand font-semibold text-sm sm:text-base">
        定位：复杂逻辑开发 + 轻量化流程执行 + AI 安全隔离 三位一体执行引擎
      </p>
    </div>
  </div>
</section>

<section id="capabilities" class="py-20 lg:py-28 bg-surface">
  <div class="max-w-content mx-auto px-4">
    <h2 class="text-2xl sm:text-3xl font-bold text-deep text-center mb-12">核心能力总览</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- 卡片1：分层执行引擎 -->
      <div class="card-hover bg-white rounded-xl p-6 shadow-sm text-center sm:text-left">
        <div class="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
          <svg class="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
        </div>
        <h3 class="text-lg font-bold text-deep mb-2">分层执行，适配全场景</h3>
        <p class="text-sm text-gray-500 leading-relaxed">高阶模式支持自定义网络模型、复杂算法脚本；轻量化模式内置 DSL，快速完成数据处理、流程定义，兼顾专业开发与业务使用。</p>
      </div>
      <!-- 卡片2：全链路加密与授权 -->
      <div class="card-hover bg-white rounded-xl p-6 shadow-sm text-center sm:text-left">
        <div class="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
          <svg class="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        </div>
        <h3 class="text-lg font-bold text-deep mb-2">脚本加密 + 机器码授权</h3>
        <p class="text-sm text-gray-500 leading-relaxed">原生支持脚本防反编译、防篡改；一机一码绑定授权、周期管控、到期自动失效，保护技术成果与企业核心流程安全。</p>
      </div>
      <!-- 卡片3：AI Agent 隔离沙箱 -->
      <div class="card-hover bg-white rounded-xl p-6 shadow-sm text-center sm:text-left">
        <div class="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
          <svg class="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        </div>
        <h3 class="text-lg font-bold text-deep mb-2">AI 工具执行环境隔离</h3>
        <p class="text-sm text-gray-500 leading-relaxed">为智能体分配独立运行空间，进程、文件、网络三重权限隔离，违规操作自动熔断，杜绝越权与安全风险。</p>
      </div>
      <!-- 卡片4：全流程运行审计 -->
      <div class="card-hover bg-white rounded-xl p-6 shadow-sm text-center sm:text-left">
        <div class="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center mb-4 mx-auto sm:mx-0">
          <svg class="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
        </div>
        <h3 class="text-lg font-bold text-deep mb-2">运行日志 + 操作审计</h3>
        <p class="text-sm text-gray-500 leading-relaxed">完整记录每一条脚本、每一次 AI 工具调用的执行记录、操作人员、运行状态，全程可追溯，满足企业内控合规要求。</p>
      </div>
    </div>
  </div>
</section>

<section id="layer-exec" class="py-20 lg:py-28 bg-white">
  <div class="max-w-content mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      <div class="flex-1 order-2 lg:order-1">
        <h3 class="text-xl sm:text-2xl font-bold text-deep mb-6">分层执行体系 · 兼顾专业与易用</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-deep mb-1">1. 高阶复杂场景</h4>
            <p class="text-sm text-gray-600 leading-relaxed">支持基于 Python 编写自定义网络模型、业务风控模型、量化策略、跨系统复杂交互逻辑，满足深度算法开发、复杂业务编排需求，面向技术人员开放完整运行能力。</p>
          </div>
          <div>
            <h4 class="font-bold text-deep mb-1">2. 轻量化通用场景</h4>
            <p class="text-sm text-gray-600 leading-relaxed">内置 DSL 领域专用语言，语法简洁、学习门槛低，专注于批量数据清洗、字段计算、简易流程定义、基础报表生成等日常工作，非技术人员也可快速上手配置自动化任务。</p>
          </div>
        </div>
      </div>
      <div class="flex-1 order-1 lg:order-2 w-full">
        <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
          <div class="grid grid-cols-2 divide-x divide-gray-100">
            <div class="code-block-light p-4 text-xs leading-relaxed rounded-none border-0">
              <div class="text-gray-400 mb-2 font-medium">Python 复杂模式</div>
              <code class="text-gray-700">import koffer<br>
<span style="color:#859900;">@koffer.model</span><br>
<span style="color:#268bd2;">class</span> <span style="color:#b58900;">RiskModel</span>:<br>
&nbsp;&nbsp;<span style="color:#268bd2;">def</span> <span style="color:#859900;">predict</span>(<span style="color:#6c71c4;">self</span>, data):<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#268bd2;">return</span> self.score(data)</code>
            </div>
            <div class="code-block-light p-4 text-xs leading-relaxed rounded-none border-0 bg-gray-50">
              <div class="text-gray-400 mb-2 font-medium">DSL 轻量模式</div>
              <code class="text-gray-700">LOAD data<br>
FILTER risk &gt; 0.8<br>
SORT BY score DESC<br>
EXPORT result</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="encrypt-auth" class="py-20 lg:py-28 bg-white">
  <div class="max-w-content mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      <div class="flex-1 w-full">
        <div class="bg-surface rounded-lg p-6 text-center">
          <div class="flex items-center justify-center gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-white rounded-lg shadow flex items-center justify-center mx-auto mb-2">
                <svg class="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              </div>
              <span class="text-xs text-gray-500">脚本加密</span>
            </div>
            <span class="text-brand text-2xl">→</span>
            <div class="text-center">
              <div class="w-16 h-16 bg-white rounded-lg shadow flex items-center justify-center mx-auto mb-2">
                <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <span class="text-xs text-gray-500">机器码绑定</span>
            </div>
            <span class="text-brand text-2xl">→</span>
            <div class="text-center">
              <div class="w-16 h-16 bg-white rounded-lg shadow flex items-center justify-center mx-auto mb-2">
                <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
              </div>
              <span class="text-xs text-gray-500">授权生效</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <h3 class="text-xl sm:text-2xl font-bold text-deep mb-6">脚本加密 + 机器码授权 · 版权与安全双重保障</h3>
        <ul class="space-y-3 text-sm text-gray-600">
          <li class="flex items-start gap-2"><span class="text-brand mt-0.5">•</span> 底层加密：脚本全运行周期加密，从底层阻止反编译、恶意篡改、源码泄露。</li>
          <li class="flex items-start gap-2"><span class="text-brand mt-0.5">•</span> 机器码绑定：支持单机授权、多设备批量授权，授权周期可自定义，到期自动停用。</li>
          <li class="flex items-start gap-2"><span class="text-brand mt-0.5">•</span> 商业化交付：标准化授权体系，支持个人非商用、企业商用区分，适配 SaaS 订阅与私有化部署模式。</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="ai-sandbox" class="py-20 lg:py-28 bg-white">
  <div class="max-w-content mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      <div class="flex-1 order-2 lg:order-1">
        <h3 class="text-xl sm:text-2xl font-bold text-deep mb-6">AI 智能体安全隔离 · 可控的智能执行环境</h3>
        <div class="space-y-3 text-sm text-gray-600">
          <p><strong class="text-deep">1. 进程级隔离：</strong>每个 AI 任务、工具调用独立进程运行，互不干扰；</p>
          <p><strong class="text-deep">2. 权限管控：</strong>文件系统、网络访问配置白名单，禁止越权读取核心数据、外联未知地址；</p>
          <p><strong class="text-deep">3. 异常熔断：</strong>实时监控脚本运行状态、资源占用，出现报错、死循环、高危指令立即终止任务并告警；</p>
          <p><strong class="text-deep">4. 无缝联动：</strong>与上层多智能体平台深度对接，AI 生成的所有任务统一进入沙箱执行，安全不损失灵活性。</p>
        </div>
      </div>
      <div class="flex-1 order-1 lg:order-2 w-full">
        <div class="bg-surface rounded-lg p-6">
          <div class="text-center mb-4">
            <span class="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">多智能体平台</span>
          </div>
          <div class="flex justify-center gap-1 mb-3">
            <span class="text-xl">↓</span><span class="text-xl">↓</span><span class="text-xl">↓</span>
          </div>
          <div class="grid grid-cols-3 gap-3 mb-4">
            <div class="bg-white rounded-lg p-3 text-center border border-blue-100">
              <div class="text-brand font-bold text-xs mb-1">沙箱 A</div>
              <div class="text-xs text-gray-400">独立进程<br>文件白名单<br>网络管控</div>
            </div>
            <div class="bg-white rounded-lg p-3 text-center border border-green-100">
              <div class="text-green-600 font-bold text-xs mb-1">沙箱 B</div>
              <div class="text-xs text-gray-400">独立进程<br>文件白名单<br>网络管控</div>
            </div>
            <div class="bg-white rounded-lg p-3 text-center border border-purple-100">
              <div class="text-purple-600 font-bold text-xs mb-1">沙箱 C</div>
              <div class="text-xs text-gray-400">独立进程<br>文件白名单<br>网络管控</div>
            </div>
          </div>
          <div class="flex justify-center gap-1 mb-3">
            <span class="text-xl">↓</span><span class="text-xl">↓</span><span class="text-xl">↓</span>
          </div>
          <div class="text-center">
            <span class="inline-block px-3 py-1 bg-gray-200 text-gray-600 rounded text-xs font-medium">统一数据层（DMS）</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="audit-log" class="py-20 lg:py-28 bg-white">
  <div class="max-w-content mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      <div class="flex-1 w-full">
        <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div class="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center justify-between">
            <span class="text-sm font-medium text-deep">审计日志</span>
            <div class="flex gap-2">
              <span class="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">检索</span>
              <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">筛选</span>
              <span class="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">导出</span>
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left">
              <thead class="bg-gray-50 text-gray-500">
                <tr>
                  <th class="px-4 py-2 font-medium">时间</th>
                  <th class="px-4 py-2 font-medium">主体</th>
                  <th class="px-4 py-2 font-medium">脚本</th>
                  <th class="px-4 py-2 font-medium">状态</th>
                  <th class="px-4 py-2 font-medium">详情</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-gray-100"><td class="px-4 py-2">2024-12-01 10:23</td><td class="px-4 py-2">Agent-A</td><td class="px-4 py-2 font-mono text-xs">risk_eval.py</td><td class="px-4 py-2"><span class="text-green-600">✓ 成功</span></td><td class="px-4 py-2 text-gray-400">查看</td></tr>
                <tr class="border-t border-gray-100"><td class="px-4 py-2">2024-12-01 10:24</td><td class="px-4 py-2">User-03</td><td class="px-4 py-2 font-mono text-xs">dsl_flow_01</td><td class="px-4 py-2"><span class="text-green-600">✓ 成功</span></td><td class="px-4 py-2 text-gray-400">查看</td></tr>
                <tr class="border-t border-gray-100"><td class="px-4 py-2">2024-12-01 10:25</td><td class="px-4 py-2">Agent-B</td><td class="px-4 py-2 font-mono text-xs">data_sync.py</td><td class="px-4 py-2"><span class="text-red-500">✗ 异常</span></td><td class="px-4 py-2 text-gray-400">查看</td></tr>
                <tr class="border-t border-gray-100"><td class="px-4 py-2">2024-12-01 10:26</td><td class="px-4 py-2">Agent-C</td><td class="px-4 py-2 font-mono text-xs">report_gen</td><td class="px-4 py-2"><span class="text-green-600">✓ 成功</span></td><td class="px-4 py-2 text-gray-400">查看</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <h3 class="text-xl sm:text-2xl font-bold text-deep mb-6">全链路审计日志 · 操作全程可追溯</h3>
        <p class="text-sm text-gray-600 leading-relaxed mb-3">
          系统自动留存完整运行台账，包含：任务发起主体、执行时间、运行脚本、调用数据、运行结果、异常信息。
        </p>
        <p class="text-sm text-gray-600 leading-relaxed">
          支持日志检索、筛选、导出，适配企业内控、合规审查、问题排查场景。所有自动化流程、AI 执行动作有据可查，让自动化与智能化流程透明可控。
        </p>
      </div>
    </div>
  </div>
</section>

<section id="ecosystem" class="py-20 lg:py-28 bg-surface">
  <div class="max-w-content mx-auto px-4">
    <h2 class="text-2xl sm:text-3xl font-bold text-deep text-center mb-8">平台生态协同 · 完整业务闭环</h2>
    <div class="max-w-3xl mx-auto text-center mb-10">
      <p class="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
        Koffer 作为 ABSLN 平台统一执行层，与另外两大核心产品深度联动，形成完整闭环：
      </p>
      <ol class="text-sm text-gray-600 text-left max-w-xl mx-auto space-y-2 list-decimal list-inside">
        <li>对接 <strong class="text-deep">DMS 企业动态数据管理系统</strong>：读取混合结构化/非结构化数据，执行运算与流程处理，结果回写统一存储；</li>
        <li>对接 <strong class="text-deep">ABSLN 多智能体平台</strong>：接收 AI 拆解生成的任务、脚本，在隔离沙箱中安全运行，反馈执行状态与结果。</li>
      </ol>
    </div>
    <!-- 简易架构流程图 -->
    <div class="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6 max-w-2xl mx-auto">
      <div class="bg-white rounded-xl shadow-sm p-4 text-center w-40 lg:w-48">
        <div class="text-xs text-gray-400 mb-1">用户输入</div>
        <div class="font-bold text-deep text-sm">自然语言指令</div>
      </div>
      <span class="text-brand text-2xl rotate-90 lg:rotate-0">→</span>
      <div class="bg-white rounded-xl shadow-sm p-4 text-center w-40 lg:w-48 border-2 border-purple-200">
        <div class="text-xs text-gray-400 mb-1">多智能体平台</div>
        <div class="font-bold text-purple-600 text-sm">拆解任务 / 生成脚本</div>
      </div>
      <span class="text-brand text-2xl rotate-90 lg:rotate-0">→</span>
      <div class="bg-brand-light rounded-xl shadow-sm p-4 text-center w-40 lg:w-48 border-2 border-brand">
        <div class="text-xs text-brand mb-1 font-medium">执行中枢</div>
        <div class="font-bold text-brand text-sm">Koffer 加密+沙箱执行</div>
      </div>
      <span class="text-brand text-2xl rotate-90 lg:rotate-0">→</span>
      <div class="bg-white rounded-xl shadow-sm p-4 text-center w-40 lg:w-48 border-2 border-green-200">
        <div class="text-xs text-gray-400 mb-1">数据管理系统</div>
        <div class="font-bold text-green-600 text-sm">DMS 结果回存</div>
      </div>
    </div>
  </div>
</section>

<section id="scenarios" class="py-20 lg:py-28 bg-white">
  <div class="max-w-content mx-auto px-4">
    <h2 class="text-2xl sm:text-3xl font-bold text-deep text-center mb-12">典型应用场景</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="card-hover bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 class="font-bold text-deep mb-3 text-lg">企业业务流程自动化</h3>
        <p class="text-sm text-gray-500 leading-relaxed">数据批量处理、定时任务、跨系统数据同步、办公流程自动化，依托 DSL 快速配置，脚本加密运行保障业务安全。</p>
      </div>
      <div class="card-hover bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 class="font-bold text-deep mb-3 text-lg">量化策略与数据分析</h3>
        <p class="text-sm text-gray-500 leading-relaxed">支撑 A 股智能量化演示场景，运行量化模型、回测脚本，结合授权体系实现策略安全分发与管控。</p>
      </div>
      <div class="card-hover bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 class="font-bold text-deep mb-3 text-lg">AI 智能体工具调用</h3>
        <p class="text-sm text-gray-500 leading-relaxed">为企业级 AI Agent 提供安全执行环境，隔离风险，让 AI 可落地执行真实业务操作。</p>
      </div>
      <div class="card-hover bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 class="font-bold text-deep mb-3 text-lg">定制算法与模型运行</h3>
        <p class="text-sm text-gray-500 leading-relaxed">运行自定义风控模型、预测模型、数据挖掘逻辑，满足企业深度数字化、个性化算法需求。</p>
      </div>
    </div>
  </div>
</section>

<section id="license" class="py-20 lg:py-28 bg-surface">
  <div class="max-w-content mx-auto px-4 text-center">
    <h2 class="text-2xl sm:text-3xl font-bold text-deep mb-8">版本与授权规则</h2>
    <div class="max-w-2xl mx-auto space-y-3 text-sm text-gray-600 text-left mb-8">
      <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
        <span class="font-bold text-deep">个人版：</span>免费非商用授权，单机器绑定，开放基础 DSL 与常规脚本运行能力。
      </div>
      <div class="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
        <span class="font-bold text-deep">企业版：</span>商用授权，支持多机器批量绑定、高级沙箱策略、专属技术支持、定制授权方案。
      </div>
    </div>
    <a href="/legal/license/" class="inline-block px-6 py-3 border-2 border-brand text-brand rounded-lg font-medium text-sm hover:bg-brand-light transition-colors">
      查看完整授权协议
    </a>
  </div>
</section>

<section class="py-20 lg:py-28 bg-brand">
  <div class="max-w-content mx-auto px-4 text-center">
    <p class="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-6 leading-relaxed max-w-2xl mx-auto">
      体验 Koffer 安全执行引擎，构建安全、可控、高效的企业自动化与 AI 运行环境
    </p>
    <div class="flex flex-wrap justify-center gap-3">
      <a href="https://quant.absln.com" class="inline-block px-6 py-3 bg-white text-brand rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
        立即进入演示平台
      </a>
      <a href="/contact/" class="inline-block px-6 py-3 border-2 border-white text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-colors">
        联系商务洽谈
      </a>
    </div>
  </div>
</section>
