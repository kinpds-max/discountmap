/*
 * National Discount Hub Logic
 * Apple Steve Jobs Sensibility - App Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    let map;
    let markers = [];
    let currentMode = 'Offline'; // Offline or Online

    // 1. Initialize Map
    initMap();

    // 2. UI Event Handlers
    const btnOffline = document.getElementById('btn-offline');
    const btnOnline = document.getElementById('btn-online');
    const detailSheet = document.getElementById('detail-sheet');
    const itemList = document.getElementById('item-list');

    btnOffline.addEventListener('click', () => {
        setMode('Offline');
        btnOffline.classList.add('active');
        btnOnline.classList.remove('active');
    });

    btnOnline.addEventListener('click', () => {
        setMode('Online');
        btnOnline.classList.add('active');
        btnOffline.classList.remove('active');
    });

    // Toggle Sheet on click
    document.querySelector('.sheet-handle').addEventListener('click', () => {
        detailSheet.classList.toggle('active');
    });

    // Auto-expand sheet on load (Jobs likes to show off the list)
    setTimeout(() => {
        detailSheet.classList.add('active');
        renderList('Offline');
    }, 1000);

    function setMode(mode) {
        currentMode = mode;
        if (mode === 'Online') {
            document.getElementById('map-container').style.opacity = '0.3';
            document.getElementById('sheet-title').innerText = '실시간 온라인 핫딜';
        } else {
            document.getElementById('map-container').style.opacity = '1';
            document.getElementById('sheet-title').innerText = '내 주변 오프라인 할인';
        }
        renderList(mode);
        updateMapMarkers(mode);
    }

    function renderList(mode) {
        const data = (mode === 'Offline') ? SAMPLE_OFFLINE_DATA : SAMPLE_ONLINE_DATA;
        itemList.innerHTML = '';
        
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
                    </div>
                    <p style="font-size:0.75rem; color:var(--apple-gray); margin-top:4px;">
                        정가: <s>${item.original_price}</s> • ${item.category}
                        ${item.isVerified ? ' <i class="fa-solid fa-circle-check" style="color:var(--apple-blue)"></i> v-Certified' : ''}
                    </p>
                </div>
            `;
            card.addEventListener('click', () => {
                if(mode === 'Offline' && item.location) {
                    focusMap(item.location.lat, item.location.lng);
                } else if(item.link) {
                    window.open(item.link, '_blank');
                }
            });
            itemList.appendChild(card);
        });
    }

    function initMap() {
        const mapContainer = document.getElementById('map');
        const mapOptions = {
            center: new kakao.maps.LatLng(37.5665, 126.9780), // Seoul
            level: 4
        };

        try {
            map = new kakao.maps.Map(mapContainer, mapOptions);
            updateMapMarkers('Offline');
        } catch (e) {
            console.warn("Kakao Map failed to load. (Missing API Key). Using fallback UI.");
            mapContainer.innerHTML = `
                <div style="display:flex; align-items:center; justify-content:center; height:100%; font-size:0.9rem; color:var(--apple-gray); background:#eee;">
                    [ Kakao Map Preview - API Key required for live map ]
                </div>
            `;
        }
    }

    function updateMapMarkers(mode) {
        if (!map) return;
        
        // Clear old markers
        markers.forEach(m => m.setMap(null));
        markers = [];

        if (mode === 'Online') return; // No markers for online

        SAMPLE_OFFLINE_DATA.forEach(item => {
            const markerPosition = new kakao.maps.LatLng(item.location.lat, item.location.lng);
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
            markers.push(marker);

            // Click event on marker
            kakao.maps.event.addListener(marker, 'click', function() {
                detailSheet.classList.add('active');
                // Optional: Highlight card or filter
            });
        });
    }

    function focusMap(lat, lng) {
        if (!map) return;
        const moveLatLon = new kakao.maps.LatLng(lat, lng);
        map.panTo(moveLatLon);
        map.setLevel(3);
    }
});
