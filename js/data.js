// 汕头咖啡店数据

const coffeeShops = [
    {
        id: 1,
        name: "FEED COFFEE(星港豪园店)",
        address: "广东省汕头市龙湖区金晖南街星港豪园3栋102铺面",
        lat: 23.358146,
        lng: 116.7449,
        area: "龙湖区",
        rating: 4.5,
        tags: ["环境好评", "意式好评"],
        featured: false
    },
    {
        id: 2,
        name: "解药珈琲",
        address: "龙湖区金涛庄东区45栋109号",
        lat: 23.359322,
        lng: 116.735806,
        area: "龙湖区",
        rating: 4.5,
        tags: ["手冲好评"],
        featured: true
    },
    {
        id: 3,
        name: "SOFT COFFEE",
        address: "广东省汕头市龙湖区环碧庄金珠园40栋108号",
        lat: 23.370753,
        lng: 116.724894,
        area: "龙湖区",
        rating: 4.5,
        tags: ["意式好评"],
        featured: false
    },
    {
        id: 4,
        name: "熟熟咖啡(丹霞店)",
        address: "广东省汕头市龙湖区华侨大道5号九里怡园三栋104室",
        lat: 23.341766,
        lng: 116.774561,
        area: "龙湖区",
        rating: 4.4,
        tags: ["意式好评"],
        featured: false
    },
    {
        id: 5,
        name: "树的小馆",
        address: "广东省汕头市龙湖区长平东路朝阳庄南区29栋123号",
        lat: 23.362748,
        lng: 116.730859,
        area: "龙湖区",
        rating: 4.4,
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
        rating: 4.4,
        tags: ["意式好评"],
        featured: false,
        closed: true
    },
    {
        id: 7,
        name: "Looop Coffee",
        address: "广东省汕头市龙湖区领荟湾珠城路17号领荟湾34栋138号",
        lat: 23.352371,
        lng: 116.733976,
        area: "东海岸",
        rating: 4.5,
        tags: ["环境好评", "手冲好评"],
        featured: true
    },
    {
        id: 8,
        name: "Maybe买杯咖啡",
        address: "广东省汕头市金平区东方街道东方园南区22栋第三格铺面",
        lat: 23.35851,
        lng: 116.71456,
        area: "金平区",
        rating: 4.5,
        tags: ["特调好评"],
        featured: true
    },
    {
        id: 9,
        name: "浮遊面包咖啡馆",
        address: "龙湖区丰泽东路东豪华府一栋一楼110店面",
        lat: 23.364996,
        lng: 116.745567,
        area: "龙湖区",
        rating: 4.6,
        tags: [],
        featured: false
    },
    {
        id: 10,
        name: "OCD Coffee",
        address: "广东省汕头市龙湖区津河路东海岸新城云湾7幢101号房",
        lat: 23.339358,
        lng: 116.7816,
        area: "东海岸",
        rating: 4.4,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 11,
        name: "顽石咖啡stone coffee(丹霞庄西区店)",
        address: "广东省汕头市龙湖区丹苑南街丹霞庄西区36栋102号",
        lat: 23.362911,
        lng: 116.720446,
        area: "龙湖区",
        rating: 4.5,
        tags: [],
        featured: false
    },
    {
        id: 12,
        name: "WaterCafe",
        address: "汕头市龙湖区珠池街道丹霞庄中区14栋11号车库",
        lat: 23.364948,
        lng: 116.723403,
        area: "龙湖区",
        rating: 4.4,
        tags: [],
        featured: false
    },
    {
        id: 13,
        name: "潮济堂咖啡馆(华银国际大厦店)",
        address: "龙湖区长平东路华银国际大厦一楼122",
        lat: 23.361345,
        lng: 116.718974,
        area: "龙湖区",
        rating: 4.5,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 14,
        name: "Slow Jam Cafe",
        address: "广东省汕头市龙湖区碧霞中街碧霞庄北区12栋110号",
        lat: 23.360411,
        lng: 116.722512,
        area: "龙湖区",
        rating: 4.5,
        tags: ["意式好评"],
        featured: false
    },
    {
        id: 15,
        name: "Hills cafe见山咖啡(锦龙商业大厦店)",
        address: "广东省汕头市龙湖区珠池街道锦龙南路康泽药业旁",
        lat: 23.356492,
        lng: 116.737793,
        area: "龙湖区",
        rating: 4.4,
        tags: [],
        featured: false
    },
    {
        id: 17,
        name: "GoodGood Coffee&Homestay",
        address: "广东省汕头市龙湖区金泰庄北区24栋122号",
        lat: 23.360916,
        lng: 116.740049,
        area: "龙湖区",
        rating: 4.4,
        tags: ["意式好评"],
        featured: false
    },
    {
        id: 18,
        name: "阶梯向上咖啡",
        address: "广东省汕头市龙湖区丹霞庄中区27栋底层13号铺面",
        lat: 23.363003,
        lng: 116.722275,
        area: "龙湖区",
        rating: 4.5,
        tags: ["特调好评"],
        featured: true
    },
    {
        id: 19,
        name: "Blacksheep 黑羊咖啡",
        address: "广东省汕头市龙湖区东海岸新城泰星路9号怡轩壹品湾5幢105号",
        lat: 23.342269,
        lng: 116.765498,
        area: "东海岸",
        rating: 4.4,
        tags: [],
        featured: false
    },
    {
        id: 20,
        name: "YUR COFFEE·予尔咖啡(东海岸首店)",
        address: "广东省汕头市龙湖区东海岸嘉桦公馆3栋07铺面",
        lat: 23.350847,
        lng: 116.766619,
        area: "东海岸",
        rating: 4.5,
        tags: [],
        featured: false
    },
    {
        id: 21,
        name: "红砖楼咖啡馆",
        address: "广东省汕头市金平区福平路85号",
        lat: 23.356389,
        lng: 116.675987,
        area: "金平区",
        rating: 4.4,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 22,
        name: "咸菜咖啡(小公园店)",
        address: "广东省汕头市金平区小公园街道至平路31号",
        lat: 23.352148,
        lng: 116.67293,
        area: "金平区",
        rating: 4.4,
        tags: [],
        featured: false
    },
    {
        id: 23,
        name: "Fizzle Coffee",
        address: "广东省汕头市龙湖区丹霞庄中区35栋109",
        lat: 23.362738,
        lng: 116.722639,
        area: "龙湖区",
        rating: 4.5,
        tags: [],
        featured: false
    },
    {
        id: 24,
        name: "明日咖啡(阳光花园2期店)",
        address: "龙湖区丹阳庄西三区二期1栋113铺面",
        lat: 23.35997,
        lng: 116.729965,
        area: "龙湖区",
        rating: 4.4,
        tags: [],
        featured: false
    },
    {
        id: 25,
        name: "游走之间珈琲",
        address: "龙湖区金砂路125号4、7幢101号",
        lat: 23.366798,
        lng: 116.725494,
        area: "龙湖区",
        rating: 4.5,
        tags: ["手冲好评"],
        featured: false
    },
    {
        id: 26,
        name: "熙阳·prosper·丹阳庄",
        address: "龙湖区丹阳庄阳光花园1座11号",
        lat: 23.360341,
        lng: 116.726786,
        area: "龙湖区",
        rating: 4.4,
        tags: ["宠物友好"],
        featured: false
    },
    {
        id: 27,
        name: "别急咖啡 Take it easy",
        address: "金平区东福路7号103之一",
        lat: 23.368245,
        lng: 116.707526,
        area: "金平区",
        rating: 4.5,
        tags: ["宠物友好"],
        featured: false
    },
    {
        id: 28,
        name: "Seasnail Coffee",
        address: "龙湖区环碧庄中区9栋101之三",
        lat: 23.369335,
        lng: 116.725215,
        area: "龙湖区",
        rating: 4.4,
        tags: [],
        featured: false
    },
    {
        id: 29,
        name: "假想出逃咖啡",
        address: "龙湖区金砂路125号4、7幢109号",
        lat: 23.366798,
        lng: 116.725494,
        area: "龙湖区",
        rating: 4.5,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 30,
        name: "小狗书信Dog's letter coffee",
        address: "龙湖区金珠华庭4幢03号车库",
        lat: 23.371085,
        lng: 116.725075,
        area: "龙湖区",
        rating: 4.4,
        tags: ["宠物友好"],
        featured: false
    },
    {
        id: 31,
        name: "芬奇思FINCHES咖啡",
        address: "龙湖区朝阳庄中区18栋104",
        lat: 23.363592,
        lng: 116.727925,
        area: "龙湖区",
        rating: 4.7,
        tags: [],
        featured: false
    },
    {
        id: 32,
        name: "散步Sanpo咖啡",
        address: "龙湖区丹阳庄东区50栋119号",
        lat: 23.358203,
        lng: 116.730361,
        area: "龙湖区",
        rating: 4.3,
        tags: [],
        featured: false
    },
    {
        id: 33,
        name: "均匀咖啡Drink",
        address: "龙湖区丹霞庄北区13栋108",
        lat: 23.365209,
        lng: 116.724095,
        area: "龙湖区",
        rating: 4.5,
        tags: ["特调好评"],
        featured: true
    },
    {
        id: 34,
        name: "棕本_ZoneBen Cafe",
        address: "龙湖区珠池街道金涛庄西区48-49栋南门",
        lat: 23.36061,
        lng: 116.734877,
        area: "龙湖区",
        rating: 4.5,
        tags: [],
        featured: false
    },
    {
        id: 35,
        name: "face face coffee store(金洋园店)",
        address: "金平区金环路4号",
        lat: 23.356056,
        lng: 116.715858,
        area: "金平区",
        rating: 4.4,
        tags: ["宠物友好"],
        featured: false
    },
    {
        id: 36,
        name: "Mini Kim迷你金咖啡",
        address: "龙湖区碧霞庄中区26栋103",
        lat: 23.360132,
        lng: 116.723365,
        area: "龙湖区",
        rating: 4.4,
        tags: ["特调好评"],
        featured: false
    },
    {
        id: 37,
        name: "Monsoon Coffee 季风咖啡",
        address: "汕头市澄海区泰安路国土局正对面",
        lat: 23.465349,
        lng: 116.757811,
        area: "澄海区",
        rating: 4.3,
        tags: [],
        featured: false
    },
    {
        id: 38,
        name: "Cafe on warm小暖咖啡(丹霞庄店)",
        address: "龙湖区长平路附近社区店",
        lat: 23.362,
        lng: 116.708868,
        area: "龙湖区",
        rating: 4.5,
        tags: ["意式好评"],
        featured: false
    },
    {
        id: 39,
        name: "正在咖啡",
        address: "龙湖区星湖家园附近",
        lat: 23.359898,
        lng: 116.74487,
        area: "龙湖区",
        rating: 4.4,
        tags: [],
        featured: false
    },
    {
        id: 40,
        name: "Hiuka Park 歇脚公园咖啡",
        address: "龙湖区合信丹阳花园11栋105铺面",
        lat: 23.357364,
        lng: 116.729706,
        area: "龙湖区",
        rating: 4.4,
        tags: [],
        featured: false
    },
    {
        id: 41,
        name: "GAP COFFEE",
        address: "龙湖区丹阳东区丹阳直街13栋103",
        lat: 23.357995,
        lng: 116.730224,
        area: "龙湖区",
        rating: 4.4,
        tags: [],
        featured: false
    },
    {
        id: 42,
        name: "No Tag Room",
        address: "龙湖区朝阳庄中区33座102号",
        lat: 23.364046,
        lng: 116.730767,
        area: "龙湖区",
        rating: 4.6,
        tags: ["宠物友好"],
        featured: false
    },
    {
        id: 43,
        name: "BLUGRU",
        address: "龙湖区龙光世纪商务中心9栋117-118铺面",
        lat: 23.350208,
        lng: 116.730761,
        area: "龙湖区",
        rating: 4.6,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 44,
        name: "COFFEEREACTION咖啡反应",
        address: "广东省汕头市龙湖区丹霞庄中区丹霞南街8栋116号",
        lat: 23.36378,
        lng: 116.722144,
        area: "龙湖区",
        rating: 4.5,
        tags: ["特调好评"],
        featured: true
    },
    {
        id: 45,
        name: "慢调咖啡馆",
        address: "广东省汕头市龙湖区新津街道衡山路华信苑4-6座108室",
        lat: 23.381298,
        lng: 116.726995,
        area: "龙湖区",
        rating: 4.3,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 46,
        name: "道兴咖啡",
        address: "汕头市龙湖区长平路95号华润大厦商业裙楼167号房",
        lat: 23.364459,
        lng: 116.716612,
        area: "龙湖区",
        rating: 4.5,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 47,
        name: "共邻咖啡",
        address: "汕头市龙湖区丽水庄中区20栋125号",
        lat: 23.3747,
        lng: 116.735108,
        area: "龙湖区",
        rating: 4.4,
        tags: ["环境好评"],
        featured: false
    },
    {
        id: 48,
        name: "PARK MOOD 游园叹啡",
        address: "汕头市金平区广厦新城樱花园20栋21号铺面",
        lat: 23.396358,
        lng: 116.715099,
        area: "金平区",
        rating: 4.4,
        tags: ["手冲好评"],
        featured: false
    },
    {
        id: 49,
        name: "别急咖啡 Take it easy 2.0",
        address: "龙湖区长平东路清华城店",
        lat: 23.362126,
        lng: 116.747253,
        area: "龙湖区",
        rating: 4.5,
        tags: ["宠物友好"],
        featured: false
    }
];

// 分类数据
const categories = [
    { id: "all", name: "ALL", count: 48 },
    { id: "环境好评", name: "Vibe", count: 10 },
    { id: "意式好评", name: "Espresso", count: 7 },
    { id: "手冲好评", name: "Pour-over", count: 5 },
    { id: "宠物友好", name: "Pet Friendly", count: 6 },
    { id: "特调好评", name: "Specialty", count: 5 }
];

// 区域数据
const areas = [
    { id: "all", name: "ALL", count: 48 },
    { id: "龙湖区", name: "龙湖区", count: 37 },
    { id: "金平区", name: "金平区", count: 6 },
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
