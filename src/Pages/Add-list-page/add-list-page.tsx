import React from 'react';
import './add-list-page.css';
import ListDropdown from '../../Components/List-type-dropdown/list-type-dropdown';
import back from '../../Assets/back-arrow.svg';
import MyListCreate from '../../Components/List-search/my-list-create';




const AddListPage = () => {

  const ListTypeOptions = [
    {
      value: "public",
      label: "Public list",
      description: "Anyone can access this list",
    },
    {
      value: "unlisted",
      label: "Unlisted",
      description: "Only people with the link can access this list",
    },
    {
      value: "private",
      label: "Private list",
      description: "Only you can access this list",
    },
  ];


  return (
    <div className='chrome-ext-window'>
      <div className="modal-header">
        <div className="popup-arrow" >
        <span className="material-icons"> <img src= {back}/></span>
        </div>
        <button className='save-link-tolist-button'>Create list </button>
      </div>
    
      <div className="popup-content-chrome-addlist">
        <MyListCreate/>
        

      <ListDropdown options= {ListTypeOptions} />        
      </div>

    </div>
  );
};

export default AddListPage;
