

const mainContainer = document.querySelector('#main');
const setBtn = document.querySelector('#setBtn');
var fidelity = 64;

makeGrid(fidelity);

// makes a div with a given size
function makeDiv(size) {
    var contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    contentDiv.style.width = `${size}px`;
    contentDiv.addEventListener("mouseover", function(){
        this.classList.add("active");
    });
    return contentDiv;
}

// function for putting contentDivs into the grid
function makeGrid(fidelity){
    for (let i=0; i<fidelity*fidelity; i++){
        mainContainer.appendChild(makeDiv(960 / fidelity))  
    }
}


setBtn.addEventListener("click", function(){
    let fidelity = parseInt(prompt("Enter a number between 1 and 100", "64"));
        if(fidelity < 1 || fidelity > 100 || fidelity == NaN){
            alert("Invalid input")
            location.reload();
        }
        else{
            while (mainContainer.firstChild){
                mainContainer.removeChild(mainContainer.lastChild);
            }


            console.log(fidelity);
            makeGrid(fidelity);
            console.log(typeof(fidelity));
            }
            
    } )


