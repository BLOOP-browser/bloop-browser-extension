import React, { useState } from 'react';
import './add-to-list.css';
import SelectMyListSearchResult from '../../Components/List-search/my-list-search-select';
import back from '../../Assets/back-arrow.svg';

const AddToListPage = () =>{


    const [isSelected, setIsSelected] = useState(false);
    const selectHandler = () => {
        setIsSelected(!isSelected);
    }

return(
<div className='chrome-ext-window'>
      <div className="modal-header">
        <div className="popup-arrow" >
          <span className="material-icons"> <img src= {back}/></span>
        </div>
        
        { isSelected?  <button className='save-link-tolist-button'>Save</button> : <button className='inactive-save-button'>Save </button>}
      </div>
      <div className="popup-content-chrome">
        <div className='popup-content-header-chrome'>Your lists (2)</div> 
        <SelectMyListSearchResult title='Mylist' description='my description Lorem Ipsum something something. my description Lorem Ipsum something something   ' listType='Pubic' linksNumber={10} selectHandler={selectHandler}/>
        <SelectMyListSearchResult title='My Leest' description='my description short short  ' listType='Unlisted' linksNumber={5} selectHandler={selectHandler}/>
        <SelectMyListSearchResult title='My Listo' description='my description short short  ' listType='Unlisted' linksNumber={5} selectHandler={selectHandler}/>
        <SelectMyListSearchResult title='My Lasto' description='my description short short  ' listType='Unlisted' linksNumber={5} selectHandler={selectHandler}/>

      </div>

      <button className="newlist-button-chrome" >
          + New List
        </button>
      
    </div>
    );

}

export default AddToListPage;