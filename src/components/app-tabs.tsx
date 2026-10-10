import React from 'react';
import { Tabs } from 'expo-router'

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

      {/* 3. Characters Tab */}
      <Tabs.Screen
        name="characters"
        options={{
          title: 'Characters',
        }}
      />

      {/* 3. Naya Tab (Assignment 2 Requirement) */}
      <Tabs.Screen
        name="four"
        options={{
          title: 'Screen 4',
        }}
      />
    </Tabs>
  );
}