import React from 'react';
import {Button, View, Text} from 'react-native-macos';

const LanguageButton = ({language, onChange, active}) => {
  return (
  <View>
    <Button
      onClick={() => onChange(language)}
      title={language}
      color="red"
      accessibilityLabel="Learn more about this purple button"
      style={{height: 20, width: 100}}
    />
    { active && <Text>V</Text>}
  </View>
    );
};
export default LanguageButton;