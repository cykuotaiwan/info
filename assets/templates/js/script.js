window.onload = function () {
    HandleDownloadCV();
    HandleTitleAlignVerticle();
};

var resizeId;
window.onresize = function () {
    clearTimeout(resizeId);
    resizeId = setTimeout(HandleTitleAlignVerticle, 10);
};

function HandleDownloadCV() {
    const download = document.querySelector("#download-btn");

    download.addEventListener("click", function () {
        console.log("here");
        window.open("data/CV-ChunYiKuo.pdf");
    });
}

function HandleTitleAlignVerticle() {
    let exp_title_tc = document.querySelector("#exp-title-tc")
    exp_title_tc.style.paddingTop = `${0.4 * exp_title_tc.clientHeight}px`

    let edu_title_dipl = document.querySelector("#edu-title-dipl")
    edu_title_dipl.style.paddingTop = `${0.3 * edu_title_dipl.clientHeight}px`
    edu_title_dipl.style.paddingBottom = `${0.2 * edu_title_dipl.clientHeight}px`

    let edu_title_mast = document.querySelector("#edu-title-mast")
    edu_title_mast.style.paddingTop = `${0.3 * edu_title_mast.clientHeight}px`
    edu_title_mast.style.paddingBottom = `${0.2 * edu_title_mast.clientHeight}px`

    let edu_title_bach = document.querySelector("#edu-title-bach")
    edu_title_bach.style.paddingTop = `${0.2 * edu_title_bach.clientHeight}px`
    edu_title_bach.style.paddingBottom = `${0.1 * edu_title_bach.clientHeight}px`

    let proj_title_rwr = document.querySelector("#proj-title-rwr")
    proj_title_rwr.style.paddingTop = `${0.4 * proj_title_rwr.clientHeight}px`
    proj_title_rwr.style.paddingBottom = `${0.3 * proj_title_rwr.clientHeight}px`

    let proj_title_stocker = document.querySelector("#proj-title-stocker")
    proj_title_stocker.style.paddingTop = `${0.4 * proj_title_stocker.clientHeight}px`
    proj_title_stocker.style.paddingBottom = `${0.3 * proj_title_stocker.clientHeight}px`
}
