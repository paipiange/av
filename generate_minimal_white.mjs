import fs from 'fs';

const allRepos = JSON.parse(fs.readFileSync('categorized_stars.json', 'utf-8'));
const adultRepos = allRepos.filter(r => r.isAdult || r.isAdultRelated);

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub Starred · 成人与擦边项目收藏集 - paipiange</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: #fbfbfd;
      color: #1e293b;
    }
    .custom-shadow {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04);
    }
    .custom-shadow-hover {
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
    }
  </style>
</head>
<body class="min-h-screen flex flex-col selection:bg-rose-100 selection:text-rose-900">

  <!-- Header -->
  <header class="bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center space-x-3.5">
        <div class="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-lg overflow-hidden shadow-sm">
          <img src="https://avatars.githubusercontent.com/u/153693696?v=4" onerror="this.src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'" class="w-full h-full object-cover" alt="paipiange">
        </div>
        <div>
          <div class="flex items-center space-x-2">
            <h1 class="text-base font-semibold text-slate-900 tracking-tight">paipiange 的成人与擦边 Star 收藏集</h1>
            <span class="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium border border-slate-200">12 个精选项目</span>
          </div>
          <p class="text-xs text-slate-500">白色极简风格 · 提取自 1,116 个 Star 项目中的全部成人类与关联工具</p>
        </div>
      </div>

      <!-- Header stats pill -->
      <div class="flex items-center gap-2 text-xs">
        <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/80 font-medium">
          🔞 核心成人 9 项
        </span>
        <span class="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 font-medium">
          ⚠️ 擦边关联 3 项
        </span>
        <a href="https://github.com/paipiange" target="_blank" class="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors">
          GitHub 个人主页 ↗
        </a>
      </div>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-6">

    <!-- Overview Bar -->
    <div class="bg-white rounded-2xl p-6 border border-slate-200/90 custom-shadow">
      <div class="max-w-3xl">
        <h2 class="text-xl font-bold text-slate-900 tracking-tight">项目分类总览</h2>
        <p class="text-sm text-slate-600 mt-1.5 leading-relaxed">
          已从你的账号收藏中剔除非成人内容，精准保留了 <strong>9 个核心成人项目</strong>（覆盖本地影音库、演员头像刮削、R18检索、18禁漫画下载、NSFW-AI模型、去码修复等）与 <strong>3 个高关联工具</strong>（视频马赛克处理、抖音颜值筛选、角色扮演前端）。
        </p>
      </div>

      <!-- Category Filter Pills -->
      <div class="mt-5 flex flex-wrap gap-2 text-xs border-t border-slate-100 pt-4">
        <button onclick="setFilter('ALL')" id="btn-all" class="px-3 py-1.5 rounded-lg font-medium transition-all bg-slate-900 text-white shadow-sm">
          全部项目 (12)
        </button>
        <button onclick="setFilter('core')" id="btn-core" class="px-3 py-1.5 rounded-lg font-medium transition-all bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-700">
          🔞 核心成人 (9)
        </button>
        <button onclick="setFilter('related')" id="btn-related" class="px-3 py-1.5 rounded-lg font-medium transition-all bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-700">
          ⚠️ 擦边关联 (3)
        </button>
      </div>
    </div>

    <!-- Search and Controls -->
    <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
      <div class="relative flex-1 max-w-md">
        <input
          id="search-input"
          type="text"
          placeholder="搜索项目、说明、语言或标签 (如 stash, jmcomic, jav, ai)..."
          class="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition-all custom-shadow"
        >
        <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-xs text-slate-500 whitespace-nowrap">排序方式:</span>
        <select id="sort-select" class="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-slate-400 transition-all custom-shadow">
          <option value="starred_desc">Star 收藏时间 (最近在先)</option>
          <option value="stars_desc">⭐ Stars 数量 (从高到低)</option>
          <option value="name_asc">项目名称 (A-Z)</option>
        </select>
      </div>
    </div>

    <!-- Count indicator -->
    <div class="text-xs text-slate-500 px-1 flex items-center justify-between">
      <span>显示 <strong id="display-count" class="text-slate-900">12</strong> 个项目</span>
      <span class="text-slate-400">点击卡片右上角可一键复制 clone 命令</span>
    </div>

    <!-- Repo Cards Grid -->
    <div id="cards-container" class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <!-- Injected by JS -->
    </div>

  </main>

  <!-- Footer -->
  <footer class="mt-12 border-t border-slate-200/80 bg-white py-6 text-center text-xs text-slate-500">
    <div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p>由 GitHub CLI (gh) 自动读取生成 · paipiange 私人 Star 整理集</p>
      <p class="text-slate-400">单文件纯净极简 HTML · 离线可用</p>
    </div>
  </footer>

  <!-- Embedded Data -->
  <script>
    const REPOS = ${JSON.stringify(adultRepos)};
    let activeFilter = 'ALL';
    let currentSearch = '';
    let currentSort = 'starred_desc';

    function init() {
      setupEvents();
      render();
    }

    function setupEvents() {
      const searchInput = document.getElementById('search-input');
      searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim().toLowerCase();
        render();
      });

      document.getElementById('sort-select').addEventListener('change', (e) => {
        currentSort = e.target.value;
        render();
      });
    }

    function setFilter(type) {
      activeFilter = type;
      
      const btnAll = document.getElementById('btn-all');
      const btnCore = document.getElementById('btn-core');
      const btnRelated = document.getElementById('btn-related');

      // Reset
      [btnAll, btnCore, btnRelated].forEach(b => {
        b.className = 'px-3 py-1.5 rounded-lg font-medium transition-all bg-slate-100 text-slate-600 hover:bg-slate-200';
      });

      if (type === 'ALL') {
        btnAll.className = 'px-3 py-1.5 rounded-lg font-medium transition-all bg-slate-900 text-white shadow-sm';
      } else if (type === 'core') {
        btnCore.className = 'px-3 py-1.5 rounded-lg font-medium transition-all bg-rose-600 text-white shadow-sm';
      } else if (type === 'related') {
        btnRelated.className = 'px-3 py-1.5 rounded-lg font-medium transition-all bg-amber-600 text-white shadow-sm';
      }

      render();
    }

    function render() {
      let filtered = REPOS.filter(repo => {
        if (activeFilter === 'core' && !repo.isAdult) return false;
        if (activeFilter === 'related' && !repo.isAdultRelated) return false;

        if (currentSearch) {
          const matchName = repo.full_name.toLowerCase().includes(currentSearch);
          const matchDesc = (repo.description || '').toLowerCase().includes(currentSearch);
          const matchCategory = repo.adultInfo ? (repo.adultInfo.category + repo.adultInfo.reason).toLowerCase().includes(currentSearch) : false;
          const matchTopics = (repo.topics || []).some(t => t.toLowerCase().includes(currentSearch));
          const matchLang = (repo.language || '').toLowerCase().includes(currentSearch);
          if (!matchName && !matchDesc && !matchCategory && !matchTopics && !matchLang) {
            return false;
          }
        }
        return true;
      });

      // Sort
      filtered.sort((a, b) => {
        if (currentSort === 'stars_desc') return (b.stars || 0) - (a.stars || 0);
        if (currentSort === 'name_asc') return a.full_name.localeCompare(b.full_name);
        return new Date(b.starred_at || 0) - new Date(a.starred_at || 0);
      });

      document.getElementById('display-count').innerText = filtered.length;
      const container = document.getElementById('cards-container');

      if (filtered.length === 0) {
        container.innerHTML = \`<div class="col-span-full py-16 text-center text-slate-400">
          <p class="text-3xl mb-2">🔍</p>
          <p class="text-sm font-medium text-slate-600">没有匹配到相关项目</p>
        </div>\`;
        return;
      }

      const langColors = {
        Python: '#3572A5',
        JavaScript: '#f1e05a',
        TypeScript: '#3178c6',
        Go: '#00ADD8',
        Rust: '#dea584',
        Vue: '#41b883'
      };

      container.innerHTML = filtered.map(r => {
        const isCore = r.isAdult;
        const badgeType = isCore 
          ? \`<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">🔞 核心成人</span>\`
          : \`<span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">⚠️ 擦边/关联</span>\`;

        const subCategoryBadge = \`<span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">\${r.adultInfo.category}</span>\`;

        const dotColor = langColors[r.language] || '#94a3b8';
        const starDate = r.starred_at ? new Date(r.starred_at).toISOString().split('T')[0] : '';

        return \`
        <div class="bg-white border border-slate-200/90 rounded-2xl p-6 custom-shadow hover:custom-shadow-hover hover:border-slate-300 transition-all flex flex-col justify-between group">
          <div>
            <!-- Header badges & actions -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <div class="flex items-center gap-1.5 flex-wrap">
                \${badgeType}
                \${subCategoryBadge}
              </div>
              <div class="flex items-center gap-1">
                <button onclick="copyClone('\${r.html_url}')" title="复制 git clone 命令" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </button>
                <a href="\${r.html_url}" target="_blank" title="前往 GitHub 仓库" class="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Repo Full Name -->
            <h3 class="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
              <a href="\${r.html_url}" target="_blank" class="inline-flex items-center gap-1">
                <span>\${r.full_name}</span>
              </a>
            </h3>

            <!-- Functional explanation callout -->
            <div class="mt-3 mb-3 p-3 rounded-xl bg-slate-50 border border-slate-150 text-xs text-slate-700 leading-relaxed">
              <span class="font-semibold text-slate-900">功能简述：</span>\${r.adultInfo.reason}
            </div>

            <!-- Original Description -->
            <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
              \${r.description || '暂无官方描述'}
            </p>

            <!-- Topics -->
            \${(r.topics && r.topics.length > 0) ? \`
              <div class="flex flex-wrap gap-1.5 mb-4">
                \${r.topics.slice(0, 5).map(t => \`
                  <span class="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60 font-mono">
                    #\${t}
                  </span>
                \`).join('')}
              </div>
            \` : ''}
          </div>

          <!-- Footer meta -->
          <div class="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div class="flex items-center gap-3">
              \${r.language ? \`
                <span class="inline-flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full" style="background-color: \${dotColor}"></span>
                  <span class="text-slate-700 font-medium">\${r.language}</span>
                </span>
              \` : '<span class="text-slate-400">未知</span>'}
              <span class="inline-flex items-center gap-1">
                ⭐ \${(r.stars || 0).toLocaleString()}
              </span>
              <span class="inline-flex items-center gap-1">
                🍴 \${(r.forks || 0).toLocaleString()}
              </span>
            </div>

            <div class="flex items-center gap-2">
              <span class="text-[11px] text-slate-400">⭐ \${starDate}</span>
              <a href="\${r.html_url}" target="_blank" class="text-xs font-semibold text-rose-600 hover:text-rose-700 pl-2">
                访问仓库 →
              </a>
            </div>
          </div>
        </div>
        \`;
      }).join('');
    }

    function copyClone(url) {
      const cmd = \`git clone \${url}.git\`;
      navigator.clipboard.writeText(cmd).then(() => {
        alert('已复制克隆命令: ' + cmd);
      }).catch(() => {
        alert('复制失败，命令为: ' + cmd);
      });
    }

    init();
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', html, 'utf-8');
console.log('Successfully generated pure white minimalist index.html!');
