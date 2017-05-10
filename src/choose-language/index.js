import React from 'react';
import {View, Text} from 'react-native-macos';

import LanguageButton from './LanguageButton';

const ChooseLanguage = ({onChange, language}) => {
  return <View>
    <Text> Choose your language </Text>
    <LanguageButton
      onChange={onChange}
      language="EN"
      active={language === "EN"}
    />
    <LanguageButton
      onChange={onChange}
      language="NL"
      active={language === "NL"}
    />
    <LanguageButton
      onChange={onChange}
      language="FR"
      active={language === "FR"}
    />
  </View>;
};
export default ChooseLanguage;