import axios from 'axios';
const fetchQuotes = async () => {
	try {
		const res = await axios.get(
			`https://famous-quotes4.p.rapidapi.com/random`,
			{
				headers: {
					'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
					'x-rapidapi-key': "API_KEY"
				},
				params: {category: 'all', count: '1'}
			}
		);
	} catch (err) {
		console.log(err);
	}
};
export default fetchQuotes 