function TrendSidebar({tweetTitle,tweettitledetails,imageverified, image}){
    return(
    <>
    <div className="trendesidbar">
            <img src={image} alt="" />
            <div>
                <p className="tweet-title">{ tweetTitle }</p>
                <p className="tweet-title-details">{ tweettitledetails }</p>  
            </div>
            <div><img src="src/images/Verified.png" alt="" /></div>
            <div className="button1"><button className="buttonsidebar">Follow</button></div>
    </div>

    </>

    );
}
export default TrendSidebar;