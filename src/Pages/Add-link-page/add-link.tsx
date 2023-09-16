import React from "react";
import { useState, useEffect } from "react";
import "./add-link.css";
import closeicon from "../../Assets/close.svg";
import myAvatar from "../../Assets/my-avatar.svg";
import nexticon from "../../Assets/next-arrow.svg";
import logo from "../../Assets/transparent-bl-logo.svg"
import star from "../../Assets/Star-bl.svg"
import CollectionService from '../../services/collection-service';
import LinkService from "../../services/link-service";
import { CollectionData } from '../../models/collection';

interface InitialProps {
  linkUrlPath: string,
  handleAddLink: Function,
  navigateToProfile: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function AddLinkPage(props: InitialProps) {
  const [currentUrl, setCurrentURL] = useState<string>(props.linkUrlPath);
  const [urlDescription, setUrlDescription] = useState<string>("");
  const [collectionsData, setCollectionsData] = useState<Array<CollectionData>>([]);
  const [linkTitle, setLinkTitle] = useState<string>("");
  const [linkImage, setLinkImage] = useState<string>("");
  const [linksCount, setLinksCount] = useState<number>(0);

  useEffect(() => {
    if(!currentUrl){
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // console.log(`get url ${tabs[0].url}`);
        setCurrentURL(tabs[0].url ?? "");
      });
    }
    CollectionService.getCollections()
    .then((res) => {
      setCollectionsData(res.data);
        // Calculate the total links count across all collections
        const totalLinksCount = res.data.reduce(
          (total, collection) => total + (collection.links?.length ?? 0),
          0
        );
        setLinksCount(totalLinksCount);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    if(currentUrl){
      LinkService.getLink(currentUrl).then(response => {
        setLinkTitle(response.data.title || "");
        setLinkImage(response.data.image || "");
      }).catch(error => {
        console.error("Error fetching link details:", error);
      });
    }
}, [currentUrl]);

  
  function handleSubmit(){
    // console.log("addLink");
    props.handleAddLink(currentUrl, urlDescription);
  }

return(
    
    <div className='chrome-ext-window'> 
    <div className='modal-header'>
        <img className = "closeicon"src= {closeicon} alt='close icon'/> 
        <button className='save-link-button' onClick={handleSubmit}>Save blip</button>
    </div>

    <div className='user-profile'>
        <img src={myAvatar} className="user-avatar" alt="My avatar" />
    </div>
    
    <div className="grid-modal">
          <fieldset>
            <textarea
              rows={5}
              className="paragraph-linkdescription"
              placeholder="Note something down for later."
              value={urlDescription}
              onChange={(event) =>  setUrlDescription(event.target.value)}
              required
            />
            {linkImage && <img src={linkImage} alt="Link Preview" />}
            <input
              className="oneline-link"
              required
              type="url"
              placeholder="https://website.com"
              value={linkTitle || currentUrl}
              onChange={(event) =>  setCurrentURL(event.target.value)}
            />
            
          </fieldset>
          <footer>
            
            <div className='user-stats'>
            <a href="https://getbloop.co/"
            target="_blank"
            rel="noopener noreferrer" className="bloop-redirect"
            >
            <img src={logo} className="bloop-logo" alt="Bloop logo" />
            </a>
            <button className='my-blips' onClick={props.navigateToProfile}>
              <img src={star} className="star-icon" alt="Star icon" />
              My saves
              <span className="user-profile-stats-btn">
                {linksCount} blips + {collectionsData.length ?? 0} lists
              </span>
            </button>
            </div>
          </footer>
        </div>
    </div>

);

}

export default AddLinkPage;
