import React, { useEffect, useState } from 'react';
import "./add-link.css";
import closeicon from "../../Assets/close.svg";
import nexticon from "../../Assets/next-arrow.svg";

interface InitialProps {
  linkUrlPath: string,
  handleAddLink: Function
}

export function AddLinkPage(props: InitialProps) {
  const [currentUrl, setCurrentURL] = useState<string>(props.linkUrlPath);
  const [urlDescription, setUrlDescription] = useState<string>("");

  useEffect(() => {
    if(!currentUrl){
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log(`get url ${tabs[0].url}`);
        setCurrentURL(tabs[0].url ?? "");
      });
    }
  }, []);
  
  function handleSubmit(){
    console.log("addLink");
    props.handleAddLink(currentUrl, urlDescription);
  }

return(
    
    <div className='chrome-ext-window'> 
    <div className='modal-header'>
        <img className = "closeicon"src= {closeicon}/> 
        <button className='save-link-button' onClick={handleSubmit}> Save this URL to list <img src = {nexticon}/></button>
         </div>
    
    <div className="grid-modal">
          <div className='form-description'> Add any comments or #tags below</div>

          <fieldset>
            <textarea
              rows={5}
              className="paragraph-linkdescription"
              placeholder="Comments and #tags"
              value={urlDescription}
              onChange={(event) =>  setUrlDescription(event.target.value)}
            />
            
            <input
              className="oneline-link"
              required
              type="url"
              placeholder="https://website.com"
              value={currentUrl}
              onChange={(event) =>  setCurrentURL(event.target.value)}
            />
            
          </fieldset>
        </div>
    
    </div>

);

}

export default AddLinkPage;

