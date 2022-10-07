const apiKey = 'api_key=e32c2b640d0c14cb8349bc85f9ee8b0e'
const trendingUrl = 'https://api.themoviedb.org/3/trending/movie/week?'

async function trending() { 
    return await fetch(`${trendingUrl}${apiKey}`).then(response => console.log(response.json()))
}

trending()