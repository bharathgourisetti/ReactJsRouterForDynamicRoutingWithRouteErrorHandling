import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'


const Joberrorpage = () => {

    const navigate = useNavigate();

    const error = useRouteError();

  return (
    <div className='jobcard'>
        An error occured...
        <label>Error Msg: {error.message}</label>
        <button onClick={()=>navigate("/")}>Go to Home</button>
    </div>
  )
}

export default Joberrorpage