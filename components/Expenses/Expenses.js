import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";
import ExpensesChart from "./ExpensesChart";

  const Expenses=(props)=>{

    const [filteredYear,setfilteredYear] = useState('')
   const filterChangeHandler = selectedYear=>{
    
     setfilteredYear(selectedYear)
   }
//selected and onchangeFilter are props name and it will be used in child components using props.

    const FilteredExpenseYear = props.items.filter(expense =>{
      return expense.date.getFullYear().toString() === filteredYear;
    })

  

        
   
      return (

        <li>
        <div>

        <Card className="expenses">
        <ExpensesFilter  selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
        <ExpensesChart expenses = {FilteredExpenseYear} />
        <ExpensesList items = {FilteredExpenseYear} />
       

        
       
       </Card>
        </div></li>
       
       
      );



}

export default Expenses;