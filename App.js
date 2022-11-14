/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Provider as PaperProvider,TextInput, Text, Button } from 'react-native-paper';

const saluda2 = () => {
  return (
  <View>
    {saluda("Ivan López")}
    {saluda("Paco")}
  </View> 
  ); 
}

const saluda = (textAMostrar) => {
  return <Text style={{color:"blue", fontSize: 25 }}>Hola {textAMostrar}</Text>; 
} 

const App =  () => {   
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const isMarvel = true; 

  return (
    <PaperProvider>
      {isMarvel && saluda("Spider Man") } 
      {saluda2()}   
    </PaperProvider> 
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
