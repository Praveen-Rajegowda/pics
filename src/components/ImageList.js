import React from 'react';
import './ImageList.css';
import ImageCard from "./ImageCard";


const ImageList = (props) => {
    console.log("ImageList",props.imagesList);
     var images= props.imagesList.map((image) => {
        return <ImageCard  key={image.id } image ={ image } />
    });

    return <div className="image-list">{ images }</div>;
}

export default  ImageList;