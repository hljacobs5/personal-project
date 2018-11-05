import { combineReducers } from 'redux';
import { questionsReducer } from './questionsReducer';
import { scoreReducer } from './scoreReducer';

const rootReducer = combineReducers({
	questions: questionsReducer,
	score: scoreReducer
})

export default rootReducer;