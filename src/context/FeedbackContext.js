import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Sample Feedback Item',
      rating: 10,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    edit: false,
    item: {},
  });

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Set item to be updated to add feedback, delete feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      edit: true,
    });
  };

  const addFeedback = (newFeedback) => {
    {
      /**Create unique ID using uuid hook */
    }
    newFeedback.id = uuidv4();
    {
      /**Create a new array using '...' spread operater that renders previous feedback and placing into array with newFeedback*/
    }
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
