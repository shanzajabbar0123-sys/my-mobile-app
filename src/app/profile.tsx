import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile 👤</Text>
      <Text style={styles.subtitle}>Welcome to Our Restaurant</Text>
      <View style={styles.box}>
        <Text style={styles.header}>Customer Information</Text>
        <Text style={styles.text}>Name: Restaurant Customer</Text>
        <Text style={styles.text}>Location: Lahore, Pakistan</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#666', marginBottom: 20 },
  box: { backgroundColor: '#f9f9f9', padding: 20, borderRadius: 10, borderWidth: 1, borderColor: '#eee' },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  text: { fontSize: 15, marginBottom: 5 }
});