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

function createTag(number){
    let tag;
    if(number < 4){
        tag = "bad"
    }else if(number < 7){
        tag = "Average "
    }
    else tag = "good"
    return tag;
}
const arrayWithTag = movies.map(movie => {
    return {...movie , tag : createTag(movie.rating)}
})
// console.log(arrayWithTag)

const keyWords = ["Surfer" , "Alien" , "Benjamin"];
const filteredMoviesByTitle = movies.filter(movie => {
    const lowerCasemovie = movie.title.toLowerCase();
    return keyWords.some(keyword => lowerCasemovie.includes(keyword.toLowerCase()));
})
console.log(filteredMoviesByTitle)