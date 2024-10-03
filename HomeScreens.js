import React from 'react';
import { View, Text, Image, Linking, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "C:\Users\renan\OneDrive\Imagens\Imagens da Câmera\Imagem do WhatsApp de 2024-04-21 à(s) 22.34.38_860dba08.jpg" }} style={styles.profileImage} />
      <Text style={styles.name}>Renan Diniz</Text>

      
      <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/DevRenan98')}>
        GitHub
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://www.linkedin.com/in/renan-diniz-369688272/')}>
        LinkedIn
      </Text>

      
      <Button title="Ver Minhas Habilidades" onPress={() => navigation.navigate('Skills')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
