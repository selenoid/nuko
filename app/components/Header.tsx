import { StyleSheet, Text } from 'react-native';

type Props = {
  label: string;
};

export default function Header({  label  }: Props) {
  return (
    <Text style={styles.header}>{label}</Text>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: '#ccc',
  }
});