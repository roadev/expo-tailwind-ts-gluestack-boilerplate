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

        <View className="mt-12 w-full max-w-sm rounded-lg bg-gray-50 p-6">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Quick Start</Text>
          <Text className="text-center text-gray-600">
            This is a clean boilerplate for your Expo app with drawer navigation. Use the hamburger
            menu button to navigate between screens!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
