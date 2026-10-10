import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';

export default function FourScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This is Screen Four</ThemedText>
      <ThemedText type="subtitle">Assignment 2 Completed successfully!</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});