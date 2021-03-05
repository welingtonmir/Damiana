import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image source={require('../assets/Logo.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 165,
    height: 122,
    marginBottom: 8,
  },
})

export default Logo
