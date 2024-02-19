import React from "react";
import SidebarHeader from "./sidebar-header";
import { NavLink } from "react-router-dom";

function LeftSidebar (){
    return(
    <>
    
    <div className="sidebar"> 
    <NavLink><SidebarHeader /> </NavLink>
    
    <div className="home">
            <NavLink to="/"><div className="tweet-title"><img src="src/images/Home-Fill.png" alt="" />Home</div></NavLink>
            <NavLink to="/explore"><div className="tweet-title"><img src="src/images/Explore.png" alt="" />Explore</div></NavLink>
            <NavLink to="/notification"><div className="tweet-title"><img src="src/images/Group.png" alt="" />Notification</div></NavLink>
            <NavLink to="message"><div className="tweet-title"><img src="src/images/Messages.png" alt="" />Message</div></NavLink>
            <NavLink to="/bookmarks"><div className="tweet-title"><img src="src/images/Bookmarks.png" alt="" />Bookmarks</div></NavLink>
            <NavLink to="/lists"><div className="tweet-title"><img src="src/images/Lists.png" alt="" />Lists</div></NavLink>
            <NavLink to="/profile"><div className="tweet-title"><img src="src/images/Profile.png" alt="" />Profile</div></NavLink>
            <NavLink to="/more"><div className="tweet-title"><img src="src/images/More.png" alt="" />More</div></NavLink>
    </div>
    <NavLink><button className="button-sidebar"> Tweet</button></NavLink>

        <div className="avatar-footer">
        <NavLink><img src="src/images/Profile-Photo.png" alt="" className="" /></NavLink>
            <div><img src="src/images/Body-Name.png" alt="" />
            <p>@bradley_ </p>
            </div>
            <p>...</p>
        
        </div> 
    

</div>
         
         
      </>  

    );
}
export default LeftSidebar;