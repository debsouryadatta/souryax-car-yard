export async function fetchCars(){
    const headers = {
        'X-RapidAPI-Key': '9ee8456fbbmshd5c23db7d382deap1de1d1jsna02b97db6624',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    })

    const result = await response.json();

    return result;
}