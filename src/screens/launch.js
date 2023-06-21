import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react"
import {Input, NativeBaseProvider, Button} from "native-base"

class Launch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPass : false,
            loggedIn: false,
            email: "",
            pass: "",
        }

        this.handleEmailOnChange = this.handleEmailOnChange.bind(this);
        this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this);

    }

    handleEmailOnChange(event) {
        this.setState({email: event.target.value})
    }

    handlePasswordOnChange(event) {
        this.setState({pass: event.target.value})
    }

    handleLoginOnClick() {
        // Firebase logic for login
    }


    render() {
        return (
        <NativeBaseProvider>
           <View style={styles.container}>
                <Input size="md" placeholder='email' autoCapitalize={false} onChange={this.handleEmailOnChange} ></Input>
                <Input size="md" placeholder='password' type={this.state.show ? "text": "password"} onChange={this.handlePasswordOnChange}></Input>
                <Button size="md">Login!</Button>
           </View>
        </NativeBaseProvider>
        )
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