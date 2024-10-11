import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown,FaChevronUp } from "react-icons/fa";
import { LuArrowLeftToLine, LuClock3 } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { IoBagRemoveOutline, IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { GoFileDirectory } from "react-icons/go";
import { MdPendingActions } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { SlLogout } from "react-icons/sl";
import './DashboardMenu.css'
import { useState } from 'react';

const DashboardMenu = () => {

  let [studentLinksVisible, setStudentLinksVisible] = useState(false);
  let [studentLinkUpIcon, setStudentLinkUpIcon] = useState(false);
  let [studentbgColorChange, setStudentbgColorChange] = useState(false);

  let [courseLinksVisible, setCourseLinksVisible] = useState(false);
  let [courseLinkUpIcon, setCourseLinkUpIcon] = useState(false);
  let [coursebgColorChange, setCoursebgColorChange] = useState(false);

  let [departmentLinksVisible, setDepartmentLinksVisible] = useState(false);
  let [departmentLinkUpIcon, setDepartmentLinkUpIcon] = useState(false);
  let [departmentbgColorChange, setDepartmentbgColorChange] = useState(false);
  
  let [batchLinksVisible, setBatchLinksVisible] = useState(false);
  let [batchLinkUpIcon, setBatchLinkUpIcon] = useState(false);
  let [batchbgColorChange, setBatchbgColorChange] = useState(false);
  
  let [feeManagementLinksVisible, setFeeManagementLinksVisible] = useState(false);
  let [feeManagementLinkUpIcon, setFeeManagementLinkUpIcon] = useState(false);
  let [feeManagementbgColorChange, setFeeManagementbgColorChange] = useState(false);
  
  // let [settingLinksVisible, setSettingLinksVisible] = useState(false);
  let handleStudLinkDrop=()=>{
    setStudentLinksVisible(!studentLinksVisible);
    setStudentLinkUpIcon(!studentLinkUpIcon);
    setStudentbgColorChange(!studentbgColorChange);

    // icon offs 
    // setStudentLinkUpIcon(false)
    setCourseLinkUpIcon(false)
    setDepartmentLinkUpIcon(false)
    setBatchLinkUpIcon(false)
    setFeeManagementLinkUpIcon(false)

    // bgcolor offs 
    setCoursebgColorChange(false)
    setDepartmentbgColorChange(false)
    setBatchbgColorChange(false)
    setFeeManagementbgColorChange(false)

    // offs
    setCourseLinksVisible(false)
    setDepartmentLinksVisible(false)
    setBatchLinksVisible(false)
    setFeeManagementLinksVisible(false)
    setStudentbgColorChange(!studentbgColorChange);
  }
  let handleCourseLinkDrop=()=>{
    setCourseLinksVisible(!courseLinksVisible);
    setCourseLinkUpIcon(!courseLinkUpIcon);
    setCoursebgColorChange(!coursebgColorChange);
    
    // icon offs 
    setStudentLinkUpIcon(false)
    setDepartmentLinkUpIcon(false)
    setBatchLinkUpIcon(false)
    setFeeManagementLinkUpIcon(false)

    // bgcolor offs 
    setStudentbgColorChange(false)
    setDepartmentbgColorChange(false)
    setBatchbgColorChange(false)
    setFeeManagementbgColorChange(false)

    // offs 
    setStudentLinksVisible(false)
    setDepartmentLinksVisible(false)
    setBatchLinksVisible(false)
    setFeeManagementLinksVisible(false)
  }
  let handleDepLinkDrop=()=>{
    setDepartmentLinksVisible(!departmentLinksVisible);
    setDepartmentLinkUpIcon(!departmentLinkUpIcon);
    setDepartmentbgColorChange(!departmentbgColorChange);
    
    // icon offs 
    setStudentLinkUpIcon(false)
    setCourseLinkUpIcon(false)
    setBatchLinkUpIcon(false)
    setFeeManagementLinkUpIcon(false)

    // bgcolor offs 
    setStudentbgColorChange(false)
    setCoursebgColorChange(false)
    setBatchbgColorChange(false)
    setFeeManagementbgColorChange(false)
    
    // offs 
    setStudentLinksVisible(false)
    setCourseLinksVisible(false)
    setBatchLinksVisible(false)
    setFeeManagementLinksVisible(false)
  }
  let handleBatchLinkDrop=()=>{
    setBatchLinksVisible(!batchLinksVisible);
    setBatchLinkUpIcon(!batchLinkUpIcon);
    setBatchbgColorChange(!batchbgColorChange)
    
    // icon offs 
    setStudentLinkUpIcon(false)
    setCourseLinkUpIcon(false)
    setDepartmentLinkUpIcon(false)
    setFeeManagementLinkUpIcon(false)

    // bgcolor offs 
    setStudentbgColorChange(false)
    setCoursebgColorChange(false)
    setDepartmentbgColorChange(false)
    setFeeManagementbgColorChange(false)

    // offs 
    setStudentLinksVisible(false)
    setCourseLinksVisible(false)
    setDepartmentLinksVisible(false)
    setFeeManagementLinksVisible(false)
  }
  let handleFeeManagLinkDrop=()=>{
    setFeeManagementLinksVisible(!feeManagementLinksVisible);
    setFeeManagementLinkUpIcon(!feeManagementLinkUpIcon);
    setFeeManagementbgColorChange(!feeManagementbgColorChange);
    
    // icon offs 
    setStudentLinkUpIcon(false)
    setCourseLinkUpIcon(false)
    setDepartmentLinkUpIcon(false)
    setBatchLinkUpIcon(false)

    // bgcolor offs 
    setStudentbgColorChange(false)
    setCoursebgColorChange(false)
    setDepartmentbgColorChange(false)
    setBatchbgColorChange(false)

    // offs 
    setStudentLinksVisible(false)
    setCourseLinksVisible(false)
    setDepartmentLinksVisible(false)
    setBatchLinksVisible(false)
  }
  return (
    <>
        <aside className="dashboard-aside" >
            
                <ul id="aside-menu">
                <li  className='menu-link-item'><div><NavLink to={'/dashboard'}><AiOutlineHome/>&nbsp;&nbsp;&nbsp;Dashboard</NavLink></div></li>
                
                    <div className="stud-dropdown-main-button">
                    
                    <li onClick={handleStudLinkDrop} id={`${studentbgColorChange?'menu-link-bgColor':null}`} className="menu-link-item"><div><IoPersonOutline/>&nbsp;&nbsp;<NavLink>Students</NavLink></div>{ !studentLinkUpIcon? <FaChevronDown style={{fontSize:'10px'}}/> : <FaChevronUp style={{fontSize:'10px'}}/>}</li>
                    
                    {
                      studentLinksVisible?<div className='student-dropdown'>
                      <ul className='menu-link-dropdown-ul'>
                        <li className='menu-link-dropdown-li'><Link to={'/new-student'}>Add New Student</Link></li>
                        <li className='menu-link-dropdown-li'><Link to={'/all-student'}>All Student</Link></li>
                      </ul>
                      <hr />
                    </div>:null
                    }

                    </div>
                    {/* student-link-end  */}

                    <div className="course-dropdown-main-btn">
                    <li onClick={handleCourseLinkDrop} id={`${coursebgColorChange?'menu-link-bgColor':null}`} className="menu-link-item course-menu-link-item"><div><IoBagRemoveOutline/>&nbsp;&nbsp;<Link>Course</Link></div>{!courseLinkUpIcon?<FaChevronDown style={{fontSize:'10px'}}/> : <FaChevronUp style={{fontSize:'10px'}}/>}</li>
                    {
                      courseLinksVisible? <div className='course-dropdown'>
                      <ul className='menu-link-dropdown-ul'>
                        <li className='menu-link-dropdown-li'><Link to={'/add-courses'} >Add New Course</Link></li>
                        <li className='menu-link-dropdown-li'><Link to={'/all-courses'} >All Course</Link></li>
                      </ul>
                      <hr />
                    </div>:null
                    }
                    </div>


                    <div className="department-dropdown-main-btn">
                    <li onClick={handleDepLinkDrop} id={`${departmentbgColorChange?'menu-link-bgColor':null}`} className="menu-link-item department-menu-link-item">
                      <div>
                        <LuArrowLeftToLine/>
                        &nbsp;&nbsp;
                        <Link>Department</Link>
                        </div>
                        {!departmentLinkUpIcon?<FaChevronDown style={{fontSize:'10px'}}/> : <FaChevronUp style={{fontSize:'10px'}}/>}
                        </li>

                    {
                      departmentLinksVisible? <div className='department-dropdown'>
                      <ul className='menu-link-dropdown-ul'>
                        <li className='menu-link-dropdown-li'><Link to={"/new-department"}>Add New Department</Link></li>
                        <li className='menu-link-dropdown-li'><Link to={'/all-department'}>All Department</Link></li>
                      </ul>
                      <hr />
                    </div>:null
                    }

                    </div>
                    {/* batch  */}

                    <div className="batch-dropdown-main-btn">
                    <li onClick={handleBatchLinkDrop} id={`${batchbgColorChange?'menu-link-bgColor':null}`} className="menu-link-item batch-menu-link-item"><div><IoBagRemoveOutline/>&nbsp;&nbsp;<Link>Batch</Link></div>{!batchLinkUpIcon?<FaChevronDown style={{fontSize:'10px'}}/> : <FaChevronUp style={{fontSize:'10px'}}/>}</li>
                    {batchLinksVisible?<div className='batch-dropdown'>
                      <ul className='menu-link-dropdown-ul'>
                        <li className='menu-link-dropdown-li'><Link to={'/add-batch'} >Add Batch</Link></li>
                        <li className='menu-link-dropdown-li'><Link to={'/all-batch'} >All Batch</Link></li>
                      </ul>
                      <hr />
                    </div>:null}
                    </div>
                    {/* batch end  */}

                    {/* department dropdown end  */}
                    <div className="feeManagement-dropdown-main-btn">
                    <li onClick={handleFeeManagLinkDrop} className="menu-link-item">
                      <div>
                        <LuClock3/>
                        &nbsp;&nbsp;
                        <NavLink>Fee Management</NavLink>
                      </div>
                      {
                        !feeManagementLinksVisible?<FaChevronDown style={{fontSize:'10px'}}/> : <FaChevronUp style={{fontSize:'10px'}}/>
                      }
                    </li>
                    {
                      feeManagementLinksVisible?<div className='feeManagement-dropdown'>
                      <ul className='menu-link-dropdown-ul'>
                        <li className='menu-link-dropdown-li'><Link to={"/fee"}>Add New Fees</Link></li>
                        <li className='menu-link-dropdown-li'><Link to={'/management'}>Management</Link></li>
                        <li className='menu-link-dropdown-li'><Link to={'/payment-capture'}>Payment Capture</Link></li>
                      </ul>
                      <hr />
                    </div>:null
                    }
                    </div>

                    <li className='menu-link-item'>
                      <div>
                        <GoFileDirectory/>
                        &nbsp;&nbsp;
                      <Link to={"/income"}>Income</Link>
                      </div>
                    </li>
                    <li className='menu-link-item'>
                      <div><MdPendingActions/>&nbsp;&nbsp;
                      <Link to={"/due-list"}>Due List</Link>
                      </div>
                    </li>
                    <li className='menu-link-item'><div><GiExpense/>&nbsp;&nbsp;<Link to={"/expenses"}>Expenses</Link></div></li>
                    <li className='menu-link-item'><div><IoSettingsOutline/>&nbsp;&nbsp;<Link to={"/settings"}>Settings</Link></div></li>
                    <li className='menu-link-item'><div><SlLogout/>&nbsp;&nbsp;<Link to={"/login"}>Logout</Link></div></li>
                </ul>
                
        </aside>
    {/* dashboard-wrapper  */}
    </>
  );
}

export default DashboardMenu;