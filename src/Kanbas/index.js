// import Nav from "../Nav";
import Signin from "../Kanbas/users/signin";
import Signup from "../Kanbas/users/signup";
import Account from "../Kanbas/users/Account";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from "../Kanbas/users/table";
// import db from "./Database";
import React, { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;

function Kanbas() {
  const [courses, setCourses] = useState([]);
  // const URL = "https://kanbas-node-server-app-fhb2.onrender.com/api/courses";
  // const URL = "http://localhost:4000/api/courses";
  const URL = `${BASE_API}/api/courses`;

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
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };


  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };

   return (
    <Provider store={store}>
     <div className="d-flex">
       <div>
       <KanbasNavigation />
       </div>
       <div >
       <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Account/:id" element={<Account />} />
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
            <Route path="/admin/users" element={<UserTable />} />

        </Routes>
       </div>
     </div>
     </Provider>
   );
 }
 export default Kanbas;