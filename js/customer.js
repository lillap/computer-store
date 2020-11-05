let customers = [
    {
        firstName:"Ella",
        lastName: "Lively",
        accountBalance: 2000, 
    }, 

    {
        firstName:"Marion",
        lastName: "Cotillard",
        accountBalance: 35000, 
    },
    {
        firstName:"Karen",
        lastName: "Johnson",
        accountBalance: 350, 
    },

];

document.getElementById("customerName").innerText = `${customers[0].firstName} ${customers[0].lastName}`

document.getElementById("customerAccountBalance").innerText = ` ${customers[0].accountBalance} SEK.`
