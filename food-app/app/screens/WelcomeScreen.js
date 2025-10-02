import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>
          Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep.
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/screens/RecipeListScreen")}
          style={styles.button}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Let's go</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    zIndex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 80,
    letterSpacing: 1,
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
  subtitle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
    marginTop: 40,
    textAlign: "center",
    lineHeight: 30,
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  button: {
    marginTop: 60,
    backgroundColor: "#fd3838ff",
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 60,
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    letterSpacing: 1,
  },
});

export default WelcomeScreen;