import React, {useState} from 'react';
import {GoogleIcon} from '../../../assets/svg';
import {Container} from '../../common/container';
import {SignInStyles as styles} from './styles';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {Input} from '../../common/input';
import {Button} from '../../common/button';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      return Alert.alert('Warning', 'Fill in the details');
    } else {
      navigation.navigate('listing');
    }
  };
  return (
    <>
      <Container style={styles.container}>
        <Text style={styles.welcomeBack}>Hi, Welcome! 👋</Text>
        <Input
          label={'Username'}
          placeholder={'Enter your username'}
          value={email}
          onchange={setEmail}
        />
        <Input
          label={'Password'}
          placeholder={'Enter your password'}
          value={password}
          onchange={setPassword}
        />
        <Button title={'Sign In'} Style={styles.button} onPress={handleLogin} />
        <View style={styles.accountContainer}>
          <Text style={styles.account}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.alternativeContainer}>
            <View style={styles.line} />
            <Text style={styles.altSign}>Or Sign In with</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.iconContainer}>
            <GoogleIcon />
          </TouchableOpacity>
        </View>
      </Container>
    </>
  );
};

export default SignIn;
