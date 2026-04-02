/*
 * Mock Data for National Discount Hub
 * Only extreme, verified discounts.
 */

const SAMPLE_OFFLINE_DATA = [
  {
    id: 1,
    name: "마장동 한우 특수부위",
    price: "42,000원",
    original_price: "72,000원",
    discount: "41.6%",
    location: { lat: 37.5615, lng: 127.0454 },
    category: "Food",
    type: "Offline",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?w=500&q=80"
  },
  {
    id: 2,
    name: "망원시장 3,000원 칼국수",
    price: "3,000원",
    original_price: "7,000원",
    discount: "57.1%",
    location: { lat: 37.5562, lng: 126.9063 },
    category: "Food",
    type: "Offline",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80"
  },
  {
    id: 3,
    name: "성수동 명품 팝업 스토어 (B-Grade)",
    price: "250,000원",
    original_price: "450,000원",
    discount: "44.4%",
    location: { lat: 37.5446, lng: 127.056 },
    category: "Shopping",
    type: "Offline",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&q=80"
  }
];

const SAMPLE_ONLINE_DATA = [
  {
    id: 11,
    name: "M2 Mac Mini 512GB (Coupang Flash)",
    price: "790,000원",
    original_price: "1,120,000원",
    discount: "29.4%",
    link: "https://coupang.com/",
    category: "Tech",
    type: "Online",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1591405351990-4726e33df58b?w=500&q=80"
  },
  {
    id: 12,
    name: "SK하이닉스 Gold P31 1TB SSD",
    price: "85,600원",
    original_price: "145,000원",
    discount: "40.9%",
    link: "https://amazon.com/",
    category: "Tech",
    type: "Online",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&q=80"
  },
  {
    id: 13,
    name: "신라호텔 연간회원권 (특가 프로모션)",
    price: "450,000원",
    original_price: "800,000원",
    discount: "43.7%",
    link: "https://shilla.net/",
    category: "Travel",
    type: "Online",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&q=80"
  }
];
