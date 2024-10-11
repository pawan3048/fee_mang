import DashboardMenu from "../../DashboardMenu/DashboardMenu.js";
import LogoHeader from "../../LogoHeader/LogoHeader.js";
import './Courses.css'

const Courses = () => {
  return (
    <>
      <div id="course-with-header">
        <LogoHeader/>
      <div id="courses-main-wrapper">
        <DashboardMenu/>
      <div id="courses-inner-wrapper">
        <h5>Courses</h5>
      </div>
      </div>
      </div>
    </>
  );
}

export default Courses;
