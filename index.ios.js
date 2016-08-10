// Tutorial found here: https://facebook.github.io/react-native/docs/tutorial.html

// *******************************************
// IMPORT
// *******************************************

import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

// *******************************************
// BLINK
// *******************************************

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state each second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

// *******************************************
// BLINK APP
// *******************************************

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

// *******************************************
// APP REGISTRY
// *******************************************

AppRegistry.registerComponenet('BlinkApp', () => BlinkApp );
