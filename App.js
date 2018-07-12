
// MADE WITH create-react-native-app, starts with:
//       npm run android
// instead of react-native run-android


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestComp from './components/TestComp'
import Header from './components/Header'
import AlbumList from './components/AlbumList'

export default class App extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
      <Header headerText={'ALBUMS'}/>
      <AlbumList/>        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {  
    flex:1,
    backgroundColor: '#e6fff2'
    
  },
});

