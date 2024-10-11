import DashboardMenu from "../../DashboardMenu/DashboardMenu.js";
import "./StudentList.css";

const StudentList = () => {
  return (
    <>
      <div id="students-list-main-wrapper">
        <DashboardMenu></DashboardMenu>
        <div id="students-list-inner-wrapper">
          <h2>STUDENT LIST</h2>
        </div>
      </div>
    </>
  );
};

export default StudentList;
