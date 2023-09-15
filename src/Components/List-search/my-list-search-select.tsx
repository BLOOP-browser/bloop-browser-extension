import React, { useState } from "react";
import "./my-list-search-select.css";
import { link } from "fs";

interface Props {
  collectionId: number;
  title: string;
  description: string;
  listType: string;
  linksNumber: number;
  selectHandler: (collectionId: number) => void;
}

const SelectMyListSearchResult: React.FC<Props> = ({
  collectionId,
  title,
  description,
  listType,
  linksNumber,
  selectHandler,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const listSelectHandler = () => {
    setIsSelected(!isSelected);
    selectHandler(collectionId);
  };

  // Truncate function to trim and append ".."
  const truncate = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit - 2) + ".." : text;
  };

  // Use truncate function for title and description
  const truncatedTitle = truncate(title, 30);
  const truncatedDescription = truncate(description, 80);

  return (
    <div className="starredContainer" key={collectionId}>
      <div
        className={
          isSelected ? "selected-list-container" : "select-list-container"
        }
        onClick={listSelectHandler}
      >
        <div className="mylist-text">
          <div className="OurSearchResultTitleTest">{truncatedTitle}</div>
          <p className="list-text-description">{truncatedDescription}</p>
        </div>
        <div className="listInfo">
          {" "}
          <b>{listType} list</b> of{" "}
          <span className="blip-text">{linksNumber} blips</span>
        </div>
      </div>
    </div>
  );
};

export default SelectMyListSearchResult;
