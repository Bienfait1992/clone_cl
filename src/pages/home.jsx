import React from 'react';
import Header from '../components/Header';
import Tweeteditor from '../components/tweet-editor';
import Tweets from '../components/tweets';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <Tweeteditor />
      <Tweets />
    </main>
  );
}

export default Home;