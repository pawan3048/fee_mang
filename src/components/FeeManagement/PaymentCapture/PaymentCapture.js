import React from "react";

import { useNavigate } from "react-router-dom";
import LogoHeader from "../../LogoHeader/LogoHeader"; // Ensure correct path
import DashboardMenu from "../../DashboardMenu/DashboardMenu"; // Ensure correct path
import WelcomeBack from "../../WelcomeBackMsg/WelcomeBack"; // Ensure correct path
import "./Payment.css"; // Assuming your CSS is correctly linked

const PaymentCapture = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Handle view details navigation to fee timeline
  const handleViewDetails = () => {
    navigate("/fee-timeline"); // Navigate to FeeTimeline page
  };

  return (
    <div className="payment-with-header">
      <LogoHeader />
      <div id="payment-main-wrapper">
        <DashboardMenu />
        <div id="payment-inner-wrapper">
    
            <div className="payment-header-div">
              <h5>All Payments</h5>
            </div>

            {/* Welcome Back Message */}
            <WelcomeBack />

            {/* Payments Table */}
            <div className="header-all-payments">
              <h5>All Payments</h5>
              <table className="payments-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th>Roll Number</th>
                    <th>Enrollment No</th>
                    <th>Date of Birth</th>
                    <th>Mobile Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Robert Doe</td>
                    <td>1234</td>
                    <td>20210001</td>
                    <td>1995-07-15</td>
                    <td>123-456-7890</td>
                    <td>
                      <button className="payment-add-btn" onClick={handleViewDetails}>
                        Payment Capture
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>Richard Smith</td>
                    <td>5678</td>
                    <td>20210002</td>
                    <td>1996-08-20</td>
                    <td>098-765-4321</td>
                    <td>
                      <button className="payment-add-btn" onClick={handleViewDetails}>
                        Payment Capture
                      </button>
                    </td>
                  </tr>
                  {/* Add more rows if necessary */}
                </tbody>
              </table>
            </div>
            {/* End of Payments Table */}
        
        </div>
      </div>
    </div>
  );
};

export default PaymentCapture;
