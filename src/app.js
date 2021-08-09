 let collapseWidthExample = document.getElementById('collapseWidthExample');
 let source = 'dawn-news';

 fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-07-09&sortBy=publishedAt&apiKey=fb5eac411e5d40398d36bb4bb6d90bd2')
     .then(response => {
         console.log(response);
         // return response.json(); /*here the data  we are getting in form of json*/

     }).then(Array)

 .catch(function(err) {
     console.log(err);
 });
 let news =
     `<div style="min-height: 120px;">
 <div class="collapse collapse-horizontal" id="collapseWidthExample">
     <div class="card card-body py-4" style="width: 300px;">
         This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
     </div>
 </div>
</div>
<p>
 <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
Toggle width collapse
</button>
</p>
<div style="min-height: 120px;">
 <div class="collapse collapse-horizontal" id="collapseWidthExample">
     <div class="card card-body py-4" style="width: 300px;">
         This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
     </div>
 </div>
</div>`