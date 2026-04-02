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
    const btnOffline = document.getElementById('btn-offline');
    const btnOnline = document.getElementById('btn-online');
    const detailSheet = document.getElementById('detail-sheet');
    const itemList = document.getElementById('item-list');
    const btnLocate = document.getElementById('btn-locate');
    const mainSearch = document.getElementById('main-search');
    const pills = document.querySelectorAll('.pill');

    // 3. Event Listeners
    btnOffline.addEventListener('click', () => { setMode('Offline'); });
    btnOnline.addEventListener('click', () => { setMode('Online'); });

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.dataset.cat;
            renderList(currentMode);
            updateMapMarkers(currentMode);
        });
    });

    btnLocate.addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                focusMap(lat, lng);
                // Add a "You are here" marker
                L.circleMarker([lat, lng], { color: '#0066cc', radius: 8 }).addTo(map)
                    .bindPopup("현재 위치").openPopup();
            }, () => {
                alert("위치 정보를 가져올 수 없습니다.");
            });
        }
    });

    mainSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filterBySearch(query);
    });

    document.getElementById('btn-wisdom').addEventListener('click', () => {
        alert("잡스 감성 제보: '지혜 나누기' 기능이 준비되었습니다. 동네의 숨은 보물을 공유해 주시겠습니까?");
    });

    document.getElementById('btn-notif').addEventListener('click', () => {
        alert("잡스 감성 알림: 현재 위치 기반 3개의 새로운 파격 할인이 발견되었습니다.");
    });

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
        
        // Filter by Category
        if (currentCategory !== 'all') {
            data = data.filter(item => item.category === currentCategory);
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
                if(mode === 'Offline') focusMap(item.location.lat, item.location.lng);
                else window.open(item.link, '_blank');
            };
            itemList.appendChild(card);
        });
    }

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
