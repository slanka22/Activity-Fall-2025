const addAListItem = (text) => {
    /*
     * Adds a new list item with the given text and a Delete button.
     */

    if (text.length === 0) {
        // Won't add empty strings
        return;
    }

    const list = document.querySelector("ul");
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = text;
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    listBtn.setAttribute("class", "tufte-button primary");
    list.appendChild(listItem);

    listBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    });


}
const addModule = (event) => {
    const input = document.querySelector("input");

    const moduleName = input.value;
    addAListItem(moduleName);

    // clear the textbox
    input.value = "";
};

const saveModule = (event) => {
    const list = document.querySelector("ul");
    const items = [];

    for (const item of list.children) {
        // List has two children — module name and the delete button
        // we want the first element only
        const moduleName = item.children[0].textContent;
        items.push(moduleName);
    }

    // We will save as an JSON object
    localStorage.setItem("modules", JSON.stringify(items));

};

const loadModule = (event) => {
    const data = localStorage.getItem("modules")
    if (data === null) {
        // do nothing
        return;
    }

    try {
        const list = document.querySelector("ul");

        const items = JSON.parse(data);
        for (const item of items) {
            addAListItem(item);
        }
    } catch(error) {
        console.log(`Unable to load modules: ${error}`);
    }

};

document.querySelector("#btn_add")
    .addEventListener("click", addModule);


document.querySelector("#btn_save")
    .addEventListener("click", saveModule);

document.querySelector("#btn_load")
    .addEventListener("click", loadModule);
