import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseItem({ description, amount, date, id }) {
  const navigation = useNavigation();

  const expensePressedHandler = () => {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  };
  return (
    <Pressable
      onPress={expensePressedHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: "black",
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: GlobalStyles.colors.white100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: "black",
    fontWeight: "bold",
  },
});
