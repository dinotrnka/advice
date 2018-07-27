import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { auth } from './src/config/firebase';

console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    try {
      const res = await auth.signInWithEmailAndPassword('dinaga@gmail.com', 'password');
      console.log('RES', res);
    } catch (e) {
      console.log('ERROR', e.message);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Open up App.js to start working on your app!
        </Text>
      </View>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
