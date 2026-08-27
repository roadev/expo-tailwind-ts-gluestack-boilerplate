import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Appearance, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import useColorMode from '@/shared/hooks/useColorMode';
import './global.css';

export default function RootLayout() {
  const { colorMode, resolvedMode } = useColorMode();

  // GluestackUIProvider is handed an already-resolved mode rather than the
  // stored one. Its 'system' branch only subscribes to future OS changes: on
  // web it leaves the .light/.dark class the previous choice put on <html>,
  // and that class outranks the media-query tokens in global.css, so picking
  // System would keep rendering the old theme. 'light'/'dark' always take the
  // branch that sets one class and removes the other.
  useEffect(() => {
    // react-native-web has no setColorScheme, and on web the class above is
    // already the whole mechanism.
    if (Platform.OS === 'web') return;

    // That same resolved mode makes the provider pin Appearance on native,
    // which would stop System from following the OS. Undo the pin here: this
    // effect belongs to the provider's parent, so it runs afterwards and wins,
    // and reading resolvedMode re-asserts it whenever the provider re-pins.
    Appearance.setColorScheme(colorMode === 'system' ? 'unspecified' : resolvedMode);
  }, [colorMode, resolvedMode]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <GluestackUIProvider mode={resolvedMode}>
          <StatusBar style={resolvedMode === 'dark' ? 'light' : 'dark'} />
          <Slot />
        </GluestackUIProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
