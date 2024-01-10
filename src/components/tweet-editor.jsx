import React from "react";

function Tweeteditor(){
    return(
<div className="tweet-editor">
    <img src="src/images/Profile-Photo.png" className="avatar"/>

    <div className="tweet-editor-form">
        <input type="text" placeholder="what's happening" className="tweet-editor-input"/>
        
        <div className="tweet-editor-buttons">
            <div className="tweet-editor-actions">
                <img src="src/images/Meta.png" className="tweet-editor-actions"/>
            </div>

            
<button className="button"> Tweet</button>
            
            
        </div>
    </div>
</div>
     

    );
}
export default Tweeteditor;