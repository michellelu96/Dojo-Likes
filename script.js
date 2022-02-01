function increaseLike(element){
    var likeNumber =  parseInt(element.previousElementSibling.firstElementChild.innerHTML)

    likeNumber += 1

    element.previousElementSibling.firstElementChild.innerText = likeNumber;
} 