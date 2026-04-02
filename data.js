/*
 * Real-world Data for National Discount Hub (April 2024)
 * Curated from major retail news and official apps.
 */

const SAMPLE_OFFLINE_DATA = [
  {
    id: 1,
    name: "이마트 랜더스데이 (한우 50% 할인)",
    price: "4,900원~",
    original_price: "9,800원",
    discount: "50%",
    location: { lat: 37.5615, lng: 127.0454 },
    category: "Grocery",
    type: "Offline",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80"
  },
  {
    id: 2,
    name: "홈플러스 '홈플런' (신선 딸기 1+1)",
    price: "7,900원",
    original_price: "15,800원",
    discount: "50%",
    location: { lat: 37.5562, lng: 126.9063 },
    category: "Grocery",
    type: "Offline",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=500&q=80"
  },
  {
    id: 3,
    name: "다이소 봄맞이 '벚꽃 에디션' 초특가",
    price: "1,000원~",
    original_price: "3,000원",
    discount: "66%",
    location: { lat: 37.5446, lng: 127.056 },
    category: "Life",
    type: "Offline",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1522010664898-3840e7040212?w=500&q=80"
  },
  {
    id: 4,
    name: "올리브영 '올영세일' (베스트셀러 50% 세일)",
    price: "15,000원",
    original_price: "30,000원",
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
    name: "쿠팡 골드박스 (갤럭시 S24 울트라 급처)",
    price: "1,290,000원",
    original_price: "1,680,000원",
    discount: "23%",
    link: "https://www.coupang.com/",
    category: "Tech",
    type: "Online",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80"
  },
  {
    id: 12,
    name: "알리 익스프레스 '초이스 데이' SSD 2TB",
    price: "72,000원",
    original_price: "135,000원",
    discount: "47%",
    link: "https://www.aliexpress.com/",
    category: "Tech",
    type: "Online",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&q=80"
  },
  {
    id: 13,
    name: "야놀자 '벚꽃 여행' 숙박 10만원 쿠폰팩",
    price: "0원",
    original_price: "100,000원",
    discount: "100%",
    link: "https://www.yanolja.com/",
    category: "Travel",
    type: "Online",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80"
  }
];
