import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'


const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Cadastre-se
    </Button>
  </Background>
)

export default StartScreen
