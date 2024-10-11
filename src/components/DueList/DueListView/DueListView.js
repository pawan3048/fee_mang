import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardMenu from '../../DashboardMenu/DashboardMenu.js';
import LogoHeader from '../../LogoHeader/LogoHeader.js';
import WelcomeBack from '../../WelcomeBackMsg/WelcomeBack.js';
import './DueListView.css'

const DueListView = () => {
    const { studentId } = useParams();
    const [student, setStudent] = useState(null);
    const [error] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Simulate an API call to fetch student data
      const response = {
        id: studentId,
        name: "John Doe",
        fatherName: "Father Name",
        motherName: "Mother Name",
        dob: "2002-11-25",
        department: " Science",
        rollNo: "1234",
        enrollmentNo: "20210001",
        session: "2021-2024",
        course: "Computer Science",
        address: "NCR, India",
        email: "mail.@example.com",
        phone: "123-456-7890",
        category: "General",
        religion: "Islam",
        gender: "Female",
        image: "https://example.com/default-profile.jpg",
      };
  
      // Directly set the student data
      setStudent(response);
  
      // Optional: Handle any error that may occur during data fetching
      // You can add conditions to simulate an error if needed
      // setError("Failed to fetch student data.");
    }, [studentId]);
  
    if (error) {
      return <div className="error">Error: {error}</div>;
    }
  
    // Function to handle back button click
    const handleBackClick = () => {
      navigate("/due-list"); // Replace with the correct path for the All Students page
    };
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

        {/* Due List table */}
        <div className="details-container">
              {student && (
                <>
                  <div className="student-info">
                    <p>
                      <strong>Name:</strong> {student.name}
                    </p>
                    <p>
                      <strong>Father's Name:</strong> {student.fatherName}
                    </p>
                    <p>
                      <strong>Mother's Name:</strong> {student.motherName}
                    </p>
                    <p>
                      <strong>Department:</strong> {student.department}
                    </p>
                    <p>
                      <strong>Roll No:</strong> {student.rollNo}
                    </p>
                    <p>
                      <strong>Enrollment No:</strong> {student.enrollmentNo}
                    </p>
                    <p>
                      <strong>Session:</strong> {student.session}
                    </p>
                    <p>
                      <strong>Course:</strong> {student.course}
                    </p>
                    <p>
                      <strong>Address:</strong> {student.address}
                    </p>
                    <p>
                      <strong>Email:</strong> {student.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {student.phone}
                    </p>
                    <p>
                      <strong>Category:</strong> {student.category}
                    </p>
                    <p>
                      <strong>Religion:</strong> {student.religion}
                    </p>
                    <p>
                      <strong>Gender:</strong> {student.gender}
                    </p>
                  </div>
                  <div className="student-image-box">
                    <img src={student.image} alt={`${student.name}'s profile`} width={'250px'} height={'auto'}/>
                  </div>
                </>
              )}
        </div>
            {/* End of Due List table */}
            <div className="button-container">
              <button className="next-button" onClick={handleBackClick}>Back</button>
            </div>

        </div>
      </div>
      </div>
    </>
  );
}

export default DueListView;
