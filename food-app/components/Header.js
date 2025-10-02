import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const Header = ({headerText, headerIcon}) => {
  return (
    <View style={{flexDirection: 'row'}}> 
      <Text style={{flex:1, fontSize: 29, padding: 12, fontWeight: "700"}}>{headerText}</Text>
      <FontAwesome style={{padding: 12}} name={headerIcon} size={25} color="#f96163" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})