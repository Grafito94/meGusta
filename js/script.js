
var meGusta = 0;
var meGusta1 = 0;
var meGusta2 = 0;

function likes(element){
    console.log(element);
    if (element === ".countLikes"){
        var countElement = document.querySelector(".countLikes");
        meGusta++;
        countElement.innerText = meGusta + " like(s)"
        console.log(meGusta);
        }else if (element === ".countLikes1" ){ 
            var countElement1 = document.querySelector(".countLikes1");
            meGusta1++;
            countElement1.innerText = meGusta1 + " like(s)"
            console.log(meGusta1);
        }else {
            var countElement2 = document.querySelector(".countLikes2");
            meGusta2++;
            countElement2.innerText = meGusta2 + " like(s)"
        console.log(meGusta2);
    }
}