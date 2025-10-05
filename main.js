const addHeaderContent = () => {
    console.log("Add header!");
};


const addOverviewContent = () => {
    console.log("Add overview!");
};


const addObjectiveContent = () => {
    console.log("Add objective!");
};


document.querySelector("#btn_header")
    .addEventListener("click", addHeaderContent);

document.querySelector("#btn_overview")
    .addEventListener("click", addOverviewContent);

document.querySelector("#btn_objectives")
    .addEventListener("click", addObjectiveContent);
