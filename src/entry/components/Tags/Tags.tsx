import { TagsInput } from "react-tag-input-component";

const Tags = ({ tags, setTags }: { tags: string[]; setTags: (tags: string[]) => void }) => {
  return (
    <TagsInput
      value={tags}
      onChange={setTags}
      name="fruits"
      placeHolder="Tags are seperated by ↵"
    />
  );
};

export default Tags;
