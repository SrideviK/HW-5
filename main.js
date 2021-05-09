let sportsArray = [];
let selectedType = "";

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

        document.getElementById("default-text").style.display="none";

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

