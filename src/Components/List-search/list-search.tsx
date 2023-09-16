import React from 'react';
import './list-search.css';
import theirAvatar from "../../assets/their-avatar.svg";
import privateIcon from "../../Assets/private-list-icon.svg";

interface Props {
  title: string;
  description: string;
  listType: string;
  linksNumber: number;
}

const ListSearchResult: React.FC<Props> = ({ title, description, listType,  linksNumber}) => {

  const isPrivateList = listType.toLowerCase().includes('private');

  return (
    <div className='starredContainer'>
      <div className='listInfo'>{listType} list of {linksNumber} links</div>
    <div className="OurSearchResultContainerTest">
        <img src = {theirAvatar} className='starredCurator' alt='profile avatar'/>
      <div className={isPrivateList ? "PrivateSearchResultTitleTest":"OurSearchResultTitleTest"}>{title}
        <img src = {privateIcon} className= "icon"/>
      </div>
      <p className="OurSearchResultDescriptionTest">{description}</p>
    </div>

    </div>
  );
};

export default ListSearchResult;
