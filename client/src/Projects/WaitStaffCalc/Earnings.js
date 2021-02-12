import React from 'react'

function Earnings(props) {




    return (
        <div className='box'>
            <div className='title'>
            <h3>Earnings For Today:</h3>
            </div>
            <div className='body'>
                <h4>Tips: ${props.checkTips()}</h4>
                <h4>Total Customers: {props.checkCust()}</h4>
            </div>
        </div>
    )
}

export default Earnings
