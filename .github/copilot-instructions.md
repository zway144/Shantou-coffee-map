# Shantou Coffee Map - AI Coding Guidelines

## Project Overview
Static single-page web app showcasing coffee shops in Shantou, China. No build process - edit files directly and open `index.html` in browser. Inspired by zaraintokyo.com design.

## Architecture
- **Frontend**: Vanilla HTML/CSS/JS with responsive design
- **Data**: Static JSON-like arrays in `js/data.js` (43 coffee shops)
- **Navigation**: Links to AMap (Alibaba Maps) for directions
- **Filtering**: By area (龙湖区/金平区/东海岸/澄海区) or tags (环境好评/意式好评/手冲好评/宠物友好/特调好评)
- **Search**: Real-time filtering by name, area, address, or tags

## Key Files
- `index.html`: Main structure with hero, toolbar, category bars, featured section, grid layout
- `js/data.js`: Coffee shop data, categories, areas, Shantou center coordinates
- `js/main.js`: Filtering logic, DOM rendering, search events, AMap navigation links
- `css/style.css`: Custom properties for colors/fonts, responsive grid layouts, card animations
- `images/categories/`: PNG icons for tag categories (chair.png, latte.png, etc.)

## Data Structure
Each coffee shop object:
```javascript
{
    id: number,
    name: string, // Chinese name, may include location
    address: string, // Full Chinese address
    lat: number, lng: number, // Precise coordinates
    area: string, // One of: 龙湖区/金平区/东海岸/澄海区
    rating: number, // 4.0-5.0 scale
    tags: string[], // From: 环境好评/意式好评/手冲好评/宠物友好/特调好评
    featured: boolean // Shows in top featured carousel
}
```

## Adding New Shops
1. Add object to `coffeeShops` array in `data.js`
2. Use consistent area names and tag vocabulary
3. Get accurate lat/lng coordinates
4. Update hero stats automatically via `updateStats()` in `main.js`
5. Test filtering and search functionality

## API Integration
- AMap API key: `dabb322f5bae6dc2ce0d30c6c1fff15b` (hardcoded in `main.js`)
- Navigation links: `https://uri.amap.com/marker?position=${lng},${lat}&name=...`
- Opens in new tab, no embedded map on page

## Styling Patterns
- CSS custom properties for consistent colors: `--cream`, `--ink`, `--vermillion`, etc.
- Font stack: Cormorant Garamond/DM Sans with Noto Serif/Sans SC fallbacks
- Responsive: Mobile-first with clamp() for fluid typography
- Cards: Hover effects, star ratings with half-stars, tag badges
- Animations: Intersection Observer for scroll reveals, subtle hero background floats

## Development Workflow
- Edit files directly - no compilation needed
- Test in browser with live reload
- Add shops: Update `data.js`, verify coordinates, check filtering
- Styling: Modify `style.css`, use dev tools for responsive testing
- Images: Place category icons in `images/categories/` as PNGs

## Common Tasks
- **New shop**: Add to `coffeeShops` array with all required fields
- **New tag**: Add to `categories` array, update filtering logic if needed
- **Styling**: Use existing CSS variables, follow card/component patterns
- **Search**: Case-insensitive, matches name/area/address/tags</content>
<parameter name="filePath">d:\shantou-coffee-map\.github\copilot-instructions.md