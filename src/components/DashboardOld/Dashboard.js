import './Dashboard.css'
import DashboardMenu from '../DashboardMenu/DashboardMenu.js';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
    <div id="dashboard-wrapper">
    <DashboardMenu></DashboardMenu>
    
    <div className="dashboard-widgets">
        <div className="widget dashboard-search-widget">
            <div className="dashboard-search-box">
            <i class="fa-solid fa-magnifying-glass"></i><input type="search" className="dashboard-search-bar" placeholder='Search Here' />
            </div>
            <div className="dashboard-search-box-btns">
            <button className='search-icon-btn'><i class="fa-solid fa-message"></i></button>
            <button className='search-icon-btn'><i class="fa-sharp fa-solid fa-bell"></i></button>
            <Link to={'/new-student'} ><button className='dashboard-new-student'> + New Student</button></Link>
            <Link to={'/all-student'} ><button className='dashboard-all-student'> View All Student</button></Link>
            </div>
        </div>
        <div id="dashboard-content-boxes">
            <div id="overview-container">
            <h2>Dashboard</h2>
            {/* <h2>Overview</h2> */}
            <div className="student-payment-status-container">
            <div className="student-dues-widget">
                <div className="fees-status">
                    <p>Paid Fees</p>
                    <h3>Rs.{20000}</h3>
                    <p>30%</p>
                </div>
                <div className="fees-status">
                    <p>Pending Fees</p>
                    <h3>Rs.{50000}</h3>
                    <p>70%</p>
                </div>
            </div>
            <div className="widget dues-students">
                <p>Dues Students List</p>
                <div className="dues-stud-list-container">
                    <span><i class="fa-solid fa-user"></i></span>
                    <span><i class="fa-solid fa-user"></i></span>
                    <span><i class="fa-solid fa-user"></i></span>
                    <span><i class="fa-solid fa-user"></i></span>
                </div>
            </div>
            </div>{/* comment-end-messages  */}
            <div id="comment-and-messages-container">
                <h3>Comment & Message</h3>
            </div>
            </div>
            <div id="recent-transection">
                <h3>Recent Transection</h3>
                <div className="student-transaction">
                <i class="fa-regular fa-user"></i>
                <p>Amit Singh</p>
                <p>Rs.{500}</p>
                </div>
                <div className="student-transaction">
                <i class="fa-regular fa-user"></i>
                <p>Amit Singh</p>
                <p>Rs.{500}</p>
                </div>
                <div className="student-transaction">
                <i class="fa-regular fa-user"></i>
                <p>Amit Singh</p>
                <p>Rs.{500}</p>
                </div>
                <div className="dashboard-statistic-conatiner">
                    <h3>Statistic</h3>
                    <img src={require('./../../Images/statistics-image.png')} alt="statistic" width={'300px'} height={'auto'} />
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default Dashboard;
