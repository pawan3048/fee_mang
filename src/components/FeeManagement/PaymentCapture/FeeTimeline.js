import React, { useState } from "react";
import { MdClear } from "react-icons/md";
import LogoHeader from "../../LogoHeader/LogoHeader"; // Ensure correct path
import DashboardMenu from "../../DashboardMenu/DashboardMenu"; // Ensure correct path
import WelcomeBack from "../../WelcomeBackMsg/WelcomeBack"; // Ensure correct path
import "./FeeTimeline.css"; // Ensure the CSS file is correctly linked
import { SlCalender } from "react-icons/sl";

const FeeTimeline = () => {

  const [payNowHide, setPayNowHide] = useState(true)
  const [popupShow, setPopupShow] = useState(true);

  const feeDetails = {
    startDate: "2023-09-01",
    endDate: "2023-09-30",
    academicFees: 10000,
    lateFine: 100,
    extraAmount: 200,
    totalAmount: 1300,
  };
  const handlePopShowHide = () => {
    setPopupShow(!popupShow)
  }
  const handlePaymentNowBtn = (e) => {
    e.preventDefault();
    //change
    setPayNowHide(false)
  }

  return (
    <div className="timeline-with-header">
      <LogoHeader />
      <div id="timeline-main-wrapper">
        <DashboardMenu />
        <div id="timeline-inner-wrapper">
          <div className="superhead">
            <div className="timeline-header-div">
              <h5>All Payments</h5>
            </div>

            <WelcomeBack />

            {/* Fee Timeline Section */}
            <div className="fee-timeline-page">
              <h2>Fee Timeline</h2>
              <div className="timeline-container">
                <div className="timeline">
                  <div className="timeline-bar"></div> {/* Timeline gray vertical bar */}
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h5>Fee Details</h5>
                      <div className="fee-details-container">
                        <div className="fee-detail">
                        <SlCalender style={{marginBottom:'5px'}}/> Start Date
                          <div style={{marginLeft:'20px'}}>{feeDetails.startDate}</div>
                        </div>
                        <div className="fee-detail">
                        <SlCalender style={{marginBottom:'5px'}}/> End Date
                          <div style={{marginLeft: '20px'}}>{feeDetails.endDate}</div>
                        </div>
                        <div className="fee-detail column-combined">
                          <p><span>Academic Fees:</span> <span>₹{feeDetails.academicFees}</span></p>
                          <p><span>Late Fine:</span> <span>₹{feeDetails.lateFine}</span></p>
                          <p><span>Extra Amount:</span> <span>₹{feeDetails.extraAmount}</span></p>
                          <p><b><span>Total Amount:</span> <span>₹{feeDetails.academicFees + feeDetails.lateFine + feeDetails.extraAmount}</span></b></p>
                          {
                            payNowHide? <button className="pay-now-btn" onClick={handlePopShowHide}>Pay Now</button>:<button className="pay-now-btn bg-success">Download Recipt</button>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Receipt Modal */}
            <div className={`${!popupShow?'payment-popup-box':'popup-display-non'}`}>
            <div className="payment-page-bg-blur">
              <div className="payment-popup-card">
                <h4 style={{ textAlign: "center" }}>Payment Receipt</h4>
                <MdClear onClick={handlePopShowHide} className="payment-popup-cancel-btn" />
                <form>
                  <div className="payment-popup-field">
                    <label>Student Name</label>
                    <span>John</span>
                  </div>
                  <div className="payment-popup-field">
                    <label>Father Name</label>
                    <span>Anthony</span>
                  </div>
                  <div className="payment-popup-field">
                    <label>Department</label>
                    <span>Computer Science</span>
                  </div>
                  <div className="payment-popup-field">
                    <label>Roll No.</label>
                    <span>R123</span>
                  </div>
                  <div className="payment-popup-field">
                    <label>Enrollment No.</label>
                    <span>E16512</span>
                  </div>
                  <div className="payment-popup-field">
                    <label>Course</label>
                    <span>BCA</span>
                  </div>
                  <div className="payment-popup-field">
                    <label>Session</label>
                    <span>2023-2024</span>
                  </div>
                  <div className="payment-popup-field">
                    <label>Amount</label>
                    <span>₹{`${10_500}`}</span>
                  </div>
                  <div className="payment-types">
                  <label>Payment Type</label>
                    <div className="type-pay">
                      <input type="radio" name="pay-type" value="cash" required/>
                      &nbsp;
                      <span>Cash</span>
                    </div>
                    <div>
                      <input type="radio" name="pay-type" value="online" required/>
                      &nbsp;
                      <span>Online</span>
                    </div>
                  </div>
                  <div className="pay-now-field">
                    <button className="pay-now-btn" onClick={handlePaymentNowBtn}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
            </div>
  
            </div>
            {/* End of Fee Timeline Section */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeTimeline;
