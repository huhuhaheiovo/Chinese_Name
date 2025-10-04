# 诗经起名字，楚辞起名字

基于《诗经》和《楚辞》的古典文学起名网站，提供专业的起名指导和声调搭配建议。

## 项目概述

这是一个专注于中文起名文化的静态网站，以"男宝宝用楚辞，女宝宝起名用诗经"为核心，为用户生成好听又有内涵的名字。

## 技术栈

- **框架**: Next.js 14.2.4+ (App Router)
- **语言**: React 18.2.0 + TypeScript
- **样式**: Tailwind CSS 4
- **评论系统**: disqus-react 1.1.7
- **部署**: Cloudflare Pages + Wrangler

## 功能特性

### 核心功能
1. **起名声调韵律** - 平仄搭配指导
2. **诗经原文** - 经典诗篇选读和起名建议
3. **楚辞原文** - 浪漫主义诗歌赏析
4. **历史人物** - 历史名人名字解析
5. **常见问题** - 起名相关FAQ

### 设计特色
- 响应式设计，移动端优先
- 古典文学与现代设计结合
- 优雅的配色方案
- 流畅的动画效果

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页
│   ├── tone-rhythm/       # 起名声调韵律页面
│   ├── shijing/           # 诗经原文页面
│   ├── chuci/             # 楚辞原文页面
│   ├── historical-figures/ # 历史人物页面
│   ├── faq/               # 常见问题页面
│   ├── layout.tsx         # 根布局
│   ├── globals.css        # 全局样式
│   ├── not-found.tsx      # 404页面
│   └── loading.tsx        # 加载页面
├── components/             # 可复用组件
│   └── Navigation.tsx     # 导航组件
├── lib/                   # 工具函数
└── types/                 # TypeScript类型定义
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

### 构建项目

```bash
npm run build
```

### 部署到Cloudflare Pages

```bash
npm run deploy
```

## 配色方案

- **eggshell**: #f4f1de (主背景色)
- **burnt-sienna**: #e07a5f (辅助色)
- **delft-blue**: #3d405b (主文字色)
- **cambridge-blue**: #81b29a (主题色)
- **sunset**: #f2cc8f (强调色)

## SEO优化

- 完整的meta标签配置
- 语义化HTML结构
- 响应式设计
- 快速加载速度
- 结构化数据标记

## 浏览器兼容性

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- 移动端浏览器

## 许可证

MIT License

## 联系方式

中国传统文化起名研究院