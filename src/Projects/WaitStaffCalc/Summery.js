import React from 'react'

function Summery(props) {
    return (
        <div className='total'>
            <h3>Customer Charges:</h3>
            <p>Subtotal: ${props.sub}</p>
           <p>Total: ${props.total}</p>
          
            
          
        </div>
    )
}

export default Summery
