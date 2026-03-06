const GOJO_NAME = "Satoru Gojo";
var baseMultiplier = 1.5; 

function calculateGojoDomain() {
    let userInput = prompt("Digite o nível de energia amaldiçoada de Gojo (1-10):");
    let energyLevel = parseInt(userInput);
    let isValidInput = !isNaN(energyLevel) && energyLevel >= 1 && energyLevel <= 10;

    if (isValidInput) {
        let finalPower;
        let imagePath;
        let resultMessage;

        
        let chanceIrrestrito = Math.random();

        if (chanceIrrestrito < 0.16) {
            imagePath = 'img/irrestrito.jpg'; 
            resultMessage = `${GOJO_NAME} - Vazio Irrestrito: Poder Infinito! (Sorte na ativação!)`;
        } else if (energyLevel >= 1 && energyLevel <= 8) {
            finalPower = energyLevel * baseMultiplier * 10;
            imagePath = 'img/roxo.jpg';
            resultMessage = `${GOJO_NAME} - Vazio Roxo: ${finalPower}%`;
        } else if (energyLevel === 9 || energyLevel === 10) {
            finalPower = 200;
            imagePath = 'img/roxo_200%.jpg';
            resultMessage = `${GOJO_NAME} - Hollow Purple: ${finalPower}% (Poder Máximo!)`;
        }

        document.getElementById('main-image').src = imagePath;
        document.getElementById('domain-caption').innerText = resultMessage;
        document.getElementById('restore-domain-btn').style.display = 'inline-block';
        alert(resultMessage);
    } else {
        alert("Entrada inválida! Digite um número entre 1 e 10.");
    }
}

function restoreDomainImage() {
    document.getElementById('main-image').src = 'img/Fullbody.jpeg';
    document.getElementById('domain-caption').innerText = '';
    document.getElementById('restore-domain-btn').style.display = 'none';
}