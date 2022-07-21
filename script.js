
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
        <tr id="discountAnswer">
            <td>Your discount:</td>
            <td> <span id="discountResult">${discountPersentage}</span>%</td>
        </tr>

        <tr>
            <td><b>Total</b></td>
            <td id="totalCheckAmount">${totalCheckAmount} $</td>
        </tr>`;

    // if (discountPersentage < 7) {
    //     document.getElementById('tableWithDiscountAnswer').innerHTML += ` <tr>
    //         <td colspan="2">You can add <span id="sumToGetHigherDiscount">${sumToGetHigherDiscount}</span> $ to get <span id="nextDiscountLevel"> ${nextDiscountLevel}</span>% discount!</td>
    //     </tr>`
    //     }
    // else{
    //     document.getElementById('tableWithDiscountAnswer').innerHTML += ` <tr>
    //         <td colspan="2">Congratulations! You have maximum possible discount!</td>
    //     </tr>`} 

    (discountPersentage < 7) ? document.getElementById('tableWithDiscountAnswer').innerHTML += ` <tr>
    <td colspan="2">You can add <span id="sumToGetHigherDiscount">${sumToGetHigherDiscount}</span> $ to get <span id="nextDiscountLevel"> ${nextDiscountLevel}</span>% discount!</td>
    </tr>` 
    : document.getElementById('tableWithDiscountAnswer').innerHTML += ` <tr><td colspan="2">Congratulations! You have maximum possible discount!</td></tr>`;
}


//number statistics



