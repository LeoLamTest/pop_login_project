import React, { useState } from 'react';
import { View, TextInput, Alert, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (password === 'password') {
      navigateToWelcomeScreen();
    } else {
      showIncorrectPasswordAlert();
    }
  };

  const navigateToWelcomeScreen = () => {
    <View>
       <Text>Welcome, print(username)</Text>
    </View>
  };

  const showIncorrectPasswordAlert = () => {
    Alert.alert('Password is incorrect');
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
        <Button title="Sign In" onPress={handleSignIn} />
       
    </View>
  );
};

export default App;