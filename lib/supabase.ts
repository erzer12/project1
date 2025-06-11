import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

// Validate environment variables
if (!supabaseUrl || supabaseUrl === 'https://your-project-id.supabase.co' || supabaseUrl === 'your_supabase_project_url') {
  console.warn('EXPO_PUBLIC_SUPABASE_URL is not configured. Please set it in your .env file.');
}

if (!supabaseAnonKey || supabaseAnonKey === 'your-anon-key-here' || supabaseAnonKey === 'your_supabase_anon_key') {
  console.warn('EXPO_PUBLIC_SUPABASE_ANON_KEY is not configured. Please set it in your .env file.');
}

// Create a mock client if environment variables are not properly configured
const isConfigured = supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project-id.supabase.co' && 
  supabaseUrl !== 'your_supabase_project_url' &&
  supabaseAnonKey !== 'your-anon-key-here' &&
  supabaseAnonKey !== 'your_supabase_anon_key';

export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
    })
  : {
      // Mock client for when Supabase is not configured
      auth: {
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        signInWithOtp: () => Promise.resolve({ error: { message: 'Supabase not configured' } }),
        signOut: () => Promise.resolve({ error: { message: 'Supabase not configured' } }),
      }
    } as any;

export const isSupabaseConfigured = isConfigured;