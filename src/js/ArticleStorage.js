export default class Storage {
  static save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static get(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
  }

  static remove(key) {
    localStorage.removeItem(key);
  }
}
