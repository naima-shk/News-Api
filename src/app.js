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
    document.getElementById("main-container").innerHTML = (newsArray.map(news =>
        `
    
      <div class="main">
      <div class="content">
      <img  src="${news.urlToImage}" />
        <button id = "btnMore" onclick= "getElementById('moreInfo').innerHTML='author: ${news.author}<br> news title: ${news.title}<br> news description ${news.description}  '" >  More Details </button>
     </div> 
    </div>`
    ).join(''));
}