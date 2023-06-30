import React from "react"
import {Text, View, StyleSheet} from "react-native"
import {Input, NativeBaseProvider, Button, Alert} from "native-base"
import { auth } from "../../firebaseConfig";
import ScreenTypes from "../misc/screens";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.nav = this.props.navigation.navigate
        this.state = {
            show: false,
            email: "",
            pass: "",
            confirmPass: "",
        }

        this.handleConfirmPassField = this.handleConfirmPassField.bind(this);
        this.handleEmailField = this.handleEmailField.bind(this);
        this.handlePassField = this.handlePassField.bind(this);
        this.handleOnPressRegister = this.handleOnPressRegister.bind(this);

    }

    handleOnPressRegister() {
        let email = this.state.email;
        let pass = this.state.pass;
        let confirmPass = this.state.confirmPass;

        // Password criteria
        if (pass.length < 8) {
            Alert.alert("Password must be at least 8 characters long");
            return;
        }

        // Password criteria
        const passwordRegex = /^(?=.*[0-9!@#$%^&*]).*$/;
        if (!passwordRegex.test(pass)) {
            Alert.alert(
                "Password must contain at least one number and special character (@, %, &, $, etc)"
            );
            return;
        }

        // Email criteria
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            Alert.alert("Invalid email format");
            return;
        }

        // Check if email already exists
        fetchSignInMethodsForEmail(auth, email)
            .then((signInMethods) => {
                if (signInMethods.length > 0) {
                    Alert.alert("Email already exists. Please use a different email.");
                } else {
                    //TO-DO: Create Alert / Indicator if passwords do not match is off
                    if (pass !== confirmPass)
                        return
                    // Create user
                    createUserWithEmailAndPassword(auth, email, pass)
                        .then((userCredential) => {
                            // Create banner for success
                            this.nav(ScreenTypes.Launch);
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorMessage);
                            // ..
                        });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }

    handleEmailField(event) {
        this.setState({email: event.nativeEvent.text})

    }

    handlePassField(event) {
        this.setState({pass: event.nativeEvent.text})
    }

    handleConfirmPassField(event) {
        this.setState({confirmPass: event.nativeEvent.text})
    }



    render() {
        return (
            <NativeBaseProvider>
                <View style={styles.container}>
                    <Input size="md" placeholder="Email" autoCapitalize={false} onChange={this.handleEmailField}></Input>
                    <Input size="md" placeholder="Password" type={this.state.show ? "text": "password"} onChange={this.handlePassField}></Input>
                    <Input size="md" placeholder="Confirm Password" type={this.state.show ? "text": "password"} onChange={this.handleConfirmPassField}></Input>
                    <Button size="md" onPress={this.handleOnPressRegister}>Sign Up!</Button>
                </View>
            </NativeBaseProvider>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Register;