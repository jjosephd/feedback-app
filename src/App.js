
import { useState } from "react";
import Header from "./components/Header";

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

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackStats feedback={feedback } />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback } />
            </div>
        </>
    )

}     

export default App;