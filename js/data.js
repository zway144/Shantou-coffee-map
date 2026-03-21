// 汕头咖啡店数据

const coffeeShops = [
    {
        id: 1,
        name: "FEED COFFEE(星港豪园店)",
        address: "广东省汕头市龙湖区金晖南街星港豪园3栋102铺面",
        lat: 23.354,
        lng: 116.685,
        area: "龙湖区",
        rating: 4.8,
        tags: ["环境好评", "意式好评"],
        featured: false
    },
    {
        id: 2,
        name: "解药珈琲",
        address: "龙湖区金涛庄东区45栋109号",
        lat: 23.356,
        lng: 116.692,
        area: "龙湖区",
        rating: 4.7,
        tags: ["手冲好评"],
        featured: true
    },
    {
        id: 3,
        name: "SOFT COFFEE",
        address: "广东省汕头市龙湖区环碧庄金珠园40栋108号",
        lat: 23.358,
        lng: 116.688,
        area: "龙湖区",
        rating: 4.3,
        tags: ["意式好评"],
        featured: false
    },
    {
        id: 4,
        name: "熟熟咖啡(丹霞店)",
        address: "广东省汕头市龙湖区华侨大道5号九里怡园三栋104室",
        lat: 23.351,
        lng: 116.680,
        area: "龙湖区",
        rating: 4.4,
        tags: ["意式好评"],
        featured: false
    },
    {
        id: 5,
        name: "树的小馆",
        address: "广东省汕头市龙湖区长平东路朝阳庄南区29栋123号",
        lat: 23.359,
        lng: 116.694,
        area: "龙湖区",
        rating: 4.6,
        tags: ["手冲好评"],
        featured: true
    },
    {
        id: 6,
        name: "Northbridge 北桥咖啡",
        address: "龙湖区金银岛香榭公寓一栋铺面",
        lat: 23.360,
        lng: 116.686,
        area: "龙湖区",
        rating: 4.5,
        tags: ["意式好评"],
        featured: true
    },
    {
        id: 7,
        name: "Looop Coffee",
        address: "广东省汕头市龙湖区领荟湾珠城路17号领荟湾34栋138号",
        lat: 23.345,
        lng: 116.682,
        area: "东海岸",
        rating: 4.6,
        tags: ["环境好评", "手冲好评"],
        featured: true
    },
    {
        id: 8,
        name: "Maybe买杯咖啡",
        address: "广东省汕头市金平区东方街道东方园南区22栋第三格铺面",
        lat: 23.362,
        lng: 116.700,
        area: "金平区",
        rating: 4.4,
        tags: ["特调好评"],
        featured: true
    },
    {
        id: 9,
        name: "浮遨咖啡",
        address: "龙湖区丰泽东路东豪华府一栋一楼110店面",
        lat: 23.355,
        lng: 116.695,
        area: "龙湖区",
        rating: 4.2,
        tags: [],
        featured: false
    },
    {
        id: 10,
        name: "OCD Coffee",
        address: "广东省汕头市龙湖区津河路东海岸新城云湾7幢101号房",
        lat: 23.342,
        lng: 116.678,
        area: "东海岸",
        rating: 4.8,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 11,
        name: "顽石咖啡stone coffee(丹霞庄西区店)",
        address: "广东省汕头市龙湖区丹苑南街丹霞庄西区36栋102号",
        lat: 23.357,
        lng: 116.691,
        area: "龙湖区",
        rating: 4.5,
        tags: [],
        featured: false
    },
    {
        id: 12,
        name: "WaterCafe",
        address: "汕头市龙湖区珠池街道丹霞庄中区14栋11号车库",
        lat: 23.356,
        lng: 116.689,
        area: "龙湖区",
        rating: 4.3,
        tags: [],
        featured: false
    },
    {
        id: 13,
        name: "潮济堂咖啡馆(华银国际大厦店)",
        address: "龙湖区长平东路华银国际大厦一楼122",
        lat: 23.360,
        lng: 116.693,
        area: "龙湖区",
        rating: 4.3,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 14,
        name: "Slow Jam Cafe",
        address: "广东省汕头市龙湖区碧霞中街碧霞庄北区12栋110号",
        lat: 23.358,
        lng: 116.690,
        area: "龙湖区",
        rating: 4.6,
        tags: ["意式好评"],
        featured: false
    },
    {
        id: 15,
        name: "Hills cafe见山咖啡(锦龙商业大厦店)",
        address: "广东省汕头市龙湖区珠池街道锦龙南路康泽药业旁",
        lat: 23.354,
        lng: 116.687,
        area: "龙湖区",
        rating: 4.4,
        tags: [],
        featured: false
    },
    {
        id: 16,
        name: "松松咖啡24小时(迎宾路店)",
        address: "广东省汕头市龙湖区迎宾路和榕江路交界建设大厦建设银行旁",
        lat: 23.352,
        lng: 116.696,
        area: "龙湖区",
        rating: 4.3,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 17,
        name: "GoodGood Coffee&Homestay",
        address: "广东省汕头市龙湖区金泰庄北区24栋122号",
        lat: 23.359,
        lng: 116.685,
        area: "龙湖区",
        rating: 4.7,
        tags: ["意式好评"],
        featured: false
    },
    {
        id: 18,
        name: "阶梯向上咖啡",
        address: "广东省汕头市龙湖区丹霞庄中区27栋底层13号铺面",
        lat: 23.357,
        lng: 116.692,
        area: "龙湖区",
        rating: 4.4,
        tags: ["特调好评"],
        featured: true
    },
    {
        id: 19,
        name: "Blacksheep 黑羊咖啡",
        address: "广东省汕头市龙湖区东海岸新城泰星路9号怡轩壹品湾5幢105号",
        lat: 23.340,
        lng: 116.675,
        area: "东海岸",
        rating: 4.6,
        tags: [],
        featured: false
    },
    {
        id: 20,
        name: "YUR COFFEE·予尔咖啡(东海岸首店)",
        address: "广东省汕头市龙湖区东海岸嘉桦公馆3栋07铺面",
        lat: 23.338,
        lng: 116.677,
        area: "东海岸",
        rating: 4.5,
        tags: [],
        featured: false
    },
    {
        id: 21,
        name: "红砖楼咖啡馆",
        address: "广东省汕头市金平区福平路85号",
        lat: 23.365,
        lng: 116.702,
        area: "金平区",
        rating: 4.7,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 22,
        name: "咸菜咖啡(小公园店)",
        address: "广东省汕头市金平区小公园街道至平路31号",
        lat: 23.367,
        lng: 116.705,
        area: "金平区",
        rating: 4.5,
        tags: [],
        featured: false
    },
    {
        id: 23,
        name: "Fizzle Coffee",
        address: "广东省汕头市龙湖区丹霞庄中区35栋109",
        lat: 23.356,
        lng: 116.691,
        area: "龙湖区",
        rating: 4.3,
        tags: [],
        featured: false
    },
    {
        id: 24,
        name: "明日咖啡(阳光花园2期店)",
        address: "龙湖区丹阳庄西三区二期1栋113铺面",
        lat: 23.358,
        lng: 116.693,
        area: "龙湖区",
        rating: 4.5,
        tags: [],
        featured: false
    },
    {
        id: 25,
        name: "游走之间珈琲",
        address: "龙湖区金砂路125号4、7幢101号",
        lat: 23.359,
        lng: 116.694,
        area: "龙湖区",
        rating: 4.6,
        tags: ["手冲好评"],
        featured: false
    },
    {
        id: 26,
        name: "熙阳·prosper·丹阳庄",
        address: "龙湖区丹阳庄阳光花园1座11号",
        lat: 23.357,
        lng: 116.691,
        area: "龙湖区",
        rating: 4.4,
        tags: ["宠物友好"],
        featured: false
    },
    {
        id: 27,
        name: "别急咖啡 Take it easy",
        address: "金平区东福路7号103之一；龙湖区长平东路清华城店",
        lat: 23.361,
        lng: 116.699,
        area: "金平区",
        rating: 4.5,
        tags: ["宠物友好"],
        featured: false
    },
    {
        id: 28,
        name: "Seasnail Coffee",
        address: "龙湖区环碧庄中区9栋101之三",
        lat: 23.358,
        lng: 116.688,
        area: "龙湖区",
        rating: 4.3,
        tags: [],
        featured: false
    },
    {
        id: 29,
        name: "假想出逃咖啡",
        address: "龙湖区金砂路125号4、7幢109号",
        lat: 23.359,
        lng: 116.694,
        area: "龙湖区",
        rating: 4.4,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 30,
        name: "小狗书信Dog's letter coffee",
        address: "龙湖区金珠华庭4幢03号车库",
        lat: 23.359,
        lng: 116.687,
        area: "龙湖区",
        rating: 4.6,
        tags: ["宠物友好"],
        featured: false
    },
    {
        id: 31,
        name: "芬奇思FINCHES咖啡",
        address: "龙湖区朝阳庄中区18栋104",
        lat: 23.360,
        lng: 116.694,
        area: "龙湖区",
        rating: 4.5,
        tags: [],
        featured: false
    },
    {
        id: 32,
        name: "散步Sanpo咖啡",
        address: "龙湖区丹阳庄东区50栋119号",
        lat: 23.357,
        lng: 116.691,
        area: "龙湖区",
        rating: 4.3,
        tags: [],
        featured: false
    },
    {
        id: 33,
        name: "均匀咖啡Drink",
        address: "龙湖区丹霞庄北区13栋108",
        lat: 23.357,
        lng: 116.690,
        area: "龙湖区",
        rating: 4.5,
        tags: [],
        featured: false
    },
    {
        id: 34,
        name: "棕本_ZoneBen Cafe",
        address: "龙湖区金霞街道",
        lat: 23.356,
        lng: 116.690,
        area: "龙湖区",
        rating: 4.2,
        tags: [],
        featured: false
    },
    {
        id: 35,
        name: "face face coffee store(金洋园店)",
        address: "金平区金环路4号",
        lat: 23.361,
        lng: 116.698,
        area: "金平区",
        rating: 4.4,
        tags: ["宠物友好"],
        featured: false
    },
    {
        id: 36,
        name: "Mini Kim迷你金咖啡",
        address: "龙湖区碧霞庄中区26栋103",
        lat: 23.358,
        lng: 116.690,
        area: "龙湖区",
        rating: 4.3,
        tags: ["特调好评"],
        featured: false
    },
    {
        id: 37,
        name: "Monsoon Coffee 季风咖啡",
        address: "澄海区",
        lat: 23.330,
        lng: 116.760,
        area: "澄海区",
        rating: 4.3,
        tags: [],
        featured: false
    },
    {
        id: 38,
        name: "Cafe on warm小暖咖啡(丹霞庄店)",
        address: "龙湖区长平路附近社区店",
        lat: 23.360,
        lng: 116.693,
        area: "龙湖区",
        rating: 4.4,
        tags: ["意式好评"],
        featured: false
    },
    {
        id: 39,
        name: "正在咖啡",
        address: "龙湖区星湖家园附近",
        lat: 23.355,
        lng: 116.686,
        area: "龙湖区",
        rating: 4.2,
        tags: [],
        featured: false
    },
    {
        id: 40,
        name: "Hiuka Park 歇脚公园咖啡",
        address: "龙湖区合信丹阳花园11栋105铺面",
        lat: 23.357,
        lng: 116.691,
        area: "龙湖区",
        rating: 4.5,
        tags: [],
        featured: false
    },
    {
        id: 41,
        name: "GAP COFFEE",
        address: "龙湖区社区咖啡（小众店）",
        lat: 23.356,
        lng: 116.688,
        area: "龙湖区",
        rating: 4.3,
        tags: [],
        featured: false
    },
    {
        id: 42,
        name: "No Tag Room",
        address: "龙湖区金霞街道（小众美学空间）",
        lat: 23.356,
        lng: 116.690,
        area: "龙湖区",
        rating: 4.6,
        tags: ["宠物友好"],
        featured: false
    },
    {
        id: 43,
        name: "BLUGRU",
        address: "龙湖区龙光世纪商务中心9栋117-118铺面",
        lat: 23.355,
        lng: 116.685,
        area: "龙湖区",
        rating: 4.5,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 44,
        name: "COFFEEREACTION咖啡反应",
        address: "广东省汕头市龙湖区丹霞庄中区丹霞南街8栋116号",
        lat: 23.3565,
        lng: 116.6910,
        area: "龙湖区",
        rating: 4.4,
        tags: ["特调好评"],
        featured: true
    }
];

// 分类数据
const categories = [
    { id: "all", name: "ALL", count: 44 },
    { id: "环境好评", name: "Vibe", count: 8 },
    { id: "意式好评", name: "Espresso", count: 7 },
    { id: "手冲好评", name: "Pour-over", count: 4 },
    { id: "宠物友好", name: "Pet Friendly", count: 5 },
    { id: "特调好评", name: "Specialty", count: 4 }
];

// 区域数据
const areas = [
    { id: "all", name: "ALL", count: 44 },
    { id: "龙湖区", name: "龙湖区", count: 34 },
    { id: "金平区", name: "金平区", count: 5 },
    { id: "东海岸", name: "东海岸", count: 4 },
    { id: "澄海区", name: "澄海区", count: 1 }
];

// 汕头市中心坐标
const SHANTOU_CENTER = {
    lat: 23.353,
    lng: 116.690
};

// 默认缩放级别
const DEFAULT_ZOOM = 13;
