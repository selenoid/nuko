import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import { REGEX_VAULT } from '../constants';
import { UserData } from '../types/UserData';
// import validateInput from '../assets/util/validateInput'

export default function AboutScreen() {

  const user: UserData | undefined = { name: '', email: '' }
  const [data, setData] = useState<UserData>(user);

  console.log('>> data: ', user)

  interface SetUserDataParams {
    id: keyof UserData;
    text: string;
  }

  function setUserData({ id, text }: SetUserDataParams): void {
    const d: UserData = { ...data }
    d[id] = text;
    setData(d)
  }

  function onChangeHandler(id: keyof UserData, text: string) {
    console.log('onChangeHandler: ', id, text)
    setUserData({ id, text })
  }

  function submit() {
    console.log('submit..[data]', data)

    const mailRegex = REGEX_VAULT.emailRegex;
    const nameRegex = REGEX_VAULT.fullnameRegex;

    // validateInput(data.name, nameRegex, null, 'test') //feedbackElement, type)

    if (!data?.name || !nameRegex.test(data.name)) {
      console.log('\x1b[31m check name.')
      return
    }
    console.log('\x1b[32m name legit!')

    if (!data?.email || !mailRegex.test(data.email)) {
      console.log('\x1b[31m check e-mail.')
      return
    }
    console.log('\x1b[32m e-mail legit!')
    console.log('sending data: ', data)
  }

  useEffect(() => {
    console.log('data changed: ', data)
  }, [data])

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>About Contact</Text> */}
      <Header label={'Contact Us!'} />

      <InputForm placeHolder={'Enter your name'}

        onChange={onChangeHandler}
        autoCorrection={false}
        id={'name'} />
      <InputForm placeHolder={'Enter mail'}
        onChange={onChangeHandler}
        autoCorrection={true}
        keyboardType='email-address' id={'email'}        /* onChange={function (): void {console.log('mail...');} } */ />

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
