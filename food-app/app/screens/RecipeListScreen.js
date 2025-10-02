import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import SearchFilter from '../../components/SearchFilter';
import CategoriesFilter from '../../components/CategoriesFilter';
import { SafeAreaView } from 'react-native-safe-area-context';
import RecipeCard from '../../components/RecipeCard';

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header headerText="Hi Udantha" headerIcon="bell-o" />

      {/* Search Filter */}
      <View style={styles.section}>
        <SearchFilter icon="search" placeholder="Search for recipes" />
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <CategoriesFilter />
      </View>

      {/* Recipes */}
      <View style={[styles.section, styles.recipesSection]}>
        <Text style={styles.sectionTitle}>Recipes</Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 0,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  recipesSection: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
    marginTop: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 8,
  },
});

export default RecipeListScreen;