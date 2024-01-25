import React from "react";
import { Iconemessage } from "./iconemessage";
import { Iconepost } from "./iconerepost";
import { Iconelike } from "./iconelike";
import { Iconebookmark } from "./iconebookmark";
function Tweets() {
    return (
        <div className="tweets">

            <div className="tweet">
                <div className="tweet-avatar"><img src="src/images/image 1.png" alt="" /></div>
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title"><img src="src/images/Tweet-Title (3).png"></img></div>
                        <div className="tweet-text"><p className="tweet-text">President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US
                            steel industry and combat the global climate crisis.</p></div>
                    </div>
                    <div className="tweet-actions">
                            <Iconemessage />
                            <Iconepost />
                            <Iconelike />
                            <Iconebookmark />
                        


                       


                        {/* <svg width="81" height="34" viewBox="0 0 81 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="75" height="34" fill="black" />
                            <rect width="34" height="34" rx="17" fill="black" />
                            <path d="M17 25.0317H16.9883C14.8358 24.9917 8.62501 19.38 8.62501 14.065C8.62501 11.5117 10.7292 9.26999 13.1275 9.26999C15.0358 9.26999 16.3192 10.5867 16.9992 11.545C17.6775 10.5883 18.9608 9.26999 20.87 9.26999C23.27 9.26999 25.3733 11.5117 25.3733 14.0658C25.3733 19.3792 19.1617 24.9908 17.0092 25.03H17V25.0317ZM13.1283 10.5208C11.395 10.5208 9.87584 12.1775 9.87584 14.0667C9.87584 18.85 15.7375 23.73 17.0008 23.7817C18.2658 23.73 24.1258 18.8508 24.1258 14.0667C24.1258 12.1775 22.6067 10.5208 20.8733 10.5208C18.7667 10.5208 17.59 12.9675 17.58 12.9917C17.3883 13.46 16.6167 13.46 16.4242 12.9917C16.4125 12.9667 15.2367 10.5208 13.1292 10.5208H13.1283Z" fill="#6E767D" />
                            <rect width="47" height="16" transform="translate(34 9)" fill="black" />
                            <path d="M49.1929 22H50.0562V12.8403H49.1929C48.8184 13.0625 46.9204 14.4082 46.7236 14.5352V15.4556C47.0347 15.2524 48.8818 13.9385 49.1104 13.8115H49.1929V22ZM55.9087 22.1904C57.832 22.1904 59.1587 21.105 59.1587 19.5308C59.1587 18.3438 58.3525 17.4043 57.1592 17.1885V17.1123C58.1558 16.8711 58.7969 16.0713 58.7969 15.0747C58.7969 13.6528 57.5972 12.6499 55.9087 12.6499C54.2202 12.6499 53.0205 13.6592 53.0205 15.0747C53.0205 16.0776 53.668 16.8774 54.6646 17.1123V17.1885C53.4648 17.4043 52.665 18.3438 52.665 19.5308C52.665 21.0986 53.9917 22.1904 55.9087 22.1904ZM55.9087 21.4414C54.5059 21.4414 53.541 20.6353 53.541 19.4736C53.541 18.3438 54.5059 17.563 55.9087 17.563C57.3179 17.563 58.2827 18.3374 58.2827 19.4736C58.2827 20.6353 57.3115 21.4414 55.9087 21.4414ZM55.9087 16.814C54.7026 16.814 53.8774 16.1348 53.8774 15.1445C53.8774 14.1099 54.7026 13.3989 55.9087 13.3989C57.1147 13.3989 57.9399 14.1099 57.9399 15.1445C57.9399 16.1411 57.1147 16.814 55.9087 16.814ZM65.373 22H66.2173V19.9307H67.5884V19.1499H66.2173V12.8276H64.9731C62.7197 15.9951 61.5898 17.7534 60.771 19.1372V19.9307H65.373V22ZM61.6787 19.0991C62.6626 17.4614 63.5703 16.0396 65.3159 13.6592H65.373V19.1562H61.6787V19.0991Z" fill="#6E767D" />
                        </svg> */}



                        {/* <svg width="75" height="34" viewBox="0 0 75 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="75" height="34" fill="black" />
                            <rect width="34" height="34" rx="17" fill="black" />
                            <path d="M21.6083 13.225L17.4417 9.05834C17.1975 8.81417 16.8017 8.81417 16.5583 9.05834L12.3917 13.225C12.1467 13.4692 12.1467 13.865 12.3917 14.1083C12.6367 14.3517 13.0308 14.3533 13.275 14.1083L16.375 11.0083V19.5C16.375 19.845 16.655 20.125 17 20.125C17.345 20.125 17.625 19.845 17.625 19.5V11.0083L20.725 14.1083C20.8467 14.2308 21.0067 14.2917 21.1667 14.2917C21.3267 14.2917 21.4867 14.2317 21.6083 14.1083C21.8525 13.8642 21.8525 13.4692 21.6083 13.225Z" fill="#6E767D" />
                            <path d="M23.4233 25.2867H10.5767C9.52334 25.2867 8.66667 24.43 8.66667 23.3767V18.6667C8.66667 18.3217 8.94667 18.0417 9.29167 18.0417C9.63667 18.0417 9.91667 18.3217 9.91667 18.6667V23.3767C9.91667 23.7408 10.2125 24.0367 10.5767 24.0367H23.4233C23.7875 24.0367 24.0833 23.7408 24.0833 23.3767V18.6667C24.0833 18.3217 24.3633 18.0417 24.7083 18.0417C25.0533 18.0417 25.3333 18.3217 25.3333 18.6667V23.3767C25.3333 24.43 24.4767 25.2867 23.4233 25.2867Z" fill="#6E767D" />
                        </svg> */}

                        {/* <img src="/src/images/Tweet-Replies.png" alt="" className="tweet-action"/>
                <img src="src/images/Tweet-Replies (1).png" alt=""className="tweet-action" />
                <img src="src/images/Tweet-Replies (2).png" alt=""className="tweet-action" />
                <img src="src/images/Tweet-Replies (3).png" alt="" className="tweet-action"/> */}
                    </div>
                    {/* <Icone /> */}
                </div>
            </div>




            <div className="tweet">
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
            </div>





            <div className="tweet">
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
            </div>



            <div className="tweet">
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
            </div>



            <div className="tweet">
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
            </div>



        </div>
    );
}
export default Tweets;