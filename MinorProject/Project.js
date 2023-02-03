var arr = [];

function loadText(e) {
    let data = {}

    const photoBox = document.getElementsByClassName("photo-box");
    photoBox[0].innerHTML = 'SELECTED PHOTOS :';

    for (let i = 0; i < e.target.files.length; i++) {
        photoBox[0].innerHTML += "<br/>" + e.target.files[i].name;

        data = {
            ...data,
            image: URL.createObjectURL(e.target.files[i])
        }
        arr.push(data);
    }
    const userData = JSON.stringify(arr);
    localStorage.setItem('userData', userData);
}


function loadPhoto() {
    document.getElementById("container").style.display = 'none'
    document.getElementById("img-box").style.display = 'initial'

    const getData = JSON.parse(localStorage.getItem('userData'));
    
    for (let i = 0; i < getData.length; i++) {
        const img = document.createElement("img");
        img.className = "gallery-photo";

        img.src = getData[i].image;
        document.getElementById("img-box").appendChild(img);
    }
}