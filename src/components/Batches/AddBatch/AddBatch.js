import DashboardMenu from "../../DashboardMenu/DashboardMenu.js";
import LogoHeader from "../../LogoHeader/LogoHeader.js";
import WelcomeBack from "../../WelcomeBackMsg/WelcomeBack.js";
import "./AddBatch.css";

const AddBatch = () => {
  return (
    <>
      <div id="add-batch-main-wrapper">
        <LogoHeader />
        <div id="add-batch-inner-wrapper">
          <DashboardMenu></DashboardMenu>

          <div className="batch-form-container">
            <h5>Batch</h5>

            <WelcomeBack />

            <div className="batch-container">
              <h5>Batch</h5>

              <form className="batch-form">
                {/* Batch Name */}
                <div className="form-group">
                  <label htmlFor="batch-name">Batch Name</label>
                  <input
                    type="text"
                    id="batch-name"
                    placeholder="Enter Department Name"
                  />
                </div>

                {/* Select Course */}
                <div className="form-group">
                  <label htmlFor="select-course">Select Course</label>
                  <input
                    type="text"
                    id="select-course"
                    placeholder="Select Course"
                  />
                </div>

                {/* Session Dates and Duration */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="session-start">
                      Course Session Start Date
                    </label>
                    <input
                      type="text"
                      id="session-start"
                      value="1 September 2024"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="session-end">Course Session End Date</label>
                    <input
                      type="text"
                      id="session-end"
                      value="1 September 2024"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="total-duration">Total Duration</label>
                    <div className="duration-inputs">
                      <input type="text" placeholder="DD" />
                      <input type="text" placeholder="MM" />
                      <input type="text" placeholder="YY" />
                    </div>
                  </div>
                </div>

                {/* Batch Status */}
                <div className="form-group batch-status">
                  <label>Batch Status</label>
                  <div className="status-options">
                    <label>
                      <input type="radio" name="status" value="running" />{" "}
                      Running
                    </label>
                    <label>
                      <input type="radio" name="status" value="expired" />{" "}
                      Expired
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="form-actions">
                  <button className="save-button" type="submit">
                    Save
                  </button>
                  <button className="cancel-button" type="button">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            {/* batch Form Div end */}
          </div>
          {/* batch Form Container end */}
        </div>
      </div>
    </>
  );
};

export default AddBatch;
