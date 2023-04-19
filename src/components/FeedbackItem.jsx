import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
{
  /* */
}

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button>
        <FaEdit
          onClick={() => editFeedback(item)}
          className="edit"
          color="purple"
        />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
