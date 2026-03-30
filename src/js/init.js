/* eslint-disable import/extensions */
import { state, addPostToState } from './model.js';
import {
  form, getCountPosts, renderCurrentPosts, renderBtnOrString, renderNewPost, showForm,
  closeForm, showStat, deleteArticle,
} from './view.js';
import Article from './Article_template.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const newPost = new Article(Object.fromEntries(data.entries()));
  addPostToState(newPost);
  renderNewPost(newPost);
  getCountPosts(state);
  renderBtnOrString(state);
  form.reset();
});

const initApp = () => {
  renderCurrentPosts(state);
  showForm();
  closeForm();
  showStat();
  getCountPosts(state);
  deleteArticle();
  renderBtnOrString(state);
};

initApp();
