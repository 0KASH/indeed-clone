import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const Home = () => {

  const navigate = useNavigate();


  const [keyword, setKeyword] = useState("");



  const handleSearch = () => {

    if(keyword.trim()){

      navigate(`/jobs?keyword=${keyword}`);

    }else{

      navigate("/jobs");

    }

  };



  return (


    <div className="home">



      <section className="hero">


        <h1>
          Find Your Dream Job
        </h1>



        <p>
          Search thousands of jobs and start your career journey with Indeed Clone.
        </p>



        <div className="search-box">


          <input

            type="text"

            placeholder="Search job title..."

            value={keyword}

            onChange={(e)=>setKeyword(e.target.value)}

          />



          <button
            className="primary-btn"
            onClick={handleSearch}
          >

            Search

          </button>


        </div>




        <div>


          <Link to="/jobs">


            <button className="primary-btn">

              Find Jobs

            </button>


          </Link>





          <Link to="/register">


            <button className="secondary-btn">

              Post a Job

            </button>


          </Link>


        </div>


      </section>






      <section className="features">



        <div className="feature-card">


          <h3>
            Easy Apply
          </h3>


          <p>
            Apply for jobs quickly with one click.
          </p>


        </div>





        <div className="feature-card">


          <h3>
            Top Companies
          </h3>


          <p>
            Find opportunities from great companies.
          </p>


        </div>





        <div className="feature-card">


          <h3>
            Fast Hiring
          </h3>


          <p>
            Connect with employers faster.
          </p>


        </div>




      </section>




    </div>


  );

};


export default Home;