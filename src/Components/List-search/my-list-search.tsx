import React from "react";
import "./my-list-search.css";
// import { link } from 'fs';
import privateIcon from "../../Assets/private-list-icon.svg";

interface Props {
  id: number; 
  title: string;
  description: string;
  listType: string;
  linksNumber: number;
  onListClick?: (id: number) => void;
}

const MyListSearchResult: React.FC<Props> = ({
  id,
  title,
  description,
  listType,
  linksNumber,
  onListClick, 
}) => {

  // Truncate function to trim and append ".."
  const truncate = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit - 2) + ".." : text;
  }

  const isPrivateList = listType.toLowerCase().includes('private');

  // Use truncate function for title and description
  const truncatedTitle = truncate(title, 26);
  const truncatedDescription = truncate(description, 80);

  return (
    <div className="starredContainer" onClick={() => onListClick?.(id)}>
      <div className="list-container">
        <div className="list-text">
          <div className={isPrivateList ? "PrivateSearchResultTitleTest":"OurSearchResultTitleTest"}>{truncatedTitle}
          <img src = {privateIcon} className= "icon" alt="Private list icon"/>
          </div>

          <p className="list-text-description">{truncatedDescription}</p>
        </div>
        <div className="listInfo">
          {" "}
          <b>{listType} list</b> of <span className="blip-text">{linksNumber} blips</span>
        </div>
      </div>
    </div>
  );
};

export default MyListSearchResult;
