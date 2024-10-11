import DashboardMenu from "../../DashboardMenu/DashboardMenu.js";
import LogoHeader from "../../LogoHeader/LogoHeader.js";
import "./NewDepartment.css";
import WelcomeBack from "../../WelcomeBackMsg/WelcomeBack.js";
import React, { useState } from "react";

const NewDepartment = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <>
      <div id="add-department-main-wrapper-with-header">
        <LogoHeader />
        <div id="add-department-main-wrapper">
          <DashboardMenu />
          <div id="add-department-inner-wrapper">
            <div className="superheader">
              <div className="departmetHeaderdiv">
                <h5>Department</h5>

                <div className="departmentdiv2">
                  <button className="departmentRight">
                    {" "}
                    + Add New Department
                  </button>
                  <button className="fee-management">Fee Management</button>
                </div>
              </div>

              {/* second-setion */}

              {/* welcome back msg  */}
              <WelcomeBack />

              {/* form */}

              <div className="form-main-container" id="form">
                <h4 className="department-detail">Department Details</h4>
                <form
                  onSubmit={handleSubmit}
                  className="department-detail-form"
                >
                  <div className="input-group">
                    <div style={{ paddingBottom: "10px" }}>
                      <label className="label">Department Name</label>
                    </div>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter Department Name"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <div style={{ paddingBottom: "10px" }}>
                      <label className="label">Department Description </label>
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Write Short Description"
                      required
                    />
                  </div>

                  <div className="form-btns">
                    <button className="btn-search">Save</button>
                    <button className="btn-cancel">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDepartment;
