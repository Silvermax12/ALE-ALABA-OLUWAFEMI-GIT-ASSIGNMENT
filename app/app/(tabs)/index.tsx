import { Image } from 'expo-image';
import { Platform, StyleSheet, View, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000', dark: '#000000' }}
      headerImage={
        <View style={styles.headerBackground}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2564&auto=format&fit=crop' }}
            style={styles.headerImage}
            contentFit="cover"
          />
          <View style={styles.headerOverlay} />
        </View>
      }>
      
      <ThemedView style={styles.profileSection}>
        <View style={styles.titleContainer}>
          <ThemedText type="title" style={styles.nameText}>Ale-Alaba Oluwafemi</ThemedText>
          <HelloWave />
        </View>
        <ThemedText style={styles.subtitleText}>UI/UX Designer & Developer</ThemedText>
      </ThemedView>

      <ThemedView style={styles.cardContainer}>
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>Welcome to My Space</ThemedText>
          <ThemedText style={styles.cardContent}>
            I focus on creating intuitive, accessible, and inclusive digital experiences 
            that prioritize user needs and modern design principles.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle" style={styles.cardTitle}>My Expertise</ThemedText>
          <View style={styles.skillTags}>
            {['UI/UX Design', 'Design Systems', 'React Native', 'Accessibility'].map((skill, index) => (
              <View key={index} style={styles.tag}>
                <ThemedText style={styles.tagText}>{skill}</ThemedText>
              </View>
            ))}
          </View>
        </ThemedView>

        <Link href="/explore" asChild>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.8}>
            <ThemedText style={styles.actionButtonText}>Explore My Work</ThemedText>
          </TouchableOpacity>
        </Link>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#000000',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -20,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  nameText: {
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.5,
    textAlign: 'center',
    color: '#D4AF37',
  },
  subtitleText: {
    fontSize: 16,
    opacity: 0.8,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  cardContainer: {
    padding: 24,
    gap: 20,
    backgroundColor: 'transparent',
  },
  card: {
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.2)',
    shadowColor: '#D4AF37',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    gap: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#D4AF37',
  },
  cardContent: {
    fontSize: 15,
    lineHeight: 24,
    opacity: 0.9,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 8,
  },
  tag: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.3)',
  },
  tagText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#D4AF37',
  },
  actionButton: {
    marginTop: 10,
    paddingVertical: 18,
    borderRadius: 20,
    backgroundColor: '#D4AF37',
    alignItems: 'center',
    shadowColor: '#D4AF37',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  actionButtonText: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
});
