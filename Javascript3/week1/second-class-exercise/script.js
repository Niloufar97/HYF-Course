const numberOfAsrtonauts = document.getElementById('number-of-astronauts');
const namesOfAsrtonautsUl = document.getElementById('names-of-astonauts');
const showNamesButton = document.getElementById("show-names");
const container = document.getElementById("container");

// fetch("http://api.open-notify.org/astros.json")
// .then(data => data.json())
// .then(data => {
    // const people = data.people;
    // numberOfAsrtonauts.textContent = `there are ${data.number} Astronauts in space`
    // showNamesButton.addEventListener('click' ,() => {
    //     namesOfAsrtonautsUl.textContent = ""
    //     people.map(person => {
    //         const personLi = document.createElement("li");
    //         personLi.textContent = person.name;
    //         namesOfAsrtonautsUl.appendChild(personLi)
    //     })
    // })
// })
async function fetchData () {
    try{
        const response = await fetch("http://api.open-notify.org/astros.json")
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        const data = await response.json()
        const people = data.people;
        numberOfAsrtonauts.textContent = `there are ${data.number} Astronauts in space`
        showNamesButton.addEventListener('click' ,() => {
    
            namesOfAsrtonautsUl.textContent = ""
    
            people.map(person => {
                const personLi = document.createElement("li");
                personLi.textContent = person.name;
                namesOfAsrtonautsUl.appendChild(personLi)
            })
        })
    }catch (error){
        container.innerHTML = "<h2>some thing went wrong<h2>"
    }
}
fetchData ()