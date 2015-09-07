export default class Cart {
  constructor () {
    this.items = [];
  }

  getItems () {
    return this.items
  }

  addArticle (article) {
    this.items.push(article);
  }

  sum () {
    return this.items.reduce((total, article) => total + article.price, 0);
  }
}