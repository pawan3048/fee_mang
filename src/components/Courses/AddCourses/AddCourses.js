import DashboardMenu from "../../DashboardMenu/DashboardMenu.js";
import LogoHeader from "../../LogoHeader/LogoHeader.js";
import "./AddCourses.css";

const AddCourses = () => {
  return (
    <>
      <div id="add-courses-main-wrapper">
        <LogoHeader />
        <div id="add-courses-inner-wrapper">
          <DashboardMenu></DashboardMenu>
          
          <div className="courses-form-container" >
            <h5>Course</h5>

            <div className="courses-form-div">
              <h5>Courses</h5>
              
              <div className="course-form">

              <div className="course-form-field">
                <p>Course Name</p>
                <input type="text" name="" placeholder="Enter Course Name" />
              </div>

              <div className="course-form-field">
                <p>Course Duration</p>
                <input type="text" placeholder="Enter Course Duration in Year" />
              </div>

              <div className="course-session-time-div">
                <div>
                  <p>Course Session Start Date</p>
                  <input type="date" />
                </div>
                
                <div>
                  <p>Course Session End Date</p>
                  <input type="date" />
                </div>
                
                <div>
                  <p>Total Duration</p>
                    <div className="course-duration-fields">
                    <input type="text" min='1' max='31' placeholder="DD" />
                    <input type="text" min='1' max='12' placeholder="MM" />
                    <input type="text" min='2024' max='2024' placeholder="YY"/>
                    <i class="fa-regular fa-circle-check"></i>
                    </div>
                </div>

              </div>

              <div className="course-status-run-exp">
                <p>Course Status</p>
                <div className="course-status-checks">
                <div><i class="fa-regular fa-circle-check"></i>&nbsp;&nbsp;<span>Running</span></div>
                <div><i class="fa-solid fa-circle-check"></i>&nbsp;&nbsp;<span>Expired</span></div>
                </div>
              </div>

              </div> 
              {/* Course From */}

            <div className="course-detail-save-btns">
              <button>Save</button>
              <button>Cancel</button>
            </div>

          </div>
          {/* Courses Form Div end */}

        </div>
        {/* Courses Form Container end */}

      </div>
      </div>
    </>
  );
};

export default AddCourses;