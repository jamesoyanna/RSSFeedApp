
import React from 'react';
import './FeedForm.css';

const FeedForm = () => {
  return (
    <form className="FeedForm">
        <p>
          <label htmlFor="id_title">Title</label>
          <input
            autoComplete="off"
            id="id_title"
          
            name="title"
            placeholder='Title'
            type="text"
  
          />
        </p>
        <p>
          <label htmlFor="id_url">URL</label>
          <input
            autoComplete="off"
            id="id_url"
          
            name="url"
            placeholder='URL'
            type="text"
          
          />
        </p>
        <p>
          <button className='FeedForm__button' type='submit'>Subscribe</button>
        </p>
      </form>
  );
}
export default FeedForm;






