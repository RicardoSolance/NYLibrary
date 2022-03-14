let mainContainer = document.querySelector(".main-container");


let category = [];
async function getCategories() {
    try {
        let response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=9F9jhZCNCqcIbO76kMZKSEjdhAGH7vGH');
        let data = await response.json();
        let books = await data.results;
        //  console.log(books);
        books.map((book) => {
            category.push({
                "list_name": book.display_name,
                "oldest_date": book.oldest_published_date,
                "last_update": book.newest_published_date,
                "update":book.updated,
            })
        })
        
        
    } catch (error) {
        
    }
}

getCategories().then(function () {
    function printCat() {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let card_title = document.createElement("h2");
        card_title = document.createTextNode(category[0].list_name)
        card.appendChild(card_title);
        mainContainer.appendChild(card);
    }
    printCat();
})