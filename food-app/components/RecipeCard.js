import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors, recipeList } from '../app/Constant'
import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from "expo-router";

const RecipeCard = () => {

  const router = useRouter();

  return (
    <FlatList
      data={recipeList}
      renderItem={({ item }) => (
        <Pressable onPress={() =>
         router.push({
          pathname: "/screens/RecipeDetailScreen",
          params: { item: JSON.stringify(item) }
         })
         }>
          <View
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 16,
              alignItems: 'center',
              paddingHorizontal: 8, // fixed typo
              paddingVertical: 26,
            }}>
            <Image source={item.image} style={{ width: 150, height: 150, resizeMode: 'center' }} />
            <Text>{item.name}</Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text>{item.time}</Text>
              <Text> | </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 4 }}>{item.rating}</Text>
                <FontAwesome name="star" size={16} color={colors.COLOR_PRIMARY} />
              </View>
            </View>
          </View>
        </Pressable>
      )}
      keyExtractor={item => item.id?.toString() || item.name} // add a keyExtractor
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between', marginHorizontal: 19 }}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default RecipeCard

const styles = StyleSheet.create({})