// import { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

type Props = {
  id: 'name'|'email',
  placeHolder: string,
  autoCorrection: boolean,
  onChange: (name: keyof UserData , email: string) => void,
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'ascii-capable' | 'url' | 'decimal-pad'
};

export default function InputForm({id, placeHolder, autoCorrection, keyboardType, onChange }: Props) {
  //
  return (
    <TextInput style={styles.input} 
      onChangeText={(e)=>{
        onChange(id, e)
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