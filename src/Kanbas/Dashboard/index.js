import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  const courses = db.courses;
  return (
    <div >


<div class="row">

<div class="top-bar">
<h1>Dashboard</h1>
        <h6 class="wd-fg-color-black"> Published Courses (8) </h6>
   
</div>
</div>



      
      <div className="list-group"  style={ { paddingLeft: 180 }}>
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item card" >
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;