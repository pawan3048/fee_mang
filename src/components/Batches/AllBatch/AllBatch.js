import DashboardMenu from "../../DashboardMenu/DashboardMenu.js";
import LogoHeader from "../../LogoHeader/LogoHeader.js";
import WelcomeBack from "../../WelcomeBackMsg/WelcomeBack.js";
import "./AllBatch.css";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";

const AllBatch = () => {
  return (
    <>
      <div className="batch-with-header">
        <LogoHeader />
        <div id="batch-main-wrapper">
          <DashboardMenu />
          <div id="batch-inner-wrapper">
            <div className="all-batch-container">
              <div className="batch-header-div">
                <h5>Batch</h5>

                <div className="batch-main-btns">
                  <button className="batch-add-btn"> + Add New Batch</button>
                  <button className="fee-management">Fee Management</button>
                </div>

              </div>
              {/* batch-header-div  */}

              <WelcomeBack />
              {/* Welcome Back MSG  */}

              <div className="all-batch-table-container">
                <h5>All Batch</h5>
                  <table>
                    <thead>
                      <tr>
                        <th>Batch Name</th>
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
              


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBatch;
