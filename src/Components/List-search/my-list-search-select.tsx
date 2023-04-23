import React , { useState} from 'react';
import './my-list-search-select.css';
import myAvatar from "../../Assets/my-avatar.svg";
import { link } from 'fs';

interface Props {
  title: string;
  description: string;
  listType: string;
  linksNumber: number;
  selectHandler: () => void;
}

const SelectMyListSearchResult: React.FC<Props> = ({ title, description, listType,  linksNumber, selectHandler}) => {
    const [isSelected, setIsSelected] = useState(false);
    const listSelectHandler = () => {
        setIsSelected(!isSelected);
        selectHandler();
    }


  return (
    <div className='starredContainer'>

    <div className={ isSelected? "selected-list-container":"select-list-container"} onClick={listSelectHandler}>
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

export default SelectMyListSearchResult;
