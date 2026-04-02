/*
 * National Discount Hub Data (April 2026)
 * Ultra-Dense Data Overhaul (~55 Items)
 * TYPES: Official (Brands), Private (Local/Biz), Wisdom (Crowdsourced)
 */

const SAMPLE_OFFLINE_DATA = [
  /* CATEGORY: HUB (본점) */
  { id: 0, name: "스타플로어 김포 본점 (매트 도매견적)", price: "맞춤비교견적", original_price: "0원", discount: "최저가 보장", phone: "1660-1195", location: { lat: 37.665, lng: 126.650 }, category: "Tech", type: "Official", icon: "⭐", thumbnail: "https://images.unsplash.com/photo-1581404113222-263a232fba6e?w=500&q=80" },
  
  /* CATEGORY: FOOD (식당/카페) */
  { id: 1, name: "스타벅스 성수 (체리블라썸 1+1)", price: "6,300원", original_price: "12,600원", discount: "50%", phone: "1522-3232", location: { lat: 37.544, lng: 127.056 }, category: "Cafe", type: "Official", icon: "☕", thumbnail: "https://images.unsplash.com/photo-1541167760496-1628856ab752?w=500&q=80" },
  { id: 2, name: "맥도날드 홍대 (빅맥 세트 쿠폰)", price: "4,600원", original_price: "8,200원", discount: "43.9%", phone: "02-333-1004", location: { lat: 37.555, lng: 126.923 }, category: "Restaurant", type: "Official", icon: "🍔", thumbnail: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=80" },
  { id: 3, name: "역전우동 강남 (냉모밀 30% 세일)", price: "4,200원", original_price: "6,000원", discount: "30%", phone: "02-555-1234", location: { lat: 37.501, lng: 127.027 }, category: "Restaurant", type: "Official", icon: "🍜", thumbnail: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?w=500&q=80" },
  { id: 4, name: "백종원의 빽다방 명동 (아메리카노 1,000원)", price: "1,000원", original_price: "2,000원", discount: "50%", phone: "02-777-8888", location: { lat: 37.563, lng: 126.983 }, category: "Cafe", type: "Official", icon: "🥤", thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80" },
  { id: 5, name: "서브웨이 건대 (오늘의 샌드위치)", price: "5,400원", original_price: "7,800원", discount: "30.7%", phone: "02-444-5555", location: { lat: 37.541, lng: 127.071 }, category: "Restaurant", type: "Official", icon: "🥪", thumbnail: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=500&q=80" },
  { id: 9, name: "연남동 기사식당 (무제한 백반 7,000원)", price: "7,000원", original_price: "12,000원", discount: "41.6%", phone: "02-333-4455", location: { lat: 37.561, lng: 126.924 }, category: "Restaurant", type: "Private", icon: "🍱", thumbnail: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80" },
  { id: 10, name: "고속터미널 '지혜' 칼국수", price: "5,500원", original_price: "9,000원", discount: "38.8%", phone: "02-536-1122", location: { lat: 37.505, lng: 127.004 }, category: "Restaurant", type: "Private", icon: "🍜", thumbnail: "https://images.unsplash.com/photo-1547928501-a2673417186a?w=500&q=80" },

  /* CATEGORY: GROCERY (마트/식품) */
  { id: 21, name: "이마트 왕십리 (삼겹살 100g 990원)", price: "990원", original_price: "2,500원", discount: "60.4%", phone: "1577-1234", location: { lat: 37.561, lng: 127.037 }, category: "Grocery", type: "Official", icon: "🥩", thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80" },
  { id: 22, name: "홈플러스 가양 (치킨 1+1)", price: "7,900원", original_price: "15,800원", discount: "50%", phone: "02-3660-8000", location: { lat: 37.558, lng: 126.862 }, category: "Grocery", type: "Official", icon: "🍗", thumbnail: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=500&q=80" },
  { id: 29, name: "마포 시장 '박스사과' 1만원", price: "10,000원", original_price: "25,000원", discount: "60%", phone: "02-333-1111", location: { lat: 37.546, lng: 126.945 }, category: "Grocery", type: "Private", icon: "🍎", thumbnail: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500&q=80" },
  { id: 30, name: "경동시장 약재/차류 떨이", price: "3,000원", original_price: "10,000원", discount: "70%", phone: "02-966-1234", location: { lat: 37.578, lng: 127.037 }, category: "Grocery", type: "Private", icon: "🍃", thumbnail: "https://images.unsplash.com/photo-1524310530050-0255c2763f35?w=500&q=80" },

  /* CATEGORY: CULTURE (공연/문화) */
  { id: 42, name: "예술의전당 오늘권 할인", price: "25,000원", original_price: "80,000원", discount: "68.7%", phone: "02-580-1300", location: { lat: 37.479, lng: 127.011 }, category: "Culture", type: "Official", icon: "🎪", thumbnail: "https://images.unsplash.com/photo-1465847736664-285cadb30ae3?w=500&q=80" },
  { id: 41, name: "대학로 소극장 '지혜나눔' 티켓", price: "10,000원", original_price: "45,000원", discount: "77.7%", phone: "02-766-1234", location: { lat: 37.581, lng: 127.002 }, category: "Culture", type: "Wisdom", icon: "🎭", thumbnail: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=500&q=80" },
  
  /* CROWDSOURCED WISDOM */
  { id: 101, name: "[나눔] 성수 반찬가게 마감 4팩 1만원", price: "10,000원", original_price: "24,000원", discount: "58%", phone: "02-466-8888", location: { lat: 37.545, lng: 127.056 }, category: "Restaurant", type: "Wisdom", author: "알뜰한 주부", icon: "🍱", thumbnail: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80" },
  
  /* ERRAND (심부름) */
  { id: 301, name: "[급구] 종로 귀금속상가 서류 배달", price: "15,000원", original_price: "0원", discount: "수고비", phone: "010-9999-8888", location: { lat: 37.571, lng: 126.992 }, category: "Life", type: "Errand", author: "금은방 사장님", icon: "🏃", thumbnail: "https://images.unsplash.com/photo-1557002664-cda9fefbd762?w=500&q=80" },
  { id: 302, name: "[부탁] 홍대입구역 짐 보관 (하루)", price: "10,000원", original_price: "0원", discount: "수고비", phone: "010-7777-6666", location: { lat: 37.556, lng: 126.924 }, category: "Life", type: "Errand", author: "여행객", icon: "🎒", thumbnail: "https://images.unsplash.com/photo-1547949003-979f911be264?w=500&q=80" },
  { id: 303, name: "[부탁] 역삼동 병원 약 처방 픽업", price: "8,000원", original_price: "0원", discount: "수고비", phone: "010-3333-2222", location: { lat: 37.500, lng: 127.036 }, category: "Life", type: "Errand", author: "동네주민", icon: "💊", thumbnail: "https://images.unsplash.com/photo-1584308666744-24d5e172a39a?w=500&q=80" }
];

const SAMPLE_ONLINE_DATA = [
  { id: 201, name: "쿠팡 '26년 골드박스' 애플 M4 워치", price: "320,000원", original_price: "650,000원", discount: "50.7%", phone: "1577-7001", link: "https://www.coupang.com/", category: "Tech", type: "Online", icon: "⌚", thumbnail: "https://images.unsplash.com/photo-1591405351990-4726e33df58b?w=500&q=80" },
  { id: 204, name: "당근마켓 '동네 공구' 세제 10L", price: "5,000원", original_price: "18,000원", discount: "72.2%", phone: "010-1111-2222", link: "https://daangn.com/", category: "Life", type: "Online", icon: "🧴", thumbnail: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&q=80" },
  { id: 202, name: "마켓컬리 '첫구매' 킹크랩 1,000원", price: "1,000원", original_price: "89,000원", discount: "98.8%", phone: "1644-1107", link: "https://www.kurly.com/", category: "Grocery", type: "Online", icon: "🦀", thumbnail: "https://images.unsplash.com/photo-1588698711431-7e8c07e0c410?w=500&q=80" }
];
