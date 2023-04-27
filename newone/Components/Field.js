import React from 'react';
import {View, TextInput} from 'react-native';
import {darkGreen} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 10,
        color: darkGreen,
        paddingHorizontal: 10,
        backgroundColor: 'rgb(220,220,220)',
        width: "80%",
        marginVertical: 10
      }} placeholderTextColor={darkGreen}></TextInput>
  );
};

export default Field;
