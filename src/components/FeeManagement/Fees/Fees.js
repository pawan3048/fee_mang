import { useState } from "react";
import DashboardMenu from "../../DashboardMenu/DashboardMenu.js";
import LogoHeader from "../../LogoHeader/LogoHeader.js";
import WelcomeBack from "../../WelcomeBackMsg/WelcomeBack.js";
import "./Fees.css";
import { FaChevronDown } from "react-icons/fa";

const Fees = () => {
  const [step, setStep] = useState(1);
  const [showSplitTotal, setShowSplitTotal] = useState(false);
  const [splitSections, setSplitSections] = useState([{}]);
  const [lateFeeToggles, setLateFeeToggles] = useState([false]); // Array to manage late fee toggle for each split section

  // Handle the "Next" button click to show the next form
  const handleNext = () => {
    setStep(2); // Switch to step 2 form
  };

  // Add more split sections
  const addSplitSection = () => {
    setSplitSections((prevSections) => [...prevSections, {}]);
    setLateFeeToggles((prevToggles) => [...prevToggles, false]); // Add a new false entry for the late fee toggle
  };

  // Handle the "Late Fee" toggle based on radio button selection for each split section
  const handleLateFeeToggle = (index, show) => {
    setLateFeeToggles((prevToggles) =>
      prevToggles.map((toggle, i) => (i === index ? show : toggle))
    );
  };

  return (
    <>
      <div id="fees-main-wrapper-with-header">
        <LogoHeader />
        <div id="fees-main-wrapper">
          <DashboardMenu />
          <div id="fees-inner-wrapper">
            <div className="fee-heading-btns-container">
              <h5>Add New Fee</h5>
              <div>
                <button className="fee-add-new-stud"> + Add New Student</button>
                <button className="fee-management">Fee Management</button>
              </div>
            </div>
            <WelcomeBack />

            <div className="fee-main-div">
              <div className="container">
                {/* Step 1 Form */}
                {step === 1 && (
                  <>
                    <div className="dropdown">
                      <button className="dropdown-toggle">
                        Select to add
                        <span className="faicon">
                          <FaChevronDown />
                        </span>
                      </button>
                      <div className="dropdown-content">
                        <span>Fee</span>
                      </div>
                    </div>

                    <div className="new-fee-form">
                      <div className="fee-form-field">
                        <label>Select Department</label>
                        <select name="" className="fee-form-select">
                          <option value="">--Select</option>
                          {/* Add department options here */}
                        </select>
                      </div>

                      <div className="fee-form-field">
                        <label>Select Session</label>
                        <select name="" className="fee-form-select">
                          <option value="">--Select</option>
                          {/* Add session options here */}
                        </select>
                      </div>

                      <div className="fee-form-field">
                        <label>Select Course</label>
                        <select name="" className="fee-form-select">
                          <option value="">--Select</option>
                          {/* Add course options here */}
                        </select>
                      </div>

                      <div className="fee-form-field">
                        <label>Select Batch</label>
                        <select name="" className="fee-form-select">
                          <option value="">--Select</option>
                          {/* Add batch options here */}
                        </select>
                      </div>
                    </div>

                    <div className="fee-btn-container">
                      <button type="button" onClick={handleNext}>
                        Next
                      </button>
                      <button type="button">Cancel</button>
                    </div>
                  </>
                )}

                {/* Step 2 Form */}
                {step === 2 && (
                  <>
                    <button className="select-add">
                      Select to add
                      <span className="faicon">
                        <FaChevronDown />
                      </span>
                    </button>
                    <button className="fee-button">
                      Fee
                      <span className="faicon">
                        <FaChevronDown />
                      </span>
                    </button>
                    <div className="split-fee-form">
                      <div className="fee-form-field-container">
                        <div className="fee-form-field">
                          <label>Fee Name</label>
                          <input
                            type="text"
                            placeholder="Eg. Academic Fee, Event Fee, etc..."
                          />
                        </div>

                        <div className="fee-form-field">
                          <label>Total Value</label>
                          <input type="number" placeholder="10" />
                        </div>

                        {/* Button to show Split Total Amount section */}
                        <button
                          className="split-fee-btn"
                          onClick={() => setShowSplitTotal(true)}
                        >
                          + Split Fee
                        </button>
                      </div>

                      {showSplitTotal && (
                        <>
                          <center><h3>Split Total Amount</h3></center>
                          {splitSections.map((_, index) => (
                            <div className="fee-form-split-section" key={index}>
                              <div className="fee-form-field">
                                <label>Name of This Split Part</label>
                                <input
                                  type="text"
                                  placeholder="Eg. 1st Semester"
                                />
                              </div>

                              <div className="fee-form-field">
                                <label>Start Date</label>
                                <input type="date" />
                              </div>

                              <div className="fee-form-field">
                                <label>End Date</label>
                                <input type="date" />
                              </div>

                              <div className="fee-form-field">
                                <label>Value</label>
                                <input
                                  type="number"
                                  placeholder="Rs.48745678"
                                />
                              </div>

                              {/* Button to add more Split Fee sections */}
                              <button
                                className="split-more-btn"
                                onClick={addSplitSection}
                              >
                                + Split More
                              </button>

                              <div className="late-form-field">
                                <label>Late Fine</label>
                                <div>
                                  <input
                                    type="radio"
                                    id={`yes-${index}`}
                                    name={`late_fine_${index}`}
                                    value="yes"
                                    onClick={() =>
                                      handleLateFeeToggle(index, true)
                                    }
                                  />
                                  <label htmlFor={`yes-${index}`}>YES</label>
                                  <input
                                    type="radio"
                                    id={`no-${index}`}
                                    name={`late_fine_${index}`}
                                    value="no"
                                    defaultChecked
                                    onClick={() =>
                                      handleLateFeeToggle(index, false)
                                    }
                                  />
                                  <label htmlFor={`no-${index}`}>NO</label>
                                </div>
                              </div>

                              {/* Render Late Fee sections based on selection */}
                              {lateFeeToggles[index] && (
                                <div className="late-fee-section">
                                  <div className="fee-form-field">
                                    <label>Start Date</label>
                                    <input type="date" />
                                  </div>

                                  <div className="fee-form-field">
                                    <label>End Date</label>
                                    <input type="date" />
                                  </div>

                                  <div className="fee-form-field">
                                    <label>Value</label>
                                    <input
                                      type="number"
                                      placeholder="Rs.48745678 / Day"
                                    />
                                  </div>
                                  <div className="fee-form-checkbox">
                                    <input type="checkbox" />
                                    <label>Till Submit</label>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <div className="fee-btn-container">
                      <button type="button">Next</button>
                      <button type="button">Cancel</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fees;
