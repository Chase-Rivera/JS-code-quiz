var allScores= JSON.parse(localStorage.getItem("highscores"));
var hiScore= document.querySelector("#hiScore");
var dltScores= document.querySelector("#dltScores");
var back= document.querySelector("#back");

dltScores.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

if(allScores !==null){
    for(var i=0; i<allScores.length; i++){
        var list=document.createElement("list");
        list.textContent=allScores[i].initials +""+ allScores[i].score;
        hiScore.appendChild(list);
    }
};

back.addEventListener("click", function(){
    window.location.replace("./index.html")
});