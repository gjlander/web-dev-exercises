const moviesCont = document.querySelector('#movies-container');

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const renderMovies = (moviesArray) => {
    // console.log('You clicked the summon button!');
    moviesCont.innerHTML = '';
    console.log(moviesArray);
    moviesArray.forEach(({ poster_path, original_title, overview }) => {
        moviesCont.innerHTML += `<div class="transition ease-in-out delay-150 shadow-xl hover:shadow-2xl h-[44rem] hover:cursor-pointer hover:scale-105 rounded-lg">
        <figure class='rounded-t-lg overflow-hidden h-96'>
         <img
         class="w-full"
             src=${IMG_URL + poster_path}
             alt=${original_title} />
        </figure>
        <div class="flex flex-col px-4 py-2 rounded-b-lg bg-slate-100 dark:bg-slate-800 h-80">
            <h2 class="text-4xl border-b-2 mb-4 border-b-gray-400">${original_title}</h2>
            <p>${overview}</p>
        </div>
        </div>`;
    });
};
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWI1OTkzY2VjYTIwOTkwOWI5NWI0ODJmODVjNDlmMCIsIm5iZiI6MTcyNzcwNTE3Mi42NDA2NDMsInN1YiI6IjY2ZmFhZjAyM2EwZjVhMDhjOGYxOGYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JILLUNBjQwItAiLtLcP4FdjW4st_bKAdMsGxw253X-0',
    },
};

fetch(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    options
)
    .then((res) => res.json())
    .then((data) => renderMovies(data.results))
    .catch((err) => console.error(err));
