import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { Actions } from "react-native-router-flux";

export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        username: "",
        password: "",
        };
    }

    getLogin() {
        Actions.home();
    }

    render() {
        return (
        <View style={styles.container}>
            <Text>Hola</Text>
            <Button
                title="Login"
                onPress={() => {
                    this.getLogin();
                    Alert.alert("Hola mundo", "Router esta funcionando")
            }}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
