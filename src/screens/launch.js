import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react"
import {Input, NativeBaseProvider} from "native-base"

class Launch extends React.Component {


    render() {
        return (
        <NativeBaseProvider>
           <View style={styles.container}>
                <Text>Hi Jon!</Text>
                <Input size="md" placeholder='email'></Input>
           </View>
        </NativeBaseProvider>
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

export default Launch;