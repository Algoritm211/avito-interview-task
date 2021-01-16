import React, {useEffect} from 'react'
import classes from './ImageScreen.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getImages} from "../../redux/image-selector";
import {ImageElement} from "./ImagesElement/ImagesElement";
import {loadImages} from '../../redux/images-reducer';
import ModalWindow from "../ModalWindow/ModalWindow";

const ImageScreen: React.FC = () => {

  const dispatch = useDispatch()

  const images = useSelector(getImages)

  useEffect(() => {
    dispatch(loadImages())
  }, [])

  const imagesComponent = images.map((image) => {
    return (
      <ImageElement imageUrl={image.url} key={image.id}/>
    )
  })

  return (
      <div className={classes.photoContainer}>
        {imagesComponent}
        <ModalWindow />
      </div>
  )
}
export default ImageScreen