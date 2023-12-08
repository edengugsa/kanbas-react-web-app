// import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import 'bootstrap/dist/css/bootstrap.min.css';
import db from "./Database";
import React, { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "https://kanbas-node-server-app-fhb2.onrender.com/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
    console.log("in fetch " + response.data);
  };
  useEffect(() => {
    findAllCourses();
    console.log("in dash " + courses);
  }, []);



  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };

  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course));
  };

  const updateCourse = async () => {
    console.log('plss')
    console.log(course._id)
    const response = await axios.put(
    `${URL}/${course._id}`,
    course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
      );
    };

  // const updateCourse = async (course) => {
  //   console.log('plss')
  //   console.log(course._id)
  //   const response = await axios.put(
  //     `${URL}/${course._id}`,
  //     course
  //   );
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       }
  //       return c;
  //     })
  //   );
  //   setCourse({ name: "" });
  // };

   return (
    <Provider store={store}>
     <div className="d-flex">
       <div>
       <KanbasNavigation />
       </div>
       <div>
       <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          } />
          <Route path="Courses/:courseId/*" element={
            <Courses courses={courses} />} />

        </Routes>
       </div>
     </div>
     </Provider>
   );
 }
 export default Kanbas;