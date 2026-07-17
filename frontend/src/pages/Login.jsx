import { useState, useContext } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const Login = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);


  const [formData, setFormData] = useState({
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
        "/auth/login",
        formData
      );


      login(
        res.data.user,
        res.data.token
      );


      alert("Login Successful");


      navigate("/");


    } catch (error) {

      console.log(
        error.response?.data || error.message
      );

    }

  };


  return (

    <div>

      <h1>Login</h1>


      <form onSubmit={handleSubmit}>


        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />


        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />


        <button>
          Login
        </button>


      </form>


    </div>

  );

};


export default Login;