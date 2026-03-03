import { StyleSheet, Text, View } from 'react-native';

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test Screen</Text>
      <Text style={[styles.text, styles.textSm]}>Constructed to visualize the screen ui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    fontSize: 42,
    color: '#ebebeb',
  },
  textSm: {
    color: '#adadad',
    fontSize: 18,
  },
});
