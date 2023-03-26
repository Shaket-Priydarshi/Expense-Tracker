import { StyleSheet, Text, View } from "react-native";
import React from "react";
 

const ErrorOverlay = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text  style={[styles.text,styles.title]}>Error occurred</Text>
      <Text  style={styles.text}>{message}</Text>
 
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
 
});
