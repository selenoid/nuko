import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux'
import { store } from './store/store'



export default function RootLayout() {
  return (
    <>
      <Stack>
        <Provider store={store}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Provider>
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}