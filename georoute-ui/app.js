const STEPS = [
  {
    title: "¿Dónde te alojas?",
    subtitle: "Cada plan comienza y termina en tu hogar lejos de casa.",
  },
  {
    title: "Explora el destino",
    subtitle: "Usa preferencias como filtro para descubrir lugares.",
  },
  {
    title: "Itinerario validado",
    subtitle: "Revisa viabilidad y activa navegación en Google Maps.",
  },
];

const POIS = [
  {
    id: "vill-01",
    city: "Villarrica",
    name: "Plaza de Armas de Villarrica",
    category: "relax",
    durationMin: 60,
    transferMin: 18,
    rating: 4.5,
    address: "Pedro de Valdivia, Villarrica",
    match: ["relax", "turismo", "cultural"],
    image:
      "https://images.unsplash.com/photo-1625529554026-5e8f60c4fdae?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Plaza+de+Armas+Villarrica+Chile",
  },
  {
    id: "vill-02",
    city: "Villarrica",
    name: "Costanera de Villarrica",
    category: "relax",
    durationMin: 70,
    transferMin: 15,
    rating: 4.6,
    address: "Costanera Pucará, Villarrica",
    match: ["relax", "turismo"],
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Costanera+Villarrica+Chile",
  },
  {
    id: "vill-03",
    city: "Villarrica",
    name: "Mirador Volcán Villarrica",
    category: "activo",
    durationMin: 110,
    transferMin: 28,
    rating: 4.7,
    address: "Ruta S-65, Villarrica",
    match: ["activo", "turismo"],
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Mirador+Volcan+Villarrica+Chile",
  },
  {
    id: "spa-01",
    city: "San Pedro de Atacama",
    name: "Valle de la Luna",
    category: "turismo",
    durationMin: 180,
    transferMin: 45,
    rating: 4.8,
    address: "Valle de la Luna, San Pedro de Atacama",
    match: ["activo", "turismo"],
    image:
      "https://images.unsplash.com/photo-1549880181-56a44cf4a9a7?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Valle+de+la+Luna+San+Pedro+de+Atacama",
  },
  {
    id: "cus-01",
    city: "Cusco",
    name: "Sacsayhuamán",
    category: "cultural",
    durationMin: 130,
    transferMin: 32,
    rating: 4.8,
    address: "Sacsayhuamán, Cusco",
    match: ["cultural", "turismo", "activo"],
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Sacsayhuaman+Cusco",
  },
  {
    id: "flo-01",
    city: "Florencia",
    name: "Piazzale Michelangelo",
    category: "turismo",
    durationMin: 95,
    transferMin: 24,
    rating: 4.7,
    address: "Piazzale Michelangelo, Firenze",
    match: ["turismo", "relax", "cultural"],
    image:
      "https://images.unsplash.com/photo-1543429257-3eb0b65d2f22?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Piazzale+Michelangelo+Florence",
  },
  {
    id: "vill-04",
    city: "Villarrica",
    name: "Parque Nacional Villarrica",
    category: "activo",
    durationMin: 150,
    transferMin: 22,
    rating: 4.8,
    address: "Sector Rucapillán, Villarrica",
    match: ["activo", "turismo"],
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Parque+Nacional+Villarrica+Chile",
  },
  {
    id: "vill-05",
    city: "Villarrica",
    name: "Mercado Costumbrista",
    category: "gastronomia",
    durationMin: 80,
    transferMin: 12,
    rating: 4.4,
    address: "Av. Pedro de Valdivia, Villarrica",
    match: ["gastronomia", "cultural", "turismo"],
    image: "https://images.unsplash.com/photo-1514944152559-a103040c7f16?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Mercado+Costumbrista+Villarrica",
  },
  {
    id: "vill-06",
    city: "Villarrica",
    name: "Playa Pucará",
    category: "relax",
    durationMin: 75,
    transferMin: 10,
    rating: 4.5,
    address: "Costanera Pucará, Villarrica",
    match: ["relax", "turismo"],
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Playa+Pucara+Villarrica",
  },
  {
    id: "vill-07",
    city: "Villarrica",
    name: "Feria de Artesanos",
    category: "cultural",
    durationMin: 60,
    transferMin: 9,
    rating: 4.3,
    address: "Centro, Villarrica",
    match: ["cultural", "turismo"],
    image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Feria+Artesanal+Villarrica",
  },
  {
    id: "vill-08",
    city: "Villarrica",
    name: "Ruta del Lago",
    category: "turismo",
    durationMin: 95,
    transferMin: 16,
    rating: 4.6,
    address: "Borde Lago Villarrica",
    match: ["turismo", "relax", "activo"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Lago+Villarrica+Chile",
  },
  {
    id: "vill-09",
    city: "Villarrica",
    name: "Mirador Pedro de Valdivia",
    category: "turismo",
    durationMin: 55,
    transferMin: 11,
    rating: 4.4,
    address: "Mirador Villarrica",
    match: ["turismo", "cultural"],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Mirador+Pedro+de+Valdivia+Villarrica",
  },
  {
    id: "spa-02",
    city: "San Pedro de Atacama",
    name: "Laguna Cejar",
    category: "relax",
    durationMin: 140,
    transferMin: 38,
    rating: 4.7,
    address: "Ruta 23, San Pedro de Atacama",
    match: ["relax", "turismo"],
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Laguna+Cejar+Atacama",
  },
  {
    id: "spa-03",
    city: "San Pedro de Atacama",
    name: "Geysers del Tatio",
    category: "activo",
    durationMin: 190,
    transferMin: 60,
    rating: 4.8,
    address: "El Tatio, Atacama",
    match: ["activo", "turismo"],
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Geysers+del+Tatio",
  },
  {
    id: "cus-02",
    city: "Cusco",
    name: "Mercado de San Pedro",
    category: "gastronomia",
    durationMin: 85,
    transferMin: 18,
    rating: 4.6,
    address: "Cascaparo, Cusco",
    match: ["gastronomia", "cultural"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Mercado+San+Pedro+Cusco",
  },
  {
    id: "cus-03",
    city: "Cusco",
    name: "Qorikancha",
    category: "cultural",
    durationMin: 95,
    transferMin: 20,
    rating: 4.7,
    address: "Av. Sol, Cusco",
    match: ["cultural", "turismo"],
    image: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Qorikancha+Cusco",
  },
  {
    id: "flo-02",
    city: "Florencia",
    name: "Galería Uffizi",
    category: "cultural",
    durationMin: 130,
    transferMin: 20,
    rating: 4.8,
    address: "Piazzale degli Uffizi, Firenze",
    match: ["cultural", "turismo"],
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Galleria+Uffizi+Florence",
  },
  {
    id: "flo-03",
    city: "Florencia",
    name: "Ponte Vecchio",
    category: "turismo",
    durationMin: 70,
    transferMin: 14,
    rating: 4.7,
    address: "Ponte Vecchio, Firenze",
    match: ["turismo", "cultural", "relax"],
    image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60d?auto=format&fit=crop&w=1400&q=80",
    mapQuery: "Ponte+Vecchio+Florence",
  },
];

const state = {
  step: 1,
  dark: false,
  language: "ES",
  hotel: "",
  cityText: "Villarrica",
  days: 2,
  preferences: new Set(["relax"]),
  selected: new Set(),
  generated: [],
  cardsPageSize: 6,
  cardsVisible: 6,
};

const ui = {
  stepKicker: document.querySelector("#stepKicker"),
  stepTitle: document.querySelector("#stepTitle"),
  stepSubtitle: document.querySelector("#stepSubtitle"),
  screens: document.querySelectorAll(".step-screen"),
  hotelInput: document.querySelector("#hotelInput"),
  cityInput: document.querySelector("#cityInput"),
  step1Continue: document.querySelector("#step1Continue"),
  step1Error: document.querySelector("#step1Error"),
  daysGrid: document.querySelector("#daysGrid"),
  step2Back: document.querySelector("#step2Back"),
  step2Continue: document.querySelector("#step2Continue"),
  step3Back: document.querySelector("#step3Back"),
  step2Error: document.querySelector("#step2Error"),
  prefGrid: document.querySelector("#prefGrid"),
  searchInput: document.querySelector("#searchInput"),
  cardsList: document.querySelector("#cardsList"),
  cardsSentinel: document.querySelector("#cardsSentinel"),
  cardsHint: document.querySelector("#cardsHint"),
  statusCard: document.querySelector("#statusCard"),
  statusTitle: document.querySelector("#statusTitle"),
  statusText: document.querySelector("#statusText"),
  itineraryList: document.querySelector("#itineraryList"),
  navigateBtn: document.querySelector("#navigateBtnFloating"),
  saveBtn: document.querySelector("#saveBtnFloating"),
  shareBtn: document.querySelector("#shareBtnFloating"),
  toast: document.querySelector("#toast"),
  themeBtn: document.querySelector("#themeBtn"),
  langBtn: document.querySelector("#langBtn"),
  homeBtn: document.querySelector("#homeBtn"),
};

let cardsObserver = null;

function showToast(message) {
  ui.toast.textContent = message;
  ui.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => ui.toast.classList.remove("show"), 1900);
}

function renderDaysGrid() {
  const nodes = Array.from({ length: 7 }, (_, i) => {
    const day = i + 1;
    const active = day === state.days ? "active" : "";
    return `<button type="button" class="day-card ${active}" data-day="${day}"><strong>${day}</strong>${day === 1 ? "DÍA" : "DÍAS"}</button>`;
  }).join("");
  ui.daysGrid.innerHTML = nodes;
}

function selectedCityPois() {
  const queryCity = state.cityText.trim().toLowerCase();
  const scoped = POIS.filter((poi) => poi.city.toLowerCase().includes(queryCity));
  return scoped.length ? scoped : POIS;
}

function filteredPois() {
  const query = ui.searchInput.value.trim().toLowerCase();

  return selectedCityPois().filter((poi) => {
    if (state.preferences.size > 0 && ![...state.preferences].some((pref) => poi.match.includes(pref))) return false;
    if (query && !poi.name.toLowerCase().includes(query) && !poi.address.toLowerCase().includes(query)) return false;
    return true;
  });
}

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function renderCards() {
  const rows = filteredPois();
  if (!rows.length) {
    ui.cardsList.innerHTML = "<article class='poi-card'><div class='poi-body'><p>No hay resultados con estos filtros.</p></div></article>";
    ui.cardsHint.textContent = "Sin resultados para los filtros activos.";
    ui.cardsSentinel.style.display = "none";
    refreshIcons();
    return;
  }

  const visibleRows = rows.slice(0, state.cardsVisible);
  ui.cardsList.innerHTML = visibleRows
    .map((poi) => {
      const active = state.selected.has(poi.id);
      const fallbackImage =
        "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1400&q=80";
      const safeImage = poi.image || fallbackImage;
      const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(poi.mapQuery)}`;
      return `
      <article class="poi-card">
        <img class="poi-image" src="${safeImage}" alt="${poi.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImage}';" />
        <div class="poi-body">
          <div class="poi-top">
            <h3>${poi.name}</h3>
            <span class="score">★ ${poi.rating}</span>
          </div>
          <p class="poi-subtitle">Destino recomendado</p>
          <p class="poi-meta">${poi.address}</p>
          <div class="poi-stats">
            <span><i data-lucide="clock-3"></i> ${poi.durationMin} min</span>
            <span><i data-lucide="car-front"></i> ${poi.transferMin} min traslado</span>
            <span><i data-lucide="tag"></i> ${poi.category}</span>
          </div>
          <div class="poi-actions">
            <button class="add-btn ${active ? "active" : ""}" data-add="${poi.id}" type="button">${
              active ? "Quitar destino" : "Agregar destino"
            }</button>
            <a class="link-btn maps-btn" href="${mapsSearch}" target="_blank" rel="noopener noreferrer">
              <i data-lucide="map-pinned"></i> Ver en Google Maps
            </a>
          </div>
        </div>
      </article>`;
    })
    .join("");

  const remaining = rows.length - visibleRows.length;
  ui.cardsHint.textContent =
    remaining > 0
      ? `Mostrando ${visibleRows.length} de ${rows.length} destinos. Sigue bajando para cargar más.`
      : `Mostrando ${visibleRows.length} destinos.`;
  ui.cardsSentinel.style.display = remaining > 0 ? "block" : "none";
  refreshIcons();
}

function resetCardsPagination() {
  state.cardsVisible = state.cardsPageSize;
}

function setupInfiniteScroll() {
  if (cardsObserver) cardsObserver.disconnect();
  cardsObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting || state.step !== 2) return;
      const total = filteredPois().length;
      if (state.cardsVisible >= total) return;
      state.cardsVisible = Math.min(total, state.cardsVisible + state.cardsPageSize);
      renderCards();
    },
    { rootMargin: "240px 0px 240px 0px", threshold: 0 }
  );
  cardsObserver.observe(ui.cardsSentinel);
}

function setStep(step) {
  state.step = Math.max(1, Math.min(3, step));
  document.body.classList.remove("step-1", "step-2", "step-3");
  document.body.classList.add(`step-${state.step}`);
  ui.screens.forEach((screen) => {
    screen.classList.toggle("active", Number(screen.dataset.step) === state.step);
  });

  const cfg = STEPS[state.step - 1];
  ui.stepKicker.textContent = `Paso ${state.step} de ${STEPS.length}`;
  ui.stepTitle.textContent = cfg.title;
  ui.stepSubtitle.textContent = cfg.subtitle;

  updateNextButtonState();

  if (state.step === 2) {
    resetCardsPagination();
    renderCards();
  }
  if (state.step === 3) renderGeneratedSummary();
}

function isStepReady(step) {
  if (step === 1) {
    const hotel = ui.hotelInput.value.trim();
    const city = ui.cityInput.value.trim();
    return hotel.length >= 3 && city.length >= 2;
  }
  if (step === 2) {
    return state.selected.size > 0;
  }
  return true;
}

function updateNextButtonState() {
  ui.step1Continue.disabled = !isStepReady(1);
  ui.step2Continue.disabled = !isStepReady(2);
}

function validateStep(step) {
  ui.step1Error.textContent = "";
  ui.step2Error.textContent = "";

  if (step === 1) {
    state.hotel = ui.hotelInput.value.trim();
    state.cityText = ui.cityInput.value.trim();
    if (state.hotel.length < 3 || state.cityText.length < 2) {
      ui.step1Error.textContent = "Ingresa dirección válida y ciudad (mínimo 2 caracteres).";
      return false;
    }
  }

  if (step === 2 && state.selected.size === 0) {
    ui.step2Error.textContent = "Agrega al menos un lugar antes de generar el plan maestro.";
    return false;
  }

  return true;
}

function buildItinerary() {
  const cityPois = selectedCityPois();
  const chosen = cityPois.filter((poi) => state.selected.has(poi.id)).sort((a, b) => {
    return a.transferMin - b.transferMin;
  });

  state.generated = chosen;
}

function setStatus(kind, title, text) {
  ui.statusCard.classList.remove("good", "warn", "bad");
  if (kind) ui.statusCard.classList.add(kind);
  ui.statusTitle.textContent = title;
  ui.statusText.textContent = text;
}

function routeDuration() {
  return state.generated.reduce((acc, poi) => acc + poi.durationMin + poi.transferMin, 0);
}

function renderGeneratedSummary() {
  if (!state.generated.length) {
    setStatus("", "Pendiente de cálculo", "Genera el plan para validar tiempos, distancias y factibilidad.");
    ui.itineraryList.innerHTML = "";
    return;
  }

  const total = routeDuration();
  const available = state.days * 7 * 60;
  const ratio = total / available;
  const estimatedKm = Math.max(1.2, total / 48).toFixed(1);

  if (ratio <= 0.9) {
    setStatus("good", "Viable", `${estimatedKm} km de recorrido total · ${Math.round(total / 60)}h estimadas.`);
  } else if (ratio <= 1.1) {
    setStatus("warn", "Ajustado", `${estimatedKm} km totales. Plan al límite, evalúa reducir una parada.`);
  } else {
    setStatus("bad", "Exigente", `${estimatedKm} km estimados. Conviene dividir el recorrido en más días.`);
  }

  const items = [
    `<li class="timeline-item timeline-start">
      <div class="timeline-badge icon">⌖</div>
      <div class="timeline-card">
        <strong>INICIO EN ALOJAMIENTO</strong>
        <small>${state.hotel}, ${state.cityText}</small>
      </div>
    </li>`,
  ];

  state.generated.forEach((poi, i) => {
    const mapsDirections = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      state.hotel
    )}&destination=${encodeURIComponent(poi.mapQuery)}&travelmode=driving`;
    const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(poi.mapQuery)}&output=embed`;

    items.push(`<li class="timeline-item timeline-gap">
      <div class="timeline-badge dot"></div>
      <div class="timeline-distance">✈ ${poi.transferMin}m</div>
    </li>`);

    items.push(`<li class="timeline-item timeline-stop">
      <div class="timeline-badge number">${i + 1}</div>
      <div class="timeline-card">
      <div class="timeline-stop-head">
        <strong>${i + 1}. ${poi.name}</strong>
        <span class="timeline-time">${String(9 + i).padStart(2, "0")}:00</span>
      </div>
      <small>${poi.durationMin} min visita · ${poi.transferMin} min traslado · llegada ${String(9 + i).padStart(2, "0")}:00</small>
      <div class="poi-map">
        <iframe title="Mapa ${poi.name}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${mapEmbed}"></iframe>
      </div>
      <a class="route-link" href="${mapsDirections}" target="_blank" rel="noopener noreferrer">✈ Cómo llegar</a>
      </div>
    </li>`);
  });

  items.push(`<li class="timeline-item timeline-gap">
    <div class="timeline-badge dot"></div>
    <div class="timeline-distance">✈ 0m</div>
  </li>`);

  items.push(`<li class="timeline-item timeline-end">
  <div class="timeline-badge icon">✓</div>
  <div class="timeline-card"><strong>REGRESO AL ALOJAMIENTO</strong><small>Llegada estimada: ${String(9 + state.generated.length).padStart(
    2,
    "0"
  )}:00</small></div></li>`);
  ui.itineraryList.innerHTML = items.join("");
}

function generateMasterPlan() {
  if (!validateStep(2)) {
    showToast("Selecciona al menos un destino para generar el plan.");
    return;
  }

  buildItinerary();
  renderGeneratedSummary();
  showToast("Plan maestro generado.");
  setStep(3);
}

function openMasterDirections() {
  if (!state.generated.length) {
    showToast("Aún no existe una ruta generada.");
    return;
  }

  const waypoints = state.generated.map((poi) => poi.mapQuery).join("|");
  const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(state.hotel)}&destination=${encodeURIComponent(
    state.hotel
  )}&waypoints=${encodeURIComponent(waypoints)}&travelmode=driving`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function savePlan() {
  if (!state.generated.length) {
    showToast("No hay plan para guardar.");
    return;
  }

  try {
    localStorage.setItem(
      "georoute-wizard-plan",
      JSON.stringify({
        hotel: state.hotel,
        days: state.days,
        cityText: state.cityText,
        preferences: [...state.preferences],
        selected: [...state.selected],
        generated: state.generated,
        savedAt: new Date().toISOString(),
      })
    );
    showToast("Plan guardado localmente.");
  } catch {
    showToast("No fue posible guardar en este dispositivo.");
  }
}

function sharePlan() {
  if (!state.generated.length) {
    showToast("No hay plan para compartir.");
    return;
  }

  const text = `GeoRoute ${state.cityText}: ${state.generated.map((p) => p.name).join(" → ")}`;

  if (navigator.share) {
    navigator
      .share({ title: "Mi plan GeoRoute", text })
      .catch(() => showToast("Compartir cancelado."));
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => showToast("Resumen copiado."))
    .catch(() => showToast("No se pudo copiar el resumen."));
}

function toggleTheme() {
  state.dark = !state.dark;
  document.documentElement.style.filter = state.dark ? "invert(1) hue-rotate(180deg)" : "";
}

function toggleLanguage() {
  state.language = state.language === "ES" ? "EN" : "ES";
  ui.langBtn.textContent = state.language;
  showToast(`Idioma activo: ${state.language}`);
}

function goHome() {
  setStep(1);
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast("Volviste al inicio.");
}

function bindEvents() {
  ui.step1Continue.addEventListener("click", () => {
    if (!validateStep(1)) return;
    setStep(2);
  });

  ui.step2Continue.addEventListener("click", () => {
    if (!validateStep(2)) return;
    generateMasterPlan();
  });

  ui.daysGrid.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-day]");
    if (!btn) return;
    state.days = Number(btn.dataset.day);
    renderDaysGrid();
    updateNextButtonState();
  });

  ui.prefGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-pref]");
    if (!button) return;

    const pref = button.dataset.pref;
    if (!pref) return;

    if (state.preferences.has(pref)) {
      if (state.preferences.size === 1) {
        showToast("Mantén al menos una preferencia activa.");
        return;
      }
      state.preferences.delete(pref);
      button.classList.remove("active");
    } else {
      state.preferences.add(pref);
      button.classList.add("active");
    }
    updateNextButtonState();
    resetCardsPagination();
    renderCards();
  });

  ui.searchInput.addEventListener("input", () => {
    resetCardsPagination();
    renderCards();
  });

  ui.searchInput.addEventListener("change", () => {
    resetCardsPagination();
    renderCards();
  });

  ui.cardsList.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-add]");
    if (!btn) return;
    const id = btn.dataset.add;
    if (!id) return;

    if (state.selected.has(id)) {
      state.selected.delete(id);
    } else {
      state.selected.add(id);
    }

    renderCards();
    updateNextButtonState();
  });

  ui.navigateBtn.addEventListener("click", openMasterDirections);
  ui.saveBtn.addEventListener("click", savePlan);
  ui.shareBtn.addEventListener("click", sharePlan);
  ui.step2Back.addEventListener("click", () => setStep(1));
  ui.step3Back.addEventListener("click", () => setStep(2));

  ui.themeBtn.addEventListener("click", toggleTheme);
  ui.langBtn.addEventListener("click", toggleLanguage);
  ui.homeBtn.addEventListener("click", goHome);

  [ui.hotelInput, ui.cityInput].forEach((node) => {
    node.addEventListener("input", updateNextButtonState);
    node.addEventListener("change", updateNextButtonState);
  });
}

function restoreSaved() {
  try {
    const raw = localStorage.getItem("georoute-wizard-plan");
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.generated)) return;

    state.hotel = parsed.hotel || "";
    state.cityText = parsed.cityText || parsed.city || "Villarrica";
    state.days = parsed.days || 2;
    state.preferences = new Set(Array.isArray(parsed.preferences) ? parsed.preferences : ["relax"]);
    state.selected = new Set(Array.isArray(parsed.selected) ? parsed.selected : []);
    state.generated = parsed.generated;

    ui.hotelInput.value = state.hotel;
    ui.cityInput.value = state.cityText;

    [...ui.prefGrid.querySelectorAll(".chip")].forEach((chip) => {
      chip.classList.toggle("active", state.preferences.has(chip.dataset.pref));
    });
  } catch {
    localStorage.removeItem("georoute-wizard-plan");
  }
}

function init() {
  refreshIcons();
  renderDaysGrid();
  setupInfiniteScroll();
  bindEvents();
  restoreSaved();
  resetCardsPagination();
  renderCards();
  setStep(1);
}

init();
