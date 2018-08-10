import React, {Component} from 'react';
import {Animated, CameraRoll, Platform, FlatList, StyleSheet, Text, View, Button, TouchableHighlight, TextInput} from 'react-native';

export default class App extends Component {
  animatedValue1 = new Animated.Value(0)
  animatedValue2 = new Animated.Value(0)
  animatedValue3 = new Animated.Value(0)

  animate = () => {
    this.animatedValue1.setValue(0)
    this.animatedValue2.setValue(0)
    this.animatedValue3.setValue(0)
    const createAnimation = (value, toValue, duration) => Animated.timing(
      value, 
      {
        toValue, 
        duration
      }
    )
    Animated.parallel([
      createAnimation(this.animatedValue1, 100, 500),
      createAnimation(this.animatedValue2, 700, 1000),
      createAnimation(this.animatedValue3, 350, 1500)
    ]).start((()=> {
      Animated.parallel([
        createAnimation(this.animatedValue1, 0, 500),
        createAnimation(this.animatedValue2, 0, 1000),
        createAnimation(this.animatedValue3, 0, 1500)
      ]).start(this.animate)
    }))
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text>Animations:</Text>
        <Button onPress={this.animate} title="Animate"/>
        <Animated.View style={{ 
          height:50, width:50, backgroundColor: "red", marginTop:this.animatedValue1
          }}/>
        <Animated.View style={{ 
          height:50, width:50, backgroundColor: "orange", marginLeft:this.animatedValue2
          }}/>
        <Animated.View style={{ 
          height:50, width:50, backgroundColor: "blue", marginTop:this.animatedValue3
          }}/>
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
