/* eslint-disable import/extensions */
import { state, getExistsPosts, addPostToState } from './model.js';
import {
  form, getCountPosts, renderNewPost, showForm,
  closeForm, showStat, deleteArticle,
} from './view.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const newPost = Object.fromEntries(data.entries());
  addPostToState(newPost);
  renderNewPost(newPost);
  // renderCurrentPosts(state);
  getCountPosts(state);
  form.reset();
});

const initApp = () => {
  getExistsPosts();
  // renderCurrentPosts(state);
  showForm();
  closeForm();
  showStat();
  getCountPosts(state);
  deleteArticle();
};

initApp();
