import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

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
        name="tee"
        options={{
          title: 'Train',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'train-sharp' : 'train-outline'} color={color} size={24} icon={'star'}/>
          ),
        }}
      />r
      <Tabs.Screen
        name="test"
        options={{
          title: 'Test',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'bar-chart-sharp' : 'bar-chart-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
