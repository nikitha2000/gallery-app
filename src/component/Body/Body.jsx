import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Body.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setError("Error fetching data!");
      }
    };

    fetchPhotos();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="photos-container">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
