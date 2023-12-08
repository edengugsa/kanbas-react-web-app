import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// const COURSES_URL = "http://localhost:4000/api/courses";
const COURSES_URL = "https://kanbas-node-server-app-fhb2.onrender.com/api/courses";
// const MODULES_URL = "https://kanbas-node-server-app-fhb2.onrender.com/api/courses";
const API_BASE = process.env.REACT_APP_API_BASE;
const MODULES_URL = `${API_BASE}/modules`;

export const updateModule = async (module) => {
  const response = await axios.put(`https://kanbas-node-server-app-fhb2.onrender.com/api/modules/${module}`, module);
  return response.data;
};


export const deleteModule = async (module) => {
  console.log(module)
  const response = await axios.delete(`https://kanbas-node-server-app-fhb2.onrender.com/api/modules/${module}`);
  return response.data;
};


export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};
