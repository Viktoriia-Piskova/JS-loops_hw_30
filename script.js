
//palindrome using for loop

document.querySelector('#palindromUserInput').addEventListener("change", checkAndType);

function checkAndType() {


    const isPalindrome = checkIsPalindrome()
    if (isPalindrome === true) {
        document.querySelector('#palindromResult').innerHTML = "PALINDROME!";
    }
    else {
        document.querySelector('#palindromResult').innerHTML = "NOT palindrome";
    }



    function checkIsPalindrome() {
        const palindromUserInput = document.querySelector('#palindromUserInput').value;
        const len = palindromUserInput.length;

        for (let i = 0; i < len / 2; i++) {
            if (palindromUserInput[i] !== palindromUserInput[len - 1 - i]) {
                return false;
            }

            else {
                return true;
            }
        }

    }

}


//calculating discount depending on check amount

document.getElementById('userCheckAmount').addEventListener("change", calculateDiscount);


function calculateDiscount() {

    let discountPersentage = 0;
    let sumToGetHigherDiscount = 0;
    let nextDiscountLevel = 0;
    //step1 - counting
    const userCheckAmount = parseFloat(document.getElementById('userCheckAmount').value);
    if (isNaN(userCheckAmount) || userCheckAmount <= 0) {
        document.getElementById('tableWithDiscountAnswer').innerHTML = "Please, enter valid data (number > 0)";
        return false

    }

    else if (userCheckAmount > 0 && userCheckAmount < 200) {
        discountPersentage = 0;
        nextDiscountLevel = 3;
        sumToGetHigherDiscount = 200 - userCheckAmount;
    }


    else if (userCheckAmount >= 200 && userCheckAmount < 300) {
        discountPersentage = 3;
        sumToGetHigherDiscount = 300 - userCheckAmount;
        nextDiscountLevel = 5;

    }
    else if (userCheckAmount >= 300 && userCheckAmount < 500) {
        discountPersentage = 5;
        sumToGetHigherDiscount = 500 - userCheckAmount;
        nextDiscountLevel = 7;
    }
    else if (userCheckAmount >= 500) {
        discountPersentage = 7;

    }
    let totalCheckAmount = userCheckAmount - (userCheckAmount / 100 * discountPersentage);


    //step 2 - display info for user
    document.getElementById('tableWithDiscountAnswer').innerHTML = `
        <tr>
            <td>Your discount:</td>
            <td>${discountPersentage} %</td>
        </tr>

        <tr>
            <td><b>Total</b></td>
            <td>${totalCheckAmount} $</td>
        </tr>`;

    (discountPersentage < 7) ? document.getElementById('tableWithDiscountAnswer').innerHTML += ` <tr>
    <td colspan="2">You can add ${sumToGetHigherDiscount}$ to get ${nextDiscountLevel}% discount!</td>
    </tr>`
        : document.getElementById('tableWithDiscountAnswer').innerHTML += ` <tr><td colspan="2">Congratulations! You have maximum possible discount!</td></tr>`;
}


//number statistics

document.getElementById('inputNumberForStat').addEventListener('change', addNumberToList);
document.getElementById('inputNumberForStat').addEventListener('change', showNumbersInOutput);
document.getElementById('getNumberStatistics').addEventListener('click', buildNumbersStatistics);
document.getElementById('clearNumberStatistics').addEventListener("click", clearNumberStatistics);

let allNumbersList = [];

function clearNumberStatistics() {
    allNumbersList = [];
    document.getElementById('outputNumbersForStat').innerHTML = '';

}


function showNumbersInOutput() {

    let numberForTyping = document.getElementById('inputNumberForStat').value;
    document.getElementById('outputNumbersForStat').innerHTML += `${numberForTyping}, `;
    document.getElementById('inputNumberForStat').value = '';
}




function addNumberToList() {

    allNumbersList.push(parseFloat(document.getElementById('inputNumberForStat').value));
    return allNumbersList;

}



function buildNumbersStatistics() {

    let positiveBar = 0;
    let negativeBar = 0;
    let zeroBar = 0;

    for (let j = 0; j < allNumbersList.length; j++) {
        if (allNumbersList[j] === 0) {
            zeroBar++
        }
        else if (allNumbersList[j] > 0) {
            positiveBar++
        }
        else if (allNumbersList[j] < 0) {
            negativeBar++
        }



    }

    let positivePersentage = Math.floor(positiveBar * 100 / allNumbersList.length);
    let negativePersentage = Math.floor(negativeBar * 100 / allNumbersList.length);
    let zeroPersentage = Math.floor(zeroBar * 100 / allNumbersList.length);

    document.getElementById('positiveBar').style.width = `${positivePersentage}%`;
    document.getElementById('positiveBar').innerHTML = `${positiveBar} (${positivePersentage}%)`;

    document.getElementById('negativeBar').style.width = `${negativePersentage}%`;
    document.getElementById('negativeBar').innerHTML = `${negativeBar} (${negativePersentage}%)`;

    document.getElementById('zeroBar').style.width = `${zeroPersentage}%`;
    document.getElementById('zeroBar').innerHTML = `${zeroBar} (${zeroPersentage}%)`;
}



//guess number game

let allGuessNumbers = [];




document.getElementById('guessNumberStart').addEventListener("click", showGuessNumberButtons);

function showGuessNumberButtons() {
    document.querySelector('.invisible').classList.toggle("visible");
    document.getElementById('potentialNumber').innerHTML = `50`;
    

    let toggleRestartButtonText = document.getElementById('guessNumberStart');

    if(toggleRestartButtonText.innerHTML == "Start game!"){
        toggleRestartButtonText.innerHTML = "Right Number!"
    }
   
    else{
        document.getElementById('guessNumberStart').innerHTML = "Start game!";
    }
}

document.getElementById('guessNumberStart').addEventListener('click', fillAllGuessNumbers)

function fillAllGuessNumbers() {
    let numberGuessIndex = 0;
    while (numberGuessIndex < 100) {
        allGuessNumbers.push(numberGuessIndex);
        numberGuessIndex++
    }
}


document.getElementById('biggerGuessNumber').addEventListener('click', moveToBiggerPartOfNumbers);
document.getElementById('smallerGuessNumber').addEventListener('click', moveToSmallerPartOfNumbers);

function moveToSmallerPartOfNumbers() {
    allGuessNumbers = allGuessNumbers.splice(0, Math.floor(allGuessNumbers.length / 2));
    let middleIndex = Math.floor(allGuessNumbers.length / 2);
    let middleGuessNumber = allGuessNumbers[middleIndex];
    if(isNaN(middleGuessNumber)){
        document.getElementById('potentialNumber').innerHTML = `a joke`; 
    }
    else{
        document.getElementById('potentialNumber').innerHTML = `${middleGuessNumber}`;
    }
}

function moveToBiggerPartOfNumbers() {
    allGuessNumbers = allGuessNumbers.splice(Math.floor(allGuessNumbers.length / 2 - 1), (allGuessNumbers.length - 1));
    let middleIndex = Math.floor(allGuessNumbers.length / 2);
    let middleGuessNumber = allGuessNumbers[middleIndex];
    

    
    if(isNaN(middleGuessNumber)){
        document.getElementById('potentialNumber').innerHTML = `a joke`; 
    }
    else{
        document.getElementById('potentialNumber').innerHTML = `${middleGuessNumber}`;
    }


}

// document.getElementById('guessNumberYes').addEventListener("click", restartGame);

// function restartGame(){
//     document.querySelector('.visible').classList.toggle("invisible");
//     document.getElementById('guessNumberStart').style.display = "display";
// }

//document.getElementById('potentialNumber').innerHTML = `${middleGuessNumber}`;






//script fot toggling light and dark modes

document.getElementById('toggleTheme').addEventListener("click", toggleDarkTheme);

function toggleDarkTheme() {

    document.querySelector('.lightBody').classList.toggle("darkBody");
    document.querySelector('.toggleTheme').classList.toggle("darkToggleTheme");
    document.querySelector('.numbersBarField').classList.toggle("darkNumbersBarField");

    const allOutputs = document.querySelectorAll('.outputLight');
    for (const everyOutput of allOutputs) {
        everyOutput.classList.toggle('darkOutput');
    }

    const allSections = document.querySelectorAll('.sectionLight');
    for (const everySection of allSections) {
        everySection.classList.toggle("darkSection");
    }

    const allInputs = document.querySelectorAll('.inputLight');
    for (const everyInput of allInputs) {
        everyInput.classList.toggle("darkInput")
    }


    let themeButtonText = document.getElementById('toggleTheme');
    if (themeButtonText.innerHTML === "Dark theme") {
        themeButtonText.innerHTML = "Light Theme";
    }
    else {
        themeButtonText.innerHTML = "Dark theme";
    }

}

