import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { User, LogIn, LogOut, Mail, AlertCircle } from 'lucide-react-native';
import type { User as SupabaseUser } from '@supabase/supabase-js';

export default function ProfileScreen() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signInWithEmail = async () => {
    if (!isSupabaseConfigured) {
      Alert.alert('Configuration Required', 'Please configure Supabase in your .env file to use authentication.');
      return;
    }

    Alert.prompt(
      'Sign In',
      'Enter your email address',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Send Magic Link',
          onPress: async (email) => {
            if (!email) return;
            
            const { error } = await supabase.auth.signInWithOtp({
              email: email,
            });

            if (error) {
              Alert.alert('Error', error.message);
            } else {
              Alert.alert('Success', 'Check your email for the login link!');
            }
          },
        },
      ],
      'plain-text'
    );
  };

  const signOut = async () => {
    if (!isSupabaseConfigured) {
      return;
    }

    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert('Error', error.message);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  // Show configuration message if Supabase is not configured
  if (!isSupabaseConfigured) {
    return (
      <View style={styles.container}>
        <StatusBar style="dark" />
        
        <View style={styles.header}>
          <AlertCircle size={48} color="#F59E0B" />
          <Text style={styles.title}>Configuration Required</Text>
        </View>

        <View style={styles.configContainer}>
          <Text style={styles.configTitle}>Supabase Setup Required</Text>
          <Text style={styles.configText}>
            To use authentication features, please configure your Supabase credentials in the .env file:
          </Text>
          <View style={styles.configCode}>
            <Text style={styles.codeText}>EXPO_PUBLIC_SUPABASE_URL=your_project_url</Text>
            <Text style={styles.codeText}>EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key</Text>
          </View>
          <Text style={styles.configFooter}>
            Get your credentials from your Supabase project dashboard.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <User size={48} color="#3B82F6" />
        <Text style={styles.title}>Profile</Text>
      </View>

      {user ? (
        <View style={styles.userContainer}>
          <View style={styles.userCard}>
            <Mail size={24} color="#10B981" />
            <Text style={styles.userEmail}>{user.email}</Text>
            <Text style={styles.userInfo}>
              Signed in since: {new Date(user.created_at).toLocaleDateString()}
            </Text>
          </View>

          <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
            <LogOut size={20} color="#FFFFFF" />
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.signInContainer}>
          <Text style={styles.signInTitle}>Welcome!</Text>
          <Text style={styles.signInSubtitle}>
            Sign in to access your personalized experience
          </Text>

          <TouchableOpacity style={styles.signInButton} onPress={signInWithEmail}>
            <LogIn size={20} color="#FFFFFF" />
            <Text style={styles.signInText}>Sign In with Email</Text>
          </TouchableOpacity>

          <Text style={styles.magicLinkInfo}>
            We'll send you a magic link for secure, password-free authentication
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 32,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  loadingText: {
    fontSize: 18,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 100,
  },
  configContainer: {
    padding: 24,
    gap: 16,
  },
  configTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
  },
  configText: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24,
  },
  configCode: {
    backgroundColor: '#F1F5F9',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },
  configFooter: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  userContainer: {
    padding: 24,
    gap: 24,
  },
  userCard: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  userEmail: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
  },
  userInfo: {
    fontSize: 14,
    color: '#64748B',
  },
  signOutButton: {
    backgroundColor: '#EF4444',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  signOutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  signInContainer: {
    padding: 24,
    alignItems: 'center',
    gap: 24,
  },
  signInTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 40,
  },
  signInSubtitle: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 24,
  },
  signInButton: {
    backgroundColor: '#3B82F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
    width: '100%',
  },
  signInText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  magicLinkInfo: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
  },
});