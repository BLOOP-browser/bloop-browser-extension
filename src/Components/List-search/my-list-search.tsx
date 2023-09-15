import React from "react";
import "./my-list-search.css";
import { link } from 'fs';

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

  // Use truncate function for title and description
  const truncatedTitle = truncate(title, 30);
  const truncatedDescription = truncate(description, 80);

  return (
    <div className="starredContainer" onClick={() => onListClick?.(id)}>
      <div className="list-container">
        <div className="list-text">
          <div className="OurSearchResultTitleTest">{truncatedTitle}</div>

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
