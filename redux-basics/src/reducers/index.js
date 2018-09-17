import {combineReducers} from 'redux'

import  allFeedbacks from './feedback-reducer'
import allUsers from './users-reducer'
import feedbackClicked from './feeeback-clicked-reducer'
import feedbackUpdated from './UpdateTitleReducer';

const allReducers = combineReducers({
    allFB:allFeedbacks,
    allU:allUsers,
    oneFB:feedbackClicked,
    updatedFB:feedbackUpdated

})

export default allReducers