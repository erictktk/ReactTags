export class TagsManager {
  constructor(
    tags = [],
    ids = null,
    orOrAnd = 0,
    canAdd = false,
    canDelete = false
  ) {
    //
    this.tags = tags;
    /**@type {Array<Number>}*/
    this.ids = ids;
    /**@type {Array<Number>}*/
    this.active_tags = [];
    this.number = this.tags.length;
    this.orOrAnd = orOrAnd;
    this.canAdd = true;
    this.canDelete = true;

    this.setup();
  }

  setup = () => {
    if (this.ids === null) {
      this.ids = [];
      for (let i = 0; i < this.tags.length; i += 1) {
        this.ids.push(i);
      }
    }

    //if disjunctive, make all tags active initially
    if (this.orOrAnd === 0) {
      for (let i = 0; i < this.tags.length; i += 1) {
        this.active_tags.push(this.ids[i]);
      }
    }
  };

  onClick = (id) => {
    const index = this.active_tags.indexOf(id);
    console.log("id = " + id);
    console.log("index = " + index);
    if (index !== -1) {
      this.active_tags.splice(index, 1);
    } else {
      this.active_tags.push(id);
    }

    console.log(this.active_tags);
  };

  addTag = (newTag) => {};

  removeTag = (id) => {
    const index = this.ids.indexOf(id);
    console.log(index);
    if (index !== -1) {
      this.ids = this.ids.filter((e) => e !== id);
      this.active_tags = this.active_tags.filter((e) => e !== id);

      this.tags.splice(index, 1);
    }
  };
}
