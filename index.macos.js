/**
 * Sample React Native macOS App
 * https://github.com/ptmt/react-native-macos
 */
 import React, {Component} from 'react';
 import {AppRegistry, StyleSheet, View} from 'react-native-macos';

 import SideBar from './src/SideBar';
import EnterData from './src/EnterData';


class MyProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translations : {
        NL: {},
        FR: {},
        EN: {}
      }
    };
  }

  setTranslations = (translations) => {
    this.setState({translations});
  };

  updateJSON = (value, language) => {
    console.log("VALUE : : ", value, language);
    this.setState({ translations : {
      ...this.state.translations,
      [language] : value
    }});
  };

  render() {
    return (
      <View style={styles.container}>
        <EnterData
          setTranslations={this.setTranslations}
          translations={this.state.translations}
          changeJSON={this.updateJSON}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('MyProject', () => MyProject);
