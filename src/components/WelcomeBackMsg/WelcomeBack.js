import './WelcomeBack.css'
import { IoSearch } from "react-icons/io5";
import { SiMicrosoftexcel } from "react-icons/si";

const WelcomeBack = () => {
  return (
    <>
      <div id="powered-by-app-mingle-media-main">
            {/* <div className="powered-by-app-mingle-media-inner">
                <h6>Fee Management Software</h6>
                <p>Powered by <Link to={'https://appminglemedia.com/'} style={{textDecoration:'none'}}>AppMingle Media</Link></p>
            </div> */}
            <div className='stud-searchbar-box'>
                <input type="search" placeholder='student name, roll number, enrollment number...' />
                <IoSearch className='search-icon'/>
            </div>
            <div className='student-details-filter-box'>
                <div className='department-filter-container'>
                <select name="" id="">
                    <option value="" defaultChecked>-Select Department</option>
                </select>
                </div>
                <div className='session-filter-container'>
                <select name="" id="">
                    <option value="" defaultChecked>-Select Session</option>
                    <option value="" >2019-2020</option>
                    <option value="" >2021-2022</option>
                    <option value="" >2022-2023</option>
                    <option value="" >2023-2024</option>
                    <option value="" >2024-2025</option>
                </select>
                </div>
                <div className='course-filter-container'>
                <select name="" id="">
                    <option value="" defaultChecked>-Select Course</option>
                    <option value="" >BCA</option>
                </select>
                </div>
                <div className='batch-filter-container'>
                <select name="" id="">
                    <option value="" defaultChecked>-Select Batch</option>
                </select>
                </div>
                <button><SiMicrosoftexcel/>&nbsp;&nbsp;Download Excel</button>
            </div>
            
            </div>
    </>
  );
}

export default WelcomeBack;
