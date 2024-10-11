import { useState } from 'react';
import DashboardMenu from '../DashboardMenu/DashboardMenu.js';
import LogoHeader from '../LogoHeader/LogoHeader.js';
import './Expenses.css';
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'; 


const Expenses = () => {

let [popupVisible, setPopupVisible]= useState(false);

  let handlePopupShow = () => {
    setPopupVisible(true)
  }
    
  let navigate = useNavigate();

  let handleExpensesSubmit = () => {
    navigate('/expenses');
  }
  let handleExpCrossBtn = () => {
    navigate('/expenses')
    setPopupVisible(false)
  }
  let handleExpDataSubmit = () => {
    console.log("Data was Submited")
  } 

  let expTableData = [
    {
    name: 'rahul',
    amount: '2000',
    date: '15/05/2023',
  },
  {
    name: 'amit',
    amount: '500',
    date: '11/06/2023',
  }
];

  return (
    <>
      <div id="expenses-main-wrapper-with-header">
        <LogoHeader/>
        <div id="expenses-main-wrapper">
          <DashboardMenu></DashboardMenu>
          <div id="expenses-inner-wrapper">
            
            <div className="expenses-add-header">
            <h4>Expenses</h4>
            <button onClick={handlePopupShow} >+ Add Expenses</button>
            </div>

              <div className="expenses-table-container">
                <h6>Expenses</h6>
              <table className='fee-manag-expenses-table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Date & Time</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    expTableData.length>0? 
                    expTableData.map((data, ind)=>(
                      <tr key={ind}>
                        <td>{data.name}</td>
                        <td>{data.amount}</td>
                        <td>{data.date}</td>
                      </tr>
                    ))
                    :
                  <tr>
                    <td>No Expenses</td>
                  </tr>
                  }
                </tbody>
              </table>
              </div>
              {/* expenses table container end  */}
              {
                popupVisible? <div className="background-blurColor">
                <div id="expenses-popup-form">
                <RxCross2 onClick={handleExpCrossBtn} className="expenses-cross-icon"/>
                  <h6>Enter Expenses Details</h6>
                    <form onSubmit={handleExpensesSubmit} className='expenses-form-tag'>
                      <div className="expense-form-filed">
                        <label>Name</label>
                        <input type="text" placeholder='Expense Name' />
                      </div>
                      
                      <div className="expense-form-filed">
                        <label>Amount</label>
                        <input type="text" placeholder='Expense Amount' />
                      </div>
            
                      <div className="expense-div"><button onClick={handleExpDataSubmit} type="submit">Submit</button></div>
                      
                    </form>
                </div>
                </div> : null
              }
              {/* <AddExpeneses></AddExpeneses> */}
          </div>
        </div>

      </div>
    </>
  );
}

export default Expenses;
