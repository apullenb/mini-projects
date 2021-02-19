import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to='/Tools'>Tools</Link>
            <Link to='/Fun'>Fun</Link>
        </div>
    )
}

export default Nav
