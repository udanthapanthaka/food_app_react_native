import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {TextInput} from 'react-native';

const SearchFilter = ({ icon, placeholder}) => {
  return (
    <View style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingvertical: 16,
        paddinghorizontal: 16,
        borderRadius: 8,
        marginVertical: 8,
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        
    }}
>
     <FontAwesome name={icon} size={30} color="#f96163"/>
     <TextInput style={{ paddingLeft: 12, fontSize: 16, color: '#808080' }}> 
        {placeholder}
     </TextInput>
    </View>
  );
};

export default SearchFilter

const styles = StyleSheet.create({})