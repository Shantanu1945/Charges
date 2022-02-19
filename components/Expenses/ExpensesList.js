import ExpenseItem from "./ExpenseItem"
import Expenses from "./Expenses";

import './ExpensesList.css'

const ExpensesList = (props) =>{
    let ExpenseContent = <p>No Expenses Found</p>;

    if(props.items.length === 0){
        return <h2 className = "expenses-list__fallback">{ExpenseContent}</h2>
    }

    return (
        <ul className="expenses-list" >
        
      { props.items.map((expense)=>
            (<ExpenseItem 
              key ={expense.id}
              title = {expense.title}
              amount = {expense.amount}
              date = {expense.date} 
              />
            
            
            ))} </ul>
            )
}

export default ExpensesList;