const existPosts = document.querySelectorAll('.card');
const getPosts = () => {
  const initOldArticles = Array.from(existPosts).map((post, index) => ({
    id: index + 1,
    title: post.querySelector('h3').textContent,
    content: post.querySelector('.text')?.textContent || '',
  }));

  return initOldArticles;
};

const state = {
  posts: getPosts(),
};

const addPostToState = (newPost) => {
  // eslint-disable-next-line no-param-reassign
  newPost.id = state.posts.length + 1;
  state.posts.push(newPost);
};

export { getPosts, state, addPostToState };
