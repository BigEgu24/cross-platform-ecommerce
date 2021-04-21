import React, {Fragment} from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
import Example from './components/Example/Example';
 
 const App = () => {
  const isHermes = () => !!global.HermesInternal;
  if (!isHermes) {
    console.log("Hermes is not enabled");
  } else {
    console.log("Hermes is enabled");
  }
   return (
     <ScrollView>
       <Example />
     </ScrollView>
   );
 };
 
 const styles = StyleSheet.create({
   scrollView: {
     backgroundColor: Colors.lighter,
   },
   engine: {
     position: 'absolute',
     right: 0,
   },
   body: {
     backgroundColor: Colors.white,
   },
   container: {
     marginTop: 32,
     paddingHorizontal: 24,
   }
 });
 
 export default App;