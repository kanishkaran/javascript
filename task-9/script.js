const content = document.getElementById('content');
const loader = document.getElementById('loader');

let page = 1;
const limit = 10;
let loading = false;

async function loadPosts() {
  if (loading) return;
  loading = true;
  loader.style.display = 'block';

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const posts = await res.json();

    posts.forEach(post => {
      const item = document.createElement('div');
      item.className = 'item';
      item.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      content.appendChild(item);
    });

    page++;
  } catch (err) {
    console.error('Failed to load posts', err);
  } finally {
    loader.style.display = 'none';
    loading = false;
  }
}

function handleScroll() {
  const nearBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

  if (nearBottom) loadPosts();
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => loadPosts());
