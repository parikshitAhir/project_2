import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="home_1">
        <div className="container acd">
          <div className="main_1">
            <div className="home_h1">
              <h1>
                Welcome to About page
                <strong className="home_co"> Parikshit Ahir</strong>
              </h1>
            </div>
            <div className="home_h2">
              <p>We are the team of talented devloper making website</p>
            </div>
            <div className="home_a3">
              <button
                className="btn"
                onClick={() => {
                  navigate("/Services");
                }}
              >
                Get Start
              </button>
            </div>
          </div>
          <div className="img_1">
            <img className="img_co" src="/images/img3.jpg" alt="home img"></img>
          </div>
        </div>
      </section>
      <footer className="fl1">Copyright © 2022<pre>   </pre> Terms Of Services | Privacy Policy | Refund Policy</footer>
    </>
  );
};

export default About;
