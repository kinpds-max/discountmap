/*
 * National Discount Hub Data (April 2026)
 * Divided into 'Official Brands' and 'Citizen Wisdom' (Crowdsourced).
 */

const SAMPLE_OFFLINE_DATA = [
  /* --- Official Brands (기본 제공 데이터) --- */
  {
    id: 1,
    name: "올리브영 '2026 올영세일' (베스트 70% 세일)",
    price: "9,900원~",
    original_price: "33,000원",
    discount: "70%",
    location: { lat: 37.5615, lng: 127.0454 },
    category: "Life",
    type: "Official",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&q=80"
  },
  {
    id: 5,
    name: "스타벅스 '체리블라썸' 오후 2~5시 1+1",
    price: "6,300원",
    original_price: "12,600원",
    discount: "50%",
    location: { lat: 37.550, lng: 126.991 },
    category: "Food",
    type: "Official",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1541167760496-1628856ab752?w=500&q=80"
  },
  {
    id: 6,
    name: "맥도날드 'M오더' 앱 쿼터파운더 반값 쿠폰",
    price: "3,500원",
    original_price: "7,000원",
    discount: "50%",
    location: { lat: 37.500, lng: 127.036 },
    category: "Food",
    type: "Official",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=80"
  },

  /* --- Citizen Wisdom (일반인이 올리는 지혜로운 정보) --- */
  {
    id: 101,
    name: "[울동네 보물] 성수 반찬가게 마감 4팩 1만원",
    price: "10,000원",
    original_price: "24,000원",
    discount: "58%",
    location: { lat: 37.5446, lng: 127.056 },
    category: "Food",
    type: "Wisdom",
    isVerified: false,
    author: "지혜로운 자취생",
    thumbnail: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80"
  },
  {
    id: 102,
    name: "[지혜 나눔] 흑석동 개인마트 딸기 2팩 5,000원",
    price: "5,000원",
    original_price: "15,000원",
    discount: "67%",
    location: { lat: 37.506, lng: 126.960 },
    category: "Grocery",
    type: "Wisdom",
    isVerified: false,
    author: "알뜰한 할머님",
    thumbnail: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=500&q=80"
  }
];

const SAMPLE_ONLINE_DATA = [
  {
    id: 11,
    name: "컬리 '26년 벚꽃 피크닉' 도시락 100원 딜",
    price: "100원",
    original_price: "12,900원",
    discount: "99.2%",
    link: "https://www.kurly.com/",
    category: "Food",
    type: "Official",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=500&q=80"
  },
  {
    id: 12,
    name: "네이버 스마트스토어 '샤오미 로봇청소기 10세대' 특가",
    price: "290,000원",
    original_price: "450,000원",
    discount: "35.5%",
    link: "https://shopping.naver.com/",
    category: "Tech",
    type: "Official",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1589131008225-773bc492488d?w=500&q=80"
  },
  {
    id: 13,
    name: "성수동 명품 팝업 '26 앵콜 공구 (발렌시아가 외)",
    price: "450,000원",
    original_price: "920,000원",
    discount: "51.1%",
    link: "https://naver.com/",
    category: "Shopping",
    type: "Official",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&q=80"
  },
  {
    id: 14,
    name: "전국 최저가 '제과명장 럭키박스' (선착순 100명)",
    price: "19,900원",
    original_price: "60,000원",
    discount: "66.8%",
    link: "https://coupang.com/",
    category: "Food",
    type: "Official",
    isVerified: true,
    thumbnail: "https://images.unsplash.com/photo-1558961312-50346c69b11b?w=500&q=80"
  }
];
