import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

const RecipeDetailScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const item = params.item ? JSON.parse(params.item) : null;

 const steps = item.steps || [];

  if (!item) {
    return (
      <View style={styles.centered}>
        <Text>No recipe data found.</Text>
        <Pressable onPress={() => router.back()} style={{ marginTop: 20 }}>
          <Text style={{ color: "blue" }}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: "#f96163", flex: 1 }}>
      <SafeAreaView style={styles.headerRow}>
        <Pressable onPress={() => router.back()}>
          <FontAwesome name="arrow-circle-left" size={32} color="#fff" />
        </Pressable>
        <FontAwesome name="heart-o" size={28} color="#fff" />
      </SafeAreaView>
      <View style={styles.cardContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={item.image}
            style={styles.image}
          />
        </View>
        <ScrollView contentContainerStyle={styles.detailsContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.ratingRow}>
              <FontAwesome name="star" size={18} color="#f5a623" />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <FontAwesome name="clock-o" size={16} color="#f96163" />
              <Text style={styles.infoText}>{item.time}</Text>
            </View>
            <View style={styles.infoItem}>
              <FontAwesome name="fire" size={16} color="#f96163" />
              <Text style={styles.infoText}>{item.calories}</Text>
            </View>
            <View style={styles.infoItem}>
              <FontAwesome name="signal" size={16} color="#f96163" />
              <Text style={styles.infoText}>{item.difficulty}</Text>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <View style={styles.ingredientList}>
            {item.ingredients.map((ingredient, idx) => (
              <View key={idx} style={styles.ingredientItem}>
                <FontAwesome name="circle" size={8} color="#f96163" style={{ marginRight: 8 }} />
                <Text style={styles.ingredientText}>{ingredient}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            A delicious {item.name} recipe that's perfect for any occasion. Made with fresh ingredients and packed with flavor.
          </Text>
          <Text style={styles.sectionTitle}>How to Cook</Text>
          <View style={styles.stepsList}>
            {steps.map((step, idx) => (
              <View key={idx} style={styles.stepItem}>
                <Text style={styles.stepNumber}>{idx + 1}.</Text>
                <Text style={styles.stepText}>{step}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ...existing styles...
  stepsList: {
    marginTop: 8,
    marginBottom: 24,
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  stepNumber: {
    fontWeight: "bold",
    color: "#f96163",
    marginRight: 8,
    fontSize: 16,
    marginTop: 2,
  },
  stepText: {
    flex: 1,
    color: "#444",
    fontSize: 16,
    lineHeight: 22,
  },
  // ...rest of your styles...
  centered: {
    flex: 1, justifyContent: "center", alignItems: "center"
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
    backgroundColor: "#f96163",
  },
  cardContainer: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 180,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    paddingTop: 100,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
  imageWrapper: {
    position: "absolute",
    top: -90,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    resizeMode: "cover",
  },
  detailsContainer: {
    paddingBottom: 32,
    width: "100%",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    flex: 1,
    flexWrap: "wrap",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    backgroundColor: "#f9e5c7",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f5a623",
    marginLeft: 4,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginHorizontal: 4,
  },
  infoText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 6,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f96163",
    marginTop: 18,
    marginBottom: 8,
  },
  ingredientList: {
    marginBottom: 12,
  },
  ingredientItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  ingredientText: {
    fontSize: 16,
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#444",
    marginTop: 6,
    lineHeight: 22,
  },
});

export default RecipeDetailScreen;