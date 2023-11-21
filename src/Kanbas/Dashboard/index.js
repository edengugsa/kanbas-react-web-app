import { React } from "react";
// import { React, useState } from "react";
import { Link } from "react-router-dom";
// import db from "../Database";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) 
  {

  
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  // const addNewCourse = () => {
  //   setCourses([...courses,
  //             { ...course,
  //               _id: new Date().getTime() }]);
  // };

  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };


  // const courses = db.courses;
  return (
  //   <div>
  //   <h1>Dashboard</h1>
  //   <div className="list-group">
  //     {courses.map((course) => (
  //       <Link key={course._id}>
  //             to={`/Kanbas/Courses/${course._id}`}
  //             className="list-group-item">
  //         {course.name}
  //       </Link>
  //     ))}
  //   </div>
  // </div>


    <div >


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
      {/* {courses.map((course) => (
        console.log("line 90" + course)
      ))} */}
        {courses.map((course) => (
          <Link key={course} to={`/Kanbas/Courses/${course}`} className="list-group-item card">
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