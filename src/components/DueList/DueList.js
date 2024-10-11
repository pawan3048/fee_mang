import DashboardMenu from '../DashboardMenu/DashboardMenu.js';
import LogoHeader from '../LogoHeader/LogoHeader.js';
import WelcomeBack from '../WelcomeBackMsg/WelcomeBack.js';
import './DueList.css'
import { useNavigate } from 'react-router-dom';
import { FaEye,FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const DueList = () => {
  let navigate = useNavigate();
  function handleDueListView(){
    navigate('/due-list-view')
  }
  return (
    <>
      <div id="due-list-with-header-wrapper">
      <LogoHeader></LogoHeader>
      <div id="due-list-main-wrapper">
        <DashboardMenu></DashboardMenu>
        <div id="due-list-inner-wrapper">
        
        <div className="duelist-btns-header">
              <h5>Due List</h5>
              <div className="duelist-page-head-btns-container">
                <button className="add-new-student-btn">+ Add New Student</button>
                <button className="fee-management-btn">Fee Management</button>
              </div>
        </div>

        {/* WelcomeBack Message  */}
        <WelcomeBack/>

        {/* Students table */}
        <div className="header-all-students">
              <h5>Due's List</h5>
              <table>
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Father Name</th>
                    <th>DOB</th>
                    <th>Roll No</th>
                    <th>Department</th>
                    <th>Batch</th>
                    <th>Due Amount</th>
                    <th style={{width:'120px'}}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Robert Doe</td>
                    <td>01/05/2005</td>
                    <td>R1234</td>
                    <td>Computer Science</td>
                    <td>2021-2024</td>
                    <td>15000</td>
                    <td style={{width: '120px',display:'flex', justifyContent:'space-evenly',alignItems:'center'}}>
                      <FaEye className="view-details" onClick={handleDueListView}></FaEye>
                      <FaEdit className="view-details"></FaEdit>
                      <MdDelete className="view-details"></MdDelete>
                      {/* <button  className="view-details">View</button> */}
                    </td>
                  </tr>
                  <tr>
                  <td>John Doe</td>
                    <td>Smith</td>
                    <td>18/05/2006</td>
                    <td>R1235</td>
                    <td>Art</td>
                    <td>2022-2025</td>
                    <td>12000</td>
                    <td style={{width: '120px',display:'flex', justifyContent:'space-evenly',alignItems:'center'}}>
                      <FaEye className="view-details" onClick={handleDueListView}></FaEye>
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
    </>
  );
}

export default DueList;
