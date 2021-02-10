import React, {useState} from 'react'

function Meal(props) {
    const [inputs, setInputs]= useState({
        price: '',
        taxRate: '',
        tipPerc: '',
    })
const {price, taxRate, tipPerc} = inputs

  const handleChange = (e) => {
      setInputs({...inputs, [e.target.name]:e.target.value})
  }

  const handleClick = () => {
      props.calc(inputs)
  }

    return (
        <div className='box'>
            <div className='title'>
                <h4>Enter the Meal Details:</h4>
            </div>
            <div className='body'>
                Base Meal Price:
            <input type='number' name='price' value={price} onChange={(e) => handleChange(e)}/>
            <input type='number' name='taxRate' value={taxRate} onChange={(e) => handleChange(e)} />
            <input type='number' name='tipPerc' value={tipPerc} onChange={(e) => handleChange(e)} />
            <button onClick={handleClick}>Submit</button>
            <div className='total'>
                {props.total}
            </div>

            </div>
            
        </div>
    )
}

export default Meal
