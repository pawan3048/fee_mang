import DashboardMenu from "../../DashboardMenu/DashboardMenu.js";
import LogoHeader from '../../LogoHeader/LogoHeader.js';
import WelcomeBack from "../../WelcomeBackMsg/WelcomeBack.js";
import "./Management.css";
import { Link } from "react-router-dom";

const Management = () => {
  function handleStudentFormData(){

  }
  return (
    <>
      <div id="management-main-wrapper-with-header">
        <LogoHeader/>
        <div id="management-main-wrapper">
          <DashboardMenu></DashboardMenu>
          
          <div className="management-student-detail-main-container">

          <div className="management-btns-header">
              <h5>Management</h5>
              <div className="management-page-head-btns-container">
                <button className="add-new-student-btn">+ Add New Student</button>
                <button className="fee-management-btn">Fee Management</button>
              </div>
          </div>

          <WelcomeBack/>
            {/* <div className="management-searchbar-and-filer-conatiner">
              <div>
                <input type="search" className="management-search-input" placeholder="Search" />
              </div>
              <div>
                <select className="management-filter-student-detail">
                  <option value="" defaultChecked>--Select</option>
                </select>
                <button>Filter</button></div>
            </div> */}

          <div className="header-all-students">
              <h5>All Students</h5>
              <table>
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Enrollment Number</th>
                    <th>Roll Number</th>
                    <th>Father Name</th>
                    <th>Session</th>
                    <th>DOB</th>
                    <th>Views</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>FG12734</td>
                    <td>R001</td>
                    <td>Roboart</td>
                    <td>2021-2024</td>
                    <td>2008</td>
                    <td>
                    <Link to={'/student-detail-view'}><button onClick={handleStudentFormData} className="view-details">View</button></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>FG12734</td>
                    <td>R002</td>
                    <td>Ginni</td>
                    <td>2022-2025</td>
                    <td>2006</td>
                    <td>
                    <Link to={'/student-detail-view'}><button onClick={handleStudentFormData} className="view-details">View</button></Link>
                    </td>
                  </tr>
                  {/* Additional rows can be added here */}
                </tbody>
              </table>
          </div>
            {/* End of Students table */}
          </div>
          {/* management-student-detail-main-container  */}

        </div>
      </div>
    </>
  );
};

export default Management;
