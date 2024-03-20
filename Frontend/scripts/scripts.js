const prof = document.getElementById('professional-id');
const pers = document.getElementById('personal-id');
console.log(prof);

prof.addEventListener('click', displayProf);
pers.addEventListener('click', displayPers);

function displayProf(){
    let display = document.getElementById("displayProf");
    console.log('click');
    if (display.classList.contains("show-professional")){
        display.classList.remove("show-professional");
        display.classList.add("hide-professional");
    } else {
        display.classList.add("show-professional");
        display.classList.remove("hide-professional");
    }
}

function displayPers(){
    let display = document.getElementById("displayPers");
    console.log('click');
    if (display.classList.contains("show-personal")){
        display.classList.remove("show-personal");
        display.classList.add("hide-personal");
    } else {
        display.classList.add("show-personal");
        display.classList.remove("hide-personal");
    }
}