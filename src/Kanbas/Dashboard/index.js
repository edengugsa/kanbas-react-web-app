import { React } from "react";
// import { React, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import db from "../Database";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) 
  {
  return (
    <div style={{ paddingLeft: '200px' }}>

<div class="row">

<div class="top-bar">
<h1>Dashboard</h1>
<h5>Course</h5>
<div style={ { marginLeft: 180 }}>
<input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

      </div>
<button style={ { marginLeft: 180 }} onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>
      …


        <h6 class="wd-fg-color-black"> Published Courses (8) </h6>
   
</div>
</div>
      
      <div className="list-group"  style={ { paddingLeft: 180 }}>
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item card">
             <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>

            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;