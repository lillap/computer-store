let customer = 
    {
        firstName:"Ella",
        lastName: "Lively",
        accountBalance: 2000, 
        noOfLoans: 0,
        noOfPurchasedLaptops: 0, 
    };

function renderCustomer(){
    document.getElementById("customerName").innerText = `${customer.firstName} ${customer.lastName}`
    document.getElementById("customerAccountBalance").innerText = ` ${customer.accountBalance} SEK.`
}


let loanForm = document.getElementById("loanForm");
let getLoanBtn = document.getElementById("getLoanBtn");
let loanInput;
let submitFormBtn;
let errorMessage = document.getElementById("loanMessage");

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
                renderCustomer();
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

getLoanBtn.addEventListener("click",(event ) => {
    event.preventDefault();
    renderLoanForm();
})

renderCustomer();




