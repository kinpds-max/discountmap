/*
 * National Discount Hub Logic (V2 - Leaflet Powered)
 * Optimized for immediate functionality & real-world use.
 */

document.addEventListener('DOMContentLoaded', () => {
    let map;
    let markers = [];
    let currentMode = 'Offline';
    let currentCategory = 'all';

    // 1. Initialize Map (Leaflet - No API Key needed)
    initMap();

    // 2. UI Elements
    const sheetTabs = document.querySelectorAll('.sheet-tab');
    let currentTab = 'Wisdom'; // Wisdom, Official, Online

    sheetTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            sheetTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentTab = tab.dataset.tab;
            renderListByTab(currentTab);
        });
    });

    document.getElementById('btn-login').addEventListener('click', () => {
        alert("잡스 감성 로그인: Apple ID로 로그인 기능을 준비 중입니다.");
    });

    document.getElementById('btn-join').addEventListener('click', () => {
        alert("잡스 감성 회원가입: 프리미엄 멤버십에 가입하시겠습니까?");
    });

    const btnLocate = document.getElementById('btn-locate');
    const mainSearch = document.getElementById('main-search');
    const pills = document.querySelectorAll('.pill');

    if (btnLocate) {
        btnLocate.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    focusMap(pos.coords.latitude, pos.coords.longitude);
                }, () => alert("위치 정보를 가져올 수 없습니다."));
            }
        });
    }

    if (mainSearch) {
        mainSearch.addEventListener('input', (e) => {
            renderList(currentMode, e.target.value.toLowerCase());
        });
    }

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.dataset.cat;
            renderList(currentMode);
        });
    });

    document.getElementById('btn-wisdom').addEventListener('click', () => {
        alert("잡은 지혜 나누기: 동네의 숨은 보물을 공유해 주시겠습니까?");
    });

    // Real-time Ticker Simulation
    const ticker = document.getElementById('real-time-ticker');
    const scenarios = [
        "방금 성수동 반찬가게 지혜로운 나눔이 등록되었습니다.",
        "지금 스타벅스 체리블라썸 1+1 행사가 1시간 남았습니다.",
        "강남역 인근 맥도날드 쿠폰 50명이 사용 중입니다.",
        "온라인 공동구매: 샤오미 로봇청소기 재고가 5개 남았습니다."
    ];
    let scenarioIdx = 0;
    setInterval(() => {
        scenarioIdx = (scenarioIdx + 1) % scenarios.length;
        ticker.innerHTML = `<span class="pulse-dot"></span> <b>실시간 현황:</b> "${scenarios[scenarioIdx]}"`;
    }, 5000);

    function renderListByTab(tab) {
        // Map tab to currentMode/Category for simplicity or custom logic
        if (tab === 'Wisdom') {
            setMode('Offline'); // Show offline wisdom
            currentCategory = 'all';
            currentTab = 'Wisdom';
        } else if (tab === 'Official') {
            setMode('Offline');
            currentCategory = 'all';
            currentTab = 'Official';
        } else {
            setMode('Online');
            currentCategory = 'all';
            currentTab = 'Online';
        }
        renderList(currentMode);
    }

    document.getElementById('btn-share').addEventListener('click', () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert("전국허브 링크가 복사되었습니다. 친구에게 공유해 보세요.");
        });
    });

    // 4. Core Functions
    function initMap() {
        // Fallback center: Seoul City Hall
        map = L.map('map', {
            center: [37.5665, 126.9780],
            zoom: 13,
            zoomControl: true,
            attributionControl: false
        });

        // Use a nice modern tile set
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19
        }).addTo(map);

        updateMapMarkers('Offline');
        setTimeout(() => { detailSheet.classList.add('active'); renderList('Offline'); }, 500);
    }

    function setMode(mode) {
        currentMode = mode;
        if (mode === 'Online') {
            btnOnline.classList.add('active');
            btnOffline.classList.remove('active');
            document.getElementById('map-container').style.filter = 'grayscale(1) opacity(0.3)';
            document.getElementById('sheet-title').innerText = '실시간 온라인 파격 핫딜';
        } else {
            btnOffline.classList.add('active');
            btnOnline.classList.remove('active');
            document.getElementById('map-container').style.filter = 'none';
            document.getElementById('sheet-title').innerText = '내 주변 오프라인 할인';
        }
        renderList(mode);
        updateMapMarkers(mode);
    }

    function renderList(mode, filterQuery = "") {
        let data = (mode === 'Offline') ? SAMPLE_OFFLINE_DATA : SAMPLE_ONLINE_DATA;
        
        // Filter by Tab Type (Official vs Wisdom vs Online)
        if (currentTab === 'Wisdom') {
            data = data.filter(item => item.type === 'Wisdom');
        } else if (currentTab === 'Official') {
            data = data.filter(item => item.type === 'Official' && item.location);
        } else if (currentTab === 'Online') {
            data = data.filter(item => item.type === 'Official' && !item.location);
        }

        // Filter by Search
        if (filterQuery) {
            data = data.filter(item => 
                item.name.toLowerCase().includes(filterQuery) || 
                item.category.toLowerCase().includes(filterQuery)
            );
        }

        itemList.innerHTML = '';
        if (data.length === 0) {
            itemList.innerHTML = '<p style="text-align:center; color:gray; padding:20px;">검색 결과가 없습니다.</p>';
            return;
        }

        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `
                <img src="${item.thumbnail}" class="item-img" alt="${item.name}">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <div class="price">
                        ${item.price} 
                        <span class="discount-badge">${item.discount} OFF</span>
                        ${item.type === 'Wisdom' ? '<span class="wisdom-badge">시민 지혜</span>' : ''}
                    </div>
                    <p style="font-size:0.75rem; color:var(--apple-gray); margin-top:4px;">
                        정가: <s>${item.original_price}</s> • ${item.category}
                        ${item.author ? ` • 제보: ${item.author}` : ''}
                        <span style="float:right; color:var(--apple-blue);">${item.type === 'Wisdom' ? '우리동네 보물' : item.type}</span>
                    </p>
                </div>
            `;
            card.onclick = () => {
                if(item.type !== 'Online' && item.location) focusMap(item.location.lat, item.location.lng);
                showImmersiveModal(item);
            };
            itemList.appendChild(card);
        });
    }

    function showImmersiveModal(item) {
        const modal = document.getElementById('immersive-modal');
        const img = document.getElementById('modal-img');
        const title = document.getElementById('modal-title');
        const desc = document.getElementById('modal-desc');
        const discountBar = document.getElementById('discounted-bar');
        const percent = document.getElementById('modal-save-percent');
        const phoneBtn = document.getElementById('modal-phone-btn');

        modal.classList.remove('hidden');
        img.src = item.thumbnail;
        title.innerText = item.name;
        desc.innerText = `${item.name}은(는) 잡스가 설계한 듯 정교한 가격 가치를 제공합니다. 시중가 ${item.original_price} 대비 약 ${item.discount} 할인된 ${item.price}에 만나보세요.`;
        percent.innerText = `-${item.discount}`;
        
        // Update Phone Link
        if (item.phone) {
            phoneBtn.href = `tel:${item.phone}`;
            phoneBtn.innerHTML = `<i class="fa-solid fa-phone"></i>&nbsp; 확인 전화하기 (${item.phone})`;
            document.getElementById('modal-phone-box').style.display = 'block';
        } else {
            document.getElementById('modal-phone-box').style.display = 'none';
        }

        // Animate Bar
        discountBar.style.height = '0%';
        setTimeout(() => {
            const h = 100 - parseInt(item.discount);
            discountBar.style.height = `${h}%`;
        }, 300);

        document.getElementById('modal-link-btn').onclick = () => {
            if (item.link) window.open(item.link, '_blank');
            else alert("매장 상세 페이지로 안내합니다.");
        };
    }

    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('immersive-modal').classList.add('hidden');
    });

    function updateMapMarkers(mode) {
        // Clear old markers
        markers.forEach(m => map.removeLayer(m));
        markers = [];
        if (mode === 'Online') return;

        let data = SAMPLE_OFFLINE_DATA;
        if (currentCategory !== 'all') {
            data = data.filter(item => item.category === currentCategory);
        }

        data.forEach(item => {
            const marker = L.marker([item.location.lat, item.location.lng]).addTo(map);
            
            // Apply Golden Aura for > 50% discount
            if (parseInt(item.discount) >= 50) {
                L.circleMarker([item.location.lat, item.location.lng], {
                    radius: 20,
                    className: 'golden-aura',
                    stroke: false,
                    fillOpacity: 1
                }).addTo(map);
            }

            marker.bindPopup(`<b>${item.name}</b><br>${item.price} (${item.discount} 할인)`);
            markers.push(marker);
        });
    }

    function focusMap(lat, lng) {
        map.flyTo([lat, lng], 15, { duration: 1.5 });
    }

    function filterBySearch(query) {
        renderList(currentMode, query);
    }
});
