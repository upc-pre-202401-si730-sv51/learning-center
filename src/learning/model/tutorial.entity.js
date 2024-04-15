export class Tutorial {
    constructor(id, title, description, published) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.published = published;
    this.status = this.published === true ? "Published" : "Unpublished";
  }
}