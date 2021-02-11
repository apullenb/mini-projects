import React, {useState, useEffect} from 'react'
import Meal from './Meal'

function Main() {
// const [meal, setMeal] = useState('')

const [total, setTotal] = useState('')
const [subTotal, setsubTotal] = useState('')




function calculate(input) {
 const meal = parseInt(input.price)   
    const tax = parseInt(input.taxRate) * (meal * .01)
    const tip = parseInt(input.tipPerc) * (meal * .01)
  setTotal(tip + tax + meal)
    setsubTotal(meal + tax)
  console.log(meal, tip, tax, total, subTotal)
}




    return (
        <div>
            <header>
                <h2>Restaurant Server Earnings Calculator</h2>
            </header>
            <Meal calc ={calculate} total={total} sub={subTotal}/>
        </div>
    )
}

export default Main
