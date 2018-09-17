import React from 'react';
import FeedbackTitle from '../container/FeedbackTitle';
import FeedbackDescription from '../container/FeedbackDescription';

class RootComponent extends React.Component {
    
    render() { 
        return ( 
            <div>
                I am a root component.
                <p></p>
                I will use Containers.
                <p></p>
                <FeedbackTitle />
                <hr></hr>
                <FeedbackDescription />

            </div>
         );
    }
}
 
export default RootComponent;