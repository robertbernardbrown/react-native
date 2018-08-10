import React, {Component} from 'react';
import {Animated, CameraRoll, Platform, FlatList, StyleSheet, Text, View, Button, TouchableHighlight, TextInput} from 'react-native';
import {createStackNavigator, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator} from "react-navigation";

import {withAuthenticator} from "aws-amplify-react-native";

class App extends Component {

  render() {
    
    return (
      <View style={styles.container}>
        <Text>Navigation:</Text>
        <Text>You're logged in</Text>
      </View>
    );
  }
}

// const Unauthorized = props => (
//   <View>
//     <Text>Hello from you're unauthorized</Text>
//   </View>
// )

// class Initializing extends Component {
//   componentDidMount() {
//     setTimeout(()=> {
//       this.props.navigation.navigate("Authorized")
//     }, 3000)
//   }
//   render() {
    
//     return (
//       <View style={styles.container}>
//         <Text>Checking status</Text>
//       </View>
//     );
//   }
// }

// const Authorized = createStackNavigator({App:{screen:App}})

// const MainNav = createSwitchNavigator({
//   Initializing: {screen:Initializing},
//   Authorized: {screen:Authorized},
//   Unauthorized: {screen: Unauthorized}
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:30,
    paddingHorizontal: 14
  }
});

export default withAuthenticator(App)