import React, { useEffect, useState } from "react";
import "./user-profile.css";
import MyListSearchResult from "../../Components/List-search/my-list-search";
import back from "../../Assets/back-arrow.svg";
import CollectionService from "../../services/collection-service";
import { CollectionData } from "../../models/collection";
import myAvatar from "../../Assets/my-avatar.svg";

interface InitialProps {
  backToLink: Function;
  onShowLinks: (id: number) => void;
}

export function UserProfile(props: InitialProps) {
  const [collectionsData, setCollectionsData] = useState<Array<CollectionData>>(
    []
  );
  const [linksCount, setLinksCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    CollectionService.getCollections()
      .then((res) => {
        setCollectionsData(res.data);
        const totalLinksCount = res.data.reduce(
          (total, collection) => total + (collection.links?.length ?? 0),
          0
        );
        setLinksCount(totalLinksCount);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); 
      });
  }, []);

  function handleBack() {
    // console.log("handle back");
    props.backToLink();
  }

  function showLinks(id: number) {
    props.onShowLinks(id);
  }

  const loading = {
    color: "#656465", 
    marginLeft: "10px"
  }

  return (
    <div className="chrome-ext-window">
      <div className="modal-header">
        <div className="popup-arrow">
          <span className="material-icons">
            <img src={back} onClick={handleBack} alt="Back" />
          </span>
        </div>
        <img src = {myAvatar} className='user-profile-avatar' alt='User avatar'/>
        <div className="user-info">
          <b>You</b><br/>
          <span>
            {linksCount} blips + {collectionsData.length ?? 0} lists
          </span>
        </div>
      </div>
      <div className="popup-content-chrome">
        {isLoading ? (
          <p style={loading}>Loading..</p>
        ) : collectionsData.length > 0 ? (
          collectionsData.map((item, index) => (
            <div onClick={() => showLinks(item.id)} key={index}>
            <MyListSearchResult
              id={item.id}
              title={item.title ?? ""}
              description={item.description ?? ""}
              listType={item.accessType ?? "publicView"}
              linksNumber={item.links?.length ?? 0}
              onListClick={(id) => showLinks(id)}
            />
            </div>
          ))
        ) : (
          <p>Oops! There's nothing here.</p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
