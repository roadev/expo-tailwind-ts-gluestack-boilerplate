import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function Profile() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        <Text className="text-2xl font-bold text-gray-800 mb-6">Profile</Text>
        
        <View className="items-center mb-8">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-gray-300 mb-4">
            <Text className="text-xl font-bold text-gray-600">JD</Text>
          </View>
          <Text className="text-lg font-semibold text-gray-800">John Doe</Text>
          <Text className="text-gray-600">john.doe@example.com</Text>
        </View>

        <View className="space-y-4">
          <View className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-semibold text-gray-700 mb-2">Personal Information</Text>
            <Text className="text-gray-600">Update your personal details and contact information.</Text>
          </View>

          <View className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-semibold text-gray-700 mb-2">Preferences</Text>
            <Text className="text-gray-600">Customize your app experience and preferences.</Text>
          </View>

          <View className="bg-gray-50 p-4 rounded-lg">
            <Text className="text-lg font-semibold text-gray-700 mb-2">Activity</Text>
            <Text className="text-gray-600">View your activity history and statistics.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
