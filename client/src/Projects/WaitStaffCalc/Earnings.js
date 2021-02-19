import React from 'react'

function Earnings(props) {
    const cust = props.checkCust()
    const tips = props.checkTips()

    const average = () => {
        const averagePerCust = tips / cust
        return averagePerCust.toFixed(2)
    }



    return (
        <div className='box'>
            <div className='title'>
            <h3>Earnings For Today:</h3>
            </div>
            <div className='body'>
                <h4>Tips: ${tips}</h4>
                <h4>Total Customers: {cust}</h4>
                <h4>Average Per Customer: ${average()}</h4>
            </div>
        </div>
    )
}

export default Earnings
