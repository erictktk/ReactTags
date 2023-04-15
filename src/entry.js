//export const EntryView
import shuffle from "shuffle-array";
import PropTypes from "prop-types";

/**
 * @typedef IEntryObject
 * @prop {Array<string>} tags Tags
 */

/**@type {IEntryObject} */
export class EntryObjectEMCA6 {
  constructor(name, tags) {
    this.name = name;
    this.tags = tags;
  }
}

export const entryGenerator = (amount = 10) => {
  const tags = ["tag1", "tag2", "tag3", "tag4", "tag5"];

  const objectsToReturn = [];

  for (let i = 0; i < amount; i += 1) {
    const num = Math.round(Math.random() * 4 + 1);
    shuffle(tags);
    const curName = "entry" + i;
    const curTags = [];
    for (let j = 0; j < num; j += 1) {
      curTags.push(tags[j]);
    }

    objectsToReturn.push({ name: curName, tags: curTags });
  }

  return objectsToReturn;
};

/**
 * 
 * @param {IEntryObject} entryObject
 * @returns 
 */
export const EntryView = ({ entryObject }) => {
  return (
    <div className="entry-view">
      <div className="entry-view-name">{entryObject.name}</div>
      <div className="entry-view-tags">{entryObject.tags}</div>
    </div>
  );
};

//export function EntryView2

/*
EntryView.propTypes = {
  entryObject: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string)
  })
};*/
