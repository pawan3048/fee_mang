import DashboardMenu from "../../../DashboardMenu/DashboardMenu.js";
import LogoHeader from "../../../LogoHeader/LogoHeader.js";
import WelcomeBack from "../../../WelcomeBackMsg/WelcomeBack.js";
import "./ManagementStudentView.css";

const ManagementStudentView = () => {
    const response = {
        id: 'studentId',
        name: "John Doe",
        fatherName: "Father Name",
        motherName: "Mother Name",
        dob: "2002-11-25",
        mobile: "134595623",
        altMobile: "134595623",
        department: " Science",
        enrollmentNo: "20210001",
        session: "2021-2024",
        course: "Computer Science",
        admissionDate: '01/04/2024',
        enrollmentDate: '20/05/2024',
        rollNo: "1234",
        preQualif:'10th',
        aadhar: '4725-1836-4528',
        pan: 'DRHBE5656V',
        address: "NCR, India",
        email: "mail.@example.com",
        phone: "123-456-7890",
        category: "General",
        religion: "Hindu",
        gender: "Female",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s",
      };
  return (
    <>
      <div id="management-main-wrapper-with-header">
        <LogoHeader />
        <div id="management-main-wrapper">
          <DashboardMenu></DashboardMenu>

          <div className="management-student-detail-main-container">

            <div id="management-inner-wrapper">
                
              {/* btn Header  */}
              <div className="management-btns-header">
                <h5>Management</h5>
                <div className="management-page-head-btns-container">
                  <button className="add-new-student-btn">
                    + Add New Student
                  </button>
                  <button className="fee-management-btn">Fee Management</button>
                </div>
              </div>

              {/* welcome back msg  */}
              <WelcomeBack></WelcomeBack>

              <div className="management-form-main-container">
                <div className="management-page-student-data">
                  <div className="manag-stud-profile-container">
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s'} alt="student_profile" className="manag-student-profile" width={'200px'} height={'auto'} />
                  </div>
                  <p>
                    <b>Student Name :</b> <span>{response.name}</span>
                  </p>
                  <p>
                    <b>Father's Name :</b> <span>{response.father}</span>
                  </p>
                  <p>
                    <b>Mother's Name :</b> <span>{response.mother}</span>
                  </p>
                  <p>
                    <b>DOB :</b> <span>{response.dob}</span>
                  </p>
                  <p>
                    <b>Mobile Number :</b> <span>{response.mobile}</span>
                  </p>
                  <p>
                    <b>Alternate Number :</b> <span>{response.altMobile}</span>
                  </p>
                  <p>
                    <b>Gender :</b> <span>{response.gender}</span>
                  </p>
                  <p>
                    <b>Category :</b> <span>{response.category}</span>
                  </p>
                  <p>
                    <b>Religion :</b> <span>{response.religion}</span>
                  </p>
                  <p>
                    <b>Departmenet :</b> <span>{response.department}</span>
                  </p>
                  <p>
                    <b>Session :</b> <span>{response.session}</span>
                  </p>
                  <p>
                    <b>Course :</b> <span>{response.course}</span>
                  </p>
                  <p>
                    <b>Permenet Address :</b> <span>{response.address}</span><br /><br />
                  </p>
                  <p>
                    <b>Correspondence Address :</b> <span>{response.address}</span>
                  </p>
                </div>
                {/* second section  */}
                <div className="management-page-student-data">
                  <p>
                    <b>Admission Date :</b> <span>{response.admissionDate}</span>
                  </p>
                  <p>
                    <b>Enrollment Date :</b> <span>{response.enrollmentDate}</span>
                  </p>
                  <p>
                    <b>Aadhar Number :</b> <span>{response.aadhar}</span>
                  </p>
                  <p>
                    <b>PAN Number :</b> <span>{response.pan}</span>
                  </p>
                  <p>
                    <b>Enrollment Number :</b> <span>{response.enrollmentNo}</span>
                  </p>
                  <p>
                    <b>Roll Number :</b> <span>{response.rollNo}</span>
                  </p>
                  <p>
                    <b>Previous Qualification :</b> <span>{response.preQualif}</span>
                  </p>
                  <p>
                    <b>Upload Document :</b> <span>{response.uploadDoc}</span>
                  </p>
                  <p>
                    <b>Fee Management :</b> <span>{response.feeManagement}</span>
                  </p>
                
                </div>

              </div>
              {/* Both Form  */}
            </div>
            {/* End of Students table */}
          </div>
          {/* management-student-detail-main-container  */}
        </div>
      </div>
    </>
  );
};

export default ManagementStudentView;
