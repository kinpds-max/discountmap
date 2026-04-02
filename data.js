/*
 * National Discount Hub Data (April 2026)
 * Deep-Dived Real-Time Data Package (~30 Items)
 */

const SAMPLE_OFFLINE_DATA = [
  /* --- 실시간 매장할인 (Official) --- */
  {
    id: 1,
    name: "이마트 '26 쓱데이' (한우 50% 반값)",
    price: "5,400원", original_price: "10,800원", discount: "50%",
    location: { lat: 37.5615, lng: 127.0454 }, category: "Grocery", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80"
  },
  {
    id: 2,
    name: "스타벅스 '블라썸' 리유저블 컵 선착순 증정",
    price: "0원", original_price: "15,000원", discount: "100%",
    location: { lat: 37.5501, lng: 126.9912 }, category: "Food", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1541167760496-1628856ab752?w=500&q=80"
  },
  {
    id: 3,
    name: "올리브영 '26 봄 정기세일' (베스트 70%)",
    price: "12,000원", original_price: "40,000원", discount: "70%",
    location: { lat: 37.501, lng: 127.039 }, category: "Life", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&q=80"
  },
  {
    id: 4,
    name: "버거킹 '올인원' 와퍼 주니어 2개 6,000원",
    price: "6,000원", original_price: "12,000원", discount: "50%",
    location: { lat: 37.566, lng: 126.978 }, category: "Food", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=80"
  },
  {
    id: 5,
    name: "GS25 '갓세일' (하겐다즈 1+1 기획)",
    price: "7,500원", original_price: "15,000원", discount: "50%",
    location: { lat: 37.560, lng: 126.980 }, category: "Grocery", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80"
  },
  {
    id: 6,
    name: "홈플러스 '신선 홈플런' (킹크랩 40% 세일)",
    price: "59,000원", original_price: "99,000원", discount: "40%",
    location: { lat: 37.512, lng: 127.058 }, category: "Grocery", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1588698711431-7e8c07e0c410?w=500&q=80"
  },
  {
    id: 7,
    name: "유니클로 '감사제' (에어리즘 1+1 핫딜)",
    price: "12,900원", original_price: "25,800원", discount: "50%",
    location: { lat: 37.558, lng: 126.923 }, category: "Shopping", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80"
  },
  {
    id: 8,
    name: "다이소 '캠핑 기획전' (LED 조명 3,000원)",
    price: "3,000원", original_price: "8,000원", discount: "62.5%",
    location: { lat: 37.505, lng: 127.042 }, category: "Life", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&q=80"
  },
  {
    id: 9,
    name: "서점 영풍문고 '세계 책의 날' 30% 배송무료",
    price: "15,400원", original_price: "22,000원", discount: "30%",
    location: { lat: 37.570, lng: 126.982 }, category: "Life", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&q=80"
  },
  {
    id: 10,
    name: "메가커피 '단 하루' 아메리카노 1,000원 딜",
    price: "1,000원", original_price: "2,000원", discount: "50%",
    location: { lat: 37.540, lng: 127.070 }, category: "Food", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80"
  },

  /* --- 실시간 민간정보 (Wisdom) --- */
  {
    id: 101,
    name: "성수동 반찬가게 마감 4팩 1만원 지혜나눔",
    price: "10,000원", original_price: "24,000원", discount: "58%",
    location: { lat: 37.5446, lng: 127.056 }, category: "Food", type: "Wisdom",
    author: "알뜰한 주부님", thumbnail: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80"
  },
  {
    id: 102,
    name: "흑석동 개인마트 '못난이 사과' 상자 대방출",
    price: "9,000원", original_price: "25,000원", discount: "64%",
    location: { lat: 37.506, lng: 126.960 }, category: "Grocery", type: "Wisdom",
    author: "중앙대 자취생", thumbnail: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500&q=80"
  },
  {
    id: 103,
    name: "홍대 빈티지샵 '오늘만 만원이하' 득템정보",
    price: "10,000원", original_price: "50,000원", discount: "80%",
    location: { lat: 37.555, lng: 126.922 }, category: "Shopping", type: "Wisdom",
    author: "패션러버", thumbnail: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&q=80"
  },
  {
    id: 104,
    name: "송파 문구도매점 '학용품 떨이' 창고개방",
    price: "1,000원", original_price: "5,000원", discount: "80%",
    location: { lat: 37.511, lng: 127.108 }, category: "Life", type: "Wisdom",
    author: "송파맘", thumbnail: "https://images.unsplash.com/photo-1583484963886-ccd20371e06f?w=500&q=80"
  },
  {
    id: 105,
    name: "연남동 제과점 '오전 8시' 갓 구운 빵 반값",
    price: "2,500원", original_price: "5,000원", discount: "50%",
    location: { lat: 37.561, lng: 126.924 }, category: "Food", type: "Wisdom",
    author: "얼리버드", thumbnail: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80"
  },
  {
    id: 106,
    name: "남대문 시장 '수입과자' 유통기한 임박세일",
    price: "500원", original_price: "3,000원", discount: "83%",
    location: { lat: 37.559, lng: 126.977 }, category: "Food", type: "Wisdom",
    author: "먹방러", thumbnail: "https://images.unsplash.com/photo-1599490659223-eb3005d54668?w=500&q=80"
  },
  {
    id: 107,
    name: "강남역 서점 '파손 도서' 90% 창고정리",
    price: "1,500원", original_price: "15,000원", discount: "90%",
    location: { lat: 37.502, lng: 127.027 }, category: "Life", type: "Wisdom",
    author: "책벌레", thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80"
  },
  {
    id: 108,
    name: "대학로 소극장 '당일 현장티켓' 1만원",
    price: "10,000원", original_price: "40,000원", discount: "75%",
    location: { lat: 37.582, lng: 127.002 }, category: "Life", type: "Wisdom",
    author: "연극보이", thumbnail: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=500&q=80"
  }
];

const SAMPLE_ONLINE_DATA = [
  /* --- 실시간 온라인공구 (Official/Online) --- */
  {
    id: 11,
    name: "쿠팡 '26년 골드박스' 갤럭시 버즈 3 프로 급처",
    price: "124,000원", original_price: "249,000원", discount: "50.2%",
    link: "https://www.coupang.com/", category: "Tech", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"
  },
  {
    id: 12,
    name: "컬리 '26 벚꽃 피크닉' 도시락 100원 딜",
    price: "100원", original_price: "15,900원", discount: "99.3%",
    link: "https://www.kurly.com/", category: "Food", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=500&q=80"
  },
  {
    id: 13,
    name: "네이버 스마트스토어 '샤오미 10G' 공유기 특가",
    price: "45,000원", original_price: "120,000원", discount: "62.5%",
    link: "https://shopping.naver.com/", category: "Tech", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80"
  },
  {
    id: 14,
    name: "알리 '26nd Anniversary' SSD 4TB 파격공구",
    price: "115,000원", original_price: "280,000원", discount: "58.9%",
    link: "https://www.aliexpress.com/", category: "Tech", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500&q=80"
  },
  {
    id: 15,
    name: "야놀자 '제주 신라호텔' 연박 45% 쿠폰팩",
    price: "320,000원", original_price: "600,000원", discount: "46.7%",
    link: "https://www.yanolja.com/", category: "Travel", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80"
  },
  {
    id: 16,
    name: "무신사 '26 S/S 클리어런스' 아디다스 스니커즈",
    price: "42,000원", original_price: "129,000원", discount: "67.4%",
    link: "https://www.musinsa.com/", category: "Shopping", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80"
  },
  {
    id: 17,
    name: "지마켓 '스마일클럽' 생활용품 1만원 박스 (대용량)",
    price: "10,000원", original_price: "45,000원", discount: "77.8%",
    link: "https://www.gmarket.co.kr/", category: "Life", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&q=80"
  },
  {
    id: 18,
    name: "티몬 '10분어택' 생수 2L x 24병 특가",
    price: "8,900원", original_price: "18,000원", discount: "50.5%",
    link: "https://www.tmon.co.kr/", category: "Grocery", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1560023907-5f339617ea30?w=500&q=80"
  },
  {
    id: 19,
    name: "지그재그 '첫구매' 90% 세일 인기 가디건",
    price: "4,500원", original_price: "45,000원", discount: "90%",
    link: "https://zigzag.kr/", category: "Shopping", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?w=500&q=80"
  },
  {
    id: 20,
    name: "포켓CU '편의점 반값 택배' 1+1 쿠폰나눔",
    price: "1,100원", original_price: "2,200원", discount: "50%",
    link: "https://pocketcu.co.kr/", category: "Life", type: "Official",
    thumbnail: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=500&q=80"
  }
];
