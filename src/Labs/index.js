// import Nav from "../Nav";
// import PathParameters from "./a3/PathParameters";

// import Assignment3 from "./a3";
// function Labs() {
//     return(
//        <div>
//         <Nav/>
//         <Assignment3/>
//         <PathParameters/>
//        </div>
//     );
//  }
//  export default Labs;

import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import {Routes, Route, Navigate} from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
 return (
   <Provider store={store}>
      <div>
         <Nav/>
         <Routes>
            <Route path="/"
            element={<Navigate
                        to="a3"/>}/>
            <Route path="a3"
            element={<Assignment3/>}/>
            <Route path="a4"
            element={<Assignment4/>}/>
            <Route path="a5"
            element={<Assignment5/>}/>
         </Routes>
      </div>
   </Provider>
 );
}

export default Labs;