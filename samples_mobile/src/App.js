import React from 'react';
import { View, Text } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red', fontSize: 32 }}>Hello React Native</Text>
      </View>
    );
  }
}

export default App;
