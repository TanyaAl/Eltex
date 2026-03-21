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

const renderPosts = (post) => {
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

export {
  form, renderPosts, getCountPosts, showForm, closeForm, showStat,
};
