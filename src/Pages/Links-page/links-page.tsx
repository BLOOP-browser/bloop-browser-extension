import React, { useEffect, useState } from "react";
import LinkSearch from "../../Components/Link-search/link-search";
import LinkService from "../../services/link-service";
import { LinkData } from "../../models/link";
import back from "../../Assets/back-arrow.svg";
import './links-page.css'

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
    // Fetching links from LinkService instead of CollectionService
    LinkService.getLinks().then((res) => {
      // Assuming that the response contains an array of LinkData directly
      setLinks(res.data || []);
    });
  }, [props.collectionId]);  // Note: If you're not using collectionId in fetching the links, you might want to remove it from the dependency array.

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
          // key={index}
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
};

export default LinksPage;
