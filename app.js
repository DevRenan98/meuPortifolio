import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SkillsScreen from './screens/SkillsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela Inicial">
        <Stack.Screen name="Tela Inicial" component={HomeScreen} options={{ title: 'Meu Portfólio' }} />
        <Stack.Screen name="Skills" component={SkillsScreen} options={{ title: 'Minhas Habilidades' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
