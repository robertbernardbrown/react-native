import React, {Component} from 'react';
import {Animated, CameraRoll, Platform, FlatList, StyleSheet, Text, View, Button, TouchableHighlight, TextInput} from 'react-native';

export default class App extends Component {
  animatedValue = new Animated.Value(0)

  animate = () => {
    Animated.timing(
      this.animatedValue, 
      {toValue:1, duration:1500}
    ).start()
  }

  render() {
    const margin = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200]
    })
    const backgroundColor = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["red", "orange"]
    })
    const rotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    })
    return (
      <View style={styles.container}>
        <Text>Animations:</Text>
        <Button onPress={this.animate} title="Animate"/>
        <Animated.View style={{ transform:[{rotate:rotation}], height:50, width:50, backgroundColor, marginTop:margin, marginLeft:margin}}/>
        <Animated.Text style={{fontSize: this.animatedValue}}>FONT</Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:30,
    paddingHorizontal: 14
  }
});
