
const product = [
    {
        id: 1,
        title: "Air Force",
        price: 100,
        colors: [
            {
                code: "black",
                img: "./DOCS/air.png",
            },
            {
                code: "darkblue",
                img: "./DOCS/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordon",
        price: 100,
        colors: [
            {
                code: "lightgray",
                img: "./DOCS/jordan.png",
            },
            {
                code: "green",
                img: "./DOCS/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        colors: [
            {
                code: "lightgray",
                img: "./DOCS/blazer.png",
            },
            {
                code: "green",
                img: "./DOCS/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 100,
        colors: [
            {
                code: "black",
                img: "./DOCS/crater.png",
            },
            {
                code: "lightgray",
                img: "./DOCS/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 100,
        colors: [
            {
                code: "gray",
                img: "./DOCS/hippie.png",
            },
            {
                code: "black",
                img: "./DOCS/hippie2.png",
            },
        ],
    },

];

let currentProduct = product[0];

const currentProductTitle = document.querySelector(".productTitle");
const currentProductImg = document.querySelector(".productImg");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSize = document.querySelectorAll(".size");
const currentProductColor = document.querySelectorAll(".color");

const wrapper = document.querySelector(".sliderWrap");
const menuItems = document.querySelectorAll(".menuItem");


menuItems.forEach((item, index) => {

    // CHANGE THE CURRENT SLIDE
    item.addEventListener("click", () => {

        wrapper.style.transform = `translateX(${-100 * index}vw`;

        // CHANGE THE CHOOSEN PRODUCT

        currentProduct = product[index];

        // CHANGE THE PRODUCT DETAILS

        currentProductTitle.textContent = currentProduct.title
        currentProductPrice.textContent = ("$" + currentProduct.price);
        currentProductImg.src = currentProduct.colors[0].img;

        currentProductColor.forEach((color, index) => {
            color.style.backgroundColor = currentProduct.colors[index].code;

        });

    });

});

// CHANGING IMG WITH COLOR

currentProductColor.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentProductImg.src = currentProduct.colors[index].img;
    });
});

//CHANGING SIZES

currentProductSize.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentProductSize[index].style.backgroundColor = "black";
        currentProductSize[index].style.color = "white";

        for (let i = 0; i < 3; i++) {
            if (i === index) continue;
            currentProductSize[i].style.backgroundColor = "white";
            currentProductSize[i].style.color = "black";

        }
    });
})


const productButton = document.querySelector(".productBuy");
const payment = document.querySelector(".payment");
const cancel = document.querySelector(".cancel");


productButton.addEventListener("click", ()=> {
    payment.style.display = "flex"
})
cancel.addEventListener("click", ()=> {
    payment.style.display = "none"
})