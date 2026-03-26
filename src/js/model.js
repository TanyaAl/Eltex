const existPosts = document.querySelectorAll('.card');
const getExistsPosts = () => {
  const initOldArticles = Array.from(existPosts).map((post, index) => {
    const id = String(index + 1);
    post.setAttribute('data-id', id);
    return {
      id,
      title: post.querySelector('h3').textContent,
      content: post.querySelector('.text')?.textContent || '',
    };
  });

  return initOldArticles;
};

const state = {
  posts: getExistsPosts(),
};

const addPostToState = (newPost) => {
  // eslint-disable-next-line no-param-reassign
  newPost.id = state.posts.length + 1;
  state.posts.push(newPost);
};

const deletePostFromState = (post) => {
  const dataId = post.dataset.id;
  const newPosts = state.posts.filter((item) => dataId !== String(item.id));
  state.posts = newPosts;
  return state;
};

export {
  getExistsPosts, state, addPostToState, deletePostFromState,
};
