// DOM boys
let postsHtml = document.querySelector('.posts');
let postsContainer = document.querySelector('.posts-container');
let btn = document.getElementById('load-data-btn');
let loaderContainer = document.getElementById('loader-container');
let loader = document.getElementById('loader');

console.log(loader)
console.log(loaderContainer)

window.addEventListener('load', () => {

  // loader
  setTimeout(() => {
    loaderContainer.style.display = 'none';
    loader.style.display = 'none';
    btn.style.display = 'block';
  }, 3000)

  // pagination count
  let page = 1;
  let next;


  // function for fetching data
  async function getData(){
    const res = await fetch(`http://127.0.0.1:8000/api/posts/?page=${page}`);
    const data = await res.json();
    return data;
  }


  // html list builder
  async function getPosts(){
    const posts = await getData();
    const results = posts.results;
    next = posts.next;
    
    results.forEach(i => {
      postsHtml.innerHTML += `
        <div class="post">
          <h1 class="title">${i.id} ${i.title}</h1>
          <div class="info-container">
            <p class="info">
              ${i.info}
            </p>
          </div>
        </div>
      `;
    })
    
  }
  getPosts();


  // show more posts onclick
  btn.addEventListener('click', e => {
    e.preventDefault();
    if(next != null){
      page++;

      setTimeout(() => {
        // loader
        loaderContainer.style.display = 'block';
        loader.style.display = 'block';
        btn.style.display = 'block';
        
        setTimeout(() => {
          loaderContainer.style.display = 'none';
          loader.style.display = 'none';
          // get posts
          getPosts();
        }, 1000)
      }, 2000)


    }else{
      btn.style.display = 'none';
    }
  })

})
