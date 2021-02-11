import React, {useState} from 'react'
import Summery from './Summery'

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
                <h3>Enter the Meal Details:</h3>
            </div>
            <div className='body'>
                <h4>Base Meal Price: </h4>
            $<input type='number' name='price' value={price} onChange={(e) => handleChange(e)}/>
            <h4>Tax Rate:</h4>
            %<input type='number' name='taxRate' value={taxRate} onChange={(e) => handleChange(e)} />
            <h4>Tip Percentage:</h4>
            %<input type='number' name='tipPerc' value={tipPerc} onChange={(e) => handleChange(e)} />
            </div>
            <button onClick={handleClick}>Submit</button>
            <div className='total'>
              <Summery total={props.total} sub={props.sub}/>
            </div>

            
            
        </div>
    )
}

export default Meal
