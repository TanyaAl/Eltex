/* eslint-disable import/extensions */
import { state, addPostToState } from './model.js';
import {
  form, toggleLoaderVisibility, toggleDisableFormState, getCountPosts, renderCurrentPosts,
  renderBtnOrString, renderNewPost, showForm,
  closeForm, showStat, deleteArticle,
} from './view.js';
import Article from './Article_template.js';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  toggleLoaderVisibility(true);
  const data = new FormData(form);
  const newPost = new Article(Object.fromEntries(data.entries()));
  toggleDisableFormState(true);
  setTimeout(() => {
    addPostToState(newPost);
    renderNewPost(newPost);
    toggleLoaderVisibility(false);
    getCountPosts(state);
    renderBtnOrString(state);
    toggleDisableFormState(false);
    form.reset();
  }, 1000);
});

const initApp = () => {
  toggleLoaderVisibility(true);
  setTimeout(() => {
    renderCurrentPosts(state);
    toggleLoaderVisibility(false);
  }, 1000);
  showForm();
  closeForm();
  showStat();
  getCountPosts(state);
  deleteArticle();
  renderBtnOrString(state);
};

initApp();
