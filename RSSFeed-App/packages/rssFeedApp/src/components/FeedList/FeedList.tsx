
import React from 'react';
import FeedForm from '../FeedForm/FeedForm';
//import FeedItem from '../FeedItem';
import './FeedList.css';

const FeedList = () => {
  

  return (
    <aside className='FeedList'>
      <h2 className='FeedList__title'>Subscriptions</h2>
      <ul className="FeedList__list">
    
      </ul>
      <h3 className='FeedList__subtitle'>Add Feed</h3>
      <FeedForm  />
    </aside>
  );
};



export default FeedList;
