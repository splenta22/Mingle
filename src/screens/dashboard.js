import { NativeBaseProvider } from "native-base";
import React from "react"
import { StyleSheet, Text, View } from 'react-native';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <NativeBaseProvider>
                <View style={styles.container}>
                    <Text>This is the dashboard</Text>
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

export default Dashboard;