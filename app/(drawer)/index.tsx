import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center p-6">
        <Text className="mb-8 text-3xl font-bold text-gray-800">Welcome to MyApp</Text>

        <View className="w-full max-w-sm space-y-4">
          <TouchableOpacity
            className="items-center rounded-lg bg-blue-500 px-6 py-4"
            onPress={() => router.push('/profile')}>
            <Text className="text-lg font-semibold text-white">Go to Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="items-center rounded-lg bg-green-500 px-6 py-4"
            onPress={() => router.push('/settings')}>
            <Text className="text-lg font-semibold text-white">Go to Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
