-- ==========================================================================
   Supabase Database Schema for CineStar Pass Movie Ticket Booking
   Run this SQL in your Supabase SQL Editor (https://app.supabase.com)
   ==========================================================================

-- 1. Create Movies Table
CREATE TABLE IF NOT EXISTS movies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  movie_id TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  genre TEXT NOT NULL,
  sub_genre TEXT,
  duration TEXT NOT NULL,
  rating TEXT NOT NULL,
  age TEXT NOT NULL,
  format TEXT NOT NULL,
  language TEXT NOT NULL,
  synopsis TEXT NOT NULL,
  base_price INTEGER NOT NULL DEFAULT 250,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_ref TEXT UNIQUE NOT NULL,
  movie_title TEXT NOT NULL,
  format TEXT NOT NULL,
  language TEXT NOT NULL,
  theater TEXT NOT NULL,
  showtime TEXT NOT NULL,
  seats TEXT NOT NULL,
  admit_count INTEGER NOT NULL,
  amount NUMERIC NOT NULL,
  cust_name TEXT NOT NULL,
  cust_email TEXT NOT NULL,
  pay_mode TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE movies ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies for Public Access (Read Movies, Insert/Read Bookings)
CREATE POLICY "Allow public read access to movies" ON movies FOR SELECT USING (true);
CREATE POLICY "Allow public insert access to bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read access to bookings" ON bookings FOR SELECT USING (true);

-- 5. Insert Sample Movies Seed Data
INSERT INTO movies (movie_id, title, genre, sub_genre, duration, rating, age, format, language, synopsis, base_price)
VALUES 
  ('movie-1', 'CYBERVERSE: 2099', 'Sci-Fi', 'Sci-Fi / Action', '2h 45m', '4.9', 'UA 13+', 'IMAX 3D', 'English, Hindi', 'In a dystopian futuristic metropolis, a rogue hacker uncovers a mind-bending cosmic simulation.', 350),
  ('movie-2', 'SHADOW SENTINEL', 'Action', 'Action / Superhero', '2h 20m', '4.8', 'UA 16+', '4DX 3D', 'English, Hindi, Tamil', 'When a secret vigilante organization is betrayed, an elite operative rises from the ashes.', 300),
  ('movie-3', 'KINGDOM OF LUMIN', 'Animation', 'Animation / Family', '1h 50m', '4.9', 'U', '3D', 'English, Hindi', 'Astra and her starlight dragon embark on an enchanted journey across floating sky islands.', 250),
  ('movie-4', 'ECHOES IN THE DARK', 'Thriller', 'Horror / Mystery', '2h 05m', '4.6', 'A 18+', '2D', 'English', 'An investigative podcast host uncovers ancient secrets in an abandoned lighthouse.', 220),
  ('movie-5', 'THE LAST CHRONICLE', 'Drama', 'Drama / Biography', '2h 35m', '4.7', 'UA 13+', '2D', 'English, Hindi', 'The inspiring true story of a visionary journalist exposing an industrial scandal.', 200),
  ('movie-6', 'CRAZY TAXI RUN', 'Comedy', 'Comedy / Action', '1h 45m', '4.5', 'U', '2D', 'Hindi, English', 'Two mismatched taxi drivers accidentally pick up a briefcase containing millions in diamonds.', 180)
ON CONFLICT (movie_id) DO NOTHING;
