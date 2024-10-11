import { Link } from 'react-router-dom';
const FeeManagementSystem = () => {
  return (
    <>
      <div id="fee-management-system" style={{display:'flex', justifyContent:'start',alignItems:'center'}}>
        <Link to={'/dashboard'} style={{margin:'20px',padding:'20px',border:'2px solid grey',borderRadius:'5px'}}>Click to go Dashboard</Link>
      </div>
    </>
  );
}

export default FeeManagementSystem;
