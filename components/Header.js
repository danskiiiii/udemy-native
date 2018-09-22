import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};
export default Header;

const styles = {
  viewStyle: {
    marginTop: 40,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 22,
    marginBottom: 16,
  },
};
