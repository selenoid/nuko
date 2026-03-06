import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from "./utils/authContext";

export default function LogoutScreen () {
  const authContext = useContext(AuthContext)

  return(
    <View style={styles.container}>
      <Text style={styles.label}>Logout Screen</Text>
      <Button title="Log in!" onPress={authContext.logOut}></Button>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontSize: 30,
    color: '#ebebeb'
  }
});