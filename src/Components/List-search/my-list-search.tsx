import React from 'react';
import './my-list-search.css';
import myAvatar from "../../Assets/my-avatar.svg";
import { link } from 'fs';

interface Props {
  title: string;
  description: string;
  listType: string;
  linksNumber: number;
}

const MyListSearchResult: React.FC<Props> = ({ title, description, listType,  linksNumber}) => {

  return (
    <div className='starredContainer'>

    <div className="list-container">
        <img src = {myAvatar} className='list-avatar'/>
        <div className='mylist-text'>
      <div className="OurSearchResultTitleTest">{title}</div>
      
      <p className="list-text-description">{description}</p>
      </div>
      <div className='listInfo'> <b>{listType}  list</b>  of  {linksNumber}  links</div>
    </div>

    </div>
  );
};

export default MyListSearchResult;
