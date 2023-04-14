const videoEl = document.getElementById("video");
const reqBtn = document.getElementById("req_btn");
const shareBtn = document.getElementById("share_btn");

reqBtn.addEventListener('click', () => {
    selectMediaStream();
});

shareBtn.addEventListener('click', async () => {
    shareBtn.disabled = true;
    await videoEl.requestPictureInPicture();
    shareBtn.disabled=false;
});

// ส่งคำขอเข้าถึงอุปกรณ์
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaStream
        videoEl.onloadedmetadata = () => {
            videoEl.play();
        }
    } catch (error) {
        console.log(error);
    }
}