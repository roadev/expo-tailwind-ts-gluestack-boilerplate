import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function Settings() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        <Text className="mb-6 text-2xl font-bold text-gray-800">Settings</Text>

        <View className="space-y-4">
          <View className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-semibold text-gray-700 mb-2">Account Settings</Text>
            <Text className="text-gray-600">Manage your account preferences and security settings.</Text>
          </View>

          <View className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-semibold text-gray-700 mb-2">Notifications</Text>
            <Text className="text-gray-600">Configure how and when you receive notifications.</Text>
          </View>

          <View className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-semibold text-gray-700 mb-2">Privacy</Text>
            <Text className="text-gray-600">Control your privacy and data sharing preferences.</Text>
          </View>

          <View className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-semibold text-gray-700 mb-2">About</Text>
            <Text className="text-gray-600">App version and information.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
