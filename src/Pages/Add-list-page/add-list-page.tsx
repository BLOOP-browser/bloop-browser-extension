import React, { useState } from "react";
import "./add-list-page.css";
import ListDropdown from "../../Components/List-type-dropdown/list-type-dropdown";
import back from "../../Assets/back-arrow.svg";
import myAvatar from "../../Assets/my-avatar.svg";
import MyListCreate from "../../Components/List-search/my-list-create";
import CollectionService from "../../services/collection-service";

interface InitialProps {
  backToCollections: Function;
}

export function AddListPage(props: InitialProps) {
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState("publicView");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const ListTypeOptions = [
    {
      value: "publicView",
      label: "Public list",
      description: "Anyone can access this list",
    },
    {
      value: "privateView",
      label: "Unlisted",
      description: "Only people with the link can access this list",
    },
    {
      value: "private",
      label: "Private list",
      description: "Only you can access this list",
    },
  ];

  function handleCreateCollection() {
    setErrorMessage("");
    if(!title || !description){
      setErrorMessage("Invalid title or description");
      return;
    }
    CollectionService.createCollection({description:description, title:title, accessType: type}).then((res) => {
      console.log("list created successfully");
      props.backToCollections();
    }).catch((error) => {
      console.log(error);
      setErrorMessage("Internal error, please try to create list later")
    })
  }
  function handleBack(){
    props.backToCollections();
  }
  function handleSelectType(selectedType: string) {
    setType(selectedType);
  }
  return (
    <div className="chrome-ext-window">
      <div className="modal-header">
        <div className="popup-arrow">
          <span className="material-icons">
            {" "}
            <img src={back} onClick={handleBack}/>
          </span>
        </div>
        <button className="save-link-tolist-button" onClick={handleCreateCollection}>Create list </button>
      </div>

      <div className="popup-content-chrome-addlist">
        <div className="starredContainer">
          <div className="select-list-container">
            <img src={myAvatar} className="list-avatar" />
            <div className="mylist-text">
              <input
                placeholder="Collection title"
                className="ListTitleField"
                onChange={(event) =>  setTitle(event.target.value)}
                value={title}
              />
              <textarea
                rows={3}
                placeholder="Add description and tags here"
                className="descriptionTitleField"
                onChange={(event) =>  setDescription(event.target.value)}
                value={description}
              />
              {errorMessage && (
              <span style={{ color: "red" }} className="email-error">
                {errorMessage}.
              </span>
            )}
            </div>
          </div>
        </div>

        <ListDropdown
          options={ListTypeOptions}
          handleSelectType={handleSelectType}
        />
      </div>
    </div>
  );
}

export default AddListPage;
