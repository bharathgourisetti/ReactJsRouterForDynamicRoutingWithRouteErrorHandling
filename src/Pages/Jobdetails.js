import axios from 'axios';
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const Jobdetails = () => {

    const navigate = useNavigate();
  const jsondetails = useLoaderData();
  debugger;

  return (
    <div className='jobcard jobdetails'>
        <label><b>Job ID : </b>#{jsondetails.id}</label>
        <label><b>Job Title : </b>{jsondetails.title}</label>
        <label><b>Job Location : </b>{jsondetails.location}</label>
        <label><b>Job PostedOn : </b>{jsondetails.jobDetailsLoader}</label>
        <label><b>Job Description : </b>{jsondetails.description}</label>
        <button onClick={()=>navigate("/")}>Apply Now</button>
        <button onClick={()=>navigate("/jobs")}>Jobs</button>
    </div>
  )
}

export default Jobdetails

export const jobDetailsLoader = ({params}) => {
    const {id} = params;
    return axios.get("http://localhost:5000/jobs/" + id).then(response => {
        return response.data;
    }).catch(err => {
        debugger;
        throw Error(err);
        // return err;
    })

}