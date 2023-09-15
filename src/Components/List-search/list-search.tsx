import React from 'react';
import './list-search.css';
import theirAvatar from "../../assets/their-avatar.svg";

interface Props {
  title: string;
  description: string;
  listType: string;
  linksNumber: number;
}

const ListSearchResult: React.FC<Props> = ({ title, description, listType,  linksNumber}) => {
  return (
    <div className='starredContainer'>
      <div className='listInfo'>{listType} list of {linksNumber} links</div>
    <div className="OurSearchResultContainerTest">
        <img src = {theirAvatar} className='starredCurator' alt='profile avatar'/>
      <div className="OurSearchResultTitleTest">{title}</div>
      <p className="OurSearchResultDescriptionTest">{description}</p>
    </div>

    </div>
  );
};

export default ListSearchResult;
