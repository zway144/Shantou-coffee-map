// Shantou Coffee Map - Main Logic
// Fully inspired by zaraintokyo.com with AMap integration

(function() {
    'use strict';

    // AMap API Key
    const AMapKey = 'dabb322f5bae6dc2ce0d30c6c1fff15b';
    const AMapSecurity = '0c7c2ca3d7924c1bcc5fdf82393a7fad';

    // State
    let filteredPlaces = coffeeShops;
    let activeCategory = 'All';
    let map = null;
    let markers = [];

    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const categoriesList = document.getElementById('categoriesList');
    const areasList = document.getElementById('areasList');
    const mainContent = document.getElementById('mainContent');
    const featuredScroll = document.getElementById('featuredScroll');
    const resultCount = document.getElementById('resultCount');
    const toolbar = document.getElementById('toolbar');

    // Initialize
    document.addEventListener('DOMContentLoaded', () => {
        updateStats();
        renderAreasCategories();
        renderTagCategories();
        renderFeatured();
        renderPlaces();
        setupScrollEvents();
        setupSearchEvents();
        setupFeaturedDrag();
        setupThoughtBubble();
    });

    // Update hero stats
    function updateStats() {
        const areas = [...new Set(coffeeShops.map(s => s.area))];
        document.getElementById('shopCount').textContent = coffeeShops.length;
        document.getElementById('areaCount').textContent = areas.length;
    }

    // Top Pick 推荐理由
    const recommendations = {
        2: '一家很好的社区店，意式和手冲都做得相当不错，店不大但是五脏俱全，在这里你可以喝到潮汕最优质的豆子之一，吴老板人很nice是很纯正的咖啡匠人，会跟你讲清楚豆子的香味和描述，非常值得一来。',
        5: '一家开了十年不做线上制作手冲的咖啡店，豆种特别丰富，并且也很优质，个人看来是汕头最好的手冲咖啡店。老板自己选豆，好像之前还想自己烘，是非常认真执着的咖啡手艺人，而且店面不小，很有日式的风格。',
        7: '环境很好，很适合办公和社交，有双层楼，意式和手冲也不错，好喝值得推荐。',
        44: '很喜欢的店，首先是很喜欢店的logo，其次是特调很好喝，喜欢松香木质调，并且抹茶的特调的顾客会很喜欢，做意式也不错，老板人也很好，特别特别喜欢的店，会不定期刷新一个我出来。',
        8: '特调很不错，用料非常好，我认为是汕头特调最值得来的之一，意式也很不错，如果在市区非常值得去。',
        6: '曾经有家分店是我之前最经常去的店，因为意式实在太好喝了，并且陪伴了我考雅思的一段小时光，环境不错，非常适合学习党和办公党去，咖啡也很好喝。',
        18: '非常喜欢他们的特调，是会惊艳到的程度，意式做的也很不错，出品稳定，老板人很好，离咖啡反应很近可以一起去。'
    };

    // 分类名称映射：中 -> 英
    const categoryNames = {
        'All': 'ALL',
        '环境好评': 'Vibe',
        '意式好评': 'Espresso',
        '手冲好评': 'Pour-over',
        '宠物友好': 'Pet Friendly',
        '特调好评': 'Specialty'
    };

    // 区域名称映射
    const areaNames = {
        'All': 'All Areas',
        '龙湖区': 'Longhu',
        '金平区': 'Jinping',
        '东海岸': 'East Coast',
        '澄海区': 'Chenghai'
    };

    // Render areas categories (dark bar)
    function renderAreasCategories() {
        const areaCategories = ['All', '龙湖区', '金平区', '东海岸', '澄海区'];

        areasList.innerHTML = areaCategories.map(area => {
            let count;
            if (area === 'All') {
                count = coffeeShops.length;
            } else {
                count = coffeeShops.filter(p => p.area === area).length;
            }
            return `
                <li>
                    <button class="cat-btn ${area === 'All' ? 'active' : ''}" data-area="${area}">
                        ${areaNames[area]}
                        <span class="cat-count">${count}</span>
                    </button>
                </li>
            `;
        }).join('');

        // Area selection - only one bar can be active
        areasList.querySelectorAll('.cat-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Clear both bars
                areasList.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
                categoriesList.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));

                btn.classList.add('active');

                const selectedArea = btn.dataset.area;
                if (selectedArea === 'All') {
                    activeCategory = 'All';
                } else {
                    activeCategory = selectedArea; // Use area as filter
                }
                filterPlaces();
            });
        });
    }

    // Render tag categories
    function renderTagCategories() {
        const tagCategories = ['环境好评', '意式好评', '手冲好评', '宠物友好', '特调好评'];

        categoriesList.innerHTML = tagCategories.map(cat => {
            const count = coffeeShops.filter(p => p.tags.includes(cat)).length;
            return `
                <li>
                    <button class="cat-btn" data-category="${cat}">
                        ${categoryNames[cat]}
                        <span class="cat-count">${count}</span>
                    </button>
                </li>
            `;
        }).join('');

        // Tag selection
        categoriesList.querySelectorAll('.cat-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Clear both bars
                areasList.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
                categoriesList.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));

                btn.classList.add('active');
                activeCategory = btn.dataset.category;
                filterPlaces();
            });
        });
    }

    // Render featured cards
    function renderFeatured() {
        const featured = coffeeShops.filter(p => p.featured);
        featuredScroll.innerHTML = featured.map(place => createFeaturedCard(place)).join('');
    }

    // Create featured card
    function createFeaturedCard(place) {
        // Convert tags to English
        const getEnglishTag = (tag) => categoryNames[tag] || tag;
        const englishTags = place.tags.map(getEnglishTag);

        // Generate star dots
        const stars = Math.round(place.rating * 2) / 2;
        const fullStars = Math.floor(stars);
        const hasHalf = stars % 1 !== 0;
        let starsHtml = '';
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) starsHtml += '<span class="star-dot filled"></span>';
            else if (i === fullStars && hasHalf) starsHtml += '<span class="star-dot half"></span>';
            else starsHtml += '<span class="star-dot"></span>';
        }

        return `
            <div class="featured-card" data-id="${place.id}" data-lat="${place.lat}" data-lng="${place.lng}" data-name="${place.name}" data-address="${place.address}">
                <span class="featured-card-cat">${englishTags.join(' · ') || place.area}</span>
                <h3 class="featured-card-title">${place.name}</h3>
                <div class="featured-card-rating">
                    <div class="featured-card-stars-visual">${starsHtml}</div>
                    <span class="featured-card-stars">${place.rating}</span>
                </div>
                <p class="featured-card-address">${place.address}</p>
                <svg class="featured-card-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="5 12 19 12"></polyline>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </div>
        `;
    }

    // Render places grid
    function renderPlaces() {
        let grouped = {};

        if (activeCategory === 'All') {
            // 当选择All时，按区域分组
            filteredPlaces.forEach(place => {
                if (!grouped[place.area]) grouped[place.area] = [];
                grouped[place.area].push(place);
            });

            mainContent.innerHTML = Object.entries(grouped)
                .sort(([catA], [catB]) => {
                    const order = { '龙湖区': 0, '金平区': 1, '东海岸': 2, '澄海区': 3 };
                    return (order[catA] ?? 3) - (order[catB] ?? 3);
                })
                .map(([area, places]) => createSection(area, places))
                .join('');
        } else {
            // 当选择具体分类时，按该分类分组显示
            const selectedTag = activeCategory;
            filteredPlaces.forEach(place => {
                if (!grouped[selectedTag]) grouped[selectedTag] = [];
                grouped[selectedTag].push(place);
            });

            mainContent.innerHTML = Object.entries(grouped)
                .map(([tag, places]) => createSection(tag, places))
                .join('');
        }

        // Observe sections for scroll reveal
        document.querySelectorAll('.reveal').forEach(el => {
            revealObserver.observe(el);
        });

        // Observe illustrations for scroll-triggered animation
        document.querySelectorAll('.section-illustration').forEach(el => {
            illustObserver.observe(el);
        });

        // Bind click + 3D tilt to cards
        document.querySelectorAll('.place-card, .featured-card').forEach(card => {
            card.addEventListener('click', handleCardClick);
        });

        // 3D tilt on place cards
        document.querySelectorAll('.place-card').forEach(card => {
            card.addEventListener('mousemove', handleCardTilt);
            card.addEventListener('mouseleave', handleCardTiltReset);
        });
    }

    // Handle card click - navigate to AMap
    function handleCardClick(e) {
        const card = e.currentTarget;
        const lat = parseFloat(card.dataset.lat);
        const lng = parseFloat(card.dataset.lng);
        const name = card.dataset.name;
        const address = card.dataset.address;

        if (lat && lng) {
            // Open AMap navigation in new tab
            const url = `https://uri.amap.com/marker?position=${lng},${lat}&name=${encodeURIComponent(name)}&address=${encodeURIComponent(address)}&coordinate=gaode&callnative=0`;
            window.open(url, '_blank');
        }
    }

    // Create section
    function createSection(area, places) {
        // 区域名称映射
        const areaNames = {
            '龙湖区': 'Longhu',
            '金平区': 'Jinping',
            '东海岸': 'East Coast',
            '澄海区': 'Chenghai',
            '环境好评': 'Vibe',
            '意式好评': 'Espresso',
            '手冲好评': 'Pour-over',
            '宠物友好': 'Pet Friendly',
            '特调好评': 'Specialty'
        };

        // 分类插图映射
        const categoryIllustrations = {
            '环境好评': 'images/categories/chair.png',
            '意式好评': 'images/categories/latte.png',
            '手冲好评': 'images/categories/pourover.png',
            '宠物友好': 'images/categories/dog.png',
            '特调好评': 'images/categories/specialty.png'
        };

        const displayName = areaNames[area] || area;
        const illustration = categoryIllustrations[area];

        // Illustration animation class mapping
        const illustClasses = {
            '环境好评': 'illust-chair',
            '意式好评': 'illust-latte',
            '手冲好评': 'illust-pourover',
            '宠物友好': 'illust-dog',
            '特调好评': 'illust-specialty'
        };
        const illustClass = illustClasses[area] || '';

        return `
            <section class="category-section reveal">
                <div class="section-header">
                    ${illustration ? `<img src="${illustration}" alt="${displayName}" class="section-illustration ${illustClass}">` : ''}
                    <h2 class="section-title">${displayName}</h2>
                    <p class="section-count">${places.length} place${places.length !== 1 ? 's' : ''}</p>
                </div>
                <div class="places-grid">
                    ${places.map(place => createPlaceCard(place)).join('')}
                </div>
            </section>
        `;
    }

    // Get area-specific SVG illustration (保留函数但不再使用)
    function getAreaIllustration(area) {
        const illustrations = {
            '龙湖区': `
                <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" stroke-width="2" opacity="0.3"/>
                <rect x="35" y="45" width="20" height="40" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <rect x="65" y="55" width="25" height="30" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="77" cy="65" r="4" stroke="currentColor" stroke-width="1" fill="none"/>
                <path d="M77 70 L77 80" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            `,
            '金平区': `
                <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" stroke-width="2" opacity="0.3"/>
                <rect x="30" y="40" width="30" height="50" rx="1" stroke="currentColor" stroke-width="1.5"/>
                <line x1="30" y1="60" x2="60" y2="60" stroke="currentColor" stroke-width="1"/>
                <rect x="70" y="70" width="20" height="1.5" rx="0.5" stroke="currentColor" stroke-width="1"/>
                <path d="M73 68 L75 75 L83 75 L85 68" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
                <ellipse cx="79" cy="65" rx="4" ry="2" stroke="currentColor" stroke-width="0.8" fill="none"/>
            `,
            '东海岸': `
                <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" stroke-width="2" opacity="0.3"/>
                <path d="M30 85 Q40 75 50 85 Q60 95 70 85 Q80 75 90 85" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.5"/>
                <rect x="45" y="50" width="30" height="40" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="60" cy="60" r="5" stroke="currentColor" stroke-width="1" fill="none"/>
                <path d="M20 50 Q25 40 30 35" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M25 55 Q32 48 40 50" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
            `,
            '澄海区': `
                <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" stroke-width="2" opacity="0.3"/>
                <path d="M35 70 L50 55 L65 65 L80 50" stroke="currentColor" stroke-width="1.5" fill="none"/>
                <circle cx="50" cy="55" r="4" stroke="currentColor" stroke-width="1"/>
                <path d="M30 80 Q45 75 60 82 Q75 88 90 80" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.5"/>
                <line x1="65" y1="50" x2="70" y2="58" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
            `
        };
        return illustrations[area] || illustrations['龙湖区'];
    }

    // Create place card
    function createPlaceCard(place) {
        const stars = Math.round(place.rating * 2) / 2;
        const fullStars = Math.floor(stars);
        const hasHalf = stars % 1 !== 0;
        let starsHtml = '';
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) starsHtml += '<span class="star-dot filled"></span>';
            else if (i === fullStars && hasHalf) starsHtml += '<span class="star-dot half"></span>';
            else starsHtml += '<span class="star-dot"></span>';
        }

        // Convert tags to English
        const getEnglishTag = (tag) => categoryNames[tag] || tag;
        const englishTags = place.tags.map(getEnglishTag);

        return `
            <div class="place-card" data-id="${place.id}" data-lat="${place.lat}" data-lng="${place.lng}" data-name="${place.name}" data-address="${place.address}">
                <div class="card-shine"></div>
                <div class="place-card-top">
                    <h3 class="place-card-title">${place.name}</h3>
                    <div class="place-card-rating">
                        <div class="place-card-stars-visual">${starsHtml}</div>
                        <span class="place-card-stars">${place.rating}</span>
                    </div>
                </div>
                <div class="place-card-info">
                    <span class="place-card-type">${englishTags.join(' · ')}</span>
                </div>
                <p class="place-card-address">${place.address}</p>
                <svg class="maps-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/>
                </svg>
            </div>
        `;
    }

    // Filter places
    function filterPlaces() {
        const searchTerm = searchInput.value.toLowerCase();
        const areas = ['龙湖区', '金平区', '东海岸', '澄海区'];

        filteredPlaces = coffeeShops.filter(place => {
            // Check if activeCategory is an area or a tag
            let categoryMatch;
            if (activeCategory === 'All') {
                categoryMatch = true;
            } else if (areas.includes(activeCategory)) {
                // It's an area
                categoryMatch = place.area === activeCategory;
            } else {
                // It's a tag
                categoryMatch = place.tags.includes(activeCategory);
            }

            const searchMatch = place.name.toLowerCase().includes(searchTerm) ||
                                place.area.toLowerCase().includes(searchTerm) ||
                                place.address.toLowerCase().includes(searchTerm) ||
                                place.tags.some(t => t.toLowerCase().includes(searchTerm));
            return categoryMatch && searchMatch;
        });

        updateResultCount();
        renderPlaces();
    }

    // Update result count
    function updateResultCount() {
        resultCount.textContent = filteredPlaces.length > 0
            ? `${filteredPlaces.length} result${filteredPlaces.length !== 1 ? 's' : ''}`
            : 'No results';
    }

    // Setup search events
    function setupSearchEvents() {
        searchInput.addEventListener('input', filterPlaces);
    }

    // Setup scroll events (for hero reveal animation)
    function setupScrollEvents() {
        // Toolbar is no longer sticky, no scroll effects needed
    }

    // Featured scroll with inertia, magnetic snap, and coffee pour indicator
    function setupFeaturedDrag() {
        const el = featuredScroll;
        const pourLiquid = document.getElementById('pourLiquid');
        const pourSurface = document.getElementById('pourSurface');
        const pourSteam = document.getElementById('pourSteam');
        const pourLabel = document.getElementById('pourLabel');

        let isDown = false;
        let startX, startScrollLeft;
        let lastX, lastTime;
        let velocity = 0;
        let momentumId = null;

        // Card focus: highlight center card, dim others
        function updateCardFocus() {
            const cards = el.querySelectorAll('.featured-card');
            const containerRect = el.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;
            let closestIdx = 0;
            let closestDist = Infinity;

            cards.forEach((card, i) => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                const dist = Math.abs(cardCenter - containerCenter);

                if (dist < closestDist) {
                    closestDist = dist;
                    closestIdx = i;
                }

                // Smooth focus/unfocus based on distance
                const maxDist = containerRect.width * 0.45;
                const ratio = Math.min(dist / maxDist, 1);

                if (ratio < 0.35) {
                    card.classList.add('in-focus');
                    card.classList.remove('out-focus');
                } else if (ratio > 0.7) {
                    card.classList.remove('in-focus');
                    card.classList.add('out-focus');
                } else {
                    card.classList.remove('in-focus');
                    card.classList.remove('out-focus');
                }
            });

            return { closestIdx, totalCards: cards.length };
        }

        // Update coffee pour indicator
        function updatePourIndicator() {
            const maxScroll = el.scrollWidth - el.clientWidth;
            if (maxScroll <= 0) return;

            const scrollRatio = Math.max(0, Math.min(1, el.scrollLeft / maxScroll));
            const { closestIdx, totalCards } = updateCardFocus();

            // Pour liquid: y goes from 78 (empty) to 20 (full)
            const liquidY = 78 - (scrollRatio * 58);
            if (pourLiquid) pourLiquid.setAttribute('y', liquidY);

            // Surface line follows liquid level
            if (pourSurface) {
                const surfaceY = liquidY;
                pourSurface.setAttribute('transform', `translate(0, ${surfaceY - 78})`);
            }

            // Steam appears when cup is more than 60% full
            if (pourSteam) {
                pourSteam.style.opacity = scrollRatio > 0.6 ? String((scrollRatio - 0.6) * 2.5) : '0';
            }

            // Update label
            if (pourLabel) {
                pourLabel.textContent = `${closestIdx + 1} / ${totalCards}`;
            }
        }

        // Magnetic snap to nearest card
        function snapToNearest() {
            const cards = el.querySelectorAll('.featured-card');
            if (!cards.length) return;

            const containerRect = el.getBoundingClientRect();
            let bestOffset = Infinity;

            cards.forEach(card => {
                const cardRect = card.getBoundingClientRect();
                // Snap so card's left aligns with container padding
                const offset = cardRect.left - containerRect.left - 32;
                if (Math.abs(offset) < Math.abs(bestOffset)) {
                    bestOffset = offset;
                }
            });

            // Spring-style snap
            const target = el.scrollLeft + bestOffset;
            smoothScrollTo(el, target, 500);
        }

        // Smooth scroll with spring-like easing
        function smoothScrollTo(element, target, duration) {
            const start = element.scrollLeft;
            const diff = target - start;
            const startTime = performance.now();

            function step(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Spring easing: overshoot then settle
                const spring = 1 - Math.pow(1 - progress, 4) * Math.cos(progress * Math.PI * 0.8);
                element.scrollLeft = start + diff * spring;

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    updatePourIndicator();
                }
            }
            requestAnimationFrame(step);
        }

        // Inertia after release
        function startMomentum() {
            el.classList.add('momentum');
            const friction = 0.94;
            const minVelocity = 0.5;

            function tick() {
                velocity *= friction;
                el.scrollLeft -= velocity;
                updatePourIndicator();

                if (Math.abs(velocity) > minVelocity) {
                    momentumId = requestAnimationFrame(tick);
                } else {
                    el.classList.remove('momentum');
                    // After momentum dies, snap to nearest card
                    snapToNearest();
                }
            }
            momentumId = requestAnimationFrame(tick);
        }

        function stopMomentum() {
            if (momentumId) {
                cancelAnimationFrame(momentumId);
                momentumId = null;
            }
            el.classList.remove('momentum');
        }

        // Mouse events
        el.addEventListener('mousedown', (e) => {
            stopMomentum();
            isDown = true;
            el.classList.add('dragging');
            startX = e.pageX;
            startScrollLeft = el.scrollLeft;
            lastX = e.pageX;
            lastTime = performance.now();
            velocity = 0;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX;
            const walk = (x - startX) * 1.2;
            el.scrollLeft = startScrollLeft - walk;

            // Track velocity
            const now = performance.now();
            const dt = now - lastTime;
            if (dt > 0) {
                velocity = (x - lastX) / dt * 16; // normalize to ~60fps
            }
            lastX = x;
            lastTime = now;

            updatePourIndicator();
        });

        window.addEventListener('mouseup', () => {
            if (!isDown) return;
            isDown = false;
            el.classList.remove('dragging');

            if (Math.abs(velocity) > 1.5) {
                startMomentum();
            } else {
                snapToNearest();
            }
        });

        // Touch events
        el.addEventListener('touchstart', (e) => {
            stopMomentum();
            isDown = true;
            startX = e.touches[0].pageX;
            startScrollLeft = el.scrollLeft;
            lastX = e.touches[0].pageX;
            lastTime = performance.now();
            velocity = 0;
        }, { passive: true });

        el.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX;
            const walk = (x - startX) * 1.2;
            el.scrollLeft = startScrollLeft - walk;

            const now = performance.now();
            const dt = now - lastTime;
            if (dt > 0) {
                velocity = (x - lastX) / dt * 16;
            }
            lastX = x;
            lastTime = now;

            updatePourIndicator();
        }, { passive: true });

        el.addEventListener('touchend', () => {
            if (!isDown) return;
            isDown = false;

            if (Math.abs(velocity) > 1.5) {
                startMomentum();
            } else {
                snapToNearest();
            }
        });

        // Also update on native scroll (for trackpad, etc.)
        el.addEventListener('scroll', updatePourIndicator);
        window.addEventListener('resize', updatePourIndicator);

        // Initialize
        setTimeout(() => {
            updatePourIndicator();
        }, 100);
    }

    // Thought bubble hover logic - fixed position, "poof" animation
    function setupThoughtBubble() {
        const portal = document.getElementById('thoughtPortal');
        const textEl = document.getElementById('thoughtText');
        let hideTimeout;
        let poofTimeout;

        featuredScroll.addEventListener('mouseover', (e) => {
            const card = e.target.closest('.featured-card');
            if (!card) return;

            const id = parseInt(card.dataset.id);
            const rec = recommendations[id];
            if (!rec) return;

            clearTimeout(hideTimeout);
            clearTimeout(poofTimeout);
            textEl.textContent = rec;

            // Position portal using fixed coordinates (relative to viewport)
            const cardRect = card.getBoundingClientRect();

            // Place bubble above the card, aligned to the right edge
            const right = window.innerWidth - cardRect.right + 10;
            const top = cardRect.top - 12;

            portal.style.right = right + 'px';
            portal.style.top = top + 'px';
            portal.style.left = 'auto';
            portal.style.bottom = 'auto';

            // Reset animation: remove hiding first, then trigger visible
            portal.classList.remove('hiding');
            portal.classList.remove('visible');
            void portal.offsetWidth; // force reflow
            portal.classList.add('visible');
        });

        featuredScroll.addEventListener('mouseout', (e) => {
            const card = e.target.closest('.featured-card');
            if (!card) return;

            // Check if we're moving to another element inside the same card
            const related = e.relatedTarget;
            if (related && card.contains(related)) return;

            hideTimeout = setTimeout(() => {
                // Trigger "poof" hide animation (keep visible class so elements stay rendered)
                portal.classList.add('hiding');

                // After animation ends, fully hide
                poofTimeout = setTimeout(() => {
                    portal.classList.remove('visible');
                    portal.classList.remove('hiding');
                }, 400);
            }, 100);
        });
    }

    // Scroll reveal observer for sections
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Scroll observer for illustration animations
    const illustObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('alive');
            }
        });
    }, { threshold: 0.3 });

    // Card 3D tilt handler
    function handleCardTilt(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
        card.style.setProperty('--mouse-x', (x / rect.width * 100) + '%');
        card.style.setProperty('--mouse-y', (y / rect.height * 100) + '%');
    }

    function handleCardTiltReset(e) {
        const card = e.currentTarget;
        card.style.transform = '';
    }

})();
