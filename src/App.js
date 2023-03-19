
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackdata"; {/**Pulls data from feedback folder */}


function App() {
{/*App- level state (global) that can be passed down to child components

In this case, feedback is created as state using FeedbackData which has been imported above*/}

    const [feedback, setFeedback] = useState(FeedbackData);

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    )

}     

export default App;