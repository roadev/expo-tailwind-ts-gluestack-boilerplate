import { Drawer } from 'expo-router/drawer';
import { View, Text } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

function HomeIcon({ color, size }: { color: string; size: number }) {
  return <Ionicons name="home" size={size} color={color} />;
}

function ProfileIcon({ color, size }: { color: string; size: number }) {
  return <Ionicons name="person" size={size} color={color} />;
}

function SettingsIcon({ color, size }: { color: string; size: number }) {
  return <Ionicons name="settings" size={size} color={color} />;
}

function CustomDrawerContent() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DrawerContentScrollView className="bg-white">
      <View className="border-b border-gray-200 p-6">
        <Text className="text-xl font-bold text-gray-800">MyApp</Text>
      </View>

      <View className="mt-4">
        <DrawerItem
          activeTintColor="#3b82f6"
          focused={pathname === '/'}
          icon={HomeIcon}
          inactiveTintColor="#6b7280"
          label="Home"
          onPress={() => router.push('/')}
          style={{
            backgroundColor: pathname === '/' ? '#eff6ff' : 'transparent',
          }}
        />

        <DrawerItem
          activeTintColor="#3b82f6"
          focused={pathname === '/profile'}
          icon={ProfileIcon}
          inactiveTintColor="#6b7280"
          label="Profile"
          onPress={() => router.push('/profile')}
          style={{
            backgroundColor: pathname === '/profile' ? '#eff6ff' : 'transparent',
          }}
        />

        <DrawerItem
          activeTintColor="#3b82f6"
          focused={pathname === '/settings'}
          icon={SettingsIcon}
          inactiveTintColor="#6b7280"
          label="Settings"
          onPress={() => router.push('/settings')}
          style={{
            backgroundColor: pathname === '/settings' ? '#eff6ff' : 'transparent',
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3b82f6',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  );
}
