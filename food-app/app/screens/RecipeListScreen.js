import { StyleSheet, View, Text} from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import SearchFilter from '../../components/SearchFilter'  
import { SafeAreaView } from 'react-native-safe-area-context'

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{flex:1, marginhorizontal:16}}>
      <Header headerText={"hi udantha"} headerIcon={"bell-o"} />
      <SearchFilter icon={"search"} placeholder={"Search for recipes"}/>
    </SafeAreaView>
  )
}

export default RecipeListScreen

const styles = StyleSheet.create({})