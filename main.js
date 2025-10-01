const onSuccess = (stream) => {
    const video = document.querySelector("video");
    video.srcObject = stream;
};

const onError = (error) => {
    console.log(error);
};

const startVideo = (event) => {
    // Returns a promise
    const media = navigator.mediaDevices.getUserMedia({ video: true });

    // TODO: Add your success and error functions
};


const btn = document.querySelector("#btn_video");
btn.addEventListener("click", startVideo);
