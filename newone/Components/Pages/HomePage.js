import React from 'react';
import {View, Text} from 'react-native';
import Background from '../Background';
import Button from '../Button';
import {darkGreen} from '../Constants';

const HomePage = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: 'white', fontSize: 60}}>Let's start</Text>
        <Text style={{color: 'white', fontSize: 60, marginBottom: 40}}>
          Coding
        </Text>
        <Button
          bgColor={darkGreen}
          textColor={'#fff'}
          btnLabel={'Login'}
          Press={() => props.navigation.navigate('Login')}
        />
        <Button
          bgColor={'white'}
          textColor={darkGreen}
          btnLabel={'Signup'}
          Press={() => props.navigation.navigate('Signup')}
        />

        <View style={{marginTop: 310, alignItems: 'center', marginLeft: 60}}>
        <Text style={{color: "white", fontWeight: "bold"}}>
            Created By
          </Text>
          <Text style={{color: "white"}}>
            Shaheed ahamed
          </Text>
        </View>
      </View>
    </Background>
  );
};

export default HomePage;
