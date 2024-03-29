import React from "react";
import TrendsList from "./trends-list";
import Trends from "./trends";
import TrendSidebar from "./trend-sidebar";

function RightSidebar() {
  return (
    <div className="trends">
      <div className="search">
        <div>
          <img src="src/images/Search-Icon.png" alt="" className="icone" />
        </div>
        <input type="text" placeholder="what's happening" className="searchs" />
      </div>

      <div className="trend">
        <TrendsList />
        <Trends />
        <Trends />
        <Trends />
        <Trends />
        <p className="footsidebar1">Show more</p>
      </div>
      <div className="trend">
        <div className="sidebartrend">
          <TrendSidebar
            image={"src/images/image 1 (2).png"}
            tweetTitle={"The New York Times"}
            tweettitledetails={"@nytimes"}
          />
          <div className="button1">
            <button className="buttonsidebar">Follow</button>
          </div>
        </div>
        <div className="sidebartrend">
          <TrendSidebar
            image={"src/images/image 1.png"}
            tweetTitle={"CNN"}
            tweettitledetails={"@CNN"}
          />
          <div className="button2">
            <button className="buttonsidebar">Follow</button>
          </div>
        </div>
        <div className="sidebartrend">
          <TrendSidebar
            image={"src/images/image 1 (1).png"}
            tweetTitle={"Twitter"}
            tweettitledetails={"@Twitter"}
          />
          <div className="button3">
            <button className="buttonsidebar">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightSidebar;
