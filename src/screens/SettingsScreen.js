import * as React from 'react';
import {Alert} from 'react-native'
import { List, } from 'react-native-paper';

 export default SettingScreen = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const handleLanguage = name => {
    Alert.alert('hello')
  }
  return (
    <List.Section title="Settings" >
 
      <List.Accordion
        title="Languages"
        left={props => <List.Icon icon="arrow-collapse-all" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="English" onPress={handleLanguage} />
        <List.Item title="Urdu" onPress={ handleLanguage} />
      </List.Accordion>
    </List.Section>
  );
};