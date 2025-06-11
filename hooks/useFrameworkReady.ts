import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';

export function useFrameworkReady() {
  const [isReady, setIsReady] = useState(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    // Initialize Supabase and any other framework setup
    const initializeFramework = async () => {
      try {
        // Test Supabase connection
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.warn('Supabase connection warning:', error.message);
        }
        
        // Only update state if component is still mounted
        if (isMountedRef.current) {
          setIsReady(true);
        }
      } catch (error) {
        console.error('Framework initialization error:', error);
        // Still set ready to prevent blocking, but only if mounted
        if (isMountedRef.current) {
          setIsReady(true);
        }
      }
    };

    initializeFramework();

    // Cleanup function to prevent state updates on unmounted component
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isReady;
}