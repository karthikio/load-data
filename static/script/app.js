// DOM boys
let postsHtml = document.querySelector('.posts');
let btn = document.getElementById('load-data-btn');

let page = 1;
let next;

async function getData(){
  const res = await fetch(`http://127.0.0.1:8000/api/posts/?page=${page}`);
  const data = await res.json();
  return data;
}


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


btn.addEventListener('click', e => {
  e.preventDefault();
  if(next != null){
    page++;
    getPosts();
  }else{
    btn.style.display = 'none';
  }
})