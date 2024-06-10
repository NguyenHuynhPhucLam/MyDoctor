import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isReadyForLogin, setIsReadyForLogin] = useState(false);

  // Function to update isReadyForLogin state based on email and password
  const updateIsReadyForLogin = (email, password) => {
    setIsReadyForLogin(email.trim() !== '' && password.trim() !== '');
  };

  const handleLogin = async () => {
    try {
      // Make a POST request to your API endpoint
      const response = await axios.post('https://hidoc-be.onrender.com/api/login', {
        email,
        password, // Send the plain password to the server
      });
  
      // Check if the login was successful
      if (response.data.message === "OK") {
        // Handle successful login response
        console.log('Login successful:', response.data);
        navigation.navigate('HomeScreen');
      } else {
        // Handle invalid login
        if (response.data.message === "Your Email doesn't exist in our System") {
          // Display a notification for invalid email
          alert("Your Email doesn't exist in our System. Please check your email.");
        } else {
          // Display a generic error message
          alert('Invalid login. Please try again.');
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle other errors, e.g., display error message to the user
      // For example:
      // alert('Login failed. Please try again later.');
    }
  };
  
  const handleForgotPassword = () => {
    // Logic to handle forgot password
    console.log('Forgot password clicked...');
    // Here you can make an API request to handle forgot password
  };

  const handleSignUp = () => {

    navigation.navigate('SignUp');
    console.log('Forgot password clicked...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            updateIsReadyForLogin(text, password);
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            updateIsReadyForLogin(email, text);
          }}
        />
      </View>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.loginBtn, { opacity: isReadyForLogin ? 1 : 0.5 }]}
        onPress={handleLogin}
        disabled={!isReadyForLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signupText}>
          New? Let's <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#003f5c',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgotPassword: {
    color: '#003f5c',
    fontSize: 12,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  signupText: {
    marginTop: 15,
    fontSize: 16,
    color: '#003f5c',
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#003f5c',
  },
});

export default LoginScreen;