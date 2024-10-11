import DashboardMenu from '../DashboardMenu/DashboardMenu.js';
import LogoHeader from '../LogoHeader/LogoHeader.js';
import './Income.css'

const Income = () => {
  return (
    <>
      <div id="income-main-wrapper-with-header">
      <LogoHeader></LogoHeader>
        <div id="income-main-wrapper">
          <DashboardMenu></DashboardMenu>
          <div id="income-inner-wrapper">
              <h2>Income</h2>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzB89P9RzcJVsoMRVOoDXf0_bNOE9uEJI4FQ&s" alt="income_graph" width={'408px'} height={'auto'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Income;
