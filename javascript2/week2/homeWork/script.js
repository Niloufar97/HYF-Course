const shortMovieTitles = movies.map(movie => {
    const title  = movie.title;
    const shortTitle = title.split(' ');
    if(!shortTitle[1]){
        shortTitle[1] = '';
    }
    return (shortTitle[0] + shortTitle[1])   
})
// console.log(shortMovieTitles);
const longMoviesTitle = movies.map(movie => movie.title);
// console.log(longMoviesTitle);
let countMovies = 0;
movies.map(movie => {
    if(movie.year >= 1980 && movie.year <= 1989){
        countMovies++;
    }
})
// console.log(countMovies);
