const nameInput = document.getElementById('user-name');
const showNameBtn = document.getElementById('show-btn');
const showNameInParagraph = document.getElementsByClassName('show-name');
const showContainer = document.getElementsByClassName('show-container')

showNameBtn.addEventListener('click' , () =>{
   let name = document.createTextNode(nameInput.value)
   showNameInParagraph.innerHTML = name
})
