import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000', dark: '#000000' }}
      headerImage={
        <IconSymbol
          size={310}
          color="rgba(212, 175, 55, 0.3)"
          name="paperplane.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
            fontSize: 28,
            fontWeight: '800',
            color: '#D4AF37',
          }}>
          Coming Soon
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.messageText}>
          Join me in my journey as I craft and build out my digital workspace. 
          There is a lot of exciting work in progress!
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 20,
    marginBottom: 10,
  },
  contentContainer: {
    marginVertical: 20,
    padding: 24,
    borderRadius: 20,
    backgroundColor: 'rgba(212, 175, 55, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.2)',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 26,
    opacity: 0.9,
    textAlign: 'center',
  },
});
