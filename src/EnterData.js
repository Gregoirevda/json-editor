import React, {Component} from 'react';
import {TextInput, View, Button} from 'react-native-macos';

import ChooseLanguage from './choose-language';

const LANGUAGES = {
  EN: 'EN',
  NL: 'NL',
  FR: 'FR'
};

class EnterData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentLanguage : LANGUAGES.EN
    };
  }

  onLanguageChange = (language) => {
      this.setState({currentLanguage: language});
  };

  render() {
    return <View>
      <ChooseLanguage
        onChange={this.onLanguageChange}
        language={this.state.currentLanguage}
      />
      <Button
        onClick={this.props.setTranslations}
        title="SAVE"
        style={{height: 20, width: 100}}
      />
      <TextInput
        editable={true}
        maxLength={40}
        style={{height: 300, width: 800}}
        value={JSON.stringify(this.props.translations[this.state.currentLanguage], null, 2)}
        onChange={(e) => this.props.changeJSON(e.target, this.state.currentLanguage)}
      />
    </View>
  }

}

export default EnterData;