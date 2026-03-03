import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import { REGEX_VAULT } from '../constants';

export default function AboutScreen() {
  // const [data, setData] = useState<ImageSourcePropType | undefined>(undefined); 
  
  type UserData = { name: string, email: string }

  const user: UserData = { name: '', email: '' }
  const [data, setData] = useState<UserData | undefined>(user);

  console.log('>> data: ', user)

  function submit() {
    console.log('submit..[data]', data)

    const mailRegex = REGEX_VAULT.emailRegex;
    const nameRegex = REGEX_VAULT.fullnameRegex;

    if (!data?.email || !mailRegex.test(data.email)) {
      console.log('check e-mail.')
      return
    }

    if (!data?.name || !nameRegex.test(data.name)) {
      console.log('check name.')
      return
    }

    console.log('sending data: ', data)
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>About Contact</Text> */}
      <Header label={'Contact Us!'} />

      <InputForm placeHolder={'Enter your name'}
        /* onChange={function (): void { console.log('name...'); } }  */
        autoCorrection={false}
        /* onChange={function (): void { console.log('name...'); } }  */ />
      <InputForm placeHolder={'Enter mail'}
        autoCorrection={true}
        keyboardType='email-address'
        /* onChange={function (): void {console.log('mail...');} } */ />

      <Button theme="primary" label={'Submit'} onPress={submit} />
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
  header: {
    fontSize: 26,
    color: '#ccc',
  },
  input: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 500
  }
});
