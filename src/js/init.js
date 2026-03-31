/* eslint-disable import/extensions */
import { state, addPostToState } from './model.js';
import {
  form, displayLoader, disableForm, getCountPosts, renderCurrentPosts,
  renderBtnOrString, renderNewPost, showForm,
  closeForm, showStat, deleteArticle,
} from './view.js';
import Article from './Article_template.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  displayLoader(true);
  const data = new FormData(form);
  const newPost = new Article(Object.fromEntries(data.entries()));
  disableForm(true);
  setTimeout(() => {
    addPostToState(newPost);
    renderNewPost(newPost);
    displayLoader(false);
    getCountPosts(state);
    renderBtnOrString(state);
    disableForm(false);
    form.reset();
  }, 1000);
});

const initApp = () => {
  displayLoader(true);
  setTimeout(() => {
    renderCurrentPosts(state);
    displayLoader(false);
  }, 1000);
  showForm();
  closeForm();
  showStat();
  getCountPosts(state);
  deleteArticle();
  renderBtnOrString(state);
};

initApp();
