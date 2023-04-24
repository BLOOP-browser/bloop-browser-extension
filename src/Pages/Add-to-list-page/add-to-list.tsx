import React, { useEffect, useState } from 'react';
import './add-to-list.css';
import SelectMyListSearchResult from '../../Components/List-search/my-list-search-select';
import back from '../../Assets/back-arrow.svg';
import CollectionService from '../../services/collection-service';
import { CollectionData } from '../../models/collection';

interface InitialProps {
  handleChooseLink: Function,
  handleAddCollection: Function
  backToLink: Function
}

export function AddToListPage(props: InitialProps) {

  const [collectionId, setCollectionId] = useState<number|undefined>()
  const [collectionsData, setCollectionsData] = useState<Array<CollectionData>>([]);
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    CollectionService.getCollections()
          .then((res) => {
            setCollectionsData(res.data);
          })
          .catch((error) => {
            console.error(error);
          });
    },[])
  function selectHandler(colId: number) {
        setIsSelected(!isSelected);
        setCollectionId(colId)
    }

    function handleSubmit(){
      console.log("Create new collection")
      props.handleAddCollection();
    }

    function handleChooseCollection(){
      console.log("Choose collection")
      props.handleChooseLink(collectionId);
    }
    function handleBack(){
      console.log("handle back")
      props.backToLink();
    }
return(
<div className='chrome-ext-window'>
      <div className="modal-header">
        <div className="popup-arrow" >
          <span className="material-icons"> <img src= {back} onClick={handleBack}/></span>
        </div>
        
        { isSelected?  <button className='save-link-tolist-button' onClick={handleChooseCollection}>Save</button> : <button className='inactive-save-button'>Save </button>}
      </div>
      <div className="popup-content-chrome">
        <div className='popup-content-header-chrome'>Your lists ({collectionsData.length ?? 0})</div> 
        {collectionsData.length > 0 ? (
          collectionsData.map((item, index) => (
            <SelectMyListSearchResult collectionId={item.id} title={item.title ?? ""} description={item.description ?? ""} listType={item.accessType ?? "publicView"} linksNumber={item.links?.length ?? 0} selectHandler={selectHandler}/>
          )
          )):<p>No list found please</p>}

      </div>

      <button className="newlist-button-chrome" onClick={handleSubmit}>
          + New List
        </button>
      
    </div>
    );

}

export default AddToListPage;