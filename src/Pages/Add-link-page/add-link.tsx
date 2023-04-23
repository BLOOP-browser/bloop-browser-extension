import React from 'react';
import "./add-link.css";
import closeicon from "../../Assets/close.svg";
import nexticon from "../../Assets/next-arrow.svg";

const AddLinkPage= () => {

return(
    
    <div className='chrome-ext-window'> 
    <div className='modal-header'>
        <img src= {closeicon}/> 
        <button className='save-link-button'> Save this URL to list <img src = {nexticon}/></button>
         </div>
    
    <div className="grid-modal">
          <div className='form-description'> Add any comments or #tags below</div>

          <fieldset>
            <textarea
              rows={5}
              className="paragraph-linkdescription"
              placeholder="Comments and #tags"
              
            />
            
            <input
              className="oneline-link"
              required
              type="url"
              placeholder="https://website.com"
              
            />
            
          </fieldset>
        </div>
    
    </div>

);

}

export default AddLinkPage;

