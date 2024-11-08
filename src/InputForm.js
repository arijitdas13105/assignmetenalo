import React, { useState } from "react";
import "./Formdesign.css";
const InputForm = () => {

    const [formData,setFormData]=useState({
        fullname:"",email:"",department:"",time:"",message:""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <>
      <div className="container">
        <div className="forms-wrapper">
          <div className="form-card">
            <span>contact us</span>
            <h1>Make an Appointment</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullname" >Full Name</label>
                <input type="text" placeholder="full name" name="fullname"  value={formData.fulname} onChange={handleChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input type="text" placeholder="Email"  name="email" value={formData.email} onChange={handleChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="department">Department</label>
                <select name="department" value={formData.department} onChange={handleChange}>
                  <option value="" >please select</option>
                  <option value="option1" >option 1</option>
                  <option value="option2" >option 2</option>
                  <option value="option3" >option 3</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="time">Time</label>
                <select name="time" value={formData.time} onChange={handleChange} >
                  <option>4.00 Available</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message"  >Message</label>
                <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn" type="submit"> Book </button>
            </form>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default InputForm;
