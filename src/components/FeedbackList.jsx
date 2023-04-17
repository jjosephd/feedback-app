import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackList({ feedback, handleDelete }) {
  {
    /*If there is no feedback object or feedback object length = 0 return paragraph */
  }

  if (!feedback || feedback.length === 0) {
    return <p>No feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {/*map through feedback array which is a prop that has already been called. Item iterates thru feedback to give us feedbackitem */}
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
        {/*Animate list adding and deleting using framer-motion library*/}
      </AnimatePresence>
    </div>
  );
}

//Proptypes - arrayOf(Proptypes.shape()) builds the required 'shape' of FeedbackList array including id, text, rating

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
