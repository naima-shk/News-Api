let url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-07-09&sortBy=publishedAt&apiKey=fb5eac411e5d40398d36bb4bb6d90bd2';


fetch(url)
    .then(response => {
        return response.json(); /*here the data of recipes we are getting in form of json*/

    }).then(newsArray)

.catch(function(err) {
    console.log(err);
});

// introducing function and giving the objects of data in arguments
function newsArray(obj) {

    let news = obj.results;

    console.log(news);

    console.log(typeof news);

    // here using the map() function for printing the array of recipes
    document.getElementById("main-container").innerHTML = (news.map(News =>
        `
    <div class="main">
      <div class="content">
        <img  src="${News.image}" />
        <div class="title">${News.title}</div>
        <button type="button" class="btn">View News</button>
     </div> 
    </div>`
    ).join(''));
}