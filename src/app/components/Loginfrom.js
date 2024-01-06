"use client"
import React, { useState, useEffect } from "react"
import Ajaxcall from "./Ajaxcall";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }
    const result = Ajaxcall(formData, 'userlogin');
    console.log(result);

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can submit or process the data here
      console.log("Form data:", formData);
      setSubmitted(true); // Set a submitted flag
    } else {
      // Form is not valid, display error messages
    }
  };

  const isFormValid = Object.keys(errors).length === 0;
  return (
    <>
      {submitted ? (<div className="success-message">Login successful!</div>) : (<form onSubmit={handleSubmit}>
        <div className="input-group mb-3 mt-5">
          <span className="input-group-text"><i className="bi bi-person"></i></span>
          <div className="form-floating">
            <input type="text" name="email"  className="form-control" id="floatingInputGroup1" placeholder="Username" value={formData.email} onChange={handleInputChange} />
            <label htmlFor="floatingInputGroup1">Username</label>
          </div>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text"><i className="bi bi-key-fill"></i></span>
          <div className="form-floating">
            <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" value={formData.password} onChange={handleInputChange} />
            <label htmlFor="floatingPassword">Password</label>
            {errors.password && <div id="floatingPasswordFeedback" className="invalid-feedback">errors.password</div>}
          </div>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit" disabled={!isFormValid}>Submit</button>
        </div>
      </form>)}
    </>
  );
}
export default LoginForm;