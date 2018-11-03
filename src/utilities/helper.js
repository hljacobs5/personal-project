import { fetchData } from './apiCalls.js';

export const triviaCleaner = async (category) => {
	const politicsQuestions = await fetchData();
	if (politicsQuestions) {
		const results = politicsQuestions.results.filter(result => {
			return result.category.includes('Politics')
		})
	}
}