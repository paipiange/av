# AV - GitHub 成人类与擦边项目收藏集

> 自动筛选自 GitHub 用户 [@paipiange](https://github.com/paipiange) 的全部 Star 收藏，专注于成人向（18+ / JAV / 绅士向）及高关联工具项目。

页面采用 **白色极简风格**（Apple / Linear 风格）设计，单文件静态 HTML，无外部后端依赖，离线即开即用。

---

## 📖 页面预览

可以直接在浏览器中打开 `index.html`，或开启 GitHub Pages 查看在线版：
* 包含 **9 个核心成人类项目** + **3 个擦边/关联工具**
* 支持一键分类过滤（全部 / 核心成人 / 擦边关联）
* 支持关键词实时搜索、按 Star 时间 / Star 数量排序
* 支持一键复制 `git clone` 命令及直达 GitHub 仓库

---

## 🔞 收录项目一览

### 核心成人类项目（9 项）

| 项目名称 | 语言 | 分类 | 功能简介 |
| :--- | :---: | :--- | :--- |
| [stashapp/stash](https://github.com/stashapp/stash) | Go | **成人影音管理** | 本地成人影视/Porn 媒体中心，支持女优库、标签分类、Studio 刮削与流式播放 |
| [gfriends/gfriends](https://github.com/gfriends/gfriends) | - | **女优头像/JAV刮削** | Emby / Jellyfin / Plex 媒体服务器的日本 AV 女优高分辨率头像与演员元数据仓库 |
| [peach-mitao/peach](https://github.com/peach-mitao/peach) | Python | **JAV本地影音库** | 蜜桃：单用户、本地优先的 JAV 与个人私密媒体管理播放系统 |
| [levywang/avhub](https://github.com/levywang/avhub) | Vue | **R18影视/资源检索** | R18 成人影视资源一键聚合搜索、番号查询与个人资源整理工具 |
| [aizhimou/jav-play](https://github.com/aizhimou/jav-play) | TypeScript | **JAV浏览/本地播放** | 浏览器插件，在 javdb.com / javlibrary 影片详情页一键调用本地播放器直接播放 |
| [lanyeeee/jmcomic-downloader](https://github.com/lanyeeee/jmcomic-downloader) | Rust | **18禁漫画批量下载** | 禁漫天堂 (18comic / jmcomic) 多线程批量漫画下载器，带 GUI 图形界面 |
| [Arekejoker/qwen21-nsfw-pose-skill](https://github.com/Arekejoker/qwen21-nsfw-pose-skill) | Python | **NSFW-AI生成** | Qwen-Image 2.1 NSFW / 姿势出图 Agent 技能，整合 NSFW LoRA 与 136 姿势人偶控制 |
| [ladaapp/lada](https://github.com/ladaapp/lada) | Python | **去马赛克/JAV修复** | 基于深度学习算法对马赛克/像素化视频区域进行还原与修复 (JAV restoration) |
| [123xiao/sex-agreement-app](https://github.com/123xiao/sex-agreement-app) | TypeScript | **成人协议工具** | 性行为知情同意与协议签署应用系统 |

### 擦边与关联工具（3 项）

| 项目名称 | 语言 | 分类 | 功能简介 |
| :--- | :---: | :--- | :--- |
| [HypoX64/DeepMosaics](https://github.com/HypoX64/DeepMosaics) | Python | **去马赛克/图像视频处理** | 基于深度学习自动去除或添加图片与视频马赛克 |
| [wangshub/Douyin-Bot](https://github.com/wangshub/Douyin-Bot) | Python | **小姐姐筛选/自动化** | Python 抖音自动化机器人，自动人脸识别与漂亮小姐姐视频筛选 |
| [SillyTavern/SillyTavern](https://github.com/SillyTavern/SillyTavern) | JavaScript | **角色扮演/酒馆RP** | 高级大模型前端，广泛用于无审查/角色扮演 (ERP) 与互动剧情交互 |

---

## 🛠️ 本地运行与数据更新

### 直接查看
双击 `index.html` 即可在任意浏览器中打开。

### 更新 Star 列表并重新生成页面
```bash
# 1. 使用 GitHub CLI 拉取最新 Star 列表
node fetch_stars.mjs

# 2. 重新生成白色极简风格 index.html
node generate_minimal_white.mjs
```

---

## 📄 License
MIT License
