let laptops = [
    {model: "Macbook Pro",
    year: 2016, 
    features: [
        "Retina screen", "quad core", "15 inch", "great keyboard", "fantastic processor"
    ],
    description: "very nice, very good etc.", 
    productImg: "", 
    price: 20000, 

    }, 
    {
        model: "Lenovo Thinkpad",
        features: ["smooth keyboard", "compatible with Ubuntu", "dark knight theme"]
    }, 

    {
        model: "Hp Elitebook"
    }
]

let dropdownMenuButton = document.getElementById("dropdownMenuButton");

let macbookOption = document.getElementById("macbookOption");
macbookOption.addEventListener("click", () => selectProduct(laptops[0]));

let  lenovoOption = document.getElementById("lenovoOption");
lenovoOption.addEventListener("click", () => selectProduct(laptops[1]));

let hpOption = document.getElementById("hpOption");
hpOption.addEventListener("click", () => selectProduct(laptops[2]));

function selectProduct(product){
    dropdownMenuButton.innerText = product.model;
    renderLaptopFeatures(product.features);
}

function renderLaptopFeatures(productFeatures) {
    let renderedFeaturesList = "<ul>"
    productFeatures.map(function (feature) {
        renderedFeaturesList += `<li> ${feature} </li>`
    })
    renderedFeaturesList += "</ul>"
    document.getElementById("listOfLaptopFeatures").innerHTML = renderedFeaturesList;
    
}


