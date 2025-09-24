// Add your JS code here

for (let n = 1; n <= 20; n++) {
    let output = "";
    if ((n % 3 == 0) && (n % 5 == 0)) {
        output="IST! HCDD!";
    } else if (n % 3 == 0) {
        output = "IST!";
    } else if (n % 5 == 0) {
        output = "HCDD!";
    } else {
        output = n;
    }

    console.log(output);
}
