import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
import { findModulesForCourse, createModule } from "./client.js";
function ModuleList() {

  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };


  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button className="btn btn-primary w-30"
          onClick={handleAddModule}>
          Add
        </button>
        <button className="btn btn-primary w-30"
          onClick={handleUpdateModule}>
          Update
        </button>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button className="btn btn-primary w-30"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button className="btn btn-danger w-30"
              onClick={() => handleDeleteModule(module._id)}>
              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;