import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';
import LeftNav from '../components/LeftNav';
import NewPostForm from '../components/Post/NewPostForm';
import Thread from '../components/Profile/Thread';
import Log from '../components/Log';
import Trends from '../components/Trends';
import FriendHint from '../components/Profile/FriendHint';

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
          {uid ? <NewPostForm /> : <Log signin={true} signup={false} />}
        </div>
        <Thread />
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <div className="wrapper">
            <Trends />
            {uid && <FriendHint />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
