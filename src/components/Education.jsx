import React from "react";
import "./Education.css";
import collegeImg from "../assets/college.png";
import schoolImg from "../assets/school.png";

const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>

      <p className="qoute">
        Education is not the learning of facts, but the training of the mind
        to think.
      </p>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img draggable="false" src={collegeImg} alt="NCIT" />
          </div>
          <div className="content">
            <h3>Bachelor of Engineering in Computer Engineering</h3>
            <p>Nepal College of Information Technology | Pokhara University</p>
            <h4>2022-2026 | Final Semester</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img draggable="false" src={schoolImg} alt="Kanti Secondary School" />
          </div>
          <div className="content">
            <h3>+2 Science</h3>
            <p>Kanti Secondary School | NEB</p>
            <h4>2020-2022 | Completed</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;