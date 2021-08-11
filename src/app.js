fetch('https://newsapi.org/v2/everything?q=tesla&apiKey=fb5eac411e5d40398d36bb4bb6d90bd2').then(function(response) {
        console.log(response, 'Response');
        return response.json();
    }).then(newsData)
    .catch(function(err) {
        console.log(err);
    });;

function newsData(obj) {
    let newsArray = obj.articles;
    console.log(newsArray);
    console.log(typeof newsArray);
    document.getElementById("app").innerHTML = (newsArray.map(news =>
        `
    <div class="coloumn">
      <div class="card_content">
        <div class= "title">${news.title}</div>
        <div class= "description">${news.description}</div>
        <div class= "images">${news.images}</div>
     </div> 
    </div>`
    ).join(''));
}