import { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

type Props = {
  placeHolder: string,
  autoCorrection: boolean,
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'ascii-capable' | 'url' | 'decimal-pad'
};

export default function InputForm({placeHolder, autoCorrection, keyboardType }: Props) {
  console.log('placeHolder: ', placeHolder)
  console.log('keyboardType: ', keyboardType)
  const test = false;

  const [val, setVal] = useState('test')

  useEffect(() => {
    console.log('val changed:  ', val)
    if (test) {
      setVal(val + '.')
    }
  }, [val, test])

  return (
    <TextInput style={styles.input} 
      onChangeText={(e)=>{
        console.log('>> ', e)
      }}
      autoCorrect = { autoCorrection }
      keyboardType= { keyboardType }
      placeholder={placeHolder}
      placeholderTextColor="#5f5f5f" />
  );
}

const styles = StyleSheet.create({
  input: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 500
  }
});