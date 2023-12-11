const shortMovieTitles = movies.map(movie => {
    const title  = movie.title;
    const shortTitle = title.split(' ');
    if(!shortTitle[1]){
        shortTitle[1] = '';
    }
    return (shortTitle[0] + shortTitle[1])   
})
console.log(shortMovieTitles)
