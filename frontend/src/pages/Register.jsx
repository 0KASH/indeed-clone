import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";


const Register = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({

    name: "",
    email: "",
    password: "",
    role: "jobseeker"

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
        "/auth/register",
        formData
      );


      console.log(res.data);


      alert("Register Successful");


      navigate("/login");



    } catch (error) {


      setError(
        error.response?.data?.message ||
        "Registration Failed"
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="auth-container">


      <div className="auth-card">


        <h1>
          Register
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

            name="name"

            placeholder="Name"

            value={formData.name}

            onChange={handleChange}

          />



          <input

            name="email"

            placeholder="Email"

            value={formData.email}

            onChange={handleChange}

          />



          <input

            name="password"

            placeholder="Password"

            type="password"

            value={formData.password}

            onChange={handleChange}

          />



          <select

            name="role"

            value={formData.role}

            onChange={handleChange}

          >


            <option value="jobseeker">
              Jobseeker
            </option>


            <option value="employer">
              Employer
            </option>


          </select>




          <button disabled={loading}>


            {
              loading
              ?
              "Creating Account..."
              :
              "Register"
            }


          </button>



        </form>


      </div>


    </div>

  );

};


export default Register;