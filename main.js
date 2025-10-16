import {dayName} from "./dayname.js";

const getDate = () => {
    const datePicker = document.querySelector("#selectedDate");
    if (!datePicker.value) {
        console.error("No date selected");
        return;
    }
    const d = new Date(datePicker.value);
    const name = dayName(d.getDay());
    console.log(name);
};
document.querySelector("#btn_submit")
    .addEventListener("click", getDate);

