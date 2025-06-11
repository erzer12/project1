import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function useFrameworkReady() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Initialize Supabase and any other framework setup
    const initializeFramework = async () => {
      try {
        // Test Supabase connection
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.warn('Supabase connection warning:', error.message);
        }
        setIsReady(true);
      } catch (error) {
        console.error('Framework initialization error:', error);
        setIsReady(true); // Still set ready to prevent blocking
      }
    };

    initializeFramework();
  }, []);

  return isReady;
}