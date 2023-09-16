import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./search-result.css";



type SearchResultProps = {
  title: string;
  url: string;
  description: string;
};

const SearchResult: React.FC<SearchResultProps> = ({
  title,
  url,
  description,
}) => {


  const [starred, setStarred] = useState(false);
  /* const [hovered, setHovered] = useState(false); */

  const handleStarClick = () => {
    setStarred(!starred);
    // console.log("starred is set to " + !starred);
  }

/*   const handleMouseEnter = () => {
    setHovered(true);
    console.log("hovering");
  }

  const handleMouseLeave = () => {
    setHovered(false);
    console.log("not hovering");
  } */

  const classNames = starred ? "MySearchResultContainer" : "SearchResultContainer";


  return (
    <div className={classNames}>
      <Link className="SearchResultTitle" to={url}>{title}</Link>
      <Link className = "SearchResultURL" to={url}>{url}</Link>
      <p className="SearchResultDescription">{description}</p>

 {/*  {starred ? <div className="starred-result" onClick={handleStarClick} title="unstar this result">★</div> : <div className="unstarred-result" onClick={handleStarClick} title="star this result">☆</div>}
       */}
      
      {!starred && <div className="star-outline" onClick={handleStarClick} title="star this result">☆</div>}
      { starred && <div className="starred-result" onClick={handleStarClick} title="unstar this result">★</div>}
    
    </div>
  );
};

export default SearchResult;
