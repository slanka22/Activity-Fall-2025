const colleges = [
    {"name": "College of Agricultural Sciences"},
    {"name": "College of Arts and Architecture"},
    {"name": "Smeal College of Business"},
    {"name": "Donald P. Bellisario College of Communications"},
    {"name": "College of Earth and Mineral Sciences"},
    {"name": "College of Education"},
    {"name": "College of Engineering"},
    {"name": "College of Health and Human Development"},
    {"name": "College of Information Sciences and Technology"},
    {"name": "Dickinson Law"},
    {"name": "Penn State Law"},
    {"name": "College of the Liberal Arts"},
    {"name": "College of Medicine"},
    {"name": "Ross and Carol Nese College of Nursing"},
    {"name": "Eberly College of Science"},
    {"name": "Schreyer Honors College"},
    {"name": "Graduate School"},
    {"name": "Pennsylvania College of Technology"},
];


// Add your code here
// Random number
// const randomNumber = Math.floor(Math.random() * colleges.length);
// Update text in para
// content.textContent = choice;

const chooseCollege = () => {
    const randomNumber = Math.floor(Math.random() * colleges.length);
    const choice = colleges[randomNumber];
    console.log(choice.name);
    content.textContent = choice.name;

}


const btn = document.querySelector("button");
btn.addEventListener("click", chooseCollege);
const content = document.querySelector("#college");

const h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", (event) => {
    console.log("entered");
    event.target.style.color = "red";
});


h1.addEventListener("mouseleave", (event) => {
    console.log("left");
    event.target.style.color = "black";
});
