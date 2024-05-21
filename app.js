// const H1tag = document.getElementsByTagName('H1');
// // console.log(H1tag[0].textContent);
// console.log(H1tag[1].textContent);
// console.log(H1tag[1].innerText="hello");





// const divElement = document.getElementById("div-1");

// console.log(divElement.innerText);


// console.log(divElement.innerHTML);



// function handleClick() {
//     const pElement = document.getElementById("p-tag");
//     pElement.classList.add("c-red");

// //     pElement.classList.toggle("c-red");

// // //    pElement.classList.remove("c-red");


// }



// function changeColor() {
//     const pTag = document.getElementById("p-tag");
//     pTag.classList.replace('c-red', 'c-green');
// }





// function createBox() {
//     const divElement = document.createElement("div");
//     divElement.setAttribute("name", "box ");
//     divElement.innerText = "hiiiiiiiii"
//     document.getElementsByTagName("body")[0].appendChild(divElement);



// }



// function createBox() {
//     const divElement = document.createElement("div");
//     divElement.setAttribute("id", "box");
//     divElement.innerText = "salam "
//     document.getElementsByTagName("body")[0].appendChild(divElement);
// }




// const productlist = document.getElementById("product-list");
// const searchbox = document.getElementById("searchBox");



// function handleSearch(e) {
//     const text = e.target.value.toLowerCase().trim();
//     const items = productlist.querySelectorAll('.item');
//     items.forEach(function (liTag) {
//         const itemContent = liTag.textContent.toLowerCase();
//         const notMatch = itemContent.indexOf(text) == -1;
//         if (notMatch) {
//             liTag.style.display = 'none';
//         } else {
//             liTag.style.display = "block";
//         }

//     })

// }



const productList = document.getElementById("product-list");
const searchBox = document.getElementById("search-box");



function handleSearch(e) {
    const Text = e.target.value.toLowerCase().trim();
    const item = productList.querySelectorAll(".item");
    item.forEach(function (liTag) {
        const itemContent = liTag.textContent.toLowerCase();
        const notMatch = itemContent.indexOf(Text) == -1;
        if (notMatch) {
                    liTag.style.display = 'none';
                } else {
                    liTag.style.display = "block";
                }

    })
}







