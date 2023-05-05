let puppy = document.getElementById("puppyImage");
let thumb = document.getElementById("likeIcon");
let like = document.getElementById("likeButton");
let likeImage = false;

function onClickLikeButton() {
    if (likeImage === false) {
        puppy.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        thumb.style.color = "#0967d2";
        like.style.backgroundColor = "#0967d2";
        like.style.color = "white";
        likeImage = true;
    } else {
        puppy.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        thumb.style.color = "#cbd2d9";
        like.style.backgroundColor = "#cbd2d9";
        like.style.color = "#9aa5b1";
        likeImage = false;
    }
}