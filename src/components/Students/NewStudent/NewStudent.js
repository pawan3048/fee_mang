import DashboardMenu from "../../DashboardMenu/DashboardMenu.js";
import LogoHeader from "../../LogoHeader/LogoHeader.js";
// import WelcomeBack from "../../WelcomeBackMsg/WelcomeBack.js";
import "./NewStudent.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState, useRef } from "react";

// Generator function to yield forms one by one
function* formGenerator() {
  yield <Form2 />;
  yield <Form3 />;
  yield <Form4 />;
  yield <Form5 />;
  yield <Form6 />;
  yield <Form7 />;
}

// Example Form components

const Form2 = () => {
  // Personal_Details States
  const [personalDetailUpIconSatate, setPersonalDetailUpIconSatate] =
    useState(false);
  const [personalDetailbgColorSatate, setPersonalDetailBgColorSatate] =
    useState(true);
  const [personalDetailformSatate, setPersonalDetailformSatate] =
    useState(true);

  // Personal Details
  const personalDetailHeadingFun = () => {
    setPersonalDetailUpIconSatate(!personalDetailUpIconSatate);
    setPersonalDetailBgColorSatate(!personalDetailbgColorSatate);
    setPersonalDetailformSatate(!personalDetailformSatate);
  };

  return (
    <>
      {/* Student Personal Details  */}
      <div className="personal-detail-student-main-div">
        <h5
          onClick={personalDetailHeadingFun}
          className={
            personalDetailbgColorSatate
              ? "new-student-form-heading"
              : "new-student-form-blue-heading"
          }
        >
          <span>Personal Details</span>
          <span>
            {" "}
            {personalDetailUpIconSatate ? (
              <>
                {/*down-icon*/} <FaChevronDown />{" "}
              </>
            ) : (
              <>
                {" "}
                {/*up-icon*/} <FaChevronUp />{" "}
              </>
            )}{" "}
          </span>
        </h5>

        <div
          className={`${
            personalDetailformSatate
              ? "personal-detail-new-student-form"
              : "form-display-none"
          }`}
        >
          <div className="stud-personal-detail-from-field">
            <label>Student Name</label>
            <input type="text" placeholder="Enter Student Name" />
          </div>

          <div className="stud-personal-detail-from-field">
            <label>Father Name</label>
            <input type="text" placeholder="Enter Father Name" />
          </div>

          <div className="stud-personal-detail-from-field">
            <label>Mother Name</label>
            <input type="text" placeholder="Enter Mother Name" />
          </div>

          <div className="stud-personal-detail-from-field">
            <label>Student Email Id</label>
            <input type="text" placeholder="Enter Student Email Id" />
          </div>

          <div className="stud-personal-detail-from-field">
            <label>Student Contact Number</label>
            <input type="text" placeholder="Enter Student Contact Number" />
          </div>

          <div className="stud-personal-detail-from-field">
            <label>Student Alternate Contact Number</label>
            <input
              type="text"
              placeholder="Enter Alternate Student Contact Number"
            />
          </div>

          <div className="stud-personal-detail-from-field-doubles">
            <div>
              <label>Date Of Birth</label>
              <input type="date" />
            </div>

            <div>
              <label>Gender</label>
              <select>
                <option value="">--Select</option>
              </select>
            </div>
          </div>

          <div className="stud-personal-detail-from-field-doubles">
            <div>
              <label>Category</label>
              <select>
                <option value="">--Select</option>
              </select>
            </div>

            <div>
              <label>Religion</label>
              <select>
                <option value="">--Select</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* form-2-div-end  */}
    </>
  );
};

const Form3 = () => {
  // Address_States
  const [addressUpIconSatate, setAddressUpIconSatate] = useState(false);
  const [addressbgColorSatate, setAddressBgColorSatate] = useState(true);
  const [addressformSatate, setAddressformSatate] = useState(true);

  // Address
  const addressHeadingFun = () => {
    setAddressUpIconSatate(!addressUpIconSatate);
    setAddressBgColorSatate(!addressbgColorSatate);
    setAddressformSatate(!addressformSatate);
  };

  return (
    <>
      {/* Student Address */}
      <div className="new-student-address-detail">
        <h5
          onClick={addressHeadingFun}
          className={
            addressbgColorSatate
              ? "new-student-form-heading"
              : "new-student-form-blue-heading"
          }
        >
          <span>Address</span>
          <span>
            {addressUpIconSatate ? (
              <>
                {/*down-icon*/} <FaChevronDown />{" "}
              </>
            ) : (
              <>
                {" "}
                {/*up-icon*/} <FaChevronUp />{" "}
              </>
            )}
          </span>
        </h5>

        <div
          className={`${
            addressformSatate
              ? "address-and-crosspond-div"
              : "form-display-none"
          }`}
        >
          <div className="permanent-address-container">
            <h6>Permanent Address</h6>

            <div className="permanent-address-div">
              <div className="permanent-address-field">
                <label>Address1</label>
                <input type="text" placeholder="Enter First Line Address" />
              </div>

              <div className="permanent-address-field">
                <label>Address2</label>
                <input type="text" placeholder="Enter Second Line Address" />
              </div>

              <div className="permanent-address-field">
                <label>Address3</label>
                <input type="text" placeholder="Enter Third Line Address" />
              </div>

              <div className="permanent-address-field">
                <div className="permanent-address-field-multiple">
                  <div>
                    <label>State</label>
                    <select name="" id="">
                      <option value="">--Select</option>
                    </select>
                  </div>

                  <div>
                    <label>City</label>
                    <select name="" id="">
                      <option value="">--Select</option>
                    </select>
                  </div>
                </div>
                {/* permanent-address-field-multiple  */}
              </div>

              <div className="permanent-address-field">
                <div className="permanent-address-field-multiple">
                  <div>
                    <label>Pincode</label>
                    <input type="text" placeholder="Enter ZIP or PIN Code" />
                  </div>
                </div>
              </div>
            </div>
            {/* permanent-address-div  */}
          </div>
          {/* permanent-address-container  */}

          <div className="correspondence-address-container">
            <h6>Correspondence Address</h6>
            <p className="corres-same-as-permanent-add">
              Same as Permanent Address <input type="checkbox" />
            </p>

            <div className="crosspond-all-fields">
              <div className="crosspond-address-fields">
                <div className="crosspond-address-field">
                  <label>Address1</label>
                  <input type="text" placeholder="Enter First Line Address" />
                </div>

                <div className="crosspond-address-field">
                  <label>Address2</label>
                  <input type="text" placeholder="Enter First Line Address" />
                </div>
              </div>
              {/* crosspond-address-fields  */}

              <div className="crosspond-address-field-multiple">
                <div>
                  <label>State</label>
                  <select name="" id="">
                    <option value="">--Select</option>
                  </select>
                </div>

                <div>
                  <label>City</label>
                  <select name="" id="">
                    <option value="">--Select</option>
                  </select>
                </div>

                <div>
                  <label>Pincode</label>
                  <input type="text" placeholder="Enter ZIP or PIN code" />
                </div>
              </div>
            </div>
            {/* crosspnd all fields  */}
          </div>

          {/* addressAndCrosspond DIV */}
        </div>
      </div>
      {/* form-3-end  */}
    </>
  );
};

const Form4 = () => {
  // Admission_Details
  const [admissionDetailUpIconSatate, setAdmissionDetailUpIconSatate] =
    useState(false);
  const [admissionDetailbgColorSatate, setAdmissionDetailBgColorSatate] =
    useState(true);
  const [admissionDetailformSatate, setAdmissionDetailformSatate] =
    useState(true);

  // Admission_Details
  const admissionDetailHeadingFun = () => {
    setAdmissionDetailUpIconSatate(!admissionDetailUpIconSatate);
    setAdmissionDetailBgColorSatate(!admissionDetailbgColorSatate);
    setAdmissionDetailformSatate(!admissionDetailformSatate);
  };

  return (
    <>
      {/* Student Admission details  */}
      <div className="student-admission-detail-main-div">
        <div className="admision-detail-heading-container">
          <h5
            onClick={admissionDetailHeadingFun}
            className={
              admissionDetailbgColorSatate
                ? "new-student-form-heading"
                : "new-student-form-blue-heading"
            }
          >
            <span>Admission Details</span>
            <span>
              {admissionDetailUpIconSatate ? (
                <>
                  {/*down-icon*/} <FaChevronDown />{" "}
                </>
              ) : (
                <>
                  {" "}
                  {/*up-icon*/} <FaChevronUp />{" "}
                </>
              )}
            </span>
          </h5>
        </div>

        <div
          className={`${
            admissionDetailformSatate
              ? "student-admission-all-fields"
              : "form-display-none"
          }`}
        >
          <div className="student-admission-detail-rows">
            <div>
              <p>Admission From Date</p>
              <input type="date" className="inputdata inputdate" />
            </div>

            <div>
              <p>Enrollment Date</p>
              <input type="date" className="inputdata inputdate" />
            </div>

            <div>
              <p>Aadhar Number</p>
              <input
                type="text"
                placeholder="enter your adhar number"
                className="inputdata"
              />
            </div>

            <div>
              <p>PAN Number</p>
              <input
                type="text"
                placeholder="enter your adhar number"
                className="inputdata"
              />
            </div>
          </div>
          {/* student-admission-detail-rows 1  */}

          <div className="student-admission-detail-rows2">
            <div>
              <p>Enrollment Number</p>
              <input
                type="text"
                className="inputdata"
                placeholder="Enter your adhhar number"
              />
            </div>

            <div>
              <p>Roll Number</p>
              <input
                type="text"
                className="inputdata"
                placeholder="enter your adhaar number"
              />
            </div>
          </div>
          {/* student-admission-detail-rows 2  */}
        </div>
        {/* student-admission-all-fields-div-end  */}
      </div>
      {/* form-4-end  */}
    </>
  );
};

const Form5 = () => {
  // Previous_Qualification
  const [
    previousQualificationUpIconSatate,
    setPreviousQualificationUpIconSatate,
  ] = useState(false);
  const [
    previousQualificationbgColorSatate,
    setPreviousQualificationBgColorSatate,
  ] = useState(true);
  const [previousQualificationformSatate, setPreviousQualificationformSatate] =
    useState(true);

  // Previous_Qualification
  const previousQualificationHeadingFun = () => {
    setPreviousQualificationUpIconSatate(!previousQualificationUpIconSatate);
    setPreviousQualificationBgColorSatate(!previousQualificationbgColorSatate);
    setPreviousQualificationformSatate(!previousQualificationformSatate);
  };

  return (
    <>
      {/* previous qulalification  */}
      <div className="previous-qualification">
        <div>
          <h5
            onClick={previousQualificationHeadingFun}
            className={
              previousQualificationbgColorSatate
                ? "new-student-form-heading"
                : "new-student-form-blue-heading"
            }
          >
            <span> Previous Qualification </span>
            <span>
              {previousQualificationUpIconSatate ? (
                <>
                  {/*down-icon*/} <FaChevronDown />{" "}
                </>
              ) : (
                <>
                  {" "}
                  {/*up-icon*/} <FaChevronUp />{" "}
                </>
              )}
            </span>
          </h5>
        </div>

        <div
          className={`${
            previousQualificationformSatate
              ? "previos-qualif-all-text-inputs"
              : "form-display-none"
          }`}
        >
          <div className="previous-qualification-rows">
            <div>
              <p>Qualification</p>
            </div>
            <div>
              <p>Board/University</p>
            </div>
            <div>
              <p>Year</p>
            </div>
            <div>
              <p>Max. Mark</p>
            </div>
            <div>
              <p>Mark Obtained </p>
            </div>
            <div>
              <p>Mark Obtained </p>
            </div>
            <div>
              <p>Subject </p>
            </div>
          </div>

          <div className="previous-qualification-rows">
            <div>
              <p className="previous-qualification-sub-heading">High School</p>
            </div>
            <div>
              <input className="inputdata2" />
            </div>
            <div>
              <input className="inputdata2" />
            </div>
            <div>
              <input className="inputdata2" />
            </div>
            <div>
              <input className="inputdata2" />
            </div>
            <div>
              <input className="inputdata2" />
            </div>
            <div>
              <input className="inputdata2" />
            </div>
          </div>

          <div className="previous-qualification-rows">
            <div>
              <p className="previous-qualification-sub-heading">
                Intermediate 10 + 2{" "}
              </p>
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
          </div>

          <div className="previous-qualification-rows">
            <div>
              <p className="previous-qualification-sub-heading">Graduation</p>
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
          </div>

          <div className="previous-qualification-rows">
            <div>
              <p className="previous-qualification-sub-heading">
                Post Graduation
              </p>
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
          </div>

          <div className="previous-qualification-rows">
            <div>
              <p className="previous-qualification-sub-heading">Any Other</p>
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
            <div>
              <input type="text" className="inputdata2" />
            </div>
          </div>
        </div>
        {/* all text and inputs div  */}
      </div>
      {/* form-5-end  */}
    </>
  );
};

const Form6 = () => {
  // Upload_Doc. States
  const [uploadDocUpIconSatate, setUploadDocUpIconSatate] = useState(false);
  const [uploadDocbgColorSatate, setUploadDocBgColorSatate] = useState(true);
  const [uploadDocformSatate, setUploadDocformSatate] = useState(true);

  // Student_Doc._Upload
  const uploadDocHeadingFun = () => {
    setUploadDocUpIconSatate(!uploadDocUpIconSatate);
    setUploadDocBgColorSatate(!uploadDocbgColorSatate);
    setUploadDocformSatate(!uploadDocformSatate);
  };

  return (
    <>
      {/* Student DOC. Upload */}
      <div className="upload-doc-main-div">
        <h5
          onClick={uploadDocHeadingFun}
          className={
            uploadDocbgColorSatate
              ? "new-student-form-heading"
              : "new-student-form-blue-heading"
          }
        >
          <span> Upload Document </span>
          <span>
            {uploadDocUpIconSatate ? (
              <>
                {/*down-icon*/} <FaChevronDown />{" "}
              </>
            ) : (
              <>
                {" "}
                {/*up-icon*/} <FaChevronUp />{" "}
              </>
            )}
          </span>
        </h5>

        <div
          className={
            uploadDocbgColorSatate
              ? "upload-docs-all-fields"
              : "form-display-none"
          }
        >
          <div className="upload-doc-rows">
            <div>
              <p>Upload Signature</p>
              <input type="file" className="inputdata" />
            </div>

            <div>
              <p>Upload Image</p>
              <input type="file" className="inputdata" />
            </div>

            <div>
              <p>Class 10</p>
              <input type="file" className="inputdata" />
            </div>
          </div>

          <div className="upload-doc-rows">
            <div>
              <p>Class 12</p>
              <input type="file" className="inputdata" />
            </div>

            <div>
              <p>Graduation</p>
              <input type="file" className="inputdata" />
            </div>

            <div>
              <p>Diploma</p>
              <input type="file" className="inputdata" />
            </div>
          </div>

          <div className="upload-doc-rows">
            <div>
              <p>Aadhar</p>
              <input type="file" className="inputdata" />
            </div>

            <div>
              <p>Domicile Certificate</p>
              <input type="file" className="inputdata" />
            </div>

            <div>
              <p>Income Certificate</p>
              <input type="file" className="inputdata" />
            </div>
          </div>

          <div className="upload-doc-rows">
            <div>
              <p>Certificate</p>
              <input type="file" className="inputdata" />
            </div>
          </div>

          {/* upload-doc-all-fields-div  */}
        </div>
      </div>
      {/* student upload doc form end  */}
    </>
  );
};

const Form7 = () => {
  return (
    <>
      <div className="student-form-details-save-btn">
        <button className="student-form-save-btn">
          Save
        </button>
      </div>
    </>
  );
};

const NewStudent = () => {
  const [displayedForms, setDisplayedForms] = useState([]); // Array of displayed forms
  const formGen = useRef(formGenerator()); // Reference to the generator function

  function handleNextForm() {
    const { value, done } = formGen.current.next();
    if (!done) {
      setDisplayedForms((prevForms) => [...prevForms, value]); // Append the next form
    }
  }

  // Enroll_Information States
  const [enrollInfoUpIconSatate, setEnrollInfoUpIconSatate] = useState(false);
  const [enrollInfobgColorSatate, setEnrollInfoBgColorSatate] = useState(true);
  const [enrollInfoformSatate, setEnrollInfoformSatate] = useState(true);

  //Enroll_Stud_Heading_Funcation
  const enrollStudHeadingFun = () => {
    setEnrollInfoUpIconSatate(!enrollInfoUpIconSatate);
    setEnrollInfoBgColorSatate(!enrollInfobgColorSatate);
    setEnrollInfoformSatate(!enrollInfoformSatate);
  };

  return (
    <>
      <div className="new-student-container">
        <LogoHeader />
        <div id="new-students-main-wrapper">
          <DashboardMenu></DashboardMenu>
          <div id="new-students-inner-wrapper">
            <h5>Add New Student</h5>
            {/* <WelcomeBack />                 */}
            <div id="new-student-all-forms">
              <div>
                <div className="enroll-student-main-div">
                  {/* Enroll Student  */}
                  <h5
                    onClick={enrollStudHeadingFun}
                    className={
                      enrollInfobgColorSatate
                        ? "new-student-form-heading"
                        : "new-student-form-blue-heading"
                    }
                  >
                    <span>Enrollment Information</span>
                    <span>
                      {enrollInfoUpIconSatate ? (
                        <>
                          {/*down-icon*/} <FaChevronDown />{" "}
                        </>
                      ) : (
                        <>
                          {" "}
                          {/*up-icon*/} <FaChevronUp />{" "}
                        </>
                      )}
                    </span>
                  </h5>
                  <div
                    className={`${
                      enrollInfoformSatate
                        ? "enroll-new-student-form"
                        : "form-display-none"
                    }`}
                  >
                    <div className="enroll-stud-from-field">
                      <label>Select Department</label>
                      <select name="" className="enroll-stud-form-select">
                        <option value="">--Select</option>
                        <option value="">Fee Management</option>
                      </select>
                    </div>

                    <div className="enroll-stud-from-field">
                      <label>Select Course</label>
                      <select name="" className="enroll-stud-form-select">
                        <option value="">--Select</option>
                      </select>
                    </div>

                    <div className="enroll-stud-from-field">
                      <label>Select Session</label>
                      <select name="" className="enroll-stud-form-select">
                        <option value="">--Select</option>
                      </select>
                    </div>

                    <div className="enroll-stud-from-field">
                      <label>Select Batch</label>
                      <select name="" className="enroll-stud-form-select">
                        <option value="">--Select</option>
                        <option value="Fee_Management">
                          Fee Management System
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* form-1-div-end      */}
                </div>

                {/* Form Loop Condition  */}
                {displayedForms.length === 0 && null}

                {displayedForms.map((Form, index) => (
                  <div key={index}>{Form}</div>
                ))}
                {displayedForms.length < 6 && ( // Show button only if all forms aren't complete
                  <div className="stud-enroll-btn-container">
                    <button type="next" onClick={handleNextForm}>
                      Next
                    </button>
                    <button type="cancel">Cancel</button>
                  </div>
                )}
              </div>

              {/* buttons  */}

              {/* btns-end  */}
            </div>
            {/* new student all forms  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewStudent;
