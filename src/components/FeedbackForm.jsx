import React from 'react';
import Card from './shared/Card';
import { useState } from 'react';
import { useContext } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const { addFeedback } = useContext(FeedbackContext);

  const handleTextUpdate = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be more than 10 characters');
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      /**Authenticate amount of characters then construct a newFeedback containing text and rating state */
    }
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      addFeedback(newFeedback);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate your experience:</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextUpdate}
            type="text"
            placeholder="Write a Review"
            value={text}
          />

          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {/**If message is true then create div with message hook else render nothing*/}
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
