import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image
           style={{width: 300, height: 300}}
          source={require('./assets/gemanepalogo.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1488CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
