var typed= new Typed(".auto-type",
    {
        strings: ["Coder","Trader","Gym Rat"],
        typeSpeed : 90,
        backSpeed: 90,
        loop: true
    })

//-------------------------------------------------------------------------------------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
//-------------------------------------------------------------------------------------
var skilllinks = document.getElementsByClassName("skill-links");
var skillcontents = document.getElementsByClassName("skill-contents");

function openskill(skillname){
    for(skilllink of skilllinks){
        skilllink.classList.remove("active-link");
    }
    for(skillcontent of skillcontents){
        skillcontent.classList.remove("active-skill");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(skillname).classList.add("active-skill");
}

//--------------------------------------------------------------------------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}


//----------------------------------------------------------------------------------------

