let sportsArray = [];
let selectedType = "";
let subSetType="";
let subList=[];

// define a constructor to create sport objects
let SportObject = function (pTeamName, pPlayerName, pSport, pYear, pUrl) {
    this.ID = sportsArray.length; // auto assign id
    this.team = pTeamName;
    this.player = pPlayerName;
    this.sport=pSport;
    this.year = pYear;
    this.url = pUrl;
}

// test data
sportsArray.push(new SportObject("Seahawks", "Russel Wilson", "Football", 2020, "https://www.youtube.com/watch?v=-0-2as8ugrI"));
sportsArray.push(new SportObject("Lakers", "LeBron James", "Basketball", 2021, "https://www.youtube.com/watch?v=AA94L3ut0Ng"));
sportsArray.push(new SportObject("Bucaneers", "Tom Brady", "Football", 2021, "https://www.youtube.com/watch?v=O7Di8ZpJnm8"));


document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonSave").addEventListener("click", function () {

        let playername=document.getElementById("playername").value;
        let teamname=document.getElementById("teamname").value;
        let year=document.getElementById("year").value;
        let video=document.getElementById("url").value;

        console.log("current url == " + video);

        document.getElementById("default-text1").style.display="none";
        document.getElementById("default-text2").style.display="none";
        document.getElementById("select-sport").style.display="flex";

        if (playername != "" && teamname != "" && year != "" && selectedType != "" && video != ""){

            sportsArray.push ( new SportObject(teamname,playername,selectedType,year,video) );

        }

        else{

            alert("Please enter all the details to save")
        }
        document.getElementById("playername").value="";
        document.getElementById("teamname").value="";
        document.getElementById("year").value = "";    
        document.getElementById("url").value = "";  

    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });

    $(document).on("pagebeforeshow", "#display", function (event) {  
        createList();
    });

    // $(document).on("pagebeforeshow", "#displaysubset", function (event) {  
    //     document.getElementById("selected-list").style.display="none";
    // });

    $(document).on("pagebeforeshow", "#displaysubset", function (event) {  
        let localID = document.getElementById('IDparmHere').innerHTML;
        console.log("localID = " + localID);
        let arrayPointer = GetArrayPointer(localID);
        console.log("arrayPointer = " + arrayPointer);
        document.getElementById('teamm').innerHTML = "Team: " + sportsArray[arrayPointer].team;
        document.getElementById('playerr').innerHTML = "Player: " + sportsArray[arrayPointer].player;
        document.getElementById('currentID').innerHTML = "ID: " + sportsArray[arrayPointer].ID;
        console.log("current url = " + sportsArray[arrayPointer].url);
        document.getElementById('highlightUrl').innerHTML = sportsArray[arrayPointer].url;

        //document.getElementById("selected-list").style.display="none";
    });

    $(document).bind("change", "#subSetType", function (event, ui) {
        subSetType = document.getElementById("subSetType").value;
    });
    document.getElementById("Show").addEventListener("click", function () {

        createSubList(subSetType);

    });

    document.getElementById("highlights").addEventListener("click", function () {
        window.open(document.getElementById("highlightUrl").innerHTML);
    });

});

function GetArrayPointer(localID) {
    for (let i = 0; i < sportsArray.length; i++) {
        console.log("i = " + i + " +++++ " + sportsArray[i].ID);
        if (localID == sportsArray[i].ID) {
            console.log("in the if...");
            return i;
        }
        
    }
}

// function createList() {
//     let myul = document.getElementById("myul");
//     myul.innerHTML="";
//     sportsArray.forEach(function (element,) {   
//         let li = document.createElement('li');
//         li.innerHTML = element.sport + ":" 
//                     + "<br> &emsp;Your Favourite team is - " + element.team 
//                     + "<br> &emsp;Your favourite player is - " + element.player 
//                     + "<br> &emsp;They were founded in "+ element.year
//                     + "<br> &emsp;Team ID - " + element.ID
//                     + "<br><br>";
//         myul.appendChild(li);
//     });
// };

function createList() {
    let myul = document.getElementById("myul");
    myul.innerHTML="";
    sportsArray.forEach(function (element,) {   
        let li = document.createElement('li');
        li.classList.add('oneSport'); // adding a class name to each one as a way of creating a collection
        li.setAttribute("data-parm",element.ID);
        li.innerHTML = element.sport + ":" 
                    + "<br> &emsp;Your Favourite team is - " + element.team 
                    + "<br> &emsp;Your favourite player is - " + element.player 
                    + "<br> &emsp;They were founded in "+ element.year
                    + "<br> &emsp;Team ID - " + element.ID
                    + "<br><br>";
        myul.appendChild(li);
    });

    let liArray = document.getElementsByClassName('oneSport');
    Array.from(liArray).forEach(function(element,){
        element.addEventListener('click',function(){
            let parm = this.getAttribute('data-parm');
            document.getElementById('IDparmHere').innerHTML = parm;
            document.location.href="index.html#displaysubset";
            alert('hi. this is id: ' + parm);
        });
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

