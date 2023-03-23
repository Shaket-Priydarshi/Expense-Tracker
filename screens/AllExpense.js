import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'

const AllExpense = () => {
  const expensesCtx=useContext(ExpensesContext)
  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod='Total' fallbackText='No Expenses Register '/>
  )
}

export default AllExpense

const styles = StyleSheet.create({})