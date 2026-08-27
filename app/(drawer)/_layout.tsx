import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Pressable } from '@/components/ui/pressable';
import { ScrollView } from '@/components/ui/scroll-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import useColorMode from '@/shared/hooks/useColorMode';
import useTranslation from '@/shared/hooks/useTranslation';
import type { DrawerRoute } from '@/shared/types/navigation';

function HomeIcon({ color, size }: { color: string; size: number }) {
  return <Ionicons color={color} name="home" size={size} />;
}

function ProfileIcon({ color, size }: { color: string; size: number }) {
  return <Ionicons color={color} name="person" size={size} />;
}

function SettingsIcon({ color, size }: { color: string; size: number }) {
  return <Ionicons color={color} name="settings" size={size} />;
}

const ROUTES: DrawerRoute[] = [
  { href: '/', labelKey: 'nav.home', icon: HomeIcon },
  { href: '/profile', labelKey: 'nav.profile', icon: ProfileIcon },
  { href: '/settings', labelKey: 'nav.settings', icon: SettingsIcon },
];

function MenuItem({ route, isActive }: { route: DrawerRoute; isActive: boolean }) {
  const router = useRouter();
  const { t } = useTranslation();
  const { resolvedMode } = useColorMode();
  const Icon = route.icon;

  // The drawer sits outside the themed tree, so the icon color has to be read
  // from the resolved mode instead of a Tailwind class.
  const inactiveColor = resolvedMode === 'dark' ? '#a1a1a1' : '#737373';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
      className={`mx-2 rounded-lg px-4 py-3 ${isActive ? 'bg-primary' : 'bg-transparent'}`}
      onPress={() => router.push(route.href)}>
      <HStack className="items-center" space="md">
        <Icon color={isActive ? '#ffffff' : inactiveColor} size={20} />
        <Text className={isActive ? 'text-primary-foreground' : 'text-muted-foreground'} size="md">
          {t(route.labelKey)}
        </Text>
      </HStack>
    </Pressable>
  );
}

function CustomDrawerContent() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <ScrollView className="flex-1 bg-background">
      <VStack className="p-6" space="xs">
        <Heading size="lg">{t('common.appName')}</Heading>
      </VStack>
      <Divider />
      <VStack className="mt-4" space="xs">
        {ROUTES.map((route) => (
          <MenuItem key={route.href} isActive={pathname === route.href} route={route} />
        ))}
      </VStack>
    </ScrollView>
  );
}

export default function DrawerLayout() {
  const { resolvedMode } = useColorMode();
  const { t } = useTranslation();
  const isDark = resolvedMode === 'dark';

  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerStyle: { backgroundColor: isDark ? '#171717' : '#ffffff' },
        headerTintColor: isDark ? '#fafafa' : '#0a0a0a',
        headerTitleStyle: { fontWeight: 'bold' },
        sceneStyle: { backgroundColor: isDark ? '#0a0a0a' : '#ffffff' },
      }}>
      {/* Without an explicit title the header falls back to the file name. */}
      <Drawer.Screen name="index" options={{ title: t('nav.home') }} />
      <Drawer.Screen name="profile" options={{ title: t('nav.profile') }} />
      <Drawer.Screen name="settings" options={{ title: t('nav.settings') }} />
    </Drawer>
  );
}
