import { Drawer } from 'expo-router/drawer';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
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

  const MenuItem = ({
    label,
    icon: Icon,
    route,
    isActive,
  }: {
    label: string;
    icon: React.ComponentType<{ color: string; size: number }>;
    route: string;
    isActive: boolean;
  }) => (
    <TouchableOpacity
      className={`flex-row items-center px-4 py-3 mx-2 rounded-lg ${
        isActive ? 'bg-blue-500' : 'bg-transparent'
      }`}
      onPress={() => router.push(route)}
    >
      <Icon color={isActive ? '#ffffff' : '#6b7280'} size={20} />
      <Text
        className={`ml-3 text-base font-medium ${
          isActive ? 'text-white' : 'text-gray-700'
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="border-b border-gray-200 p-6">
        <Text className="text-xl font-bold text-gray-800">MyApp</Text>
      </View>

      <View className="mt-4">
        <MenuItem
          label="Home"
          icon={HomeIcon}
          route="/"
          isActive={pathname === '/'}
        />

        <MenuItem
          label="Profile"
          icon={ProfileIcon}
          route="/profile"
          isActive={pathname === '/profile'}
        />

        <MenuItem
          label="Settings"
          icon={SettingsIcon}
          route="/settings"
          isActive={pathname === '/settings'}
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
