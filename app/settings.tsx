import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function Settings() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        <Text className="mb-6 text-2xl font-bold text-gray-800">Settings</Text>

        <View className="space-y-4">
          <View className="rounded-lg bg-gray-50 p-4">
            <Text className="mb-2 text-lg font-semibold text-gray-700">Account Settings</Text>
            <Text className="text-gray-600">
              Manage your account preferences and security settings.
            </Text>
          </View>

          <View className="rounded-lg bg-gray-50 p-4">
            <Text className="mb-2 text-lg font-semibold text-gray-700">Notifications</Text>
            <Text className="text-gray-600">Configure how and when you receive notifications.</Text>
          </View>

          <View className="rounded-lg bg-gray-50 p-4">
            <Text className="mb-2 text-lg font-semibold text-gray-700">Privacy</Text>
            <Text className="text-gray-600">
              Control your privacy and data sharing preferences.
            </Text>
          </View>

          <View className="rounded-lg bg-gray-50 p-4">
            <Text className="mb-2 text-lg font-semibold text-gray-700">About</Text>
            <Text className="text-gray-600">App version and information.</Text>
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
