export default class Article {
  constructor({ id = crypto.randomUUID(), title, content }) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}
