import React , { useState} from 'react';
import "./my-list-create.css";
import myAvatar from "../../Assets/my-avatar.svg";
import { link } from 'fs';

interface Props {
  setTitle?: any;
  setDescription?: any;
}

export function MyListCreate(props: Props){

  return (
    <div className='starredContainer'>

    <div className="select-list-container">
        <img src = {myAvatar} className='list-avatar'/>
        <div className='mylist-text'>
      <input placeholder="Collection title" className="ListTitleField" onChange={props.setTitle}/>
      <textarea rows = {3} placeholder="Add description and tags here" className="descriptionTitleField" onChange={props.setDescription}/>
      </div>
    </div>

    </div>
  );
};

export default MyListCreate;
