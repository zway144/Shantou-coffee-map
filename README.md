# Garry's Coffee Map | 汕头咖啡地图

一个给汕头咖啡爱好者用的咖啡店发现地图。收录 48 家店，支持按区域、标签和关键词筛选，点击店铺卡片可跳转高德地图查看位置。

**在线访问：** https://garryscoffee.com

## 适合谁

- 想在汕头找咖啡店的人
- 想按「手冲 / 意式 / 特调 / 宠物友好 / 环境」快速筛选的人
- 想把咖啡店收藏、分享、导航给朋友的人

## 功能

- 区域筛选：龙湖、金平、东海岸、澄海
- 标签筛选：环境好评、意式好评、手冲好评、宠物友好、特调好评
- 关键词搜索：店名、区域、地址、标签均可搜索
- 精选横滑推荐区
- 点击店铺卡片跳转高德地图
- 移动端和桌面端自适应

## 技术

这是一个无构建步骤的静态网页项目：

- HTML
- CSS
- Vanilla JavaScript
- GitHub Pages

## 本地运行

直接打开 `index.html` 即可。也可以用 VS Code Live Server 或任意静态服务器预览。

```bash
python -m http.server 8000
```

然后访问：

```txt
http://localhost:8000
```

## 项目结构

```txt
shantou-coffee-map/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── data.js
│   └── main.js
├── images/
└── CNAME
```

## 数据说明

咖啡店数据维护在 `js/data.js`。如果你发现店铺信息有误、想补充新店，欢迎提交 issue 或 PR。

## 说明

本项目是个人整理的汕头咖啡地图，不代表任何店铺或平台官方信息。店铺营业状态、地址、评分和体验可能会变化，出发前建议再自行确认。

## License

MIT