import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import DashboardMenu from "../../DashboardMenu/DashboardMenu.js";
import LogoHeader from "../../LogoHeader/LogoHeader.js";
import WelcomeBack from "../../WelcomeBackMsg/WelcomeBack.js";
import { FaEye,FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./AllStudent.css";

const AllStudents = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleViewDetails = () => {
    navigate('/student-details'); // Navigate to StudentDetails page with student ID
  };

  return (
    <div className="student-with-header">
      <LogoHeader />
      <div id="student-main-wrapper">
        <DashboardMenu />
        <div id="student-inner-wrapper">
          <div className="superhead">
            <div className="student-header-div">
              <h5>All Students</h5>
              <div className="student-main-btns">
                <button className="student-add-btn">+ Add New Student</button>
                <button className="fee-management">Fee Management</button>
              </div>
            </div>

            {/* Welcome Back Message */}
            <WelcomeBack />

            {/* Students table */}
            <div className="header-all-students">
              <h5>All Students</h5>
              <table>
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Father Name</th>
                    <th>Department</th>
                    <th>Roll No</th>
                    <th>Enrollment No</th>
                    <th>Session</th>
                    <th>Course</th>
                    <th>Address</th>
                    <th style={{width:'120px'}}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Robert Doe</td>
                    <td>Science</td>
                    <td>1234</td>
                    <td>20210001</td>
                    <td>2021-2024</td>
                    <td>Computer Science</td>
                    <td>NCR</td>
                    <td style={{width: '120px',display:'flex', justifyContent:'space-evenly',alignItems:'center'}}>
                      <FaEye className="view-details" onClick={() => handleViewDetails(1)}></FaEye>
                      <FaEdit className="view-details" onClick={() => handleViewDetails(1)}></FaEdit>
                      <MdDelete className="view-details" onClick={() => handleViewDetails(1)}></MdDelete>
                    </td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>Richard Smith</td>
                    <td>Arts</td>
                    <td>5678</td>
                    <td>20210002</td>
                    <td>2021-2024</td>
                    <td>Fine Arts</td>
                    <td>NCR</td>
                    <td style={{width: '120px',display:'flex', justifyContent:'space-evenly',alignItems:'center'}}>
                      <FaEye className="view-details" onClick={() => handleViewDetails(1)}></FaEye>
                      <FaEdit className="view-details"></FaEdit>
                      <MdDelete className="view-details"></MdDelete>
                    </td>
                  </tr>
                  {/* Additional rows can be added here */}
                </tbody>
              </table>
            </div>
            {/* End of Students table */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStudents;