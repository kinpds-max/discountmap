document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize State
    let map;
    let markers = [];
    let currentMode = 'Offline'; 
    let currentCategory = 'all';
    let currentTab = 'Wisdom'; // Wisdom, Official, Online

    // 2. UI Elements - Ensure all are properly selected
    const rankingBar = document.getElementById('ranking-bar');
    const sheetTabs = document.querySelectorAll('.sheet-tab');
    const itemList = document.getElementById('item-list');
    const btnLocate = document.getElementById('btn-locate');
    const mainSearch = document.getElementById('main-search');
    const pills = document.querySelectorAll('.pill');
    const immersiveModal = document.getElementById('immersive-modal');

    // 3. Initialize Map
    function initMap() {
        map = L.map('map', {
            zoomControl: false,
            attributionControl: false
        }).setView([37.665, 126.650], 12); // 김포시 누산리 399-6

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 19
        }).addTo(map);

        updateMapMarkers();
        renderList('Offline');
        renderRankingBar();
    }
    initMap();

    // 4. Feature Logic
    function renderRankingBar() {
        if (!rankingBar) return;
        const allData = [...SAMPLE_OFFLINE_DATA, ...SAMPLE_ONLINE_DATA];
        const top10 = allData.sort((a,b) => parseFloat(b.discount) - parseFloat(a.discount)).slice(0, 10);
        
        rankingBar.innerHTML = '';
        top10.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'rank-item';
            div.innerHTML = `<span class="rank-num">${index+1}</span> ${item.icon || '📍'} ${item.name.substring(0,12)}... <span style="color:#ff3b30;">-${item.discount}</span>`;
            div.onclick = () => showImmersiveModal(item);
            rankingBar.appendChild(div);
        });
    }

    function renderList(mode, filterQuery = "") {
        if (!itemList) return;
        // Combine all data for list view but filter by type
        const allData = [...SAMPLE_OFFLINE_DATA, ...SAMPLE_ONLINE_DATA];
        let data = allData;
        
        // Tab Filtering
        if (currentTab === 'Wisdom') {
            data = data.filter(item => item.type === 'Wisdom');
        } else if (currentTab === 'Private') {
            data = data.filter(item => item.type === 'Private');
        } else if (currentTab === 'Official') {
            data = data.filter(item => item.type === 'Official');
        } else if (currentTab === 'Online') {
            data = data.filter(item => item.type === 'Online');
        } else if (currentTab === 'Errand') {
            data = data.filter(item => item.type === 'Errand');
        } else if (currentTab === 'FleaMarket') {
            data = data.filter(item => item.type === 'FleaMarket');
        }

        // Category Filtering
        if (currentCategory !== 'all') {
            data = data.filter(item => item.category === currentCategory);
        }

        // Search Filtering
        if (filterQuery) {
            const q = filterQuery.toLowerCase();
            data = data.filter(item => 
                item.name.toLowerCase().includes(q) || 
                (item.category && item.category.toLowerCase().includes(q))
            );
        }

        itemList.innerHTML = '';
        if (data.length === 0) {
            itemList.innerHTML = '<p style="text-align:center; color:gray; padding:40px; font-size:0.9rem;">검색 결과가 없습니다.</p>';
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
                        <span class="discount-badge">${item.discount === '수고비' ? '협의' : item.discount + ' OFF'}</span>
                        ${item.type === 'Wisdom' ? '<span class="wisdom-badge">실시간 나눔</span>' : ''}
                        ${item.type === 'Online' ? '<span class="wisdom-badge" style="background:#5ac8fa;">온라인 공구</span>' : ''}
                        ${item.type === 'Errand' ? '<span class="wisdom-badge" style="background:#34c759;">동네 심부름</span>' : ''}
                        ${item.type === 'FleaMarket' ? '<span class="wisdom-badge" style="background:#d0d0d0; color:black;">중고 직거래</span>' : ''}
                    </div>
                    <p style="font-size:0.75rem; color:var(--apple-gray); margin-top:4px;">
                        ${item.original_price === '0원' ? '' : '정가: <s>' + item.original_price + '</s> • '}
                        ${item.category}
                        ${item.author ? ` • 작성자: ${item.author}` : ''}
                        <span style="float:right; color:var(--apple-blue);">
                            ${item.type === 'Wisdom' ? '우리동네 보물' : (item.type === 'Private' ? '민간할인' : (item.type === 'Online' ? '전국온라인' : (item.type === 'Errand' ? '심부름' : (item.type === 'FleaMarket' ? '중고마켓' : '공식인증'))))}
                        </span>
                    </p>
                </div>
            `;
            card.onclick = () => {
                if(item.location) focusMap(item.location.lat, item.location.lng);
                showImmersiveModal(item);
            };
            itemList.appendChild(card);
        });
    }

    function updateMapMarkers() {
        markers.forEach(m => map.removeLayer(m));
        markers = [];

        // Determine which data to show on map
        const allOffline = SAMPLE_OFFLINE_DATA;
        let data = allOffline;
        
        if (currentTab === 'Wisdom') data = data.filter(item => item.type === 'Wisdom');
        else if (currentTab === 'Private') data = data.filter(item => item.type === 'Private');
        else if (currentTab === 'Official') data = data.filter(item => item.type === 'Official');
        else if (currentTab === 'Errand') data = data.filter(item => item.type === 'Errand');
        else if (currentTab === 'FleaMarket') data = data.filter(item => item.type === 'FleaMarket');
        else return;

        if (currentCategory !== 'all') {
            data = data.filter(item => item.category === currentCategory);
        }

        data.forEach(item => {
            if (!item.location) return;
            const isHot = parseFloat(item.discount) >= 50;
            const priceIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div class="price-marker ${isHot ? 'hot' : ''}">
                        <span class="icon">${item.icon || '📍'}</span>
                        <span class="price">${item.price}</span>
                       </div>`,
                iconSize: [80, 30],
                iconAnchor: [40, 15]
            });

            const marker = L.marker([item.location.lat, item.location.lng], { icon: priceIcon }).addTo(map);
            if (isHot) {
                L.circleMarker([item.location.lat, item.location.lng], {
                    radius: 20, className: 'golden-aura', stroke: false, fillOpacity: 0.6
                }).addTo(map);
            }
            marker.on('click', () => showImmersiveModal(item));
            markers.push(marker);
        });
    }

    function showImmersiveModal(item) {
        if (!immersiveModal) return;
        const img = document.getElementById('modal-img');
        const title = document.getElementById('modal-title');
        const desc = document.getElementById('modal-desc');
        const discountBar = document.getElementById('discounted-bar');
        const percent = document.getElementById('modal-save-percent');
        const phoneBtn = document.getElementById('modal-phone-btn');

        immersiveModal.classList.remove('hidden');
        img.src = item.thumbnail;
        title.innerText = item.name;
        desc.innerText = `${item.name}은(는) 시중가 ${item.original_price} 대비 ${item.discount} 할인된 ${item.price}에 제공됩니다. 현장에서 잡스급 가치를 경험하세요.`;
        percent.innerText = `-${item.discount}`;
        
        if (item.phone) {
            phoneBtn.href = `tel:${item.phone}`;
            phoneBtn.innerHTML = `<i class="fa-solid fa-phone"></i>&nbsp; 확인 전화하기 (${item.phone})`;
            document.getElementById('modal-phone-box').style.display = 'block';
        } else {
            document.getElementById('modal-phone-box').style.display = 'none';
        }

        // Bar Animation
        discountBar.style.height = '0%';
        setTimeout(() => {
            const h = 100 - parseInt(item.discount);
            discountBar.style.height = `${h}%`;
        }, 300);

        document.getElementById('btn-naver').onclick = () => window.open(`https://map.naver.com/v5/search/${encodeURIComponent(item.name)}`, '_blank');
        document.getElementById('btn-kakao').onclick = () => window.open(`https://map.kakao.com/link/search/${encodeURIComponent(item.name)}`, '_blank');
        document.getElementById('modal-link-btn').onclick = () => {
            if (item.link) window.open(item.link, '_blank');
        };
    }

    // 5. Event Listeners
    const detailSheet = document.getElementById('detail-sheet');
    const sheetHandle = document.querySelector('.sheet-handle');

    if (sheetHandle) {
        sheetHandle.addEventListener('click', () => {
            detailSheet.classList.toggle('active');
        });
    }

    sheetTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            detailSheet.classList.add('active'); // Expand when switching tabs
            sheetTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentTab = tab.dataset.tab;
            renderList(currentMode);
            updateMapMarkers();
        });
    });

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCategory = pill.dataset.cat;
            renderList(currentMode);
            updateMapMarkers();
        });
    });

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
            renderList(currentMode, e.target.value);
        });
    }

    document.querySelector('.modal-close').addEventListener('click', () => {
        immersiveModal.classList.add('hidden');
    });

    // Helper Functions
    function focusMap(lat, lng) {
        map.flyTo([lat, lng], 15, { duration: 1.5 });
    }

    // Modal behavior for clicking outside
    immersiveModal.addEventListener('click', (e) => {
        if (e.target === immersiveModal) immersiveModal.classList.add('hidden');
    });

    // Interaction simulation
    document.getElementById('btn-login').onclick = () => alert("Apple ID 로그인 기능 준비 중");
    document.getElementById('btn-notif').onclick = () => alert("주변 핫딜 알림이 활성화되었습니다.");
    document.getElementById('btn-share').onclick = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("링크가 복사되었습니다.");
    };

    // Estimate Calculator Logic
    const btnEstimate = document.getElementById('btn-estimate');
    const estimateModal = document.getElementById('estimate-modal');
    const closeEstimateBtn = document.getElementById('close-estimate');
    const btnCalc = document.getElementById('btn-calc');
    const estResult = document.getElementById('est-result');
    const estPrice = document.getElementById('est-price');

    if (btnEstimate && estimateModal) {
        btnEstimate.addEventListener('click', () => {
            estimateModal.style.display = 'flex';
        });
        
        closeEstimateBtn.addEventListener('click', () => {
            estimateModal.style.display = 'none';
            estResult.style.display = 'none';
        });

        btnCalc.addEventListener('click', () => {
            const itemPrice = parseInt(document.getElementById('est-item').value) || 0;
            const size = parseInt(document.getElementById('est-size').value) || 0;
            const qty = parseInt(document.getElementById('est-qty').value) || 0;
            
            let total = 0;
            if (size > 0 && qty === 0) {
                total = size * itemPrice;
            } else if (size === 0 && qty > 0) {
                total = qty * itemPrice;
            } else if (size > 0 && qty > 0) {
                total = size * qty * itemPrice;
            } else {
                alert("면적(평수) 또는 필요 수량을 입력해주세요.");
                estResult.style.display = 'none';
                return;
            }

            // UI Feedback
            estResult.style.display = 'block';
            estPrice.innerText = total.toLocaleString() + '원';
            
            // Pop Animation
            estPrice.style.transform = 'scale(1.1)';
            setTimeout(() => { estPrice.style.transform = 'scale(1)'; }, 200);
        });
    }
});
