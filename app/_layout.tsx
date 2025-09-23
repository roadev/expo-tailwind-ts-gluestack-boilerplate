import { Slot, useRouter, usePathname } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <View className="flex-1">
        {/* Header with drawer trigger */}
        <View className="flex-row items-center justify-between bg-blue-500 p-4">
          <TouchableOpacity className="p-2" onPress={() => router.push('/')}>
            <Text className="text-lg font-bold text-white">MyApp</Text>
          </TouchableOpacity>

          <View className="flex-row space-x-4">
            <TouchableOpacity
              className={`p-2 ${pathname === '/settings' ? 'rounded bg-blue-700' : ''}`}
              onPress={() => router.push('/settings')}>
              <Text className="text-white">Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`p-2 ${pathname === '/profile' ? 'rounded bg-blue-700' : ''}`}
              onPress={() => router.push('/profile')}>
              <Text className="text-white">Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main content */}
        <Slot />
      </View>
      <StatusBar style="auto" />
    </>
  );
}
