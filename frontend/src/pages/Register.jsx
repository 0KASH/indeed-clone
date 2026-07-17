import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";


const Register = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      const res = await API.post(
        "/auth/register",
        formData
      );


      console.log(res.data);


      alert("Register Successful");

      navigate("/login");


    } catch (error) {

      console.log(error.response.data);

    }

  };


  return (

    <div>

      <h1>Register</h1>


      <form onSubmit={handleSubmit}>


        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />


        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />


        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />


        <button>
          Register
        </button>


      </form>


    </div>

  );

};


export default Register;