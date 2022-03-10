import React from 'react'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <div className='flex'>
      <div><h2><Link to='home'>home</Link></h2></div>  
        <div><h2><Link to='student'>student</Link></h2></div>
       <div> <h2><Link to='contact'>contact</Link></h2></div>

        

    </div>

  )
}

export default First