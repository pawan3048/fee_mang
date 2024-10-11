import DashboardMenu from "../../DashboardMenu/DashboardMenu.js";
import LogoHeader from "../../LogoHeader/LogoHeader.js";
import WelcomeBack from "../../WelcomeBackMsg/WelcomeBack.js";
import "./AllCourses.css";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";

const AllCourses = () => {
  return (
    <>
      <div className="course-with-header">
        <LogoHeader />
        <div id="course-main-wrapper">
          <DashboardMenu />
          <div id="course-inner-wrapper">
            <div className="superhead">
              <div className="course-header-div">
                <h5>Course</h5>

                <div className="course-main-btns">
                  <button className="course-add-btn"> + Add New Course</button>
                  <button className="fee-management">Fee Management</button>
                </div>
              </div>

              {/* Welcome Back MSG  */}
              <WelcomeBack />

              {/* Courses table */}

              <div className="headertable">
                <h5>All Course</h5>
                  <table>
                    <thead>
                      <tr>
                        <th>Course Name</th>
                        <th>Session</th>
                        <th>Number of students</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Scrum Master</td>
                        <td>6</td>
                        <td>7</td>
                        <td><i class="fa-solid fa-file-pen"></i>&nbsp;&nbsp;<i class="fa-solid fa-trash-can"></i></td>
                      </tr>
                      <tr>
                        <td>Scrum Master</td>
                        <td>6</td>
                        <td>7</td>
                        <td><i class="fa-solid fa-file-pen"></i>&nbsp;&nbsp;<i class="fa-solid fa-trash-can"></i></td>
                      </tr>
                      <tr>
                        <td>Scrum Master</td>
                        <td>6</td>
                        <td>7</td>
                        <td><i class="fa-solid fa-file-pen"></i>&nbsp;&nbsp;<i class="fa-solid fa-trash-can"></i></td>
                      </tr>
                      <tr>
                        <td>Scrum Master</td>
                        <td>6</td>
                        <td>7</td>
                        <td><i class="fa-solid fa-file-pen"></i>&nbsp;&nbsp;<i class="fa-solid fa-trash-can"></i></td>
                      </tr>
                      <tr>
                        <td>Scrum Master</td>
                        <td>6</td>
                        <td>7</td>
                        <td><i class="fa-solid fa-file-pen"></i>&nbsp;&nbsp;<i class="fa-solid fa-trash-can"></i></td>
                      </tr>
                      <tr>
                        <td>Scrum Master</td>
                        <td>6</td>
                        <td>7</td>
                        <td><i class="fa-solid fa-file-pen"></i>&nbsp;&nbsp;<i class="fa-solid fa-trash-can"></i></td>
                      </tr>
                      <tr>
                        <td>Scrum Master</td>
                        <td>6</td>
                        <td>7</td>
                        <td><i class="fa-solid fa-file-pen"></i>&nbsp;&nbsp;<i class="fa-solid fa-trash-can"></i></td>
                      </tr>
                      <tr>
                        <td>Scrum Master</td>
                        <td>6</td>
                        <td>7</td>
                        <td><i class="fa-solid fa-file-pen"></i>&nbsp;&nbsp;<i class="fa-solid fa-trash-can"></i></td>
                      </tr>
                      <tr>
                        <td>Scrum Master</td>
                        <td>6</td>
                        <td>7</td>
                        <td><i class="fa-solid fa-file-pen"></i>&nbsp;&nbsp;<i class="fa-solid fa-trash-can"></i></td>
                      </tr>
                      <tr>
                        <td>Scrum Master</td>
                        <td>6</td>
                        <td>7</td>
                        <td><i class="fa-solid fa-file-pen"></i>&nbsp;&nbsp;<i class="fa-solid fa-trash-can"></i></td>
                      </tr>
                    </tbody>
                  </table>
              </div>
              {/* headertable  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCourses;
