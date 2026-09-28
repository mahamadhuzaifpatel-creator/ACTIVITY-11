# CineStar Pass - Movie Ticket Booking Web App 🎬

A modern, responsive, and feature-packed Movie Ticket Booking web application built with HTML5, CSS3, JavaScript, and Supabase database integration.

## 🚀 Features

- **Movie Catalog & Spotlight**: Discover now-showing movies across genres (Sci-Fi, Action, Animation, Thriller, Drama, Comedy) with format badges (IMAX 3D, 4DX, 3D, 2D) and rating tags.
- **Interactive Search & Genre Filters**: Real-time search bar and genre chips for instant filtering.
- **Showtime & Theater Selector**: Choose city location (Mumbai, Delhi, Bengaluru, Hyderabad, London, New York), date pills (Today, Tomorrow, +2 Days, +3 Days), and theater showtime slots.
- **Interactive Seat Map**: Curved screen visualizer with tiered seat selection (VIP Recliner, Premium, Executive) and real-time total price calculation.
- **Snacks & Concessions**: Add popcorn, nachos, drinks, and combos with live quantity counters.
- **Digital Ticket & QR Code**: Form checkout generating digital printable movie ticket stubs with unique booking IDs and SVG QR codes.
- **Supabase Cloud Database**: Real-time synchronization of movies and customer bookings with Supabase database.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Vanilla CSS with Cinema Dark theme), Vanilla JavaScript
- **Database**: Supabase JS SDK (`@supabase/supabase-js`)
- **Storage**: Hybrid Mode (Supabase Cloud + LocalStorage Fallback)

## 🗄️ Database Setup (Supabase)

To connect your own Supabase backend:
1. Run the SQL script in [`schema.sql`](./schema.sql) in your [Supabase SQL Editor](https://supabase.com/dashboard).
2. Configure your Supabase Project URL and Anon Key in `supabase-config.js` or via the **☁️ Supabase Config** button in the web navbar.

## 🚀 How to Run Locally

Open `index.html` directly in any web browser or use a local dev server:
```bash
npx serve -l 3000
```
Then visit `http://localhost:3000`.
