import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Damiana Biquínis</Header>
    <Paragraph>A loja virtual com a maior variedade de cores, moldes e tamanhos do
            mercado</Paragraph>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('Produtos')}
    >
      Produtos
    </Button>
    <Button
      mode="outlined"
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        })
      }
    >
      Sair
    </Button>
  </Background>
)

export default Dashboard
