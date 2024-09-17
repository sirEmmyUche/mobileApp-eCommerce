import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomAlert({ text, visible, duration = 3000, onClose }) {
  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        onClose(); 
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [visible, duration, onClose]);

  if (!visible) return null; 

  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'red',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    zIndex: 5,
  },
  text: {
    color:'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight:'700',
  },
});
