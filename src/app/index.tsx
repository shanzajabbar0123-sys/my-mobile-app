import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function HomeScreen() {
  let a: any = 5;
  a = 8;
  a = 'ali';
  a = true;

  const rNum = () => {
    return Math.floor(Math.random() * 10);
  };
  let randomResult = rNum();
const makeFullName = (fn: string, ln: string, mn = '') => {
    return `${fn} ${mn} ${ln}`.trim();
  };
  let name1 = makeFullName('muhammad', 'nadir', 'anwar');
  let name2 = makeFullName('kalee_m', 'ullah');
  let com1: any = 6;
  let com2: any = '6';
  let isStrictEqual = (com1 === com2);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Mobile App Assignment 1</Text>
      
      <View style={styles.card}>
        <Text style={styles.title}>1. Variable Testing (Dynamic Type):</Text>
        <Text style={styles.text}>Final value of 'a': {String(a)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>2. Arrow Function Result:</Text>
        <Text style={styles.text}>Random Number (0-9): {randomResult}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>3. Default Parameters Test:</Text>
        <Text style={styles.text}>Full Name 1: {name1}</Text>
        <Text style={styles.text}>Full Name 2: {name2}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>4. Strict Operator (===) Test:</Text>
        <Text style={styles.text}>Is 6 === '6'? {String(isStrictEqual)}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    color: '#444',
  },
});