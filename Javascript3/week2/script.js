// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello")
//     },5000);
//     // if you want to have reject you need to have a condition
// })

// promise
//   .then((res) => {
//     console.log(res)
//   })
//   .catch(err => console.error(err))

// const itIsFour = new Promise((resolve, reject) => {
//   if (2 + 2 === 4) {
//     resolve("it is four");
//   } else {
//     reject("it is not four");
//   }
// });
// itIsFour
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

// const showAnswerEl= document.getElementById("show-response");
// fetch("https://yesno.wtf/api")
// .then(response => response.json())
// .then(response =>
//     {
//         showAnswerEl.textContent = ""
//         showAnswerEl.textContent = response.answer
//     })


// const showAnswerEl = document.getElementById("show-response");
// fetch("https://yesno.wtf/api")
//   .then((response) => response.json())
//   .then((response) => {
//     const answer = response.answer;
//     if(answer === "no"){
//         return fetch("https://knajskdskj.jasdk")
//     }
//     else{
//         showAnswerEl.textContent = answer
//     }
//   })
//   .catch((err) => console.log(err))
  

async function getMovies (){
  const response = await fetch ('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json');
  const json = await response.json();
  console.log(json)
}
getMovies();

async function getAstronut(){
  const response = await fetch("http://api.open-notify.org/astros.json");
  const json = await response.json();
  console.log(json)
}
getAstronut();