import React, {useState, useEffect} from 'react'
import Meal from './Meal'

function Main() {
// const [meal, setMeal] = useState('')
// const [tip, setTip] = useState('')
// const [tax, setTax] = useState('')
const [total, setTotal] = useState('')



function calculate(input) {
 const meal = parseInt(input.price)   
    const tax = parseInt(input.taxRate) * (meal * .01)
    const tip = parseInt(input.tipPerc) * (meal * .01)
  setTotal(meal + tip + tax)
  console.log(meal, tip, tax, total)
}




    return (
        <div>
            <header>
                <h2>WaitStaff Calculator</h2>
            </header>
            <Meal calc ={calculate} total={total}/>
        </div>
    )
}

export default Main
