import React, { useState } from "react";
import { Form } from "react-hook-form";


function Tweeteditor(){
const[tweet, setTweet] = useState('')
const handleChange = (e) => {
    setTweet(e.target.value)
}
const reset = () => {
    setTweet('')
}
    return(
<div className="tweet-editor">
    <img src="src/images/Profile-Photo.png" className="avatar"/>

    <div className="tweet-editor-form">
        <input type="text" placeholder="what's happening" name="tweet" value={tweet} className="tweet-editor-input" onChange={handleChange}  />
        {/* {tweet} */}
        
        <div className="tweet-editor-buttons">
            <div className="tweet-editor-actions">
                {/* <img src="src/images/Meta.png" className="tweet-editor-actions"/> */}
                <img src="src/images/icone/Media.png" alt="" className="tweet-editor-actions"/>
                <img src="src/images/icone/Gif.png" alt="" className="tweet-editor-actions"/>
                <img src="src/images/icone/Poll.png" alt="" className="tweet-editor-actions"/>
                <img src="src/images/icone/Emoji.png" alt="" className="tweet-editor-actions"/>
                <img src="src/images/icone/Schedule.png" alt="" className="tweet-editor-actions"/>
            </div>

            
<button className="button" type="post" onClick={reset} > Tweet</button>
            
            
        </div>
    </div>
</div>
     

    );
}
export default Tweeteditor;