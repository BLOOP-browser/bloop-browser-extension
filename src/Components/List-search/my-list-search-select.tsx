import React, { useState } from "react";
import "./my-list-search-select.css";
// import { link } from "fs";
import checkicon from "../../Assets/check-mark.svg";
import privateIcon from "../../Assets/private-list-icon.svg";

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

  //check if private list
  const isPrivateList = listType.toLowerCase().includes('private');

  const listSelectHandler = () => {
    setIsSelected(!isSelected);
    selectHandler(collectionId);
  };

  // Truncate function to trim and append ".."
  const truncate = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit - 2) + ".." : text;
  };

  // Use truncate function for title and description
  const truncatedTitle = truncate(title, 27);
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
          <div className={isPrivateList ? "PrivateSearchResultTitleTest":"OurSearchResultTitleTest"}>{truncatedTitle}
          <img src = {privateIcon} className= "icon" alt="Private list icon"/>
          </div>
          <p className="list-text-description">{truncatedDescription}</p>
        </div>
        <div className="listInfo">
          {" "}
          <b>{listType} list</b> of{" "}
          <span className="blip-text">{linksNumber} blips</span>
        </div>
        <img src ={checkicon} className="selected-list-check-icon" alt="Check icon"/>
      </div>
    </div>
  );
};

export default SelectMyListSearchResult;
