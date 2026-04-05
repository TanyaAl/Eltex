// eslint-disable-next-line import/extensions
import Storage from './ArticleStorage.js';

const storageKey = 'articles';

const state = {
  posts: Storage.get(storageKey),
};

const addPostToState = (newPost) => {
  state.posts.push(newPost);
  Storage.save(storageKey, state.posts);
};

const deletePostFromState = (post) => {
  const dataId = post.dataset.id;
  const newPosts = state.posts.filter((item) => dataId !== String(item.id));
  state.posts = newPosts;
  Storage.save(storageKey, state.posts);
  return state;
};

export {
  state, addPostToState, deletePostFromState,
};
