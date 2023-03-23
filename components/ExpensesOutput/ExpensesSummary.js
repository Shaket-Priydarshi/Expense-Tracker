import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
 

const ExpensesSummary = ({expenses,periodName}) => {
    const expensesSum=expenses.reduce((sum,expense)=>{
        return sum+expense.amount
    },0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
 container:{
  padding:8,
  backgroundColor:'#E5E4E2',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'
 },
 period:{
  fontSize:14,
  fontWeight:'bold'
 },
 sum:{
  fontSize:16,
  fontWeight:'bold'
 }
});

