import { useColorScheme } from 'react-native';
import useUIStore, { type ColorMode } from '@/store/uiStore';

export type ResolvedColorMode = Exclude<ColorMode, 'system'>;

function resolveMode(mode: ColorMode, systemScheme: string | null | undefined): ResolvedColorMode {
  if (mode !== 'system') return mode;
  return systemScheme === 'dark' ? 'dark' : 'light';
}

/**
 * The color mode to hand to `GluestackUIProvider`, plus the mode actually being
 * rendered once 'system' has been resolved against the OS setting.
 */
export default function useColorMode() {
  const colorMode = useUIStore((state) => state.colorMode);
  const setColorMode = useUIStore((state) => state.setColorMode);
  const systemScheme = useColorScheme();

  return { colorMode, resolvedMode: resolveMode(colorMode, systemScheme), setColorMode };
}
