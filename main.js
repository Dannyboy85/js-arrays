const dinosaurs = [
    {
    dinoType: 'tricep'
    },
    {
    dinoType:'trex'
    },
    {
    dinoType:"mosasaurus"
    }
];

//loop over the dinosaurs
//build up a domstring
//print the domstring to the dom

const printToDom = (divId, textToprint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToprint;
};

const buildDinosaurs = () => {
    let domString = '';
    for (let i = 0; i < dinosaurs.length; i++){
        console.log(dinosaurs[i].dinoType);
            domString += `<h3>${dinosaurs[i].dinoType}</h3>`;
        
        console.log(domString);
    }
    printToDom('dino-barn',domString)
};

const init = () => {
    buildDinosaurs();
};

init();

