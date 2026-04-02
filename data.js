/*
 * National Discount Hub Data (April 2026)
 * Deep-Dived Real-Time Data Package (~30 Items)
 * Includes Phone numbers and Theater/Performance categories.
 */

const SAMPLE_OFFLINE_DATA = [
  /* --- 실시간 매장할인 (Official) --- */
  {
    id: 1,
    name: "이마트 '26 쓱데이' (한우 50% 반값)",
    price: "5,400원", original_price: "10,800원", discount: "50%", phone: "1577-1234",
    location: { lat: 37.5615, lng: 127.0454 }, category: "Grocery", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80"
  },
  {
    id: 2,
    name: "대학로 연극 '지혜로운 할인' 타임세일",
    price: "12,000원", original_price: "35,000원", discount: "65.7%", phone: "02-123-4567",
    location: { lat: 37.582, lng: 127.002 }, category: "Culture", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=500&q=80"
  },
  {
    id: 3,
    name: "올리브영 '26 봄 정기세일' (베스트 70%)",
    price: "12,000원", original_price: "40,000원", discount: "70%", phone: "1577-0101",
    location: { lat: 37.501, lng: 127.039 }, category: "Life", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&q=80"
  },
  {
    id: 4,
    name: "버거킹 '올인원' 와퍼 주니어 2개 6,000원",
    price: "6,000원", original_price: "12,000원", discount: "50%", phone: "080-022-8114",
    location: { lat: 37.566, lng: 126.978 }, category: "Food", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=80"
  },
  {
    id: 110,
    name: "예술의전당 '26 오케스트라' 당일 잔여석 할인",
    price: "25,000원", original_price: "120,000원", discount: "79.2%", phone: "02-580-1300",
    location: { lat: 37.479, lng: 127.011 }, category: "Culture", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1465847736664-285cadb30ae3?w=500&q=80"
  },

  /* --- 실시간 나눔정보 (Wisdom) --- */
  {
    id: 101,
    name: "[울동네 보물] 성수 반찬가게 마감 4팩 1만원",
    price: "10,000원", original_price: "24,000원", discount: "58%", phone: "02-999-8888",
    location: { lat: 37.5446, lng: 127.056 }, category: "Food", type: "Wisdom",
    author: "알뜰한 주부님", thumbnail: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80"
  },
  {
    id: 102,
    name: "[나눔] 혜화동 소극장 배우 할인 티켓 배포",
    price: "5,000원", original_price: "40,000원", discount: "87.5%", phone: "010-5555-4444",
    location: { lat: 37.583, lng: 127.001 }, category: "Culture", type: "Wisdom",
    author: "열혈배우", thumbnail: "https://images.unsplash.com/photo-1503091314489-3ae793f0b2f6?w=500&q=80"
  }
];

const SAMPLE_ONLINE_DATA = [
  /* --- 실시간 온라인공구 (Official/Online) --- */
  {
    id: 11,
    name: "쿠팡 '26년 골드박스' 갤럭시 버즈 3 프로 급처",
    price: "124,000원", original_price: "249,000원", discount: "50.2%", phone: "1577-7001",
    link: "https://www.coupang.com/", category: "Tech", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"
  },
  {
    id: 121,
    name: "티켓링크 '뮤지컬 시카고' 단독 최저가 공구",
    price: "68,000원", original_price: "150,000원", discount: "54.7%", phone: "1588-7890",
    link: "https://ticketlink.co.kr/", category: "Culture", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&q=80"
  }
];
