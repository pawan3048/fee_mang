import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../components/Login/Login.js';
import FeeManagementSystem from "../components/FeeManagementSystem.js";
import NewDepartment from "../components/Department/NewDepartment/NewDepartment.js"
import AllDepartment from "../components/Department/AllDepartment/AllDepartment.js"
import NewStudent from '../components/Students/NewStudent/NewStudent.js';
import AllStudent from '../components/Students/AllStudent/AllStudent.js';
import StudentDetails from "../components/Students/AllStudent/StudentDetails/StudentDetails.js";
import StudentList from '../components/Students/StudentList/StudentList.js';
// import Courses from "../components/Courses/Courses.js";
import AddCourses from "../components/Courses/AddCourses/AddCourses.js";
import AllCourses from "../components/Courses/AllCourses/AllCourses.js";
import AddBatch from "../components/Batches/AddBatch/AddBatch.js";
import AllBatch from "../components/Batches/AllBatch/AllBatch.js";
import Dashboard from '../components/Dashboard/Dashboard.js';
import Fees from "../components/FeeManagement/Fees/Fees.js";
import Management from "../components/FeeManagement/Management/Management.js";
import ManagementStudentView from "../components/FeeManagement/Management/ManagementStudentView/ManagementStudentView.js";
import Income from "../components/Income/Income.js";
import DueList from "../components/DueList/DueList.js";
import DueListView from "../components/DueList/DueListView/DueListView.js";
// import AddExpeneses from "../components/Expenses/AddExpenses/AddExpeneses.js";
import Expenses from "../components/Expenses/Expenses.js";
import Settings from "../components/Settings/Settings.js";
import PaymentCapture from "../components/FeeManagement/PaymentCapture/PaymentCapture.js";
import FeeTimeline from "../components/FeeManagement/PaymentCapture/FeeTimeline.js";

const AllRouters = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<FeeManagementSystem />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/new-student"} element={<NewStudent />} />
          <Route path={"/all-student"} element={<AllStudent />} />
          <Route path={"/student-details"} element={<StudentDetails />} />
          <Route path={"/student-list"} element={<StudentList />} />
          <Route path={"/add-courses"} element={<AddCourses />} />
          <Route path={"/all-courses"} element={<AllCourses />} />
          <Route path={"/add-batch"} element={<AddBatch />} />
          <Route path={"/all-batch"} element={<AllBatch />} />
          <Route path={"/new-department"} element={<NewDepartment />} />
          <Route path={"/all-department"} element={<AllDepartment />} />
          <Route path={"/fee"} element={<Fees/>} />
          <Route path={"/management"} element={<Management/>} />
          <Route path={"/student-detail-view"} element={<ManagementStudentView/>} />
          <Route path={"/payment-capture"} element={<PaymentCapture />} />
          <Route path="/fee-timeline" element={<FeeTimeline />} />
          <Route path={"/income"} element={<Income />} />
          <Route path={"/due-list"} element={<DueList />} />
          <Route path={"/due-list-view"} element={<DueListView />} />
          <Route path={"/expenses"} element={<Expenses />} />
          {/* <Route path={"/add-expenses"} element={<AddExpeneses />} /> */}
          <Route path={"/settings"} element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default AllRouters;
