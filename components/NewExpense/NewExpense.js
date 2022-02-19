import react from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
import { useState } from "react";

const NewExpense =(props)=>{
  const [isediting,setisEditing] = useState(false)
  const saveExpenseHandler = (enteredExpenseData)=>{

    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()

    };

    props.onAddExpense(expenseData)

    setisEditing(false)


  }

  const IsEditingHandler =  () =>{

    setisEditing(true)


  }
  const stopEditingHandler = ()=>{
    setisEditing(false)
  }
    return (
        <div className="new-expense">
         {!isediting && (<button onClick={IsEditingHandler}>Add New Expenses </button>)}
         {isediting && (<ExpenseForm onSaveExpenseData = {saveExpenseHandler} onCancel = {stopEditingHandler}/>) }
        
        </div>
    )

}

export default NewExpense;