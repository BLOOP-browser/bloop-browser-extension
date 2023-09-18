import React, { useEffect, useState } from "react";
import LinkSearch from "../../Components/Link-search/link-search";
import CollectionService from "../../services/collection-service";
import { LinkData } from "../../models/link";
import back from "../../Assets/back-arrow.svg";
import "./links-page.css";

interface Props {
  collectionId: number | null;
  backToLink: Function;
}

export function LinksPage(props: Props) {
  const [links, setLinks] = useState<Array<LinkData>>([]);

  function handleBack() {
    // console.log("handle back");
    props.backToLink();
  }

  useEffect(() => {
    if (props.collectionId !== null) {
      CollectionService.getLinksForCollection(props.collectionId, []).then(
        (res) => {
          console.log("API Response:", res.data);
          const data: Array<LinkData> =
            res.data && res.data.linksList ? res.data.linksList : [];
          setLinks(data);
        }
      );
    }
  }, [props.collectionId]);

  return (
    <div className="chrome-ext-window">
      <div className="modal-header">
        <div className="popup-arrow">
          <span className="material-icons">
            <img src={back} onClick={handleBack} alt="Back" />
          </span>
        </div>
      </div>
      <div className="popup-content-chrome">
        <div className="popup-content-header-chrome">
          Click on the saved blips to view the content
        </div>
        {links.map((link, index) => (
          <LinkSearch
            key={index} // It's better to provide a key
            url={link.url}
            image={link.image || ""}
            title={link.title || ""}
            description={link.description || ""}
            createAt={link.createAt || ""}
          />
        ))}
      </div>
    </div>
  );
}

export default LinksPage;
