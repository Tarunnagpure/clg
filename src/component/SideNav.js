//import useState hook to create menu collapse state
import React, { useState } from "react";


//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import "./Header.css";

const SideNav = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
 const history=useHistory();
  const handleEnquiryRoute=()=>{
    history.push("/Enquiry");
  }
  const handleRegisterRoute=()=>{
    history.push("/Register")
  }
 const handleEnrollmentRoute=()=>{
   history.push("/Enrollment")
 }
 const handleTransportationRoute=()=>{
   history.push("/Transportation")
 }


  return (
    <>
      <div id="Sidnav">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="d-flex p-3 justify-content-between">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
              <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<FaList />}onClick={handleEnquiryRoute}>Enquiry</MenuItem>
              <MenuItem icon={<FaRegHeart />}onClick={handleRegisterRoute}>Register</MenuItem>
              <MenuItem icon={<RiPencilLine />}onClick={handleEnrollmentRoute}>Enrollment</MenuItem>
              <MenuItem icon={<BiCog />}onClick={handleTransportationRoute}>Transportation</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideNav;