import React, {useState, useEffect} from 'react'
import Meal from './Meal'
import Summery from './Summery'
import './ServCalc.css'
import Earnings from './Earnings'

function Main() {
// const [meal, setMeal] = useState('')

const [total, setTotal] = useState('')
const [subTotal, setsubTotal] = useState('')
const [tipAmt, setTipAmt] = useState('')
const [show, setShow]= useState('hide')


const click = (e) => {
show === 'hide' ? setShow('expand') : setShow('hide')
}


function calculate(input) {
 const meal = Number(input.price) 
    const tax = Number(input.taxRate) * (meal * .01)
    const tip = Number(input.tipPerc) * (meal * .01)
    storeInfo(tip)
    setTipAmt(tip.toFixed(2))
  setTotal((tip + tax + meal).toFixed(2))
    setsubTotal((meal + tax).toFixed(2))
  console.log(meal, tip, tax, total, subTotal)
  
}

function storeInfo(tips){
    console.log(tips)
    const allTips = checkTips()
    const newTips = parseFloat(allTips) + tips 
    localStorage.setItem('tips', `${newTips.toFixed(2)}`)
    const custCount = checkCust()
    let newCount = parseInt((custCount)) + 1
    localStorage.setItem('cust', `${newCount}`)
}
const checkTips = () => { 
    if (!localStorage.getItem('tips')) {  
     return 0
} else {
    return localStorage.getItem('tips')
}
}

const checkCust = () => { 
    if (!localStorage.getItem('cust')) {  
     return 0
} else {
    return localStorage.getItem('cust')
}
}

    return (
        <div>
            <button onClick = {(e)=>click(e)}>Server Earnings Calculator</button>
            <div className={show}>
            <header>
                <h2>Restaurant Server Earnings Calculator</h2>
            </header>
            <section className='component'>
                <div>
            <Meal calc ={calculate} total={total} sub={subTotal}/>
            </div>
            <div>
              <Summery total={total} sub={subTotal} tip={tipAmt}/>
              <Earnings checkTips={checkTips} checkCust={checkCust} />
            </div>
</section>
        </div>
        </div>
    )
}

export default Main
