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


  const [loading, setLoading] = useState(false);



  const handleChange = (e)=>{

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = async (e)=>{

    e.preventDefault();


    try {

      setLoading(true);


      const res = await API.post(
        "/jobs",
        form
      );


      console.log(res.data);


      alert("Job Created Successfully");


      setForm({

        title:"",
        company:"",
        location:"",
        salary:"",
        jobType:"",
        experience:"",
        description:""

      });


    } catch(error){


      console.log(
        error.response?.data || error.message
      );


    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="create-job">


      <h1>
        Create New Job
      </h1>



      <form
        className="job-form"
        onSubmit={handleSubmit}
      >


        <input
          name="title"
          value={form.title}
          placeholder="Job Title"
          onChange={handleChange}
        />


        <input
          name="company"
          value={form.company}
          placeholder="Company Name"
          onChange={handleChange}
        />


        <input
          name="location"
          value={form.location}
          placeholder="Location"
          onChange={handleChange}
        />


        <input
          name="salary"
          value={form.salary}
          placeholder="Salary"
          onChange={handleChange}
        />


        <input
          name="jobType"
          value={form.jobType}
          placeholder="Job Type"
          onChange={handleChange}
        />


        <input
          name="experience"
          value={form.experience}
          placeholder="Experience"
          onChange={handleChange}
        />


        <textarea
          name="description"
          value={form.description}
          placeholder="Job Description"
          onChange={handleChange}
        />


        <button
          disabled={loading}
        >

          {
            loading
            ?
            "Creating..."
            :
            "Create Job"
          }

        </button>


      </form>


    </div>

  );

};


export default CreateJob;