import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
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
        console.log("Hola Router");
        return {
        username: this.state.username,
        password: this.state.password,
        };
    }

    render() {
        return (
        <View style={styles.container}>
            <Text>Username</Text>
            <TextInput
            style={styles.input}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
            />
            <Text>Password</Text>
            <TextInput
            style={styles.input}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            />
            <Button
            title="Login"
            onPress={() => {
                Actions.home();
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
