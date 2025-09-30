const selectCollege = (colleges) => {
    const randomNumber = Math.floor(Math.random() * colleges.length);
    const choice = colleges[randomNumber];
    console.log(choice.name);
    content.textContent = choice.name;

}
const fetchColleges = () => {
    const url = "colleges.json"
    const fetchPromise = fetch(url);
    fetchPromise
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data[0].name);
        })
        .catch((error) => {
            console.error(`Unable to fetch: ${error}`);
        });


}


const btn = document.querySelector("button");
btn.addEventListener("click", fetchColleges);
const content = document.querySelector("#college");

