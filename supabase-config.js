/* ==========================================================================
   Supabase Configuration & API Integration Layer
   ========================================================================== */

// Configured Supabase Credentials
const SUPABASE_CONFIG = {
  url: localStorage.getItem("cinestar_supabase_url") || "https://nemmyyhqqczpzznmrmjj.supabase.co",
  anonKey: localStorage.getItem("cinestar_supabase_key") || "sb_publishable_vSfLK3WL9TvUJfP138ai3w_uJNiTp3Q"
};

let supabaseClient = null;
let isSupabaseActive = false;

// Initialize Supabase Client
function initSupabase() {
  const url = SUPABASE_CONFIG.url || localStorage.getItem("cinestar_supabase_url") || "";
  const key = SUPABASE_CONFIG.anonKey || localStorage.getItem("cinestar_supabase_key") || "";

  // Check if Supabase JS SDK is loaded and credentials exist
  if (window.supabase && url && url.startsWith("http") && key) {
    try {
      supabaseClient = window.supabase.createClient(url, key);
      isSupabaseActive = true;
      console.log("⚡ Supabase successfully connected to:", url);
    } catch (err) {
      console.warn("Supabase init error, falling back to local storage:", err);
      isSupabaseActive = false;
    }
  } else {
    console.log("ℹ️ Operating in Local/Hybrid mode. (Supabase setup optional)");
    isSupabaseActive = false;
  }
  updateSupabaseStatusUI();
}

// Update status indicator in Navbar
function updateSupabaseStatusUI() {
  const statusEl = document.getElementById("supabase-status-badge");
  if (!statusEl) return;

  if (isSupabaseActive) {
    statusEl.className = "status-badge active";
    statusEl.innerHTML = `⚡ Supabase Active`;
    statusEl.title = "Connected to Supabase Cloud Database";
  } else {
    statusEl.className = "status-badge local";
    statusEl.innerHTML = `☁️ Supabase Config`;
    statusEl.title = "Click to enter your Supabase URL & Anon Key";
  }
}

// DB Helper Functions
async function dbFetchMovies(defaultMovies) {
  if (isSupabaseActive && supabaseClient) {
    try {
      const { data, error } = await supabaseClient.from('movies').select('*');
      if (!error && data && data.length > 0) {
        return data.map(m => ({
          id: m.movie_id || m.id,
          title: m.title,
          genre: m.genre,
          subGenre: m.sub_genre || m.genre,
          duration: m.duration,
          rating: m.rating,
          age: m.age,
          format: m.format,
          language: m.language,
          synopsis: m.synopsis,
          basePrice: m.base_price,
          posterBg: "#0d1b2a",
          posterSvgColor: "#00d2ff",
          trailerUrl: "https://www.youtube.com/embed/d9MyW72ELq0"
        }));
      }
    } catch (err) {
      console.warn("Error fetching movies from Supabase:", err);
    }
  }
  return defaultMovies;
}

async function dbSaveBooking(bookingObj) {
  // Save to localStorage
  let localBookings = JSON.parse(localStorage.getItem("cinestar_bookings") || "[]");
  localBookings.unshift(bookingObj);
  localStorage.setItem("cinestar_bookings", JSON.stringify(localBookings));

  // Sync to Supabase if connected
  if (isSupabaseActive && supabaseClient) {
    try {
      const { data, error } = await supabaseClient.from('bookings').insert([{
        booking_ref: bookingObj.id,
        movie_title: bookingObj.movieTitle,
        format: bookingObj.format,
        language: bookingObj.language,
        theater: bookingObj.theater,
        showtime: bookingObj.showtime,
        seats: bookingObj.seats,
        admit_count: bookingObj.admitCount,
        amount: bookingObj.amount,
        cust_name: bookingObj.custName,
        cust_email: bookingObj.custEmail,
        pay_mode: bookingObj.payMode
      }]);
      if (error) console.error("Supabase insert error:", error);
      else console.log("✅ Booking saved to Supabase table!");
    } catch (err) {
      console.error("Failed to save booking to Supabase:", err);
    }
  }
  return localBookings;
}

async function dbFetchBookings() {
  if (isSupabaseActive && supabaseClient) {
    try {
      const { data, error } = await supabaseClient.from('bookings').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        return data.map(b => ({
          id: b.booking_ref || b.id,
          movieTitle: b.movie_title,
          format: b.format,
          language: b.language,
          theater: b.theater,
          showtime: b.showtime,
          seats: b.seats,
          admitCount: b.admit_count,
          amount: b.amount,
          custName: b.cust_name,
          custEmail: b.cust_email,
          payMode: b.pay_mode,
          bookedAt: new Date(b.created_at).toLocaleDateString()
        }));
      }
    } catch (err) {
      console.warn("Failed to fetch bookings from Supabase, using local state:", err);
    }
  }
  return JSON.parse(localStorage.getItem("cinestar_bookings") || "[]");
}

// Allow user to set custom Supabase Key via UI modal
function saveSupabaseConfig(url, key) {
  localStorage.setItem("cinestar_supabase_url", url.trim());
  localStorage.setItem("cinestar_supabase_key", key.trim());
  SUPABASE_CONFIG.url = url.trim();
  SUPABASE_CONFIG.anonKey = key.trim();
  initSupabase();
}
