// fetch("pizzas.json")
//     .then((pizza) => pizza.json())
//     .then((data) => {
//     console.log(data);
//     //displayPizza(data)
//     });

// Références HTML
const wrapperDiv = document.getElementsByClassName("wrapper")[0];
const buttonClick = document.getElementsByClassName("button")[0];
const previewPizza = document.getElementsByClassName("preview")[0];

buttonClick.addEventListener("click", function() {
    fetch("pizzas.json")
        .then((pizza) => pizza.json())
        .then((data) => {
            // console.log(data);
            createContent(data);
        })
    
    const createContent = function (_data) {
        createTitle = document.createElement("h1");
        createTitle2 = document.createElement("h2");
        createImage = document.createElement("img");
        createUnordered = document.createElement("ul");
        createList = document.createElement("li");

        createTitle.innerText = _data.Name;
        
        previewPizza.appendChild(createTitle)
        createTitle.setAttribute("class","header");

        createTitle2.innerText = _data.Slogan;
        
        previewPizza.appendChild(createTitle2)
        createTitle2.setAttribute("class","header");
        
        for (let i = 0; i < _data.Pizzas.length;i++) {
            let pizzaTable = _data.Pizzas[i];
            console.log(pizzaTable);
        }
        
        
        
        

    }
    
})