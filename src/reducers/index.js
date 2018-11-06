import { combineReducers } from 'redux';
import { questionsReducer } from './questionsReducer';
import { scoreReducer } from './scoreReducer';
import { answerReducer } from './answerReducer';

const rootReducer = combineReducers({
	questions: questionsReducer,
	score: scoreReducer,
	answers: answerReducer,
})

export default rootReducer;