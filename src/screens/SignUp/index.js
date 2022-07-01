import React, {useState} from 'react';
import {GoogleIcon} from '../../../assets/svg';
import {Container} from '../../common/container';
import {SignUpStyles as styles} from './styles';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import {Input} from '../../common/input';
import {Button} from '../../common/button';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('' + '');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const handleLogin = () => {
    if (!email || !name) {
      return Alert.alert('Warning', 'Fill in the details');
    } else {
      navigation.navigate('signin');
    }
  };
  return (
    <>
      <Container>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Welcome to fPNews</Text>
          <Text style={styles.createAccount}>Create Account</Text>
        </View>
        <Input
          label={'Full Name'}
          placeholder={'Enter your name '}
          value={name}
          onchange={setName}
        />
        <Input
          label={'PhoneNumber'}
          placeholder={'Enter your phone'}
          value={phone}
          onchange={setPhone}
        />
        <Input
          label={'Email Address'}
          placeholder={'Enter your email address'}
          value={email}
          onchange={setEmail}
        />
        <Button
          title={'Create An Account'}
          Style={styles.button}
          onPress={handleLogin}
        />
        <View>
          <View style={styles.alternativeContainer}>
            <View style={styles.line} />
            <Text style={styles.altSign}>Or Sign In with</Text>
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            <GoogleIcon />
          </TouchableOpacity>
        </View>
        <Text style={styles.termsText}>
          By signing up you agree to our Terms and Conditions of Use
        </Text>
      </Container>
    </>
  );
};

export default SignUp;
