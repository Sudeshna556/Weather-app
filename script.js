const url = 'https://weather1060.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '831a27ca0amsh84c0411160e893bp1d6f95jsnde6d6a20524a',
		'X-RapidAPI-Host': 'weather1060.p.rapidapi.com'
	}
};

async function tryFun() {
  {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
 
} 
tryFun();
}
 