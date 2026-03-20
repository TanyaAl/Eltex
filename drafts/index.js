// /* eslint-disable import/extensions */
// import closeForm from './close-form.js';
// import showForm from './open-form.js';
// import showStat from './showStat.js';
// import getCountPosts from './countPosts.js';

// // const existPosts = document.querySelectorAll('.card');
// // const getPosts = () => {
// //   const initOldArticles = Array.from(existPosts).map((post, index) => ({
// //     id: index + 1,
// //     title: post.querySelector('h3').textContent,
// //     content: post.querySelector('.text')?.textContent || '',
// //   }));

// //   return initOldArticles;
// // };

// // const state = {
// //   posts: getPosts(),
// // };

// // const form = document.querySelector('.add-article-form');
// // const articlesGrid = document.querySelector('.articles-grid');
// // const template = document.getElementById('post-template');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const data = new FormData(form);
//   const newPost = Object.fromEntries(data.entries());
// //   const clone = template.content.cloneNode(true);
// //   newPost.id = state.posts.length + 1;
// //   state.posts.push(newPost);
// //   clone.querySelector('.template-title').textContent = newPost.title;
// //   clone.querySelector('.template-content').textContent = newPost.content;
// //   const date = new Date();

// //   const formatted = date.toLocaleDateString('ru-RU', {
// //     day: 'numeric',
// //     month: 'long',
// //     year: 'numeric',
// //   }).replace('г', '').replace('.', '');
// //   clone.querySelector('.template-time').textContent = formatted;
// //   const moreBtn = document.querySelector('.btn-more');
// //   articlesGrid.insertBefore(clone, moreBtn);
//   form.reset();
//   getCountPosts(state);
// });

// showForm();
// closeForm();
// showStat();
// getCountPosts(state);
