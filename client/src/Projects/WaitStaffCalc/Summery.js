import React from 'react'

function Summery(props) {
    const tip = props.tip
    return (
        <div className='box'>
            <div className='title'>
            <h3>Customer Charges:</h3>
            </div>
            <div className='body'>
            <h4>Subtotal: ${props.sub}</h4>
            <h4>Tip: ${tip}</h4>
           <h4>Total: ${props.total}</h4>
           </div>
        </div>
    )
}

export default Summery
