import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import useColorMode from '@/shared/hooks/useColorMode';
import './global.css';

export default function RootLayout() {
  const { colorMode, resolvedMode } = useColorMode();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <GluestackUIProvider mode={colorMode}>
          <StatusBar style={resolvedMode === 'dark' ? 'light' : 'dark'} />
          <Slot />
        </GluestackUIProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
