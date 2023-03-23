import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

const RecentExpense = () => {
  const expensesCtx=useContext(ExpensesContext);

  const recentExpenses=expensesCtx.expenses.filter((expense)=>{
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date >= date7DaysAgo);
  })
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 days' fallbackText='No Expenses Register for last 7 days'/>
  )
}

export default RecentExpense;

const styles = StyleSheet.create({})