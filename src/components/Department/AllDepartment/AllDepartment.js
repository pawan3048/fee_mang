import DashboardMenu from "../../DashboardMenu/DashboardMenu.js";
import LogoHeader from "../../LogoHeader/LogoHeader.js";
import './AllDepartment.css'
import WelcomeBack from "../../WelcomeBackMsg/WelcomeBack.js";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";

const AllDepartment = () => {
  return (
    <>
      <div id="all-department-with-header">
        <LogoHeader/>
      <div id="all-department-main-wrapper">
        <DashboardMenu/>
      <div id="all-department-inner-wrapper">
      <div className="superhead">
      <div className="departmetHeaderdiv">
        <h5>All Department</h5>

        <div className="departmentdiv2">
        <button className="departmentRight"> + Add New Department</button>
        <button className="fee-management">Fee Management</button>
        </div>
      </div>

      
      {/* Welcome back msg  */}
      <WelcomeBack/>


      {/* table */}
        <div className="headertable">
        <h5>All Department</h5>
      <table>
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Number of course</th>
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
}

export default AllDepartment;

