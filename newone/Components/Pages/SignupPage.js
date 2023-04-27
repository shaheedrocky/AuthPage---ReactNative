import React from 'react';
import {View, Text} from 'react-native';
import Background from '../Background';
import Button from '../Button';
import {darkGreen} from '../Constants';
import Field from '../Field';

const SignupPage = () => {
    return (
        <Background>
          <View style={{alignItems: 'center', width: 380}}>
            <Text
              style={{
                color: 'white',
                fontSize: 60,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              Sign Up
            </Text>
            <View
              style={{
                backgroundColor: 'white',
                height: 800,
                width: 400,
                borderTopLeftRadius: 100,
                paddingTop: 100,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 40, fontWeight: 'bold', color: darkGreen}}>
                Welcome!
              </Text>
              <Text
                style={{
                  color: 'grey',
                  textTransform: 'capitalize',
                  fontSize: 13,
                  fontWeight: 'bold',
                  marginBottom: 20,
                }}>
                Signup your account
              </Text>
              <Field
                placeholder="Email / Username"
                keyboardType={'email-address'}
              />
              <Field placeholder="Password" secureTextEntry={true} />
              <Field
                placeholder="Phone Number"
                keyboardType={'numeric'}
              />
              <Field
                placeholder="Age"
                keyboardType={'numeric'}
              />
              <View
                style={{alignItems: 'flex-end', width: '80%', paddingRight: 10, marginBottom: 100}}>
                <Text style={{color: darkGreen, fontWeight: 'bold'}}>
                  Forgot Password?
                </Text>
              </View>
              <Button textColor='white' bgColor={darkGreen} btnLabel="Login"/>
            </View>
          </View>
        </Background>
      );
}


export default SignupPage;
