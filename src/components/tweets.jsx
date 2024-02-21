import React from "react";
import { Icone } from "./iconemessage";
import jsondata from "../data/initial-data.json"
import axios from "axios";

const gat = async () => {
try{
const response = await axios.get('https://65d376c1522627d50108f5ab.mockapi.io/twitt/twitt')
return response.data
}
catch (error){
    alert("il ya une erreur")
}
};
const tweetss = await gat()

function Tweets() {

    const tweets = jsondata.tweets
    return (
        <div className="tweets">

            {
                tweetss.map((tweet) => (
                    <div className="tweet">
                        <div className="tweet-avatar"><img src={tweet.avatar} alt="" /></div>
                        <div className="tweet-content">
                            <div className="tweet-body">
                                <div className="tweet-title">
                                    {tweet.username}
                                    <img src={tweet.verified} alt="" />
                                    {tweet.cnn}
                                    {tweet.time}
                                </div>

                                <div className="tweet-text"><p className="tweet-text">{tweet.text}</p></div>
                            </div>
                            <div className="tweet-actions">
                                <Icone classeimage="commenticone"
                                    imagesvg="M18.705 8.86835L15.2483 8.86002H15.2467C11.6017 8.86002 8.74667 11.7158 8.74667 15.3617C8.74667 18.7767 11.4017 21.3667 14.9675 21.5033V24.6933C14.9675 24.7833 15.0042 24.9317 15.0675 25.0292C15.1858 25.2167 15.3875 25.3183 15.5942 25.3183C15.7092 25.3183 15.825 25.2867 15.9292 25.22C16.1492 25.08 21.3233 21.77 22.6692 20.6317C24.2542 19.29 25.2025 17.3233 25.205 15.3717V15.3575C25.2 11.7183 22.3467 8.86835 18.705 8.86752V8.86835ZM21.8608 19.6783C20.9158 20.4783 17.8092 22.5159 16.2175 23.5475V20.8917C16.2175 20.5467 15.9383 20.2667 15.5925 20.2667H15.2625C12.2125 20.2667 9.99751 18.2034 9.99751 15.3617C9.99751 12.4167 12.3042 10.11 15.2475 10.11L18.7033 10.1183H18.705C21.6483 10.1183 23.955 12.4233 23.9567 15.365C23.9542 16.9567 23.1717 18.5683 21.8617 19.6783H21.8608Z"
                                />
                                <Icone classeimage="iconerepost"
                                    imagesvg="M26.8083 20.0583C26.565 19.8142 26.1692 19.8142 25.925 20.0583L24.075 21.9083V13.375C24.075 11.6517 22.6725 10.25 20.95 10.25H16.075C15.73 10.25 15.45 10.53 15.45 10.875C15.45 11.22 15.73 11.5 16.075 11.5H20.95C21.9833 11.5 22.825 12.3417 22.825 13.375V21.9083L20.975 20.0583C20.7308 19.8142 20.335 19.8142 20.0917 20.0583C19.8483 20.3025 19.8467 20.6983 20.0917 20.9417L23.0083 23.8583C23.1292 23.9808 23.2892 24.0417 23.45 24.0417C23.6108 24.0417 23.7692 23.9817 23.8917 23.8583L26.8083 20.9417C27.0533 20.6983 27.0533 20.3025 26.8083 20.0583ZM17.925 22.7917H13.05C12.0167 22.7917 11.175 21.95 11.175 20.9167V12.3833L13.025 14.2333C13.1483 14.3558 13.3083 14.4167 13.4683 14.4167C13.6283 14.4167 13.7883 14.3558 13.91 14.2333C14.1542 13.9892 14.1542 13.5933 13.91 13.35L10.9933 10.4333C10.7492 10.1883 10.3533 10.1883 10.11 10.4333L7.19334 13.35C6.94834 13.5933 6.94834 13.9892 7.19334 14.2333C7.43834 14.4775 7.83251 14.4775 8.07667 14.2333L9.92667 12.3833V20.9167C9.92667 22.64 11.3292 24.0417 13.0517 24.0417H17.9267C18.2717 24.0417 18.5517 23.7617 18.5517 23.4167C18.5517 23.0717 18.2708 22.7917 17.9267 22.7917H17.925Z"
                                />

                                <Icone classeimage="iconelike"
                                    imagesvg="M17 25.0317H16.9883C14.8358 24.9917 8.62501 19.38 8.62501 14.065C8.62501 11.5117 10.7292 9.26999 13.1275 9.26999C15.0358 9.26999 16.3192 10.5867 16.9992 11.545C17.6775 10.5883 18.9608 9.26999 20.87 9.26999C23.27 9.26999 25.3733 11.5117 25.3733 14.0658C25.3733 19.3792 19.1617 24.9908 17.0092 25.03H17V25.0317ZM13.1283 10.5208C11.395 10.5208 9.87584 12.1775 9.87584 14.0667C9.87584 18.85 15.7375 23.73 17.0008 23.7817C18.2658 23.73 24.1258 18.8508 24.1258 14.0667C24.1258 12.1775 22.6067 10.5208 20.8733 10.5208C18.7667 10.5208 17.59 12.9675 17.58 12.9917C17.3883 13.46 16.6167 13.46 16.4242 12.9917C16.4125 12.9667 15.2367 10.5208 13.1292 10.5208H13.1283Z"
                                />
                                <Icone classeimage="iconebook"
                                    imagesvg="M21.6083 13.225L17.4417 9.05834C17.1975 8.81417 16.8017 8.81417 16.5583 9.05834L12.3917 13.225C12.1467 13.4692 12.1467 13.865 12.3917 14.1083C12.6367 14.3517 13.0308 14.3533 13.275 14.1083L16.375 11.0083V19.5C16.375 19.845 16.655 20.125 17 20.125C17.345 20.125 17.625 19.845 17.625 19.5V11.0083L20.725 14.1083C20.8467 14.2308 21.0067 14.2917 21.1667 14.2917C21.3267 14.2917 21.4867 14.2317 21.6083 14.1083C21.8525 13.8642 21.8525 13.4692 21.6083 13.225Z"
                                // imagesvg="M23.4233 25.2867H10.5767C9.52334 25.2867 8.66667 24.43 8.66667 23.3767V18.6667C8.66667 18.3217 8.94667 18.0417 9.29167 18.0417C9.63667 18.0417 9.91667 18.3217 9.91667 18.6667V23.3767C9.91667 23.7408 10.2125 24.0367 10.5767 24.0367H23.4233C23.7875 24.0367 24.0833 23.7408 24.0833 23.3767V18.6667C24.0833 18.3217 24.3633 18.0417 24.7083 18.0417C25.0533 18.0417 25.3333 18.3217 25.3333 18.6667V23.3767C25.3333 24.43 24.4767 25.2867 23.4233 25.2867Z" 
                                />
                            </div>

                        </div>
                    </div>
                ))
            }



            {/* <div className="tweet">
                <div className="tweet-avatar"><img src="src/images/image 1.png" alt="" /></div>
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title"><img src="src/images/Tweet-Title (3).png"></img></div>
                        <div className="tweet-text"><p className="tweet-text">President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US
                            steel industry and combat the global climate crisis.</p></div>
                    </div>
                    <div className="tweet-actions">
                        <Icone classeimage="commenticone"
                            imagesvg="M18.705 8.86835L15.2483 8.86002H15.2467C11.6017 8.86002 8.74667 11.7158 8.74667 15.3617C8.74667 18.7767 11.4017 21.3667 14.9675 21.5033V24.6933C14.9675 24.7833 15.0042 24.9317 15.0675 25.0292C15.1858 25.2167 15.3875 25.3183 15.5942 25.3183C15.7092 25.3183 15.825 25.2867 15.9292 25.22C16.1492 25.08 21.3233 21.77 22.6692 20.6317C24.2542 19.29 25.2025 17.3233 25.205 15.3717V15.3575C25.2 11.7183 22.3467 8.86835 18.705 8.86752V8.86835ZM21.8608 19.6783C20.9158 20.4783 17.8092 22.5159 16.2175 23.5475V20.8917C16.2175 20.5467 15.9383 20.2667 15.5925 20.2667H15.2625C12.2125 20.2667 9.99751 18.2034 9.99751 15.3617C9.99751 12.4167 12.3042 10.11 15.2475 10.11L18.7033 10.1183H18.705C21.6483 10.1183 23.955 12.4233 23.9567 15.365C23.9542 16.9567 23.1717 18.5683 21.8617 19.6783H21.8608Z"
                        />
                        <Icone classeimage="iconerepost"
                            imagesvg="M26.8083 20.0583C26.565 19.8142 26.1692 19.8142 25.925 20.0583L24.075 21.9083V13.375C24.075 11.6517 22.6725 10.25 20.95 10.25H16.075C15.73 10.25 15.45 10.53 15.45 10.875C15.45 11.22 15.73 11.5 16.075 11.5H20.95C21.9833 11.5 22.825 12.3417 22.825 13.375V21.9083L20.975 20.0583C20.7308 19.8142 20.335 19.8142 20.0917 20.0583C19.8483 20.3025 19.8467 20.6983 20.0917 20.9417L23.0083 23.8583C23.1292 23.9808 23.2892 24.0417 23.45 24.0417C23.6108 24.0417 23.7692 23.9817 23.8917 23.8583L26.8083 20.9417C27.0533 20.6983 27.0533 20.3025 26.8083 20.0583ZM17.925 22.7917H13.05C12.0167 22.7917 11.175 21.95 11.175 20.9167V12.3833L13.025 14.2333C13.1483 14.3558 13.3083 14.4167 13.4683 14.4167C13.6283 14.4167 13.7883 14.3558 13.91 14.2333C14.1542 13.9892 14.1542 13.5933 13.91 13.35L10.9933 10.4333C10.7492 10.1883 10.3533 10.1883 10.11 10.4333L7.19334 13.35C6.94834 13.5933 6.94834 13.9892 7.19334 14.2333C7.43834 14.4775 7.83251 14.4775 8.07667 14.2333L9.92667 12.3833V20.9167C9.92667 22.64 11.3292 24.0417 13.0517 24.0417H17.9267C18.2717 24.0417 18.5517 23.7617 18.5517 23.4167C18.5517 23.0717 18.2708 22.7917 17.9267 22.7917H17.925Z"
                        />

                        <Icone classeimage="iconelike"
                            imagesvg="M17 25.0317H16.9883C14.8358 24.9917 8.62501 19.38 8.62501 14.065C8.62501 11.5117 10.7292 9.26999 13.1275 9.26999C15.0358 9.26999 16.3192 10.5867 16.9992 11.545C17.6775 10.5883 18.9608 9.26999 20.87 9.26999C23.27 9.26999 25.3733 11.5117 25.3733 14.0658C25.3733 19.3792 19.1617 24.9908 17.0092 25.03H17V25.0317ZM13.1283 10.5208C11.395 10.5208 9.87584 12.1775 9.87584 14.0667C9.87584 18.85 15.7375 23.73 17.0008 23.7817C18.2658 23.73 24.1258 18.8508 24.1258 14.0667C24.1258 12.1775 22.6067 10.5208 20.8733 10.5208C18.7667 10.5208 17.59 12.9675 17.58 12.9917C17.3883 13.46 16.6167 13.46 16.4242 12.9917C16.4125 12.9667 15.2367 10.5208 13.1292 10.5208H13.1283Z"
                        />
                        <Icone classeimage="iconebook"
                            imagesvg="M21.6083 13.225L17.4417 9.05834C17.1975 8.81417 16.8017 8.81417 16.5583 9.05834L12.3917 13.225C12.1467 13.4692 12.1467 13.865 12.3917 14.1083C12.6367 14.3517 13.0308 14.3533 13.275 14.1083L16.375 11.0083V19.5C16.375 19.845 16.655 20.125 17 20.125C17.345 20.125 17.625 19.845 17.625 19.5V11.0083L20.725 14.1083C20.8467 14.2308 21.0067 14.2917 21.1667 14.2917C21.3267 14.2917 21.4867 14.2317 21.6083 14.1083C21.8525 13.8642 21.8525 13.4692 21.6083 13.225Z"
                        // imagesvg="M23.4233 25.2867H10.5767C9.52334 25.2867 8.66667 24.43 8.66667 23.3767V18.6667C8.66667 18.3217 8.94667 18.0417 9.29167 18.0417C9.63667 18.0417 9.91667 18.3217 9.91667 18.6667V23.3767C9.91667 23.7408 10.2125 24.0367 10.5767 24.0367H23.4233C23.7875 24.0367 24.0833 23.7408 24.0833 23.3767V18.6667C24.0833 18.3217 24.3633 18.0417 24.7083 18.0417C25.0533 18.0417 25.3333 18.3217 25.3333 18.6667V23.3767C25.3333 24.43 24.4767 25.2867 23.4233 25.2867Z" 
                        />
                    </div>

                </div>
            </div> */}




            {/* <div className="tweet">
                <div className="tweet-avatar"><img src="src/images/Tweet-Profile-Photo.png" alt="" /></div>
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title"><img src="src/images/Tweet-Title.png"></img></div>
                        <div className="tweet-text"><p className="tweet-text">Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish,
                            and reimagine, a connection to cultivation and the land</p></div>
                    </div>
                    <div className="tweet-image"><img src="src/images/image 3.png" alt="" className="tweet-image" /></div>
                    <div className="tweet-actions">
                        <img src="src/images/Tweet-Replies.png" alt="" className="tweet-action" />
                        <img src="src/images/Tweet-Replies (1).png" alt="" className="tweet-action" />
                        <img src="src/images/Tweet-Replies (2).png" alt="" className="tweet-action" />
                        <img src="src/images/Tweet-Replies (3).png" alt="" className="tweet-action" />
                    </div>
                </div>
            </div> */}





            {/* <div className="tweet">
                <div className="tweet-avatar"><img src="src/images/image 1 (1).png" alt="" /></div>
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title"><img src="src/images/Tweet-Title.png"></img></div>
                        <div className="tweet-text"><p className="tweet-text">BIG NEWS lol jk still Twitter</p></div>
                    </div>

                    <div className="tweet-actions">
                        <img src="src/images/Tweet-Replies.png" alt="" className="tweet-action" />
                        <img src="src/images/Tweet-Replies (1).png" alt="" className="tweet-action" />
                        <img src="src/images/Tweet-Replies (2).png" alt="" className="tweet-action" />
                        <img src="src/images/Tweet-Replies (3).png" alt="" className="tweet-action" />
                    </div>
                </div>
            </div> */}



            {/* <div className="tweet">
                <div className="tweet-avatar"><img src="src/images/image 1 (1).png" alt="" /></div>
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title"><img src="src/images/Tweet-Title.png"></img></div>
                        <div className="tweet-text"><p className="tweet-text"></p>hello literally everyone</div>
                    </div>

                    <div className="tweet-actions">
                        <img src="src/images/Tweet-Replies.png" alt="" className="tweet-action" />
                        <img src="src/images/Tweet-Replies (1).png" alt="" className="tweet-action" />
                        <img src="src/images/Tweet-Replies (2).png" alt="" className="tweet-action" />
                        <img src="src/images/Tweet-Replies (3).png" alt="" className="tweet-action" />
                    </div>
                </div>
            </div> */}



            {/* <div className="tweet">
                <div className="tweet-avatar"><img src="src/images/image 1 (1).png" alt="" /></div>
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title"><img src="src/images/Tweet-Title.png"></img></div>
                        <div className="tweet-text"><p className="tweet-text"></p>hello literally everyone</div>
                    </div>

                    <div className="tweet-image"><img src="src/images/image 3.png" alt="" className="tweet-image" /></div>
                    <div className="tweet-actions">
                        <img src="src/images/Tweet-Replies.png" alt="" className="tweet-action" />
                        <img src="src/images/Tweet-Replies (1).png" alt="" className="tweet-action" />
                        <img src="src/images/Tweet-Replies (2).png" alt="" className="tweet-action" />
                        <img src="src/images/Tweet-Replies (3).png" alt="" className="tweet-action" />
                    </div>

                </div>
            </div> */}



        </div>
    );
}
export default Tweets;