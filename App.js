import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, SafeAreaView, TextInput, onChangeText, Alert } from 'react-native';
// import { Switch } from 'react-native-web';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      newText: '',
    };
  };

  onChange = (value) => {
    console.warn("Switch value: ", value);
    this.setState({ switchValue: value });
  };

  onChangeText = (text) => {
    console.warn(`El valor cambiará a: ${text}`);
    this.setState({newText: text})
  };

  onPressLearnMore = () => {
    console.log('onPressLearnMore');
  };

  onPressAlert = (text) => {
    alert(this.state.newText);
  };

  render() {
    return (
      <View style={styles.container}>
      <TextInput
          style={styles.input}
          onChangeText={this.onChangeText}
      />
      <Switch
        onValueChange = {() => this.onChange(!this.state.switchValue)}
        value = {this.state.switchValue}
      />
      <Button
        onPress={this.onPressAlert}
        title="Alert"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: .5,
    padding: 10,
    width: 200,
  },
});
