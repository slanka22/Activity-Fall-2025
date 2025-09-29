const colleges = [
    "College of Agricultural Sciences",
    "College of Arts and Architecture",
    "Smeal College of Business",
    "Donald P. Bellisario College of Communications",
    "College of Earth and Mineral Sciences",
    "College of Education",
    "College of Engineering",
    "College of Health and Human Development",
    "College of Information Sciences and Technology",
    "Dickinson Law",
    "Penn State Law",
    "College of the Liberal Arts",
    "College of Medicine",
    "Ross and Carol Nese College of Nursing",
    "Eberly College of Science",
    "Schreyer Honors College",
    "Graduate School",
    "Pennsylvania College of Technology",
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
