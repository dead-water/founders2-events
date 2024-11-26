import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AudioStream from '@/components/AudioStream';
import VideoCall from '@/components/VideoCall';


import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

// const [events, setEvents] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   async function fetchEvents() {
//     try {
//       const response = await fetch('https://api.example.com/events');
//       const data = await response.json();
//       setEvents(data);
//     } catch (error) {
//       console.error('Error fetching events:', error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   fetchEvents();
// }, []);

// if (loading) {
//   return <ActivityIndicator size="large" color="#0000ff" />;
// }

function EventList() {
  let events = [
    { id: "one", name: "Event 1", date: "Jan" },
    { id: "two", name: "Event 2", date: "Feb" },
    { id: "three", name: "Event 3", date: "Mar" },
    { id: "four", name: "Event 4", date: "Apr" },
    { id: "five", name: "Event 5", date: "May" },
    { id: "six", name: "Event 6", date: "Jun" }
  ];

  return (
    <ThemedView>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ThemedView style={styles.eventItem}>
            <ThemedText>{item.name}: {item.date}</ThemedText>
          </ThemedView>
        )}
        style={{ maxHeight: 300 }} // Adjust the height as needed
        showsVerticalScrollIndicator={false} // Hide the scroll bar
      />
      {events.length > 4 && (
        <ThemedText style={{ textAlign: 'center', marginTop: 8 }}>
          More events available...
        </ThemedText>
      )}
    </ThemedView>
  );
}

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ff8e33', dark: '#ff8e33' }}
      headerImage={
        // <Image
        //   source={require('@/assets/images/protonprep.png')}
        //   style={styles.reactLogo}
        // />
        <ThemedText type="title" style={{ padding: '0.5em', paddingTop: '0.7em', color: "#000" }}>Event planning name</ThemedText>
      }>
        <HelloWave />
      <ThemedView style={styles.eventsContainer}>
        <ThemedText type="subtitle">My Events</ThemedText>
        <EventList/>
      </ThemedView>

      <ThemedView style={styles.eventsContainer}>
        <ThemedText type="subtitle">Events Near Me</ThemedText>
        {/* Replace the following with your logic to list nearby events */}
        <ThemedText>No events found</ThemedText>
      </ThemedView>


      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 60,
    width: 330,
    bottom: 10,
    left: 5,
    position: 'absolute',
  },
  eventItem: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
