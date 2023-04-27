import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const Button = ({bgColor, btnLabel, textColor, Press}) => {
  return (
    <TouchableOpacity onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 10,
        alignItems: 'center',
        width: "80%",
        paddingVertical: 10,
        marginVertical: 10
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
