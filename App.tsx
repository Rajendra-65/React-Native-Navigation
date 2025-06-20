/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
// import { SafeAreaView, StyleSheet, Text} from 'react-native';
import RootNavigator from './src/RootNavigator';

function App() {

  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//     flex: 1,
//     padding: 20,
//   },
//   headerText : {
//     fontWeight:'bold',
//     fontSize: 12,
//   },
// });

export default App;
