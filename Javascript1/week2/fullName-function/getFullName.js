const getFullName = () => {
  const form = document.querySelector('#FullName-form')
  const fname = document.querySelector(".firstName").value;
  const lname = document.querySelector(".lastName").value;
  const formalName = document.querySelector(".formalName");
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  const result = document.querySelector('.result');
  if(!fname && !lname){
    alert("please Enter Your Name")
  }
  if(formalName.checked && selectedGender.value == "male"){
    result.innerHTML = `Lord ${fname} ${lname} `
  }else if(formalName.checked && selectedGender.value == "female"){
    result.innerHTML = `Lady ${fname} ${lname} `
  }else{
    result.innerHTML = fname + " " + lname
  }
};
