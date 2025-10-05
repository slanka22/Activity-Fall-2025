const addModule = (event) => {
    const list = document.querySelector('ul');
    const input = document.querySelector('input');

    const moduleName = input.value;

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = moduleName;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    listBtn.setAttribute("class", "tufte-button primary");
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
};

document.querySelector("#btn_add")
    .addEventListener("click", addModule);
