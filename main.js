let sportsArray = [];
let selectedType = "";
let subSetType="";
let subList=[];

// define a constructor to create sport objects
let SportObject = function (pTeamName, pPlayerName,pSport, pYear) {
    this.team = pTeamName;
    this.player = pPlayerName;
    this.sport=pSport;
    this.year = pYear;
    
    
}


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonSave").addEventListener("click", function () {

        let playername=document.getElementById("playername").value;
        let teamname=document.getElementById("teamname").value;
        let year=document.getElementById("year").value;

        document.getElementById("default-text1").style.display="none";
        document.getElementById("default-text2").style.display="none";
        document.getElementById("select-sport").style.display="flex";

        if (playername!=""&& teamname!=""&& year!=""&& selectedType!=""){

            sportsArray.push ( new SportObject(teamname,playername,selectedType,year) );

        }

        else{

            alert("Please enter all the details to save")
        }
        document.getElementById("playername").value="";
        document.getElementById("teamname").value="";
        document.getElementById("year").value = "";    

    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });

    $(document).on("pagebeforeshow", "#display", function (event) {  
        createList();
    });

    $(document).on("pagebeforeshow", "#displaysubset", function (event) {  
        document.getElementById("selected-list").style.display="none";
    });

    $(document).bind("change", "#subSetType", function (event, ui) {
        subSetType = document.getElementById("subSetType").value;
    });
    document.getElementById("Show").addEventListener("click", function () {

        createSubList(subSetType);

    });

});

function createList() {
    let myul = document.getElementById("myul");
    myul.innerHTML="";
    sportsArray.forEach(function (element,) {   
        let li = document.createElement('li');
        li.innerHTML = element.sport + ": Your Favourite team is - " + element.team + 
        "<br> &emsp; &emsp; &emsp;Your favourite player is - " + element.player +" <br>&emsp; &emsp; &emsp; They were founded in "+ element.year;
        myul.appendChild(li);
    });
};

function createSubList(sport){


    let selected= document.getElementById("selected-list");
    selected.style.display="block";
    while (selected.firstChild) {    
        selected.removeChild(selected.firstChild);
    };
    let ul = document.createElement('ul');
    sportsArray.forEach(function (element,) { 

        if(element.sport==sport){

            let li = document.createElement('li');
            li.innerHTML = element.sport + ": Your Favourite team is - " + element.team + 
        "<br> &emsp; &emsp; &emsp;Your favourite player is - " + element.player +" <br>&emsp; &emsp; &emsp; They were founded in "+ element.year;
        ul.appendChild(li);

        }
    
    });
    if(ul.childElementCount==0){
        let p = document.createElement('p');
        p.innerHTML="No details have been added for this sport";
        selected.appendChild(p);
    }
    else{
        selected.appendChild(ul);
    }
    
}

