import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import axios from 'axios';

const Jobs = () => {
    debugger;

    const jsonData = useLoaderData();

    return (
        <div className='jobcard'>
            {jsonData.map(job => {
                return <Link to={job.id}>
                    <h4>{job.title}</h4>
                    <p>{job.location}</p>
                </Link>
            })}

        </div>
    )
}

export default Jobs


// export const jobsLoader = async function () {
export const jobsLoader = function () {
    // const inputData = {
    //     url: "http://localhost:5000/jobs",
    //     method: "POST",
    //     headers: {
    //         authorization: "newtokenNoNeedOfThisJustForTestingPurpose",
    //     },
    //     data: {},
    // }

    // const response = await axios.post("http://localhost:5000/jobs").then(response => {
    //     debugger;
    //     return response;
    // }).catch(err => {
    //     return err;
    // })
    // return response.data;

    // return axios.post("http://localhost:5000/jobs").then(response => {
    return axios.get("http://localhost:5000/jobs").then(response => {
        debugger;
        return response.data;
    }).catch(err => {
        return err;
    })

}