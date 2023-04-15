import "./styles.css";
import "./tags.scss";

import { HardcodedTag, TagsView } from "./tags";
import { TagsManager } from "./tagsManager";

const tagsManager = new TagsManager(["tag1", "tag2", "tag3", "tag4"]);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TagsView tagsManager={tagsManager} />
      <HardcodedTag></HardcodedTag>
    </div>
  );
}
