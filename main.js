const dinosaurs = [
    {
    dinoType: 'tricep',
    name: 'wrex',
    },
    {
    dinoType:'trex',
    name: 'steve',
    },
    {
    dinoType:"mosasaurus",
    name: 'Ted',
    }
];

//loop over the dinosaurs
//build up a domstring
//print the domstring to the dom

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildDinosaurs = () => {
    let domString = '';
    for (let i = 0; i < dinosaurs.length; i++){
        domString += `<div class ="dinosaur">`
        domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
        domString += `<p>${dinosaurs[i].name}</p>`
        domString += `</div>`
        
    }
    printToDom('dino-barn',domString)
};

const init = () => {
    buildDinosaurs();
};

init();

