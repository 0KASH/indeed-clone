import { useState } from "react";
import API from "../../api/axios";


const CreateJob = () => {


  const [form, setForm] = useState({

    title: "",
    company: "",
    location: "",
    salary: "",
    jobType: "",
    experience: "",
    description: ""

  });



  const handleChange = (e)=>{

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = async (e)=>{

    e.preventDefault();


    try {


      const res = await API.post(
        "/jobs",
        form
      );


      console.log(res.data);


      alert("Job Created");


    } catch(error){


      console.log(
        error.response?.data || error.message
      );


    }

  };



  return (

    <div>

      <h1>
        Create Job
      </h1>


      <form onSubmit={handleSubmit}>


        <input
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
        />


        <input
          name="company"
          placeholder="Company"
          onChange={handleChange}
        />


        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />


        <input
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
        />


        <input
          name="jobType"
          placeholder="Job Type"
          onChange={handleChange}
        />


        <input
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
        />


        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />


        <button>
          Create Job
        </button>


      </form>


    </div>

  );

};


export default CreateJob;