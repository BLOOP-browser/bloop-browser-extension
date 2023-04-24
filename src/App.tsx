import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login-page/login';

import AddLinkPage from './Pages/Add-link-page/add-link';
import AddToListPage from './Pages/Add-to-list-page/add-to-list';
import AddListPage from './Pages/Add-list-page/add-list-page';
import AuthService from './services/auth-services';
import LinkService from './services/link-service';
import CollectionService from './services/collection-service';
import LinkAdded from './Pages/Link-Added/LinkAdded';


enum View{
  Loading,
  Error,
  Login,
  AddLink,
  AddCollection,
  Collections,
  LinkAdded,
}

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const [currentUrl, setCurrentURL] = useState<string>("");
  const [urlDescription, setUrlDescription] = useState<string>("");
  const [jwtToken, setJwtToken] = useState<string>("");
  const [collectionId, setCollectionId] = useState<number|null>();

  const [view, setView] = useState<View>(View.AddLink);
  
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(`get url ${tabs[0].url}`);
      setCurrentURL(tabs[0].url ?? "");
    });
  }, []);
  
  useEffect(() => {
    const jwt = localStorage.getItem("auth");
    if(jwt){
      setJwtToken(jwt);
      setIsLogged(true);
    }else{
      setJwtToken("");
      setIsLogged(false);
      setView(View.Login);
    }
  }, []);

  function handleLogin(jwtToken: string){
        setJwtToken(jwtToken);
        setIsLogged(true);
        setView(View.AddLink);
    }

  function handleAddLink(url: string, description: string){
    setCurrentURL(url);
    setUrlDescription(description);
    setView(View.Collections);
  }

  function handleChooseCollection(collId: number){
    console.log(currentUrl);
    console.log(urlDescription);
    setCollectionId(collId);
    LinkService.addLink({mainDescription:urlDescription,url:currentUrl}).then((res) => {
      CollectionService.addLinkToCollection(collId, [res.data.id]).then((res) => {
        console.log("added link to colection");
        console.log(res.data);
      })
    })
    setCurrentURL("");
    setUrlDescription("");
    setCollectionId(null);

    setView(View.LinkAdded);
  }

  function onLinkAdded(){
    setCurrentURL("");
    setUrlDescription("");
    setCollectionId(null);
    setView(View.AddLink);
  }

  function redirectToAddCollection(){
    setView(View.AddCollection);
  }

  function redirectToLink(){
    setView(View.AddLink);
  }

  function redirectToCollections(){
    setView(View.Collections);
  }

  const renderView = () => {
    switch(view) {
      case View.AddLink:
        return <AddLinkPage linkUrlPath={currentUrl} handleAddLink={handleAddLink}/>
      case View.Login:
        return <Login onLogin={handleLogin}/>
      case View.AddCollection:
        return <AddListPage backToCollections={redirectToCollections}/>
      case View.Collections:
        return <AddToListPage handleChooseLink={handleChooseCollection} handleAddCollection={redirectToAddCollection} backToLink={redirectToLink} />
      case View.LinkAdded:
        return <LinkAdded onLinkAdded={onLinkAdded} />
  
      default:
        return <AddLinkPage linkUrlPath={currentUrl} handleAddLink={handleAddLink}/>
    }
  }

  return (
      <div className="app">
        {renderView()}
      </div>
    );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <Link to="/login" className='button-login'> Go to Login</Link>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
