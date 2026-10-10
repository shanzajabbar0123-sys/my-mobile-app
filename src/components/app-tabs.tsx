import React from 'react';
import { Tabs } from 'expo-router';

export default function AppTabs() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* 1. Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

      {/* 2. Explore Tab */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
        }}
      />

      {/* 3. Menu Tab */}
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
        }}
      />

      {/* 4. Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}