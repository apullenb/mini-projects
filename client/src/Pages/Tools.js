import React, {useState } from 'react';
import Budget from '../Projects/Budget/Budget';
import ServerCalc from '../Projects/WaitStaffCalc/ServerCalc';

function Tools() {




    return (
        <div>
            <h1>Tools</h1>
            <div className='app-container'>
            <ServerCalc />
            <Budget />
            </div>
        </div>
    )
}

export default Tools
