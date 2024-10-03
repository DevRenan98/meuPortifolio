import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SkillsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Habilidades</Text>
      <Text style={styles.skill}>- React Native</Text>
      <Text style={styles.skill}>- JavaScript</Text>
      <Text style={styles.skill}>- CSS</Text>
      <Text style={styles.skill}>- Git</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  skill: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default SkillsScreen;
