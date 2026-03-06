import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Stack } from 'expo-router';
import { AuthProvider } from './utils/authContext';

export default function RootLayout() {

  return (
    <>
    <AuthProvider>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen name="(protected)" 
            options={{ headerShown: false }} />
          <Stack.Screen name="login" 
            options={{ headerShown: false, animation: 'none' }} />
        </Stack>
      </Provider></AuthProvider>
    </>
  )
}