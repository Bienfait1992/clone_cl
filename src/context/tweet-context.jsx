import { createContext } from "react";

const tweetContext =  createContext({
    tweets: [],
    setTweets: () => { }
  });

export default tweetContext;