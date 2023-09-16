import React from "react";
import "./link-search.css";
import exclam from "../../Assets/exclam-icon.svg"

interface Props {
  url: string;
  image: string;
  title: string;
  description: string;
  createAt: string;
}

const LinkSearch: React.FC<Props> = ({ url, image, title, description, createAt }) => {

  // Truncate function to trim and append ".."
  const truncate = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit - 2) + ".." : text;
  }

  // Use truncate function for title and description
  const truncatedTitle = truncate(title, 28);
  const truncatedDescription = truncate(description, 70);

  // Convert createAt string to Date object
  const createdAtDate = new Date(createAt);
  const currentDate = new Date();

  // Calculate the difference in various units
  const diffInSeconds = Math.floor((currentDate.getTime() - createdAtDate.getTime()) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60); // Calculate difference in minutes
  const diffInHours = Math.floor(diffInSeconds / 3600);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  // Determine how to display the difference
  let displayDate = createAt;
  if (diffInYears > 0) {
    displayDate = `${diffInYears} year${diffInYears === 1 ? '' : 's'} ago`;
  } else if (diffInMonths > 0) {
    displayDate = `${diffInMonths} month${diffInMonths === 1 ? '' : 's'} ago`;
  } else if (diffInDays > 0) {
    displayDate = `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`;
  } else if (diffInHours > 0) {
    displayDate = `${diffInHours} hour${diffInHours === 1 ? '' : 's'} ago`;
  } else if (diffInMinutes > 0) {
    displayDate = `${diffInMinutes} minute${diffInMinutes === 1 ? '' : 's'} ago`; 
  } else {
    displayDate = `${diffInSeconds} second${diffInSeconds === 1 ? '' : 's'} ago`;
  }

  return (
    <div className="starredContainer">
      <div className="link-container">
        <div className="mylink-text">
        <p className="link-text-description">{truncatedDescription}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="link-title-container">
            <div className="url-title">
              <img className={`link-favicon ${!image && 'exclam-favicon'}`} src={image || exclam} alt={image ? "Link favicon" : "Exclamation icon"} />
              {truncatedTitle}</div>
            </div>
          </a>
        </div>
        <div className="linkInfo">{displayDate}</div>
      </div>
    </div>
  );
};

export default LinkSearch;
