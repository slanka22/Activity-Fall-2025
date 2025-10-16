// From https://eloquentjavascript.net/10_modules.html

const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

export function dayName(number) {
    return names[number];
}
export function dayNumber(name) {
    return names.indexOf(name);
}
