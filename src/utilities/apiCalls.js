import apiKey from '../apiKey.js';
import { triviaCleaner } from './helper.js';

export const fetchData = async (category) => {
	const url = `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple&token=${apiKey.theTriviaApiKey}`;
	const response = await fetch(url);
	const triviaData = await response.json();
	console.log(triviaData);
	return triviaData
}


