window.onload = function(){
    HandleDownloadCV()
}


function HandleDownloadCV() {
    const download = document.querySelector("#download-btn");

    download.addEventListener("click", function () {
        console.log("here");
        window.open('data/CV-ChunYiKuo.pdf')
    });
}