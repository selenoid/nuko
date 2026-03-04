import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../features/counterSlice'
import type { RootState, AppDispatch } from '../store/store'
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import { REGEX_VAULT } from '../constants';
import { UserData } from '../types/UserData';
import { pokemonApi } from '../posts/postsApiSlice'
import { Label } from '@react-navigation/elements';
// import validateInput from '../assets/util/validateInput'

export default function ContactScreen() {
  const useGetPokemonByNameQuery = pokemonApi.endpoints.getPokemonByName.useQuery

  /* const pokemonData = useGetPokemonByNameQuery('pikachu') */
  const { data: pokemonData, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')


  const value = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

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
    console.log('\n\nsubmit..[data]', data)
    dispatch(increment())

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

  useEffect(() => {
    console.log('pokemonData changed: ', pokemonData)
  }, [pokemonData])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>isLoading: {isLoading ? 'Loading...' : 'isLoaded'}</Text>
        <Text style={styles.text}>Error: {error ? JSON.stringify(error) : 'None'}</Text>
      </View>
      <Header label={'Contact Us! [v]:' + value} />

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
  },
  text: {
    fontSize: 26,
    color: '#ccc',
  }
});
