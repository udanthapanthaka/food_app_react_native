import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/mariana-medvedeva-usfIE5Yc7PY-unsplash.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
        <Text style={{ color: "black", fontSize: 44, fontWeight: "bold", marginTop: 60 }}>
          Welcome!
        </Text>

        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 50,
            alignContent: "center",
            textAlign: "center",
            paddingHorizontal: 20,
          }}
        >
          Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("RecipeList")}  
          style={{
            backgroundColor: "red",
            borderRadius: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            width: "80%",
            alignItems: "center",
            marginTop: 60,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>Let's go</Text>
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
});

export default WelcomeScreen;
