import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Profile() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        <Text className="mb-6 text-2xl font-bold text-gray-800">Profile</Text>

        <View className="mb-8 items-center">
          <View className="mb-4 h-24 w-24 items-center justify-center rounded-full bg-gray-300">
            <Text className="text-2xl font-bold text-gray-600">JD</Text>
          </View>
          <Text className="text-xl font-semibold text-gray-800">John Doe</Text>
          <Text className="text-gray-600">john.doe@example.com</Text>
        </View>

        <View className="space-y-4">
          <View className="rounded-lg bg-gray-50 p-4">
            <Text className="mb-2 text-lg font-semibold text-gray-700">Personal Information</Text>
            <Text className="text-gray-600">
              Update your personal details and contact information.
            </Text>
          </View>

          <View className="rounded-lg bg-gray-50 p-4">
            <Text className="mb-2 text-lg font-semibold text-gray-700">Preferences</Text>
            <Text className="text-gray-600">Customize your app experience and preferences.</Text>
          </View>

          <View className="rounded-lg bg-gray-50 p-4">
            <Text className="mb-2 text-lg font-semibold text-gray-700">Activity</Text>
            <Text className="text-gray-600">View your activity history and statistics.</Text>
          </View>
        </View>

        <View className="mt-8 rounded-lg bg-gray-50 p-4">
          <Text className="text-center text-gray-600">
            Use the menu button to navigate between screens.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
