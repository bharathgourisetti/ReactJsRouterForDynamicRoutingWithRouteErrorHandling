import { Axios } from 'axios'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Jobslayout = () => {
    return (
        <>
            <h1>Job Openings</h1>
            <Outlet />
        </>
    )
}

export default Jobslayout
