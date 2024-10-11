import DashboardMenu from '../DashboardMenu/DashboardMenu.js';
import LogoHeader from '../LogoHeader/LogoHeader.js';
import './Settings.css'

const Settings = () => {
  return (
    <>
      <div id="settings-main-wrapper-with-header">
      <LogoHeader/>
        <div id="settings-main-wrapper">
          <DashboardMenu></DashboardMenu>
          <div id="settings-inner-wrapper">
              <h2>Settings</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;