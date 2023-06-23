import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react"
import {Input, NativeBaseProvider, Button} from "native-base"
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebaseConfig";
import ScreenTypes from "../misc/screens"

class Launch extends React.Component {


    constructor(props) {
        super(props);
        this.props = props
        //Navigation function
        this.nav = this.props.navigation.navigate

        this.state = {
            showPass : false,
            loggedIn: false,
            email: "",
            pass: "",
        }


        this.handleEmailOnChange = this.handleEmailOnChange.bind(this);
        this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this);
        this.handleLoginOnClick = this.handleLoginOnClick.bind(this);

    }

    handleEmailOnChange(event) {
        this.setState({email: event.nativeEvent.text})
    }

    handlePasswordOnChange(event) {
        this.setState({pass: event.nativeEvent.text})
    }

    handleLoginOnClick() {
        
        const user = this.state.email
        const pass = this.state.pass
        //console.log(user)

        signInWithEmailAndPassword(auth, user, pass)
        .then((userCredential) => {
            // Signed in 
            this.nav(ScreenTypes.Dashboard);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
      
    }


    render() {
        return (
        <NativeBaseProvider>
           <View style={styles.container}>
                <Input size="md" placeholder='email' autoCapitalize={false} onChange={this.handleEmailOnChange} ></Input>
                <Input size="md" placeholder='password' type={this.state.show ? "text": "password"} onChange={this.handlePasswordOnChange}></Input>
                <Button size="md" onPress = {this.handleLoginOnClick}>Login!</Button>
                <Button size="md" onPress={() => this.nav("Register")}>Register!</Button>            
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