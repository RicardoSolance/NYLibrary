let mainContainer = document.querySelector(".main-container");


let category = [];
async function getCategories() {
    try {
        let response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=9F9jhZCNCqcIbO76kMZKSEjdhAGH7vGH');
        let data = await response.json();
        let categ = await data.results;
        //  console.log(books);
        categ.map((cat) => {
            category.push({
                "list_name": cat.display_name,
                "oldest_date": cat.oldest_published_date,
                "last_update": cat.newest_published_date,
                "book_cat": cat.list_name_encoded,
                "update":cat.updated
            })
        })
               
    } catch (error) {
        
    }
}
getCategories().then(async function () {
    // console.log(category)
    await printCat()
    // console.log(category.book_cat);
    let allBooks=[]
    let btn = document.querySelectorAll('.btn')
    for (let j = 0; j < btn.length; j++) {
        btn[j].addEventListener('click', async function () {
            let link = category[j].book_cat
            console.log(link)
            try {
                let response2 = await fetch('https://api.nytimes.com/svc/books/v3/lists/'+link+'?api-key=9F9jhZCNCqcIbO76kMZKSEjdhAGH7vGH');
                let data2 = await response2.json();
                let books = data2.results.books;
                books.map((cat) => {
                    allBooks.push({
                        "list_name": cat.display_name,
                        "oldest_date": cat.oldest_published_date,
                        "last_update": cat.newest_published_date,
                        "book_cat": cat.list_name_encoded,
                        "update":cat.updated
                    })
                })
                
            } catch (error) {
                console.log(`Error : `);
            }
        })
        
    }  
})


async function printCat() {

    for (let i = 0; i < category.length; i++) {
        let card = document.createElement("div");
            card.setAttribute("class", "card");
            card.innerHTML = `<div class="cat-title">
            <h2>${category[i].list_name}</h2></div>
            <div class="cat-desc"><p> First update :${category[i].oldest_date}<p>
            <p> Last Update : ${category[i].last_update}</p>
            <h4>Update Frequency : ${category[i].update}<h4></div>
            <button class="btn">Read More</button>
            `
    mainContainer.appendChild(card);
        
    }
 
}



// function removeContainer() {
//     mainContainer.innerHTML = '';
// }