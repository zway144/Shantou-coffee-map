# Garry's Coffee Map | 汕头咖啡地图

汕头 43 家精选咖啡店的双层筛选发现工具，支持区域 × 标签联动筛选，点击任意卡片跳转高德地图导航。

**[→ Live Demo](https://zway144.github.io/Shantou-coffee-map)**

---

## 功能亮点

- **双层分类筛选** — 区域栏（龙湖 / 金平 / 东海岸 / 澄海）× 标签栏（环境 / 意式 / 手冲 / 宠物友好 / 特调），二选一联动互斥
- **Hero 入场动画** — 词组逐词滑入、咖啡杯浮动旋转、装饰性虚线圆点
- **精选推荐横滑区** — 拖拽惯性 + 磁性吸附 + 咖啡杯液位进度指示器 + 悬停推荐语气泡（Why I pick）
- **店铺卡片交互** — 悬停 3D 倾斜 + 镜面高光 + 左侧彩色竖条滑入，点击跳转高德地图 App
- **响应式适配** — 移动端触控优化，全端一致体验

---

## 快速开始

```bash
# 直接打开 index.html 即可，无需任何构建
open index.html
```

> 推荐使用 VS Code Live Server 或任意本地服务器，避免跨域问题。

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 结构 | HTML5 + CSS Custom Properties |
| 样式 | 原生 CSS（无框架） |
| 交互 | Vanilla JavaScript (ES6+) |
| 地图 | 高德地图 URI API |
| 字体 | Cormorant Garamond + DM Sans + Noto Sans SC (Google Fonts) |

---

## 项目结构

```
shantou-coffee-map/
├── index.html          # 单页入口
├── README.md           # 本文件
├── css/
│   └── style.css       # 全站样式
├── js/
│   ├── main.js         # 页面逻辑、筛选、交互
│   └── data.js         # 咖啡店数据（43 条）
└── images/
    └── hero-coffee-nobg.png   # Hero 插图
```

---

## 设计系统

### 配色

| Token | 色值 | 用途 |
|-------|------|------|
| `--cream` | `#F7F3ED` | 主背景 |
| `--warm-white` | `#FEFCF9` | Hero / 卡片背景 |
| `--ink` | `#1A1612` | 正文 |
| `--japan-blue` | `#2B5F8A` | 主强调色 |
| `--vermillion` | `#C4432A` | 次强调色 |
| `--sand` | `#E8E0D4` | 边框/分割线 |

### 字体

- **Cormorant Garamond** — 标题、大号数字
- **DM Sans** — 正文、按钮、标签
- **Noto Sans SC** — 中文内容

---

## License

MIT — 欢迎 Fork & PR
