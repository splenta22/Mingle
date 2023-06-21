import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Launch from "./src/screens/launch"
import React from "react"



class App extends React.Component {

  // TODO: If user has cred stored, then load those in

  render() {
    return (
      <Launch/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
