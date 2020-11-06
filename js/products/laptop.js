
let laptops = [
    {
        model: "Macbook Pro",
        year: 2019, 
        features: [
        "Retina screen", "Intel i7 hexa-core", "16 inch", "16 GB RAM", "Radeon Pro 5300M", "512 GB"],
        description: "MacBook Pro 16 får jobbet gjort smidigt och effektivt med en klassledande 6-core Intel Core-processor och Radeon Pro-grafik. " + 
                    "Den har ett precist Magic-tangentbord som är skönt att skriva på, uppgraderade högtalare och mikrofoner med studiokvalitet.", 
        productImg: "../../resources/macbook.jpg", 
        price: 27489, 
    },

    {
        model: "Lenovo ThinkPad E14",
        year: 2020,
        features: ["14 inch", "256 GB", "Radeon Graphics", "Full HD(1080p)", "16 GB RAM"],
        description: "Lenovo ThinkPad E14 14-tums bärbar dator kombinerar ThinkPad-seriens legendariska prestanda och MIL-STD-810G-testade hållbarhet med en elegant aluminiumdesign." +
                    "Med lång batteritid och omfattande säkerhetsfunktioner är datorn alltid redo.",
        productImg: "../../resources/lenovo.jpg",
        price: 10990,
    }, 

    {
        model: "HP EliteBook 840 G7",
        year: 2019,
        features: [ "Intel Core i5","8 GB RAM", "256 GB", "UHD Graphics"],
        description: "HP EliteBook 840 G7 14' bärbar dator levererar stabil prestanda för vardagens mer krävande uppgifter." +
                    "Det robusta aluminiumchassit passar utmärkt för arbete utanför hemmet, med omfattande säkerhetsfunktioner och lång batteritid.",
        productImg: "../../resources/elitebook.jpg",
        price: 14995,
    }, 

    {
        model: "Asus Chromebook Flip C434",
        year: 2019,
        features: [ "Intel Core M3","4 GB RAM", "64 GB", "HD Graphics 615"],
        description: "HP EliteBook 840 G7 14' bärbar dator levererar stabil prestanda för vardagens mer krävande uppgifter." +
                    "Det robusta aluminiumchassit passar utmärkt för arbete utanför hemmet, med omfattande säkerhetsfunktioner och lång batteritid.",
        productImg: "../../resources/chromebook.jpg",
        price: 495,
    }
]

let selectedProduct; 

let purchaseMessage = document.getElementById("purchaseMessage");

let dropdownMenuButton = document.getElementById("dropdownMenuButton");

let accountBalance = document.getElementById("accountBalance");

let macbookOption = document.getElementById("macbookOption");
macbookOption.addEventListener("click", () => setProductSelection(laptops[0]));

let  lenovoOption = document.getElementById("lenovoOption");
lenovoOption.addEventListener("click", () => setProductSelection(laptops[1]));

let hpOption = document.getElementById("hpOption");
hpOption.addEventListener("click", () => setProductSelection(laptops[2]));

let chromebookOption = document.getElementById("chromebookOption");
chromebookOption.addEventListener("click", () => setProductSelection(laptops[3]));

let buyProductBtn = document.getElementById("buyProductBtn");
buyProductBtn.addEventListener("click", () => {
    let customerBalance = parseInt(accountBalance.innerText);
    console.log(customerBalance, selectedProduct.price);
    if (customerBalance < selectedProduct.price) {
        alert ("Sorry, the purchase was declined due to insufficient funds.")
    } else {
        accountBalance.innerText = customerBalance - selectedProduct.price;
        alert ( `Your purchase of laptop ${selectedProduct.model} for ${selectedProduct.price} SEK was successful! `)
    }

});

function setProductSelection(product){
    selectedProduct = product; 
    dropdownMenuButton.innerText = product.model;
    renderLaptopFeatures(product.features);
    renderLaptopDetails(product);
}

function renderLaptopFeatures(productFeatures) {
    let renderedFeaturesList = "<ul>"
    productFeatures.map(function (feature) {
        renderedFeaturesList += `<li> ${feature} </li>`
    })
    renderedFeaturesList += "</ul>"
    document.getElementById("listOfLaptopFeatures").innerHTML = renderedFeaturesList;

}

function renderLaptopDetails (product) {
    let revealProductContainer = document.getElementById("revealProductContainer");
    revealProductContainer.classList.remove("invisible");

    let productHeading = document.getElementById("productModelName");
    productHeading.innerText = product.model;

    document.getElementById("displayProductResult").innerHTML = `
    <div id="productContentLayout">
        <img src="${product.productImg}" alt="image">
        <div>    
            <h5>Price: ${product.price} SEK</h5>
            <p id="productDescription">${product.description}</p>
        </div>
    </div>`
    
    
}


