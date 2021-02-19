import React, {useState} from 'react'
import Income from './Income'

function Budget() {

    const [show, setShow]= useState('hide')


const click = (e) => {
show === 'hide' ? setShow('expand') : setShow('hide')
}
    return (
        <div>
             <button onClick = {(e)=>click(e)}>Quick Budget Tool</button>
            <div className={show}>
            <header>
                <h2>Quick Budget Tool</h2>
            </header>
            <section className='component'>
<Income />
            </section>
        </div>
        </div>
    )
}

export default Budget
