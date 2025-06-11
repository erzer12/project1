import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Database, Shield, Zap } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Your App</Text>
        <Text style={styles.subtitle}>Powered by Supabase</Text>
      </View>

      <View style={styles.featuresContainer}>
        <View style={styles.featureCard}>
          <Database size={32} color="#10B981" />
          <Text style={styles.featureTitle}>PostgreSQL Database</Text>
          <Text style={styles.featureDescription}>
            Full-featured PostgreSQL database with real-time subscriptions
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Shield size={32} color="#3B82F6" />
          <Text style={styles.featureTitle}>Authentication</Text>
          <Text style={styles.featureDescription}>
            Built-in auth with email, social providers, and row-level security
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Zap size={32} color="#F59E0B" />
          <Text style={styles.featureTitle}>Real-time</Text>
          <Text style={styles.featureDescription}>
            Listen to database changes in real-time across all clients
          </Text>
        </View>
      </View>

      <View style={styles.setupCard}>
        <Text style={styles.setupTitle}>Next Steps</Text>
        <Text style={styles.setupText}>
          1. Create a Supabase project at supabase.com{'\n'}
          2. Copy your project URL and anon key{'\n'}
          3. Update the .env file with your credentials{'\n'}
          4. Start building your database schema
        </Text>
      </View>
    </ScrollView>
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
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#64748B',
  },
  featuresContainer: {
    padding: 24,
    gap: 16,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E293B',
    marginTop: 12,
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
  },
  setupCard: {
    margin: 24,
    backgroundColor: '#EFF6FF',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  setupTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E40AF',
    marginBottom: 12,
  },
  setupText: {
    fontSize: 16,
    color: '#1E40AF',
    lineHeight: 24,
  },
});