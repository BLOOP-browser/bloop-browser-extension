import React from 'react';
import "./success-page.css";
import closeicon from "../../Assets/close.svg";
import copyicon from "../../Assets/copy.svg";
import checkicon from "../../Assets/check.svg";
import MyListSearchResult from '../../Components/List-search/my-list-search';


const SuccessPage= () => {

return(
    
    <div className='chrome-ext-window'> 
    <div className='modal-header'>
        <img src= {closeicon}/> 
        
         </div>
    
    <div className="grid-modal-success">
    <img className= "check-success" src = {checkicon}/>
          <div className='form-description'>Link successfully saved to list! </div>

          <MyListSearchResult title='Mylist' description='my description Lorem Ipsum something something. my description Lorem Ipsum something something   ' listType='Pubic' linksNumber={10} />

          <div className='form-description'> You can share this list with this URL: </div>

        


        </div>

     
        
    
    </div>

);

}

export default SuccessPage;

