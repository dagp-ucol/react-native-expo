import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { Actions } from "react-native-router-flux";

export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        email: "",
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
                style={styles.button}
                onPress={() => {
                    this.getLogin();
                    Alert.alert("Hola mundo", "Router esta funcionando")
            }}
            />
            {/* Login Inputs */}
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
            />
            <TextInput
                style={styles.password}
                placeholder="Password"
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
            />

            {/* Login Button */}
            <Button
                title="Login"
                onPress={() => {
                    // Validate email and password
                    // If is blank
                    if (this.state.email == "" || this.state.password == "") {
                        Alert.alert("Error", "Email and password are required");
                        return;
                    }

                    // If email is valid regex
                    if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                        Alert.alert("Error", "Email is not valid");
                        return;
                    }

                    // Validate password 8 characters, 1 number, 1 uppercase, 1 lowercase
                    if (!this.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
                        Alert.alert("Error", "Password is not valid, must be 8 characters, 1 number, 1 uppercase, 1 lowercase");
                    } else {
                        this.getLogin();
                    }

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
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 10,
    },
    password: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 10,
        // passwordDisguised
    },
    button: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 10,
    },
});
