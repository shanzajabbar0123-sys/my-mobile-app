import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Menu 🍽️</Text>
      <View style={styles.card}><Text style={styles.text}>1. Chicken Biryani - Rs. 450</Text></View>
      <View style={styles.card}><Text style={styles.text}>2. Zinger Burger - Rs. 350</Text></View>
      <View style={styles.card}><Text style={styles.text}>3. Chicken Karahi - Rs. 1200</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: '#f0f0f0', padding: 15, borderRadius: 10, marginBottom: 10 },
  text: { fontSize: 16, fontWeight: '500' }
});