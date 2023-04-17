import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackdata"; {/**Pulls data from feedback folder */ }


function App() {
{/*App- level state (global) that can be passed down to child components

In this case, feedback is created as state using FeedbackData which has been imported above*/}

    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    const addFeedback = (newFeedback) => {

        {/**Create unique ID using uuid hook */}
        newFeedback.id = uuidv4()
        {/**Create a new array using '...' spread operater that renders previous feedback and placing into array with newFeedback*/}
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm handleAddition={addFeedback } />
                <FeedbackStats feedback={feedback } />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback } />
            </div>
        </>
    )

}     

export default App;