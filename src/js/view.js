/* eslint-disable import/extensions */
import { deletePostFromState } from './model.js';

const form = document.querySelector('.add-article-form');
const articlesGrid = document.querySelector('.articles-grid');
const template = document.getElementById('post-template');
const closeFormBtn = document.querySelector('.close-form-btn');
const statBtn = document.querySelector('.open-stat-btn');
const statDialog = document.getElementById('stat');
const closeStat = document.querySelector('.close-stat-btn');
const addArticleBtn = document.querySelector('.add-post-btn');
const statPosts = document.querySelector('.count-posts');
const addForm = document.querySelector('.add-article');
const deleteArtBtn = document.querySelector('.articles-grid');

const renderNewPost = (post) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.template-title').textContent = post.title;
  clone.querySelector('.template-content').textContent = post.content;
  const date = new Date();
  const formatted = date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).replace('г', '').replace('.', '');
  clone.querySelector('.template-time').textContent = formatted;
  const templateArticle = clone.querySelector('.card');
  templateArticle.dataset.id = post.id;
  articlesGrid.append(clone);
};

const getCountPosts = (obj) => {
  const number = obj.posts.length;
  statPosts.textContent = number;
};

const showForm = () => {
  addArticleBtn.addEventListener('click', () => {
    addForm.classList.remove('invisible');
    addForm.classList.add('visible');
    addForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
};

const closeForm = () => {
  closeFormBtn.addEventListener('click', () => {
    form.reset();
    addForm.classList.remove('visible');
    addForm.classList.add('invisible');
  });
};

const showStat = () => {
  statBtn.addEventListener('click', () => {
    statDialog.showModal();
  });

  closeStat.addEventListener('click', () => {
    statDialog.close();
  });

  statDialog.addEventListener('click', (e) => {
    if (e.target === statDialog) {
      statDialog.close();
    }
  });
};

const deleteArticle = () => {
  deleteArtBtn.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('delete-btn')) {
      const post = e.target.closest('.card');
      const newState = deletePostFromState(post);
      post.remove();
      getCountPosts(newState);
    }
  });
};

export {
  form, renderNewPost, getCountPosts, showForm,
  closeForm, showStat, deleteArticle,
};
