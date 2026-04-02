/*
 * Real-world Data for National Discount Hub (April 2026)
 * Synchronized with the current date: April 2, 2026.
 */

const SAMPLE_OFFLINE_DATA = [
  {
    id: 1,
    name: "2026 이마트 쓱데이 (한우 전품목 50% 세일)",
    price: "5,400원~",
    original_price: "10,800원",
    discount: "50%",
    location: { lat: 37.5615, lng: 127.0454 },
    category: "Grocery",
    type: "Offline",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80"
  },
  {
    id: 2,
    name: "홈플러스 '2026 홈플런' (신선 참외 1+1)",
    price: "8,900원",
    original_price: "17,800원",
    discount: "50%",
    location: { lat: 37.5562, lng: 126.9063 },
    category: "Grocery",
    type: "Offline",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=500&q=80"
  },
  {
    id: 3,
    name: "성수동 26S/S 명품 샘플 세일 (최대 80%)",
    price: "120,000원",
    original_price: "600,000원",
    discount: "80%",
    location: { lat: 37.5446, lng: 127.056 },
    category: "Life",
    type: "Offline",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&q=80"
  },
  {
    id: 4,
    name: "2026 올리브영 '봄의 시작' (선케어 1+1)",
    price: "18,000원",
    original_price: "36,000원",
    discount: "50%",
    location: { lat: 37.501, lng: 127.039 },
    category: "Life",
    type: "Offline",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&q=80"
  }
];

const SAMPLE_ONLINE_DATA = [
  {
    id: 11,
    name: "쿠팡 '26년형 갤럭시 S26 울트라 반값 기획전",
    price: "850,000원",
    original_price: "1,750,000원",
    discount: "51%",
    link: "https://www.coupang.com/",
    category: "Tech",
    type: "Online",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80"
  },
  {
    id: 12,
    name: "애플 교육할인 2026 (맥북 에어 M4 증정 패키지)",
    price: "1,390,000원",
    original_price: "2,100,000원",
    discount: "33.8%",
    link: "https://www.apple.com/kr-edu/store",
    category: "Tech",
    type: "Online",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=500&q=80"
  },
  {
    id: 13,
    name: "2026 벚꽃 여행 숙박권 (제주 신라호텔 40% 쿠폰)",
    price: "280,000원",
    original_price: "470,000원",
    discount: "40.4%",
    link: "https://www.yanolja.com/",
    category: "Travel",
    type: "Online",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80"
  }
];
