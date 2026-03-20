/* eslint-disable import/extensions */
import { state, addPostToState } from './model.js';
import {
  form, renderPosts, getCountPosts, showForm, closeForm, showStat,
} from './view.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const newPost = Object.fromEntries(data.entries());
  addPostToState(newPost);
  renderPosts(newPost);
  getCountPosts(state);
  form.reset();
});

const initApp = () => {
  showForm();
  closeForm();
  showStat();
  getCountPosts(state);
};

initApp();
