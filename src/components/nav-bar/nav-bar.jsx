import { NavLink } from "react-router-dom";
import SidebarHeader from "../sidebar-header";


function Navbar(){
    return(
<>
        {/* <nav> */}
            
    <div className="home">
    <ul>
            <li>
                <NavLink to="/"><SidebarHeader /> </NavLink>
            </li>
            <li>
                <NavLink to="/"><div className="tweet-title"><img src="src/images/Home-Fill.png" alt="" />Home</div></NavLink>
            </li>
            <li>
                <NavLink to="/"><div className="tweet-title"><img src="src/images/Explore.png" alt="" />Explore</div></NavLink>
            </li>
            <li>
                <NavLink to="/"><div className="tweet-title"><img src="src/images/Group.png" alt="" />Notification</div></NavLink>
            </li>
            <li>
                <NavLink to="/"><div className="tweet-title"><img src="src/images/Messages.png" alt="" />Message</div></NavLink>
            </li>
            <li>
                <NavLink to="/"><div className="tweet-title"><img src="src/images/Bookmarks.png" alt="" />Bookmarks</div></NavLink>
            </li>
            <li>
                <NavLink to="/"><div className="tweet-title"><img src="src/images/Lists.png" alt="" />Lists</div></NavLink>
            </li>
            <li>
                <NavLink to="/"><div className="tweet-title"><img src="src/images/Profile.png" alt="" />Profile</div></NavLink>
            </li>
            <li>
                <NavLink to="/"><div className="tweet-title"><img src="src/images/More.png" alt="" />More</div> </NavLink>
            </li>
    </ul>
    </div>
    {/* </nav> */}
    <button className=""> Tweet</button>
    </>
     );
 }
    
export default Navbar;

