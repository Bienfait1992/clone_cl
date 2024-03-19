import tweetContext from "../../context/tweet-context"

import { useState, useEffect } from "react";

import axios from "axios";


export default function ContextProvider({children}){
    const [tweets, setTweets] = useState([]);
  
    useEffect(() => {
      const getDatas = async () => {
        try {
          const TweetsResponse = await axios.get("https://65d376c1522627d50108f5ab.mockapi.io/twitt/twitt");
          setTweets(TweetsResponse.data);
        } catch (err) {
          console.error("Erreur lors de la recuperation des donnees: ", err);
        }
      };
  
      getDatas();
    }, []);
  
    
    return (
      <tweetContext.Provider value={{ tweets, setTweets }}>
        {children} 
      </tweetContext.Provider>
    )
  }