let customer = 
    {
        firstName:"Ella",
        lastName: "Lively",
        accountBalance: 2000, 
        noOfLoans: 0,
        noOfPurchasedLaptops: 0, 
        workPayBalance: 0,
    };

let loanInput;
let submitFormBtn;

/* Values to be presented in HTML */
let loanForm = document.getElementById("loanForm");

let errorMessage = document.getElementById("loanMessage");
let workPayBalance = document.getElementById("workPayBalance");

/* Buttons with logic when clicked on */
let getLoanBtn = document.getElementById("getLoanBtn");
getLoanBtn.addEventListener("click", renderLoanForm);

let increaseWorkPayBtn = document.getElementById("increaseWorkPayBtn");
increaseWorkPayBtn.addEventListener("click", increaseWorkPayment);

let transferToAccountBtn = document.getElementById("transferToAccountBtn");
transferToAccountBtn.addEventListener("click", transferPayBalanceToAccount);

/* Functions */
function renderCustomerDetails(){
    document.getElementById("customerName").innerText = `${customer.firstName} ${customer.lastName}`
    document.getElementById("customerAccountBalance").innerText = ` ${customer.accountBalance} SEK.`
}

function renderWorkDetails() {
    document.getElementById("workPayBalance").innerText = `${customer.workPayBalance} SEK.`
}

function renderLoanForm(){
    loanForm.innerHTML = `
    <input type="text" placeholder="Amount to loan" id="loanInput"></input>
    <button class="btn btn-sm" id="submitFormBtn">Submit</button>`
    submitFormBtn = document.getElementById("submitFormBtn");
    loanInput = document.getElementById("loanInput");

    submitFormBtn.addEventListener("click", (event )=> {
        let requestedLoan = parseInt(loanInput.value);
        console.log(requestedLoan);
 
        if(customer.noOfLoans <= customer.noOfPurchasedLaptops ){
           if(requestedLoan <= customer.accountBalance* 2){ customer.accountBalance += requestedLoan;
                renderCustomerDetails();
                customer.noOfLoans++;
                loanForm.innerHTML ="";
            } else {
                errorMessage.innerText = "Amount to loan is not allowed, try a lesser amount.";
            }
        } else {
             errorMessage.innerText = "Loan not permitted before a purchase with the latest loan  has  been made. "     
        }
    })
}

function increaseWorkPayment() {
    customer.workPayBalance += 100;
    renderWorkDetails();
}

function transferPayBalanceToAccount() {
    customer.accountBalance += customer.workPayBalance;
    customer.workPayBalance = 0;
    renderWorkDetails();
    renderCustomerDetails();
}

renderCustomerDetails();
renderWorkDetails();




