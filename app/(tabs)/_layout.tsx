import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tabela',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'football' : 'football-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Jogos',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'game-controller' : 'game-controller-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="toDoList"
        options={{
          title: 'Time Favorito',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'list-circle' : 'list-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}

        


