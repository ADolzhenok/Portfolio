// function showText(){
//     console.log('here')
// }

const showText = function(part){
    const allBox = {
        ear: document.getElementsByClassName("earBox")[0],
        eye: document.getElementsByClassName("eyeBox")[0],
        nose: document.getElementsByClassName("noseBox")[0],
        mouse: document.getElementsByClassName("mouseBox")[0],
        chest: document.getElementsByClassName("chestBox")[0],
        tail: document.getElementsByClassName("tailBox")[0],
        neck: document.getElementsByClassName("neckBox")[0],
        whisker: document.getElementsByClassName("whiskerBox")[0],
        hindpaw: document.getElementsByClassName("hindpawBox")[0],
        forepaw: document.getElementsByClassName("forepawBox")[0],
    }
    let text = allBox[part]
    if (text.style.display === 'block'){
        text.style.display = 'none'
    }
    else {
        text.style.display = 'block'
    }    





}