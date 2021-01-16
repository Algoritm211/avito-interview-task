import React, {useEffect, useState} from 'react'
import classes from './ImageScreen.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getImages} from "../../redux/image-selector";
import {ImageElement} from "./ImagesElement/ImagesElement";
import {loadImages} from '../../redux/images-reducer';
import ModalWindow from "../ModalWindow/ModalWindow";
import {useHistory, useParams } from 'react-router-dom';
import {ImageType} from "../../types/types";

const ImageScreen: React.FC = () => {

  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false)

  let history = useHistory();

  const onOpenModal = (id: number) => {
    setIsOpenModalWindow(true)
    history.push(id.toString())
  }

  const dispatch = useDispatch()

  const images = useSelector(getImages)

  const onLoadImages = () => {
    dispatch(loadImages())
  }

  useEffect (onLoadImages, [])

  const imagesComponent = images.map((image) => {
    return (
      <ImageElement imageUrl={image.url} key={image.id} onOpenModal={() => onOpenModal(image.id)}/>
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