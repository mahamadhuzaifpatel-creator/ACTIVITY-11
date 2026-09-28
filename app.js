/* ==========================================================================
   CineStar Pass - Application Logic & State Management
   ========================================================================== */

// --- Movie Database Default Seed ---
const DEFAULT_MOVIES = [
  {
    id: "movie-1",
    title: "CYBERVERSE: 2099",
    genre: "Sci-Fi",
    subGenre: "Sci-Fi / Action",
    duration: "2h 45m",
    rating: "4.9",
    age: "UA 13+",
    format: "IMAX 3D",
    language: "English, Hindi",
    synopsis: "In a dystopian futuristic metropolis, a rogue hacker uncovers a mind-bending cosmic simulation that holds the key to humanity's survival.",
    posterBg: "#0d1b2a",
    posterSvgColor: "#00d2ff",
    trailerUrl: "https://www.youtube.com/embed/d9MyW72ELq0",
    basePrice: 350
  },
  {
    id: "movie-2",
    title: "SHADOW SENTINEL",
    genre: "Action",
    subGenre: "Action / Superhero",
    duration: "2h 20m",
    rating: "4.8",
    age: "UA 16+",
    format: "4DX 3D",
    language: "English, Hindi, Tamil",
    synopsis: "When a secret vigilante organization is betrayed from within, an elite covert operative rises from the ashes to bring justice.",
    posterBg: "#4a0e17",
    posterSvgColor: "#e50914",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    basePrice: 300
  },
  {
    id: "movie-3",
    title: "KINGDOM OF LUMIN",
    genre: "Animation",
    subGenre: "Animation / Family / Fantasy",
    duration: "1h 50m",
    rating: "4.9",
    age: "U",
    format: "3D",
    language: "English, Hindi",
    synopsis: "Join young Astra and her magical starlight dragon as they embark on an enchanted journey across floating sky islands to restore magic.",
    posterBg: "#2b1055",
    posterSvgColor: "#ffb400",
    trailerUrl: "https://www.youtube.com/embed/d9MyW72ELq0",
    basePrice: 250
  },
  {
    id: "movie-4",
    title: "ECHOES IN THE DARK",
    genre: "Thriller",
    subGenre: "Horror / Mystery",
    duration: "2h 05m",
    rating: "4.6",
    age: "A 18+",
    format: "2D",
    language: "English",
    synopsis: "An investigative podcast host investigates an abandoned lighthouse off the coast, uncovering ancient secrets that refuse to stay buried.",
    posterBg: "#1c2331",
    posterSvgColor: "#94a3b8",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    basePrice: 220
  },
  {
    id: "movie-5",
    title: "THE LAST CHRONICLE",
    genre: "Drama",
    subGenre: "Drama / Biography",
    duration: "2h 35m",
    rating: "4.7",
    age: "UA 13+",
    format: "2D",
    language: "English, Hindi",
    synopsis: "The inspiring true story of a visionary journalist who risked everything to expose the century's biggest industrial scandal.",
    posterBg: "#3d2314",
    posterSvgColor: "#e2b857",
    trailerUrl: "https://www.youtube.com/embed/d9MyW72ELq0",
    basePrice: 200
  },
  {
    id: "movie-6",
    title: "CRAZY TAXI RUN",
    genre: "Comedy",
    subGenre: "Comedy / Action",
    duration: "1h 45m",
    rating: "4.5",
    age: "U",
    format: "2D",
    language: "Hindi, English",
    synopsis: "Two mismatched taxi drivers accidentally pick up a briefcase containing millions in diamonds, resulting in a hilarious cross-country chase.",
    posterBg: "#065f46",
    posterSvgColor: "#2ecc71",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    basePrice: 180
  }
];

// --- Theater Locations Data ---
const THEATERS = {
  "Mumbai": [
    { name: "CineStar Grand IMAX - Lower Parel", showtimes: ["10:15 AM", "01:45 PM", "05:30 PM", "09:00 PM"] },
    { name: "PVR Luxe Icon - Juhu", showtimes: ["11:00 AM", "02:30 PM", "06:15 PM", "10:00 PM"] },
    { name: "INOX Laserplex - Nariman Point", showtimes: ["12:00 PM", "03:45 PM", "07:30 PM"] }
  ],
  "Delhi NCR": [
    { name: "CineStar Director's Cut - Vasant Kunj", showtimes: ["10:30 AM", "02:00 PM", "06:00 PM", "09:30 PM"] },
    { name: "PVR Superplex - Noida Sec 18", showtimes: ["11:30 AM", "03:15 PM", "07:00 PM"] }
  ],
  "Bengaluru": [
    { name: "CineStar IMAX - Forum Mall Koramangala", showtimes: ["10:00 AM", "01:30 PM", "05:00 PM", "08:45 PM"] },
    { name: "PVR Gold Class - UB City", showtimes: ["12:15 PM", "04:00 PM", "07:45 PM"] }
  ],
  "Hyderabad": [
    { name: "CineStar Large Screen - Banjara Hills", showtimes: ["11:00 AM", "02:45 PM", "06:30 PM", "10:15 PM"] }
  ],
  "London": [
    { name: "CineStar BFI IMAX - Waterloo", showtimes: ["01:00 PM", "04:30 PM", "08:00 PM"] }
  ],
  "New York": [
    { name: "CineStar Lincoln Square - Manhattan", showtimes: ["12:00 PM", "03:30 PM", "07:15 PM", "10:45 PM"] }
  ]
};

// --- Snacks Catalog ---
const SNACKS_DATA = [
  { id: "snack-1", title: "Salted Butter Popcorn (Large)", price: 240, icon: "🍿" },
  { id: "snack-2", title: "Caramel Supreme Popcorn (Large)", price: 270, icon: "🍿" },
  { id: "snack-3", title: "Cheesy Jalapeno Nachos", price: 220, icon: "🧀" },
  { id: "snack-4", title: "Chilled Fountain Cola (750ml)", price: 160, icon: "🥤" },
  { id: "snack-5", title: "Blockbuster Combo (Popcorn + 2 Drinks)", price: 490, icon: "🎬" }
];

// --- App State ---
const state = {
  movies: DEFAULT_MOVIES,
  currentCity: "Mumbai",
  activeGenre: "all",
  searchQuery: "",
  selectedMovie: null,
  selectedDate: "Today",
  selectedTheater: null,
  selectedTime: null,
  selectedSeats: [],
  snackQuantities: {},
  bookedTickets: []
};

// Helper: Generate clean Base64 SVG Poster Image for 100% browser compatibility
function generateSvgPoster(movie) {
  const bg = movie.posterBg || "#0d1b2a";
  const color = movie.posterSvgColor || "#00d2ff";
  const title = (movie.title || "MOVIE").replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const genre = (movie.genre || "CINEMA").toUpperCase();
  const format = movie.format || "2D";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450" viewBox="0 0 300 450">
    <rect width="100%" height="100%" fill="${bg}"/>
    <circle cx="150" cy="160" r="80" fill="${color}" opacity="0.15"/>
    <circle cx="150" cy="160" r="50" fill="none" stroke="${color}" stroke-width="3" opacity="0.4"/>
    <polygon points="150,110 185,185 115,185" fill="${color}" opacity="0.8"/>
    <text x="50%" y="330" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-weight="bold" font-size="20" letter-spacing="1">${title}</text>
    <text x="50%" y="365" text-anchor="middle" fill="${color}" font-family="Arial, sans-serif" font-weight="600" font-size="14">${genre} • ${format}</text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

// Global DOM references lazy getter
let DOM = {};

function initDOMReferences() {
  DOM = {
    moviesGrid: document.getElementById("movies-grid"),
    genreChips: document.getElementById("genre-chips"),
    movieSearch: document.getElementById("movie-search"),
    citySelect: document.getElementById("city-select"),
    bookingCountBadge: document.getElementById("booking-count"),
    supabaseStatusBadge: document.getElementById("supabase-status-badge"),
    supabaseModal: document.getElementById("supabase-modal"),
    closeSupabaseModal: document.getElementById("close-supabase-modal"),
    supabaseConfigForm: document.getElementById("supabase-config-form"),

    // Hero Spotlight
    heroSpotlight: document.getElementById("hero-spotlight"),
    heroTitle: document.getElementById("hero-title"),
    heroDesc: document.getElementById("hero-desc"),
    heroBookBtn: document.getElementById("hero-book-btn"),
    btnTrailer: document.getElementById("btn-trailer"),

    // Showtime Modal
    showtimeModal: document.getElementById("showtime-modal"),
    closeShowtimeModal: document.getElementById("close-showtime-modal"),
    modalMoviePoster: document.getElementById("modal-movie-poster"),
    modalMovieTitle: document.getElementById("modal-movie-title"),
    modalMovieSub: document.getElementById("modal-movie-sub"),
    dateSelector: document.getElementById("date-selector"),
    theatersList: document.getElementById("theaters-list"),

    // Seat Modal
    seatModal: document.getElementById("seat-modal"),
    closeSeatModal: document.getElementById("close-seat-modal"),
    backToShowtime: document.getElementById("back-to-showtime"),
    seatMovieTitle: document.getElementById("seat-movie-title"),
    seatShowtimeInfo: document.getElementById("seat-showtime-info"),
    seatsGrid: document.getElementById("seats-grid"),
    selectedSeatsText: document.getElementById("selected-seats-text"),
    totalPriceText: document.getElementById("total-price-text"),
    btnProceedSnacks: document.getElementById("btn-proceed-snacks"),

    // Checkout Modal
    checkoutModal: document.getElementById("checkout-modal"),
    closeCheckoutModal: document.getElementById("close-checkout-modal"),
    backToSeats: document.getElementById("back-to-seats"),
    snacksList: document.getElementById("snacks-list"),
    sumMovieName: document.getElementById("sum-movie-name"),
    sumSeatsCount: document.getElementById("sum-seats-count"),
    sumTheaterTime: document.getElementById("sum-theater-time"),
    sumSeatNumbers: document.getElementById("sum-seat-numbers"),
    sumTicketTotal: document.getElementById("sum-ticket-total"),
    sumSnacksRow: document.getElementById("sum-snacks-row"),
    sumSnacksTotal: document.getElementById("sum-snacks-total"),
    sumTax: document.getElementById("sum-tax"),
    sumGrandTotal: document.getElementById("sum-grand-total"),
    paymentForm: document.getElementById("payment-form"),
    btnPayNow: document.getElementById("btn-pay-now"),

    // Ticket Receipt Modal
    ticketModal: document.getElementById("ticket-modal"),
    closeTicketModal: document.getElementById("close-ticket-modal"),
    tBookingId: document.getElementById("t-booking-id"),
    tMovieTitle: document.getElementById("t-movie-title"),
    tFormat: document.getElementById("t-format"),
    tLang: document.getElementById("t-lang"),
    tTheater: document.getElementById("t-theater"),
    tDatetime: document.getElementById("t-datetime"),
    tSeats: document.getElementById("t-seats"),
    tAmount: document.getElementById("t-amount"),
    tAdmitCount: document.getElementById("t-admit-count"),
    tCustName: document.getElementById("t-cust-name"),
    tPayMode: document.getElementById("t-pay-mode"),
    ticketQrCode: document.getElementById("ticket-qr-code"),
    btnPrintTicket: document.getElementById("btn-print-ticket"),
    btnDoneTicket: document.getElementById("btn-done-ticket"),

    // My Bookings Modal
    btnMyBookings: document.getElementById("btn-my-bookings"),
    myBookingsModal: document.getElementById("my-bookings-modal"),
    closeMyBookings: document.getElementById("close-my-bookings"),
    myBookingsList: document.getElementById("my-bookings-list"),

    // Trailer Modal
    trailerModal: document.getElementById("trailer-modal"),
    closeTrailerModal: document.getElementById("close-trailer-modal"),
    trailerIframe: document.getElementById("trailer-iframe")
  };
}

// --- Initialization ---
async function init() {
  initDOMReferences();

  // Initialize Supabase Connection
  initSupabase();

  // Load Movies from Supabase if available, else DEFAULT_MOVIES
  state.movies = await dbFetchMovies(DEFAULT_MOVIES);
  
  // Load Bookings from Supabase / Local storage
  state.bookedTickets = await dbFetchBookings();

  state.selectedMovie = state.movies[0] || DEFAULT_MOVIES[0];
  updateHeroSpotlight(state.selectedMovie);

  updateBookingBadge();
  renderMovies();
  setupEventListeners();
  renderDateSelector();
}

function updateHeroSpotlight(movie) {
  if (!movie || !DOM.heroTitle) return;
  DOM.heroTitle.textContent = movie.title;
  DOM.heroDesc.textContent = movie.synopsis;
}

// --- Render Movies Grid ---
function renderMovies() {
  if (!DOM.moviesGrid) return;
  DOM.moviesGrid.innerHTML = "";

  const filteredMovies = state.movies.filter(movie => {
    const matchesGenre = state.activeGenre === "all" || movie.genre.toLowerCase() === state.activeGenre.toLowerCase();
    const matchesSearch = movie.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          movie.genre.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          movie.language.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  if (filteredMovies.length === 0) {
    DOM.moviesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <h3>No movies found matching your search.</h3>
        <p>Try clearing filters or search terms.</p>
      </div>
    `;
    return;
  }

  filteredMovies.forEach(movie => {
    const posterSrc = generateSvgPoster(movie);
    const card = document.createElement("div");
    card.className = "movie-card";
    card.dataset.movieId = movie.id;
    card.innerHTML = `
      <div class="poster-wrapper">
        <img src="${posterSrc}" alt="${movie.title}" class="movie-poster" loading="lazy">
        <span class="card-format-badge">${movie.format}</span>
        <span class="card-rating-badge">★ ${movie.rating}</span>
      </div>
      <div class="movie-card-body">
        <h3 class="movie-card-title">${movie.title}</h3>
        <div class="movie-card-info">
          <span>${movie.genre}</span> • <span>${movie.duration}</span> • <span style="color:var(--accent-red);">${movie.age}</span>
        </div>
        <button class="btn btn-primary movie-card-btn" data-movie-id="${movie.id}">
          Book Tickets
        </button>
      </div>
    `;
    DOM.moviesGrid.appendChild(card);
  });
}

// --- Render Date Selector Pills ---
function renderDateSelector() {
  if (!DOM.dateSelector) return;
  const dates = [
    { label: "Today", day: getDayName(0), dateNum: getFormattedDate(0) },
    { label: "Tomorrow", day: getDayName(1), dateNum: getFormattedDate(1) },
    { label: "+2 Days", day: getDayName(2), dateNum: getFormattedDate(2) },
    { label: "+3 Days", day: getDayName(3), dateNum: getFormattedDate(3) }
  ];

  DOM.dateSelector.innerHTML = dates.map((d, index) => `
    <div class="date-pill ${index === 0 ? 'active' : ''}" data-date="${d.label} (${d.dateNum})">
      <div class="day">${d.day}</div>
      <div class="date-num">${d.dateNum}</div>
    </div>
  `).join("");
}

function getDayName(offset) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toLocaleDateString('en-US', { weekday: 'short' });
}

function getFormattedDate(offset) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// --- Open Showtime Modal ---
function openShowtimeModal(movie) {
  state.selectedMovie = movie;
  DOM.modalMoviePoster.src = generateSvgPoster(movie);
  DOM.modalMovieTitle.textContent = movie.title;
  DOM.modalMovieSub.textContent = `${movie.genre} • ${movie.duration} • ${movie.age}`;

  renderTheaters();
  DOM.showtimeModal.classList.add("open");
}

function renderTheaters() {
  if (!DOM.theatersList) return;
  const theaterList = THEATERS[state.currentCity] || THEATERS["Mumbai"];
  DOM.theatersList.innerHTML = theaterList.map(t => `
    <div class="theater-item">
      <div class="theater-name">📍 ${t.name}</div>
      <div class="theater-address">Screen 01 • Dolby Atmos • Wheelchair Accessible</div>
      <div class="showtime-slots">
        ${t.showtimes.map(time => `
          <button class="slot-btn" data-theater="${t.name}" data-time="${time}">
            <span>${time}</span>
            <span class="slot-format">${state.selectedMovie.format}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// --- Open Seat Selection Modal ---
function openSeatModal(theater, time) {
  state.selectedTheater = theater;
  state.selectedTime = time;
  state.selectedSeats = [];

  DOM.seatMovieTitle.textContent = state.selectedMovie.title;
  DOM.seatShowtimeInfo.textContent = `${theater} | ${state.selectedDate}, ${time}`;
  
  renderSeatGrid();
  updateSeatSummary();

  DOM.showtimeModal.classList.remove("open");
  DOM.seatModal.classList.add("open");
}

// --- Render Interactive Seat Grid Layout ---
function renderSeatGrid() {
  if (!DOM.seatsGrid) return;
  DOM.seatsGrid.innerHTML = "";
  
  const basePrice = state.selectedMovie.basePrice || 250;
  const rows = [
    { label: "A", category: "VIP", price: basePrice + 100, class: "vip-row" },
    { label: "B", category: "VIP", price: basePrice + 100, class: "vip-row" },
    { label: "C", category: "Premium", price: basePrice + 50, class: "premium-row" },
    { label: "D", category: "Premium", price: basePrice + 50, class: "premium-row" },
    { label: "E", category: "Executive", price: basePrice, class: "standard-row" },
    { label: "F", category: "Executive", price: basePrice, class: "standard-row" }
  ];

  const seed = (state.selectedTheater.length + state.selectedTime.length) % 5;

  rows.forEach(r => {
    const rowEl = document.createElement("div");
    rowEl.className = "seat-row";

    const labelLeft = document.createElement("span");
    labelLeft.className = "row-label";
    labelLeft.textContent = r.label;
    rowEl.appendChild(labelLeft);

    const seatsWrapper = document.createElement("div");
    seatsWrapper.className = "row-seats";

    for (let i = 1; i <= 10; i++) {
      if (i === 6) {
        const gap = document.createElement("div");
        gap.className = "aisle-gap";
        seatsWrapper.appendChild(gap);
      }

      const seatBtn = document.createElement("button");
      const seatId = `${r.label}${i}`;
      const isBooked = (i * 3 + r.label.charCodeAt(0) + seed) % 7 === 0;

      seatBtn.className = `seat ${r.class} ${isBooked ? 'booked' : ''}`;
      seatBtn.textContent = i;
      seatBtn.dataset.seatId = seatId;
      seatBtn.dataset.row = r.label;
      seatBtn.dataset.num = i;
      seatBtn.dataset.price = r.price;
      seatBtn.dataset.category = r.category;
      
      if (!isBooked) {
        seatBtn.onclick = () => toggleSeatSelection(seatBtn, {
          id: seatId,
          price: r.price,
          category: r.category
        });
      }

      seatsWrapper.appendChild(seatBtn);
    }

    rowEl.appendChild(seatsWrapper);
    DOM.seatsGrid.appendChild(rowEl);
  });
}

function toggleSeatSelection(seatBtn, seatObj) {
  const index = state.selectedSeats.findIndex(s => s.id === seatObj.id);

  if (index > -1) {
    state.selectedSeats.splice(index, 1);
    seatBtn.classList.remove("selected");
  } else {
    if (state.selectedSeats.length >= 8) {
      alert("You can select a maximum of 8 seats per transaction.");
      return;
    }
    state.selectedSeats.push(seatObj);
    seatBtn.classList.add("selected");
  }

  updateSeatSummary();
}

function updateSeatSummary() {
  if (state.selectedSeats.length === 0) {
    DOM.selectedSeatsText.textContent = "None selected";
    DOM.totalPriceText.textContent = "₹0";
    DOM.btnProceedSnacks.disabled = true;
  } else {
    const seatNames = state.selectedSeats.map(s => s.id).join(", ");
    const totalPrice = state.selectedSeats.reduce((sum, s) => sum + s.price, 0);

    DOM.selectedSeatsText.textContent = seatNames;
    DOM.totalPriceText.textContent = `₹${totalPrice}`;
    DOM.btnProceedSnacks.disabled = false;
  }
}

// --- Open Snacks & Checkout Modal ---
function openCheckoutModal() {
  renderSnacksList();
  updateOrderSummary();

  DOM.seatModal.classList.remove("open");
  DOM.checkoutModal.classList.add("open");
}

function renderSnacksList() {
  if (!DOM.snacksList) return;
  DOM.snacksList.innerHTML = SNACKS_DATA.map(snack => {
    const qty = state.snackQuantities[snack.id] || 0;
    return `
      <div class="snack-item">
        <div class="snack-info">
          <span class="snack-icon">${snack.icon}</span>
          <div>
            <div class="snack-title">${snack.title}</div>
            <div class="snack-price">₹${snack.price}</div>
          </div>
        </div>
        <div class="snack-counter">
          <button class="btn-counter" onclick="changeSnackQty('${snack.id}', -1)">-</button>
          <span class="counter-val">${qty}</span>
          <button class="btn-counter" onclick="changeSnackQty('${snack.id}', 1)">+</button>
        </div>
      </div>
    `;
  }).join('');
}

window.changeSnackQty = function(snackId, delta) {
  const current = state.snackQuantities[snackId] || 0;
  const updated = Math.max(0, current + delta);
  if (updated === 0) {
    delete state.snackQuantities[snackId];
  } else {
    state.snackQuantities[snackId] = updated;
  }
  renderSnacksList();
  updateOrderSummary();
};

function updateOrderSummary() {
  if (!DOM.sumMovieName) return;
  DOM.sumMovieName.textContent = state.selectedMovie.title;
  DOM.sumSeatsCount.textContent = `${state.selectedSeats.length} Seats`;
  DOM.sumTheaterTime.textContent = `${state.selectedTheater} • ${state.selectedTime}`;
  DOM.sumSeatNumbers.textContent = `Seats: ${state.selectedSeats.map(s => s.id).join(', ')}`;

  const ticketsTotal = state.selectedSeats.reduce((sum, s) => sum + s.price, 0);
  
  let snacksTotal = 0;
  Object.keys(state.snackQuantities).forEach(id => {
    const item = SNACKS_DATA.find(s => s.id === id);
    if (item) {
      snacksTotal += item.price * state.snackQuantities[id];
    }
  });

  const tax = Math.round((ticketsTotal + snacksTotal) * 0.18);
  const grandTotal = ticketsTotal + snacksTotal + tax;

  DOM.sumTicketTotal.textContent = `₹${ticketsTotal}`;
  
  if (snacksTotal > 0) {
    DOM.sumSnacksRow.style.display = "flex";
    DOM.sumSnacksTotal.textContent = `₹${snacksTotal}`;
  } else {
    DOM.sumSnacksRow.style.display = "none";
  }

  DOM.sumTax.textContent = `₹${tax}`;
  DOM.sumGrandTotal.textContent = `₹${grandTotal}`;
}

// --- Process Payment & Save to Supabase ---
async function processPayment() {
  const name = document.getElementById("cust-name").value.trim();
  const email = document.getElementById("cust-email").value.trim();
  const phone = document.getElementById("cust-phone").value.trim();
  const payMode = document.querySelector('input[name="pay-method"]:checked').value;

  if (!name || !email || !phone) {
    alert("Please fill in all contact details.");
    return;
  }

  DOM.btnPayNow.disabled = true;
  DOM.btnPayNow.textContent = "Processing & Saving Ticket...";

  const bookingId = "CS-" + Math.floor(100000 + Math.random() * 900000);
  const ticketsTotal = state.selectedSeats.reduce((sum, s) => sum + s.price, 0);
  let snacksTotal = 0;
  Object.keys(state.snackQuantities).forEach(id => {
    const item = SNACKS_DATA.find(s => s.id === id);
    if (item) snacksTotal += item.price * state.snackQuantities[id];
  });
  const grandTotal = Math.round((ticketsTotal + snacksTotal) * 1.18);

  const booking = {
    id: bookingId,
    movieTitle: state.selectedMovie.title,
    format: state.selectedMovie.format,
    language: state.selectedMovie.language,
    theater: state.selectedTheater,
    showtime: `${state.selectedDate} | ${state.selectedTime}`,
    seats: state.selectedSeats.map(s => s.id).join(", "),
    admitCount: state.selectedSeats.length,
    amount: grandTotal,
    custName: name,
    custEmail: email,
    payMode: payMode,
    bookedAt: new Date().toLocaleDateString()
  };

  // Save to Supabase (and Local Storage fallback)
  state.bookedTickets = await dbSaveBooking(booking);
  updateBookingBadge();

  // Populate Digital Ticket Details
  DOM.tBookingId.textContent = booking.id;
  DOM.tMovieTitle.textContent = booking.movieTitle;
  DOM.tFormat.textContent = booking.format;
  DOM.tLang.textContent = booking.language.split(',')[0];
  DOM.tTheater.textContent = booking.theater;
  DOM.tDatetime.textContent = booking.showtime;
  DOM.tSeats.textContent = booking.seats;
  DOM.tAmount.textContent = `₹${booking.amount}`;
  DOM.tAdmitCount.textContent = booking.admitCount;
  DOM.tCustName.textContent = booking.custName;
  DOM.tPayMode.textContent = booking.payMode;

  drawQrCode(booking.id);

  // Reset Form & Show Ticket Modal
  DOM.btnPayNow.disabled = false;
  DOM.btnPayNow.textContent = "Pay & Confirm Ticket";
  DOM.checkoutModal.classList.remove("open");
  DOM.ticketModal.classList.add("open");
}

// Generate simple SVG matrix for QR Code simulation
function drawQrCode(text) {
  let svgMatrix = "";
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const isFilled = (row * col + text.length + row) % 2 === 0 || (row === 0 || row === 9 || col === 0 || col === 9);
      if (isFilled) {
        svgMatrix += `<rect x="${col * 10}" y="${row * 10}" width="9" height="9" fill="#000" />`;
      }
    }
  }
  DOM.ticketQrCode.innerHTML = svgMatrix;
}

function updateBookingBadge() {
  if (DOM.bookingCountBadge) {
    DOM.bookingCountBadge.textContent = state.bookedTickets.length;
  }
}

// --- Render My Bookings List ---
async function renderMyBookings() {
  state.bookedTickets = await dbFetchBookings();
  updateBookingBadge();

  if (!DOM.myBookingsList) return;

  if (state.bookedTickets.length === 0) {
    DOM.myBookingsList.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted);">
        <p>You haven't booked any tickets yet.</p>
      </div>
    `;
    return;
  }

  DOM.myBookingsList.innerHTML = state.bookedTickets.map(b => `
    <div class="booking-card">
      <div class="booking-info">
        <h4>${b.movieTitle}</h4>
        <p>📍 ${b.theater}</p>
        <p>🗓️ ${b.showtime} • Seats: <strong style="color:var(--accent-gold);">${b.seats}</strong></p>
        <p style="font-size:0.75rem; color:var(--text-dim); margin-top:4px;">ID: ${b.id} • Paid: ₹${b.amount}</p>
      </div>
      <span class="booking-badge">CONFIRMED</span>
    </div>
  `).join('');
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Supabase Badge Click -> Open Setup Modal
  if (DOM.supabaseStatusBadge) {
    DOM.supabaseStatusBadge.addEventListener("click", () => {
      document.getElementById("sb-url-input").value = localStorage.getItem("cinestar_supabase_url") || "";
      document.getElementById("sb-key-input").value = localStorage.getItem("cinestar_supabase_key") || "";
      DOM.supabaseModal.classList.add("open");
    });
  }

  if (DOM.closeSupabaseModal) DOM.closeSupabaseModal.onclick = () => DOM.supabaseModal.classList.remove("open");

  if (DOM.supabaseConfigForm) {
    DOM.supabaseConfigForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const url = document.getElementById("sb-url-input").value;
      const key = document.getElementById("sb-key-input").value;
      saveSupabaseConfig(url, key);
      DOM.supabaseModal.classList.remove("open");
      alert("Supabase Credentials saved!");
      init();
    });
  }

  // Movie Search Input
  if (DOM.movieSearch) {
    DOM.movieSearch.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderMovies();
    });
  }

  // Genre Filters
  if (DOM.genreChips) {
    DOM.genreChips.addEventListener("click", (e) => {
      if (e.target.classList.contains("chip")) {
        DOM.genreChips.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
        e.target.classList.add("active");
        state.activeGenre = e.target.dataset.genre;
        renderMovies();
      }
    });
  }

  // City Selector
  if (DOM.citySelect) {
    DOM.citySelect.addEventListener("change", (e) => {
      state.currentCity = e.target.value;
    });
  }

  // Book Movie Buttons / Movie Card Clicks
  if (DOM.moviesGrid) {
    DOM.moviesGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".movie-card");
      if (card) {
        const movieId = card.dataset.movieId;
        const movie = state.movies.find(m => m.id === movieId);
        if (movie) openShowtimeModal(movie);
      }
    });
  }

  // Hero Spotlight CTAs
  if (DOM.heroBookBtn) {
    DOM.heroBookBtn.addEventListener("click", () => {
      openShowtimeModal(state.movies[0] || DEFAULT_MOVIES[0]);
    });
  }

  if (DOM.btnTrailer) {
    DOM.btnTrailer.addEventListener("click", () => {
      DOM.trailerIframe.src = (state.movies[0] || DEFAULT_MOVIES[0]).trailerUrl;
      DOM.trailerModal.classList.add("open");
    });
  }

  if (DOM.closeTrailerModal) {
    DOM.closeTrailerModal.addEventListener("click", () => {
      DOM.trailerIframe.src = "";
      DOM.trailerModal.classList.remove("open");
    });
  }

  // Date Pills Selection
  if (DOM.dateSelector) {
    DOM.dateSelector.addEventListener("click", (e) => {
      const pill = e.target.closest(".date-pill");
      if (pill) {
        DOM.dateSelector.querySelectorAll(".date-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        state.selectedDate = pill.dataset.date;
      }
    });
  }

  // Slot Selection -> Seat Modal
  if (DOM.theatersList) {
    DOM.theatersList.addEventListener("click", (e) => {
      const btn = e.target.closest(".slot-btn");
      if (btn) {
        openSeatModal(btn.dataset.theater, btn.dataset.time);
      }
    });
  }

  // Proceed from Seats to Snacks/Checkout
  if (DOM.btnProceedSnacks) DOM.btnProceedSnacks.addEventListener("click", openCheckoutModal);

  // Back Navigation
  if (DOM.backToShowtime) {
    DOM.backToShowtime.addEventListener("click", () => {
      DOM.seatModal.classList.remove("open");
      DOM.showtimeModal.classList.add("open");
    });
  }

  if (DOM.backToSeats) {
    DOM.backToSeats.addEventListener("click", () => {
      DOM.checkoutModal.classList.remove("open");
      DOM.seatModal.classList.add("open");
    });
  }

  // Submit Payment Form
  if (DOM.paymentForm) {
    DOM.paymentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      processPayment();
    });
  }

  // Modal Close Buttons
  if (DOM.closeShowtimeModal) DOM.closeShowtimeModal.onclick = () => DOM.showtimeModal.classList.remove("open");
  if (DOM.closeSeatModal) DOM.closeSeatModal.onclick = () => DOM.seatModal.classList.remove("open");
  if (DOM.closeCheckoutModal) DOM.closeCheckoutModal.onclick = () => DOM.checkoutModal.classList.remove("open");
  if (DOM.closeTicketModal) DOM.closeTicketModal.onclick = () => DOM.ticketModal.classList.remove("open");
  if (DOM.btnDoneTicket) DOM.btnDoneTicket.onclick = () => DOM.ticketModal.classList.remove("open");

  // Print Ticket Action
  if (DOM.btnPrintTicket) {
    DOM.btnPrintTicket.onclick = () => {
      window.print();
    };
  }

  // My Bookings Modal
  if (DOM.btnMyBookings) {
    DOM.btnMyBookings.onclick = async () => {
      await renderMyBookings();
      DOM.myBookingsModal.classList.add("open");
    };
  }
  if (DOM.closeMyBookings) DOM.closeMyBookings.onclick = () => DOM.myBookingsModal.classList.remove("open");

  // Backdrop Click Close
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("open");
        if (backdrop === DOM.trailerModal && DOM.trailerIframe) DOM.trailerIframe.src = "";
      }
    });
  });

  // ESC Key to close active modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.open").forEach(modal => {
        modal.classList.remove("open");
      });
      if (DOM.trailerIframe) DOM.trailerIframe.src = "";
    }
  });
}

// Start app when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
