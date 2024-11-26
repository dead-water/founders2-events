import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  // if (Platform.OS === 'web') {
  //   return (
  //     <div st>
  //       <a href="/index" style={{ color: Colors[colorScheme ?? 'light'].tint }}>Tutor</a>
  //       <a href="/plan" style={{ color: Colors[colorScheme ?? 'light'].tint }}>Plan</a>
  //       <a href="/explore" style={{ color: Colors[colorScheme ?? 'light'].tint }}>About</a>
  //     </div>
  //   );
  // }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Events',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="event.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="actions"
        options={{
          title: 'Actions',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="todo.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
