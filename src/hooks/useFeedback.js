import React, { useState } from 'react';

function useFeedback(props) {
    const [ feedback, setFeedback ] = useState([])

    const handleOnChange = (e) => {
        if (!!e.target) {
            setFeedback(() => e.target.value);
        } else {
            setFeedback(() => e);
        }
    }
    return { feedback, handleOnChange, setFeedback};
}

export default useFeedback;