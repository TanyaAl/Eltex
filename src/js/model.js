// eslint-disable-next-line import/extensions
import Storage from './ArticleStorage.js';

const state = {
  posts: Storage.get('articles'),
};

const addPostToState = (newPost) => {
  state.posts.push(newPost);
  Storage.save('articles', state.posts);
};

const deletePostFromState = (post) => {
  const dataId = post.dataset.id;
  const newPosts = state.posts.filter((item) => dataId !== String(item.id));
  state.posts = newPosts;
  Storage.save('articles', state.posts);
  return state;
};

export {
  state, addPostToState, deletePostFromState,
};
