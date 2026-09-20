import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мій перший додаток! 🎉</Text>
      <Text style={styles.counterText}>Кліків: {count}</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>Натисни мене!</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.resetButton]} 
        onPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>Скинути</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  counterText: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 30,
    color: '#007AFF',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});