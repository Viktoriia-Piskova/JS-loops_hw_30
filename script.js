
//palindrome using for loop

document.querySelector('#palindromUserInput').addEventListener("change", checkAndType);

function checkAndType() {


    const isPalindrome = checkIsPalindrome()
    if (isPalindrome === true) { 
        document.querySelector('#palindromResult').innerHTML = "PALINDROME!"; 
    }
    else{
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




