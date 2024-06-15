const personform = document.getElementById("personForm");
const nameinput = document.getElementById("personName");
const ageinput = document.getElementById("personAge");
const cityinput = document.getElementById("personCity");
const emailinput = document.getElementById("personEmail");
const button = document.getElementById("addPersonButtn");

let id = 1;
let people = JSON.parse(localStorage.getItem("people"));
if (people == null) people = [];
personform.addEventListener("submit", (e) => {
    e.preventDefault();
    const newperson = {
        id: id++,
        name: nameinput.value,
        age: Number(ageinput.value),
        city: cityinput.value,
        email: emailinput.value,
    };
    people.push(newperson);
    localStorage.setItem("people", JSON.stringify(people));

});


