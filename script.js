const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

const initLikes = 34;
const initDislikes = 6;

let likesCount = initLikes;
let dislikeCount = initDislikes;

likeBtn.innerText = "👍🏼" + likesCount;
dislikeBtn.innerText = "👎🏼" + dislikeCount;

function handleLike(){
    likesCount++;
    likeBtn.innerText = "👍🏼" + likesCount
    disablesButton()
}

function handleDislike(){
    dislikeCount++;
    dislikeBtn.innerText = "👎🏼" + dislikeCount
    disablesButton()
}

function disablesButton(){
    likeBtn.disabled = true;
    dislikeBtn.disabled = true;
    setCookie();
}

function setCookie(){
    document.cookie = "voted=true; SameSite=Strict; Max-Age=60"
}

window.onload = function(){
    if(document.cookie && document.cookie.indexOf("voted")> -1){
        disablesButton();
    };
}