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


  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");



  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      setLoading(true);

      setError("");


      const res = await API.post(
        "/auth/login",
        formData
      );


      login(
        res.data.user,
        res.data.token
      );


      alert("Login Successful");


      navigate("/dashboard");



    } catch (error) {


      setError(
        error.response?.data?.message ||
        "Login Failed"
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="auth-container">


      <div className="auth-card">


        <h1>
          Login
        </h1>



        {
          error && (

            <p className="error">
              {error}
            </p>

          )
        }



        <form onSubmit={handleSubmit}>


          <input

            name="email"

            placeholder="Email"

            value={formData.email}

            onChange={handleChange}

          />



          <input

            name="password"

            type="password"

            placeholder="Password"

            value={formData.password}

            onChange={handleChange}

          />



          <button disabled={loading}>

            {
              loading
              ?
              "Logging in..."
              :
              "Login"
            }

          </button>



        </form>


      </div>


    </div>

  );

};


export default Login;