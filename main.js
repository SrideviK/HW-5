let sportsArray = [];
let selectedType = "";

// define a constructor to create sport objects
let SportObject = function (pTeamName, pPlayerName,pSport) {
    this.team = pTeamName;
    this.player = pPlayerName;
    this.sport=pSport;
}





document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonSave").addEventListener("click", function () {

        let playername=document.getElementById("playername").value;
        let teamname=document.getElementById("teamname").value;

        document.getElementById("default-text").style.display="none";

        if (playername!=""&& teamname!=""&& selectedType!=""){

            sportsArray.push ( new SportObject(playername,teamname,selectedType) );
           

        }

        else{

            alert("Please enter all the details to save")
        }
        document.getElementById("playername").value="";
        document.getElementById("teamname").value="";    

    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });

    $(document).on("pagebeforeshow", "#display", function (event) {   // have to use jQuery 
        createList();
    });

});

function createList() {
    // clear prior data
    var myul = document.getElementById("myul");
    myul.innerHTML="";
    sportsArray.forEach(function (element,) {   // use handy array forEach method
        var li = document.createElement('li');
        li.innerHTML = element.sport + ": Your Favourite team is - " + element.team +
        ", and your favourite player is - " + element.player;
        myul.appendChild(li);
    });
};

