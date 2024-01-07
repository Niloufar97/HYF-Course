const numberOfAsrtonauts = document.getElementById('number-of-astronauts');
const namesOfAsrtonautsUl = document.getElementById('names-of-astonauts');
const showNamesButotn = document.getElementById("show-names")

fetch("http://api.open-notify.org/astros.json")
.then(data => data.json())
.then(data => {
    const people = data.people;
    numberOfAsrtonauts.textContent = `there are ${data.number} Astronauts in space`
    showNamesButotn.addEventListener('click' ,() => {
        namesOfAsrtonautsUl.textContent = ""
        people.map(person => {
            const personLi = document.createElement("li");
            personLi.textContent = person.name;
            namesOfAsrtonautsUl.appendChild(personLi)
        })
    })
})