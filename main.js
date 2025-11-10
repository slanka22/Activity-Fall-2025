const setBadge = (count) => {
    // Check if the browser supports the feature
    if (navigator.setAppBadge) {
        console.log("Setting badge");
        navigator.setAppBadge(count);
    } else {
        console.log("navigator.setAppBadge is not available");
    }
};

const clearBadge = () => {
    if (navigator.clearAppBadge) {
        // Remove the badge on the app icon.
        navigator.clearAppBadge();

    } else {
        console.log("navigator.clearBadge is not available");
    }
}

const addBadgeClicked = () => setBadge(1);

document.querySelector("#add-badge").
    addEventListener("click", addBadgeClicked);


document.querySelector("#clear-badge").
    addEventListener("click", clearBadge);
