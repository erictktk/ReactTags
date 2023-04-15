import { useState } from "react";
import { TagsManager } from "./tagsManager";
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai";

export const HardcodedTag = () => {
  return <div className="tag-label">Tag 1</div>;
};

/**
 *
 * @param {TagsManager} tagsManager
 */
export const TagsView = ({
  tagsManager,
  inverse = true,
  canDelete = false
}) => {
  /**@type{TagsManager} */
  tagsManager = tagsManager;
  //

  const [state, stateFunc] = useState(0);

  const tagsElements = [];
  for (let i = 0; i < tagsManager.ids.length; i += 1) {
    const id = tagsManager.ids[i];
    const tag = tagsManager.tags[i];
    const isSelected = tagsManager.active_tags.includes(id);
    const callback = () => {
      console.log(`callback from = ${id}`);
      tagsManager.onClick(id);
      stateFunc(state + 1);
    };

    let deleteCallback = null;
    if (tagsManager.canDelete) {
      deleteCallback = () => {
        console.log(`deleteCallback from = ${id}`);
        tagsManager.removeTag(id);
        stateFunc(state + 1);
      };
    }

    const tagElement = (
      <TagElement
        key={id}
        tag={tag}
        isSelected={isSelected}
        callback={callback}
        deleteCallback={deleteCallback}
      />
    );

    tagsElements.push(tagElement);
  }

  if (tagsManager.canAdd) {
    /*
    const addCallback = () => {
      tagsManager.addCallback
    }*/
    //AiOutlinePlusCircle;
  }

  return <div className="tags-holder">{tagsElements}</div>;
};

export const AddTagElement = ({ callback }) => {
  return (
    <div
      className="close-button"
      onClick={deleteCallback}
      style={{
        display: "inline-block",
        position: "relative",
        left: "-1rem"
      }}
    >
      <AiOutlineCloseCircle className={"exit-button"} />
    </div>
  );
};

export const TemporaryTagElement = () => {
  <div className="tag-label"></div>;
};

export const TagElement = ({ tag, isSelected, callback, deleteCallback }) => {
  const className = isSelected ? "tag-label" : "tag-label deselected";
  console.log(className);

  if (!deleteCallback) {
    return (
      <div className={className} onClick={callback}>
        {tag}
      </div>
    );
  } else {
    return (
      <>
        <div
          className={className}
          onClick={callback}
          style={{ display: "flex" }}
        >
          {tag}
        </div>
        <div
          className="close-button"
          onClick={deleteCallback}
          style={{
            display: "inline-block",
            position: "relative",
            left: "-1rem"
          }}
        >
          <AiOutlineCloseCircle className={"exit-button"} />
        </div>
      </>
    );
  }
};

export const CloseCorner = ({}) => {};
