import { Drawer } from 'expo-router/drawer';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

function HomeIcon({ color, size }: { color: string; size: number }) {
  return <Ionicons color={color} name="home" size={size} />;
}

function ProfileIcon({ color, size }: { color: string; size: number }) {
  return <Ionicons color={color} name="person" size={size} />;
}

function SettingsIcon({ color, size }: { color: string; size: number }) {
  return <Ionicons color={color} name="settings" size={size} />;
}

interface MenuItemProps {
  label: string;
  icon: React.ComponentType<{ color: string; size: number }>;
  route: string;
  isActive: boolean;
}

function MenuItem({ label, icon: Icon, route, isActive }: MenuItemProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(route)}
      className={`mx-2 flex-row items-center rounded-lg px-4 py-3 ${
        isActive ? 'bg-blue-500' : 'bg-transparent'
      }`}>
      <Icon color={isActive ? '#ffffff' : '#6b7280'} size={20} />
      <Text className={`ml-3 text-base font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function CustomDrawerContent() {
  const pathname = usePathname();

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="border-b border-gray-200 p-6">
        <Text className="text-xl font-bold text-gray-800">MyApp</Text>
      </View>

      <View className="mt-4">
        <MenuItem icon={HomeIcon} isActive={pathname === '/'} label="Home" route="/" />

        <MenuItem
          icon={ProfileIcon}
          isActive={pathname === '/profile'}
          label="Profile"
          route="/profile"
        />

        <MenuItem
          icon={SettingsIcon}
          isActive={pathname === '/settings'}
          label="Settings"
          route="/settings"
        />
      </View>
    </ScrollView>
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
